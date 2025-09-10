import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  // ESC schließt
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Klick außerhalb schließt
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const linkBase = "no-underline hover:text-[#94C11C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C] rounded-md px-2 py-1";
  const active = ({ isActive }) => isActive ? "text-gray-900 font-semibold" : "";

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        <NavLink to="/" className="text-gray-900 font-bold text-lg no-underline">
          Grafikstudio
        </NavLink>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/leistungen" className={({isActive}) => `${linkBase} ${active({isActive})}`}>Leistungen</NavLink>
          <NavLink to="/referenzen" className={({isActive}) => `${linkBase} ${active({isActive})}`}>Referenzen</NavLink>
          <NavLink to="/facts"       className={({isActive}) => `${linkBase} ${active({isActive})}`}>Facts</NavLink>
          <NavLink to="/kontakt"     className={({isActive}) => `${linkBase} ${active({isActive})}`}>Kontakt</NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          ref={btnRef}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 hover:border-[#94C11C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C]"
          aria-controls="mainmenu"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(v => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile-Panel */}
      <div
        id="mainmenu"
        ref={panelRef}
        hidden={!open}
        className="md:hidden border-t border-gray-200 bg-white"
      >
        <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-base">
          <NavLink onClick={()=>setOpen(false)} to="/leistungen" className={linkBase}>Leistungen</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/referenzen" className={linkBase}>Referenzen</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/facts"       className={linkBase}>Facts</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/kontakt"     className={linkBase}>Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}
