import { useEffect } from "react";

export default function Facts() {
  useEffect(() => {
    document.title = "Facts – Grafikstudio Thomas Winnwa";
    setMetaDesc("Kunde, Netzwerk, Umsetzung – wie wir arbeiten und Projekte medienübergreifend realisieren.");
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Facts</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-900">Der Kunde</h2>
          <p className="mt-2">
            Erfolgreiche Zusammenarbeit beginnt mit dem Verständnis für Charakter, Ziele und Budget –
            darauf folgt Beratung und ein maßgeschneidertes Konzept.
          </p>
        </article>

        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-900">Das Netzwerk</h2>
          <p className="mt-2">
            Bei Bedarf erweitern Spezialisten aus Marketing, PR, Text, Druck, Fotografie, Messebau, Event
            und Programmierung das Team – für Qualität und reibungslose Abläufe.
          </p>
        </article>

        <article className="p-6 bg-gray-50 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-900">Die Umsetzung</h2>
          <p className="mt-2">
            Medienübergreifende Lösungen – Print & Digital, on- und offline. Umsetzung oder Begleitung nach Bedarf
            und Budget, innovativ und zielgerichtet.
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
