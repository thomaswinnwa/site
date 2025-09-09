import { useEffect, useMemo, useState } from "react";
import { fetchAllPosts } from "../lib/wp.js";

export default function Referenzen() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState([]);
  const [state, setState] = useState("loading"); // loading | ready | error

  useEffect(() => {
    document.title = "Referenzen & News – Grafikstudio Thomas Winnwa";
    setMetaDesc("Alle Referenzen & News direkt aus dem Archiv – automatisch aktuell.");
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const posts = await fetchAllPosts();
        // Neueste zuerst
        posts.sort((a,b) => b.date.localeCompare(a.date));
        setItems(posts);
        setState("ready");
      } catch (e) {
        console.error(e);
        setState("error");
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter(n =>
      n.title.toLowerCase().includes(s) ||
      n.excerpt.toLowerCase().includes(s) ||
      new Date(n.date).getFullYear().toString().includes(s)
    );
  }, [q, items]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Referenzen & News</h1>
        <p className="mt-3 max-w-2xl">
          Auswahl und Archiv aktueller Arbeiten & Meldungen. Nutze die Suche, um schnell zu filtern.
        </p>
        <div className="mt-4">
          <input
            type="search"
            placeholder="Suche nach Titel, Jahr, Stichwort …"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full md:w-96 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#94C11C]"
            aria-label="Referenzen durchsuchen"
          />
        </div>
      </header>

      {state === "loading" && <p>Lade Referenzen …</p>}
      {state === "error" && (
        <p className="text-red-600">
          Konnte die Beiträge nicht laden. Prüfe später erneut (oder erlaube Drittanbieter-Anfragen im Browser).
        </p>
      )}

      {state === "ready" && (
        <ul className="grid md:grid-cols-3 gap-8">
          {filtered.map((c) => (
            <li key={c.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              {c.cover ? (
                <img src={c.cover} alt={c.alt || c.title} className="w-full h-40 object-cover" loading="lazy" />
              ) : (
                <div className="w-full h-40 bg-gray-100" aria-hidden="true" />
              )}
              <div className="p-5">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <time dateTime={c.date}>{new Date(c.date).toLocaleDateString("de-DE")}</time>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-gray-900">{c.title}</h2>
                {c.excerpt && <p className="mt-2 text-sm">{c.excerpt}</p>}
                <a href={c.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[#94C11C] font-semibold hover:underline">
                  Original ansehen →
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
