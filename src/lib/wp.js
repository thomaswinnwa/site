const BASE = "https://www.thomas-winnwa.de/wp-json/wp/v2";

/**
 * Alle Posts (News) holen – inklusive Pagination.
 * Wir holen nur Felder, die wir brauchen, um Last zu sparen.
 */
export async function fetchAllPosts({ perPage = 100 } = {}) {
  const fields = "_fields=id,date,title.rendered,excerpt.rendered,link,featured_media";
  // Seite 1 laden
  const first = await fetch(`${BASE}/posts?per_page=${perPage}&page=1&${fields}`);
  if (!first.ok) throw new Error(`WP API error: ${first.status}`);
  const totalPages = Number(first.headers.get("X-WP-TotalPages") || "1");
  let data = await first.json();

  // bei Bedarf weitere Seiten holen
  const promises = [];
  for (let page = 2; page <= totalPages; page++) {
    promises.push(fetch(`${BASE}/posts?per_page=${perPage}&page=${page}&${fields}`).then(r => r.json()));
  }
  const rest = await Promise.all(promises);
  for (const chunk of rest) data = data.concat(chunk);

  // Feature-Bilder nachladen (optional, falls vorhanden)
  const withMedia = await Promise.all(
    data.map(async (p) => {
      if (!p.featured_media) return { ...p, cover: null, coverAlt: null };
      try {
        const m = await fetch(`${BASE}/media/${p.featured_media}?_fields=source_url,alt_text`).then(r => r.json());
        return { ...p, cover: m?.source_url || null, coverAlt: m?.alt_text || "" };
      } catch {
        return { ...p, cover: null, coverAlt: null };
      }
    })
  );

  // Auf unser internes, sauberes Schema mappen
  return withMedia.map((p) => ({
    id: p.id,
    date: p.date,
    title: strip(p.title?.rendered || ""),
    excerpt: strip(p.excerpt?.rendered || ""),
    href: p.link,
    cover: p.cover,
    alt: p.coverAlt || strip(p.title?.rendered || ""),
  }));
}

function strip(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
