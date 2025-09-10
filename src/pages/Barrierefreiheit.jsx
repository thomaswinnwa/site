import { useEffect } from "react";

export default function Barrierefreiheit() {
  useEffect(() => {
    document.title = "Erklärung zur Barrierefreiheit – Grafikstudio Thomas Winnwa";
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Erklärung zur Barrierefreiheit
      </h1>
      <p>
        Diese Seite beschreibt die Barrierefreiheit der Website. Inhalte werden
        fortlaufend ergänzt. Wenn Sie eine Barriere finden, schreiben Sie bitte an{" "}
        <a className="underline" href="mailto:info@thomas-winnwa.de">info@thomas-winnwa.de</a>.
      </p>
    </section>
  );
}
