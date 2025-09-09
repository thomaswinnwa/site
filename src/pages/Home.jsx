import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos.jsx"; // vorhanden? sonst Zeile entfernen
import { fetchAllPosts } from "../lib/wp.js"; // für News-Teaser

export default function Home() {
  const [news, setNews] = useState([]);
  const top3 = useMemo(() => news.slice(0, 3), [news]);

  useEffect(() => {
    document.title = "Grafikstudio – Thomas Winnwa | Full-Service-Werbeagentur Obersimten";
    setMetaDesc(
      "Full-Service-Werbeagentur in Obersimten bei Pirmasens: Klassische Werbung, Corporate Design, Websites, Social Media & SEO. Individuelle Konzepte statt Standard."
    );
  }, []);

  useEffect(() => {
    // Neueste News/Referenzen laden (für Teaser)
    (async () => {
      try {
        const posts = await fetchAllPosts();
        posts.sort((a, b) => b.date.localeCompare(a.date));
        setNews(posts);
      } catch (e) {
        console.warn("News konnten nicht geladen werden:", e);
      }
    })();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-6 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Full-Service-Werbeagentur in Obersimten bei Pirmasens
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Das Grafikstudio – Thomas Winnwa ist eine Full-Service-Werbeagentur mit Sitz in Obersimten bei Pirmasens.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/kontakt"
              className="inline-block px-6 py-3 rounded-2xl bg-[#94C11C] text-white font-semibold shadow hover:opacity-90"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              to="/leistungen"
              className="inline-block px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 font-semibold hover:border-[#94C11C] hover:text-[#94C11C]"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Partner-/Logo-Leiste */}
      <PartnerLogos />

      {/* Einleitung / Nutzenargument */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <article className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Individuelle Konzepte statt Standard</h2>
            <p className="leading-relaxed">
              Sie gründen ein neues Unternehmen und benötigen die Hilfe einer Werbeagentur bei der Vermarktung?
              Oder möchten Sie Ihren Markt vergrößern, eine größere Zielgruppe ansprechen und Ihr Konzept
              auffrischen und brauchen dabei kompetente Unterstützung?
            </p>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Was Sie von uns erwarten können</h2>
            <p className="leading-relaxed">
              Wir entwickeln Kommunikations- und Marketinglösungen, die zu Ihnen passen: klar, zielgerichtet und
              budgetbewusst – von der Idee bis zur Umsetzung, print & digital.
            </p>
          </article>
        </div>
      </section>

      {/* Leistungen-Teaser */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Leistungen</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-[#94C11C]">Klassische Werbung</h3>
              <p className="mb-3">Jedes Print-Objekt funktioniert anders. Aus Erfahrung wissen wir, wie.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Broschüren</li><li>Flyer</li><li>Plakate</li><li>Anzeigen</li><li>Kataloge</li>
              </ul>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-[#94C11C]">Corporate Design</h3>
              <p className="mb-3">
                Ein gelungener Auftritt strahlt Qualität und Vertrauen aus. Wir kreieren Ihr Logo und Ihren Slogan,
                damit ein attraktiver Gesamtauftritt seine Wirkung entfalten kann.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Logo-Entwicklung & -Überarbeitung</li>
                <li>Visitenkarten & Briefpapier</li>
                <li>Leistungsbroschüren</li>
              </ul>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-[#94C11C]">Neue Medien & SEO</h3>
              <p className="mb-3">
                Websites, Online-Marketing und Social Media – für Reichweite und Sichtbarkeit, ergänzt um saubere SEO.
              </p>
            </article>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/leistungen"
              className="inline-block px-6 py-3 rounded-2xl border border-[#94C11C] text-[#94C11C] font-semibold hover:bg-[#94C11C] hover:text-white"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Facts-Teaser */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Facts</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Der Kunde</h3>
            <p className="mt-2">
              Erfolgreiche Zusammenarbeit beginnt mit dem Verständnis für Charakter, Ziele und Budget –
              darauf folgt Beratung und ein maßgeschneidertes Konzept.
            </p>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Das Netzwerk</h3>
            <p className="mt-2">
              Bei Bedarf erweitern Spezialisten aus Marketing, PR, Text, Druck, Fotografie, Messebau, Event und
              Programmierung das Team – für Qualität und reibungslose Abläufe.
            </p>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900">Die Umsetzung</h3>
            <p className="mt-2">
              Medienübergreifende Lösungen – Print & Digital, on- und offline. Umsetzung oder Begleitung nach Bedarf
              und Budget, innovativ und zielgerichtet.
            </p>
          </article>
        </div>
      </section>

      {/* Referenzen & News – Teaser (neu) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Referenzen & News</h2>
            <Link to="/referenzen" className="text-[#94C11C] font-semibold hover:underline">
              Alle ansehen →
            </Link>
          </div>

          <ul className="grid md:grid-cols-3 gap-8">
            {top3.length === 0 && (
              <li className="col-span-3 p-6 bg-white rounded-2xl shadow">Lade aktuelle Beiträge …</li>
            )}

            {top3.map((c) => (
              <li key={c.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                {c.cover ? (
                  <img src={c.cover} alt={c.alt || c.title} className="w-full h-40 object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-40 bg-gray-100" aria-hidden="true" />
                )}
                <div className="p-5">
                  <time className="text-sm text-gray-500" dateTime={c.date}>
                    {new Date(c.date).toLocaleDateString("de-DE")}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{c.title}</h3>
                  {c.excerpt && <p className="mt-2 text-sm">{c.excerpt}</p>}
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-[#94C11C] font-semibold hover:underline"
                  >
                    Original ansehen →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontakt-CTA (neu) */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-10 bg-gray-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Bereit, Ihre Kommunikation zu verbessern?</h2>
              <p className="mt-2 opacity-90">
                Lassen Sie uns kurz sprechen – wir finden eine Lösung, die zu Ihren Zielen und Ihrem Budget passt.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="inline-block px-6 py-3 rounded-2xl bg-[#94C11C] text-white font-semibold shadow hover:opacity-90"
            >
              Unverbindlich anfragen
            </Link>
          </div>
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
