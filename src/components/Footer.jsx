import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-16">
      {/* Werbeblock / Promo */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <a
          href="https://www.dein-werbepartner.de/"
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl overflow-hidden border border-gray-800 hover:border-[#94C11C] transition"
          aria-label="Werbeblock"
        >
          {/* Bild ablegen unter /public/ads/werbeblock.jpg oder .webp */}
          <img
            src="/ads/werbeblock.jpg"
            alt="Werbeblock – Ihr Werbepartner"
            className="w-full h-28 md:h-36 object-cover"
            loading="lazy"
          />
        </a>
      </div>

      {/* Footer-Inhalt */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div>
            <h2 className="text-white font-semibold mb-3">Kontakt</h2>
            <address className="not-italic">
              Grafikstudio – Thomas Winnwa<br />
              Hirtenstraße 4<br />
              66957 Obersimten<br />
              <a className="block hover:text-[#94C11C]" href="tel:+4963316811920">+49 6331 6811920</a>
              <a className="block hover:text-[#94C11C]" href="mailto:info@thomas-winnwa.de">info@thomas-winnwa.de</a>
            </address>
          </div>

          {/* Navigation kurz */}
          <div>
            <h2 className="text-white font-semibold mb-3">Navigation</h2>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="hover:text-[#94C11C]">Home</Link>
              <Link to="/leistungen" className="hover:text-[#94C11C]">Leistungen</Link>
              <Link to="/referenzen" className="hover:text-[#94C11C]">Referenzen</Link>
              <Link to="/kontakt" className="hover:text-[#94C11C]">Kontakt</Link>
            </nav>
          </div>

          {/* Rechtliches */}
          <div>
            <h2 className="text-white font-semibold mb-3">Rechtliches</h2>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="hover:text-[#94C11C]">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-[#94C11C]">Datenschutzerklärung</Link></li>
              <li className="opacity-80">USt-IdNr.: DE 280 929 396</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Grafikstudio – Thomas Winnwa</p>
          <p className="opacity-80">
            Made with <span aria-hidden>♥</span> in der Pfalz
          </p>
        </div>
      </div>
    </footer>
  );
}
