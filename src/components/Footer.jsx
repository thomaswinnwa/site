import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Grafikstudio – Thomas Winnwa</p>
        <nav className="flex gap-4">
          <Link to="/impressum" className="hover:text-[#94C11C]">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-[#94C11C]">Datenschutzerklärung</Link>
        </nav>
      </div>
    </footer>
  );
}
