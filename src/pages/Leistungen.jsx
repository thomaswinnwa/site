import { useEffect } from "react";

export default function Leistungen() {
  useEffect(() => {
    document.title = "Leistungen – Grafikstudio Thomas Winnwa";
    setMetaDesc("Klassische Werbung, Corporate Design, Websites, Online-Marketing, Social Media und SEO – aus einer Hand, abgestimmt auf Ihre Ziele.");
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Leistungen</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-[#94C11C]">Klassische Werbung</h2>
          <p className="mb-3">Jedes Print-Objekt funktioniert anders. Aus Erfahrung wissen wir, wie.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Broschüren</li><li>Flyer</li><li>Plakate</li><li>Anzeigen</li><li>Kataloge</li>
          </ul>
        </article>

        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-[#94C11C]">Corporate Design</h2>
          <p className="mb-3">
            Ein gelungener Auftritt strahlt Qualität und Vertrauen aus. Wir kreieren Ihr Logo und Ihren Slogan,
            damit ein attraktiver Gesamtauftritt seine Wirkung entfalten kann.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Logo-Entwicklung & -Überarbeitung</li><li>Visitenkarten</li><li>Briefpapier</li><li>Leistungsbroschüren</li>
          </ul>
        </article>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-[#94C11C]">Neue Medien</h2>
          <p className="mb-3">Wir lassen die Welt an Ihren Produkten und Ideen teilhaben – digital und vernetzt.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Websites</li><li>Online-Marketing</li><li>Social Media</li>
          </ul>
        </article>

        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-[#94C11C]">Suchmaschinenoptimierung (SEO)</h2>
          <p className="mb-1">
            Bei der Fülle an Websites ist Sichtbarkeit möglich – mit sauberer SEO.
            Stellen Sie uns Ihr Unternehmen vor, wir übernehmen den Rest.
          </p>
        </article>
      </div>
    </section>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
