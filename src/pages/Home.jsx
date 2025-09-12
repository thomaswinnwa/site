import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Grafikstudio – Thomas Winnwa | Full-Service-Werbeagentur in Obersimten";
    setMetaDesc(
      "Full-Service-Werbeagentur bei Pirmasens: Corporate Design, Websites & SEO, Print & Kampagnen. Klar, zielgerichtet und budgetbewusst – von der Idee bis zur Umsetzung."
    );
  }, []);

  // Platzhalter: Referenzen (ersetze später durch echte Thumbs und Titel)
  const allWorks = useMemo(
    () => [
      { id: "w1", title: "Logo-Relaunch Mittelstand", cat: "Corporate", img: "/images/ref-2.jpg", alt: "Logo-Entwurf auf Papier" },
      { id: "w2", title: "Website Relaunch KMU", cat: "Web", img: "/images/ref-3.jpg", alt: "Laptop mit Website-Layout" },
      { id: "w3", title: "Broschüre Produktlinie", cat: "Print", img: "/images/ref-1.jpg", alt: "Broschüren-Layout auf Tisch" },
      { id: "w4", title: "Plakatkampagne", cat: "Print", img: "/images/ref-4.jpg", alt: "Plakat an Wand" },
      { id: "w5", title: "Brand-Guidelines", cat: "Corporate", img: "/images/ref-5.jpg", alt: "Design-Guidelines" },
      { id: "w6", title: "Landingpage Kampagne", cat: "Web", img: "/images/ref-6.jpg", alt: "Landingpage am Bildschirm" },
    ],
    []
  );

  // 3 zufällige Arbeiten dezent auswählen
  const featured = useMemo(() => {
    const arr = [...allWorks];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 3);
  }, [allWorks]);

  return (
    <div>
      {/* Hero / Intro */}
      <section className="max-w-6xl mx-auto px-4 pt-20 md:pt-28 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Grafikstudio – Thomas Winnwa
        </h1>
        <p className="mt-3 text-lg md:text-xl">
          Full-Service-Werbeagentur in Obersimten bei Pirmasens.
        </p>
        <div className="mt-6">
          <Link
            to="/kontakt"
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-[#5A7F10] text-white font-semibold shadow hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C]"
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </section>

      {/* Langtext – SEO-stark, ohne Teaser-Overload */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="sr-only">Über uns</h2>
        <p className="text-lg mb-4">
          Wir entwickeln Kommunikations- und Marketinglösungen, die zu Ihnen passen – klar,
          zielgerichtet und budgetbewusst. Ob Corporate Design, Website&nbsp;&amp;&nbsp;SEO oder
          klassische Print- und Kampagnenthemen: Wir beraten, konzipieren und setzen sauber um.
        </p>
        <p className="mb-4">
          Sie gründen ein Unternehmen und benötigen Unterstützung bei der Vermarktung? Oder
          möchten Sie Ihren Markt ausbauen, eine größere Zielgruppe erreichen und Ihr Konzept
          auffrischen? Wir sorgen für eine konsistente Markenwirkung – vom Logo bis zur Landingpage,
          vom Flyer bis zur Kampagne.
        </p>
        <p className="mb-0">
          Je nach Aufgabe arbeiten wir mit einem eingespielten Netzwerk aus Spezialist:innen
          (Marketing, PR, Text, Fotografie, Druck, Web-Entwicklung, Messe&nbsp;&amp;&nbsp;Event) zusammen.
          So bleiben Qualität, kurze Wege und verlässliche Abläufe gewährleistet.
        </p>
      </section>

      {/* Ausgewählte Arbeiten (random 3) */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ausgewählte Arbeiten
          </h2>
          <Link to="/referenzen" className="no-underline hover:text-[#94C11C]">
            Alle Referenzen<span className="sr-only"> ansehen</span> →
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((x) => (
            <li key={x.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <Link
                to="/referenzen"
                className="block no-underline"
                aria-label={`Referenz ansehen: ${x.title}`}
              >
                <img
                  src={x.img}
                  alt={x.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width="800"
                  height="450"
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-4">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">
                    {x.cat}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{x.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Partner & Kunden – dezent vor dem Footer */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Partner &amp; Kunden</h2>
        <p className="mb-6">Eine Auswahl von Marken und Unternehmen, mit denen wir zusammenarbeiten.</p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {/* Ersetze die Pfade durch deine realen Logos (SVG/PNG) */}
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/logo-urlaubsregion-pirmasens-land.png"
              alt="Urlaubsregion Pirmasens-Land"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/logo-wilhelm-textil.png"
              alt="Wilhelm Textil"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/schroers-futtermittel.jpg"
              alt="Schröers Futtermittel"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/sonnenplan.jpg"
              alt="SonnenPlan GmbH"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/titomu-balearic-investments.jpg"
              alt="TITOMU Balearic Investments"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/mr-safety.jpg"
              alt="MR-Safety – Arbeitsschutz- & Berufskleidung"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <img
              src="/logos/logo-vg-pirmasens-land.png"
              alt="Verbandsgemeinde Pirmasens-Land"
              className="max-h-10 mx-auto"
              loading="lazy"
              width="200"
              height="40"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
