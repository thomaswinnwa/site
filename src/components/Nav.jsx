import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);

  const linkBase = "hover:text-[#94C11C] transition";
  const active = ({ isActive }) => (isActive ? "text-[#94C11C] font-semibold" : "");

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" aria-label="Startseite">
          <span className="text-xl font-bold text-[#94C11C]">Grafikstudio – Thomas Winnwa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={`${linkBase} ${active}`}>Home</NavLink>
          <NavLink to="/leistungen" className={`${linkBase} ${active}`}>Leistungen</NavLink>
          <NavLink to="/facts" className={`${linkBase} ${active}`}>Facts</NavLink>
          <NavLink to="/referenzen" className={`${linkBase} ${active}`}>Referenzen</NavLink>
          <NavLink to="/kontakt" className={`${linkBase} ${active}`}>Kontakt</NavLink>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Navigation öffnen/schließen"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t p-4 space-y-2">
          <NavLink to="/" className={`${linkBase} ${active}`}>Home</NavLink>
          <NavLink to="/leistungen" className={`${linkBase} ${active}`}>Leistungen</NavLink>
          <NavLink to="/facts" className={`${linkBase} ${active}`}>Facts</NavLink>
          <NavLink to="/kontakt" className={`${linkBase} ${active}`}>Kontakt</NavLink>
        </nav>
      )}
    </header>
  );
}
