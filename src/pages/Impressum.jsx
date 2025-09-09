import { useEffect } from "react";

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum – Grafikstudio Thomas Winnwa";
    setMetaDesc("Impressum gemäß § 5 TMG – Grafikstudio Thomas Winnwa, Hirtenstraße 4, 66957 Obersimten.");
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Impressum</h1>

      <h2 className="text-xl font-semibold text-gray-900">Angaben gemäß § 5 TMG</h2>
      <p className="mt-2 whitespace-pre-line">
        {`Thomas Winnwa
Grafikstudio – Thomas Winnwa
Hirtenstraße 4
66957 Obersimten`}
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-6">Kontakt</h2>
      <p className="mt-2">
        Telefon: <a className="hover:text-[#94C11C]" href="tel:+4963316811920">+49 (0)6331 6811920</a><br />
        E-Mail: <a className="hover:text-[#94C11C]" href="mailto:info@thomas-winnwa.de">info@thomas-winnwa.de</a>
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-6">Umsatzsteuer-ID</h2>
      <p className="mt-2">DE 280 929 396</p>

      <h2 className="text-xl font-semibold text-gray-900 mt-6">Redaktionell verantwortlich</h2>
      <p className="mt-2 whitespace-pre-line">
        {`Grafikstudio – Thomas Winnwa
Thomas Winnwa
Hirtenstraße 4
66957 Obersimten`}
      </p>
    </section>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
