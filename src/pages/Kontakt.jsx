import { useEffect } from "react";
function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get("name")?.toString().trim();
  const email = form.get("email")?.toString().trim();
  const message = form.get("message")?.toString().trim();

  if (!name || !email || !message) {
    alert("Bitte fülle alle Felder aus.");
    return;
  }
  // Mailto-Fallback (einfach & zuverlässig)
  const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
  window.location.href = `mailto:info@thomas-winnwa.de?subject=${subject}&body=${body}`;
}

export default function Kontakt() {
  useEffect(() => {
    document.title = "Kontakt – Grafikstudio Thomas Winnwa";
    setMetaDesc("Nehmen Sie Kontakt auf: Adresse, Telefon, E-Mail – Grafikstudio Thomas Winnwa in 66957 Obersimten.");
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Kontakt</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="sr-only">Ihr Name</span>
            <input type="text" name="name" placeholder="Ihr Name" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94C11C]" required />
          </label>
          <label className="block">
            <span className="sr-only">Ihre E-Mail</span>
            <input type="email" name="email" placeholder="Ihre E-Mail" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94C11C]" required />
          </label>
          <label className="block">
            <span className="sr-only">Ihre Nachricht</span>
            <textarea rows="5" name="message" placeholder="Ihre Nachricht" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94C11C]" required />
          </label>
          <button type="submit" className="w-full py-3 rounded-2xl bg-[#94C11C] text-white font-semibold shadow hover:opacity-90">Nachricht senden</button>
        </form>

        <address className="not-italic p-6 bg-gray-50 rounded-2xl shadow">
          <p className="font-semibold text-gray-900">Grafikstudio – Thomas Winnwa</p>
          <p>Hirtenstraße 4<br />66957 Obersimten</p>
          <p className="mt-3">
            Telefon: <a className="hover:text-[#94C11C]" href="tel:+4963316811920">+49 6331 6811920</a><br />
            E-Mail: <a className="hover:text-[#94C11C]" href="mailto:info@thomas-winnwa.de">info@thomas-winnwa.de</a>
          </p>
          <p className="mt-3"><a className="hover:text-[#94C11C]" href="https://www.thomas-winnwa.de" target="_blank" rel="noreferrer">www.thomas-winnwa.de</a></p>
        </address>
      </div>
    </section>
  );
}

function setMetaDesc(content) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = content;
}
