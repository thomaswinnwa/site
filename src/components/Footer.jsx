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
            src="/ads/werbeblock_placeholder.jpg"
            alt="Werbeblock – Ihr Werbepartner"
            className="w-full h-28 md:h-36 object-cover"
            loading="lazy"
          />
        </a>
      </div>

      {/* Footer-Inhalt */}
      // ... dein bestehender Promo/Werbeblock oben bleibt

<div className="max-w-6xl mx-auto px-4 pb-8">
  <div className="grid md:grid-cols-3 gap-8">
    {/* Kontakt */}
    <div>
      <h2 className="text-white font-semibold mb-3">Kontakt</h2>
      <address className="not-italic">
        Grafikstudio – Thomas Winnwa<br />
        Hirtenstraße 4 · 66957 Obersimten<br />
        <a className="block hover:text-[#94C11C]" href="tel:+4963316811920">+49 6331 6811920</a>
        <a className="block hover:text-[#94C11C]" href="mailto:info@thomas-winnwa.de">info@thomas-winnwa.de</a>
      </address>

      
    </div>

    {/* Navigation kurz */}
    <div>
      <h2 className="text-white font-semibold mb-3">Navigation</h2>
      <nav className="flex flex-col gap-2">
        <a href="/" className="hover:text-[#94C11C] no-underline">Home</a>
        <a href="/leistungen" className="hover:text-[#94C11C] no-underline">Leistungen</a>
        <a href="/referenzen" className="hover:text-[#94C11C] no-underline">Referenzen</a>
        <a href="/kontakt" className="hover:text-[#94C11C] no-underline">Kontakt</a>
      </nav>
    </div>

    {/* Rechtliches */}
    <div>
      <h2 className="text-white font-semibold mb-3">Rechtliches</h2>
      <ul className="space-y-2">
        <li><a href="/impressum" className="hover:text-[#94C11C] no-underline">Impressum</a></li>
        <li><a href="/datenschutz" className="hover:text-[#94C11C] no-underline">Datenschutzerklärung</a></li>
        <li><a href="/barrierefreiheit" className="hover:text-[#94C11C] no-underline">Barrierefreiheit</a></li>
      </ul>
    </div>
    {/* Social */}
      <div className="mt-4">
        <h3 className="text-white font-semibold mb-2">Folgen Sie uns</h3>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://www.facebook.com/pixelpienzer/"
              target="_blank" rel="noopener noreferrer nofollow me"
              className="inline-flex items-center gap-2 hover:text-[#94C11C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-lg"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.01H7.9v-2.92h2.54v-2.23c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.2 2.22.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.91h2.74l-.44 2.92h-2.3V22C18.34 21.24 22 17.1 22 12.07Z"/></svg>
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/grafikstudio.thomas.winnwa/"
              target="_blank" rel="noopener noreferrer nofollow me"
              className="inline-flex items-center gap-2 hover:text-[#94C11C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-lg"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m5 3a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2.2a3.8 3.8 0 1 0 0 7.6a3.8 3.8 0 0 0 0-7.6M18 6.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"/></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
  </div>

  <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-gray-300">
    <p>© {new Date().getFullYear()} Grafikstudio – Thomas Winnwa</p>
    <p className="opacity-80">Made with ♥ in der Pfalz</p>
  </div>
</div>

    </footer>
  );
}
