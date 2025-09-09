import { useEffect } from "react";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "Grafikstudio – Thomas Winnwa | Full-Service-Werbeagentur Obersimten";
    setMetaDesc("Full-Service-Werbeagentur in Obersimten bei Pirmasens: Klassische Werbung, Corporate Design, Websites, Social Media & SEO. Individuelle Konzepte statt Standard.");
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Full-Service-Werbeagentur in Obersimten bei Pirmasens
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Sie gründen ein Unternehmen, möchten Ihren Markt vergrößern oder einen besonderen Anlass professionell
            kommunizieren? Wir entwickeln individuelle Kommunikations- und Marketingkonzepte – keine Standard-Produkte,
            sondern Lösungen, die zu Ihnen passen.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/kontakt" className="inline-block px-6 py-3 rounded-2xl bg-[#94C11C] text-white font-semibold shadow hover:opacity-90">Kontakt aufnehmen</Link>
            <Link to="/leistungen" className="inline-block px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 font-semibold hover:border-[#94C11C] hover:text-[#94C11C]">Leistungen ansehen</Link>
          </div>

          <div className="max-w-4xl mx-auto mt-10 text-left grid gap-6">
            <div className="p-5 bg-white rounded-2xl shadow">
              <h2 className="text-xl font-semibold text-gray-900">Wir sind keine normale Werbeagentur</h2>
              <p className="mt-2">
                Wir lernen Sie und Ihr Unternehmen kennen und entwickeln auf dieser Basis ein maßgeschneidertes Konzept – eng in der Zusammenarbeit, zielgerichtet und budgetbewusst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  <PartnerLogos />
  
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
