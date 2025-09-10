import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../lib/wp.js";
import PartnerLogos from "../components/PartnerLogos.jsx"; // vorhanden aus früherem Schritt

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    document.title = "Grafikstudio – Thomas Winnwa | Full-Service-Werbeagentur Obersimten";
    setMetaDesc("Full-Service-Werbeagentur in Obersimten bei Pirmasens: Individuelle Kommunikations- und Marketinglösungen – klar, zielgerichtet, budgetbewusst.");
  }, []);

  // Zufällige Auswahl (stabil pro Mount) aus allen Referenzen/News
  useEffect(() => {
    (async () => {
      try {
        const posts = await fetchAllPosts();
        if (!Array.isArray(posts) || posts.length === 0) return;
        // Shuffle (Fisher-Yates) & 3 picken
        const arr = posts.slice();
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setFeatured(arr.slice(0, 3));
      } catch (e) {
        console.warn("Konnte Beiträge nicht laden:", e);
      }
    })();
  }, []);

  return (
    <>
      {/* Hero – fokussiert */}
      <section className="pb-16 pt-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Grafikstudio – Thomas Winnwa</h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Full-Service-Werbeagentur in Obersimten bei Pirmasens. Wir entwickeln
            Kommunikations- und Marketinglösungen, die zu Ihnen passen – von der Idee bis zur Umsetzung, print & digital.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link to="/kontakt" className="inline-block px-6 py-3 rounded-2xl bg-[#94C11C] text-white font-semibold shadow hover:opacity-90">
              Kontakt aufnehmen
            </Link>
            <Link to="/leistungen" className="inline-block px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 font-semibold hover:border-[#94C11C] hover:text-[#94C11C]">
              Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* Kurz-Nutzen – ohne Seiten-Teaser */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <article className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-gray-900">Verstehen & beraten</h2>
            <p className="mt-2">Wir lernen Ihr Unternehmen kennen und entwickeln auf dieser Basis ein maßgeschneidertes Konzept – klar, zielgerichtet und transparent.</p>
          </article>
          <article className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-gray-900">Umsetzen & begleiten</h2>
            <p className="mt-2">Print & Digital aus einer Hand: Corporate Design, Websites, Kampagnen und laufende Pflege – je nach Bedarf und Budget.</p>
          </article>
          <article className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-gray-900">Wirksamkeit & Qualität</h2>
            <p className="mt-2">Fokus auf Nutzen und Wirkung statt Effekthascherei. Verlässliche Abläufe, kurze Wege, saubere Ergebnisse.</p>
          </article>
        </div>
      </section>

      {/* Dezenter Hinweis: Ausgewählte Arbeiten (random) */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ausgewählte Arbeiten</h2>
            <Link to="/referenzen" className="text-[#94C11C] font-semibold hover:underline">Alle ansehen →</Link>
          </div>

          <ul className="grid md:grid-cols-3 gap-8">
            {featured.length === 0 && (
              <li className="col-span-3 p-6 bg-white rounded-2xl shadow">Lade Beispiele …</li>
            )}

            {featured.map((c) => (
              <li key={c.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                {c.cover ? (
                  <img src={c.cover} alt={c.alt || c.title} className="w-full h-40 object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-40 bg-gray-100" aria-hidden="true" />
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  {c.excerpt && <p className="mt-2 text-sm">{c.excerpt}</p>}
                  <a href={c.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-[#94C11C] font-semibold hover:underline">
                    Original ansehen →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partner-/Kundenlogos – unten vor dem Footer */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <PartnerLogos />
        </div>
      </section>
    </>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
