import { useEffect } from "react";

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutzerklärung – Grafikstudio Thomas Winnwa";
    setMetaDesc("Hinweise zur Verarbeitung personenbezogener Daten beim Besuch dieser Website und bei Kontaktaufnahme.");
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Datenschutzerklärung</h1>

      <p className="mb-6">
        Die vollständige und aktuelle Fassung deiner Datenschutzerklärung findest du hier:&nbsp;
        <a className="text-[#94C11C] underline" href="https://www.thomas-winnwa.de/datenschutzerklaerung/" target="_blank" rel="noreferrer">
          www.thomas-winnwa.de/datenschutzerklaerung
        </a>
      </p>

      <div className="prose prose-gray max-w-none">
        <h2>Überblick</h2>
        <p>Die folgenden Hinweise geben einen Überblick darüber, was mit personenbezogenen Daten passiert, wenn Nutzer diese Website besuchen.</p>

        <h2>Datenerfassung auf dieser Website</h2>
        <p>Verantwortlicher: Grafikstudio – Thomas Winnwa. Daten werden u. a. erhoben, wenn Nutzer Formulare ausfüllen oder die Website aufrufen (z. B. durch technische Cookies/Server-Logs).</p>

        <h2>Rechte der betroffenen Personen</h2>
        <p>Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit, Beschwerderecht bei der zuständigen Aufsichtsbehörde.</p>

        <p className="mt-6 text-sm opacity-80">
          Hinweis: Diese Seite fasst die Inhalte lediglich nutzerfreundlich zusammen. Verbindlich ist ausschließlich die verlinkte Original-Fassung.
        </p>
      </div>
    </section>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
