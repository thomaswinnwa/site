import { useEffect } from "react";

export default function Referenzen() {
  useEffect(() => {
    document.title = "Referenzen & News – Grafikstudio Thomas Winnwa";
    setMetaDesc("Ausgewählte Projekte und Neuigkeiten: Kampagnen, Markenauftritte und digitale Projekte aus dem Grafikstudio Thomas Winnwa.");
  }, []);

  const cases = [
    {
      title: "Kampagne SonnenPlan × Ochsner",
      summary:
        "Regionales Kampagnenkonzept mit Anzeigen, Landingpage und Social Assets. Fokus: klare Nutzenargumentation, lokale Aktivierung.",
      year: "2024",
      tags: ["Kampagne", "Anzeigen", "Digital"],
      cover: "/cases/sonnenplan-ochsner.jpg",
      alt: "Visual der Kampagne SonnenPlan × Ochsner",
      link: "#", // später auf eine Detailseite/externen Artikel verlinken
    },
    {
      title: "Corporate Design – Mittelstand",
      summary:
        "Logo-Redesign, Typografie- und Farbwelt, Basishandbuch. Umsetzung auf Geschäftsausstattung und Web.",
      year: "2023",
      tags: ["Corporate Design", "Branding"],
      cover: "/cases/cd-mittelstand.jpg",
      alt: "Mockup Corporate Design mit Visitenkarten und Briefbogen",
      link: "#",
    },
    {
      title: "Website-Relaunch",
      summary:
        "Schlanke Informationsarchitektur, klare Botschaften, schnelle Ladezeiten. SEO-Basis & Web-Standards.",
      year: "2023",
      tags: ["Web", "SEO"],
      cover: "/cases/website-relaunch.jpg",
      alt: "Website-Relaunch Mockup auf Laptop",
      link: "#",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Referenzen & News</h1>
        <p className="mt-3 max-w-2xl">
          Auswahl aktueller Arbeiten und Meldungen. Auf Anfrage sende ich dir gern ein erweitertes Portfolio.
        </p>
      </header>

      <ul className="grid md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <li key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={c.cover} alt={c.alt} className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-5">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{c.year}</span>
                <div className="flex flex-wrap gap-1">
                  {c.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-gray-100">{t}</span>
                  ))}
                </div>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-gray-900">{c.title}</h2>
              <p className="mt-2 text-sm">{c.summary}</p>
              {c.link && (
                <a
                  href={c.link}
                  className="mt-4 inline-block text-[#94C11C] font-semibold hover:underline"
                >
                  Mehr erfahren →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
