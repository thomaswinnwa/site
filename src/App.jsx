import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Leistungen from "./pages/Leistungen.jsx";
import Facts from "./pages/Facts.jsx";
import Referenzen from "./pages/Referenzen.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import SeoJsonLd from "./components/SeoJsonLd.jsx";
import Barrierefreiheit from "./pages/Barrierefreiheit.jsx"; 

export default function App() {
  return (
    <div className="font-sans text-[#898a8d] bg-white">
      {/* Skip-Link für Tastatur-Navigation */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-gray-900 px-4 py-2 rounded-lg shadow"
      >
        Zum Inhalt springen
      </a>

      <Nav />
      <SeoJsonLd />

      {/* einziges Main-Landmark */}
      <main id="content" role="main" className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/barrierefreiheit" element={<Barrierefreiheit />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
