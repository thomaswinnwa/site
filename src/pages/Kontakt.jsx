import { useEffect, useState } from "react";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Kontakt() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [err, setErr] = useState("");

  // Kontrollierte Felder
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Kontakt – Grafikstudio Thomas Winnwa";
    setMetaDesc("Nehmen Sie Kontakt auf: Adresse, Telefon, E-Mail – Grafikstudio Thomas Winnwa in 66957 Obersimten.");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErr("");

    try {
      if (!FORMSPREE_ID) throw new Error("Formspree-ID fehlt (VITE_FORMSPREE_ID).");

      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("message", message);

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) {
        let msg = `Fehler ${res.status}`;
        try {
          const j = await res.json();
          if (j?.errors?.length) msg = j.errors.map((x) => x.message).join("; ");
        } catch {}
        throw new Error(msg);
      }

      setStatus("ok");
      // Felder leer machen – kein reset() irgendwo!
      setName(""); setEmail(""); setMessage("");
    } catch (error) {
      console.error(error);
      setErr(error.message || "Senden fehlgeschlagen.");
      setStatus("error");
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Kontakt</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_subject" value="Kontaktanfrage über thomas-winnwa.de" />
          <label className="block">
            <span className="sr-only">Ihr Name</span>
            <input
              type="text" name="name" placeholder="Ihr Name" required
              value={name} onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94C11C]"
            />
          </label>

          <label className="block">
            <span className="sr-only">Ihre E-Mail</span>
            <input
              type="email" name="email" placeholder="Ihre E-Mail" required
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94C11C]"
            />
          </label>

          <label className="block">
            <span className="sr-only">Ihre Nachricht</span>
            <textarea
              rows="5" name="message" placeholder="Ihre Nachricht" required
              value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#94C11C]"
            />
          </label>

          <p className="text-xs opacity-80">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zum Zweck der Kontaktaufnahme zu.
            Weitere Informationen: <a href="/datenschutz" className="underline hover:text-[#94C11C]">Datenschutzerklärung</a>.
          </p>

          <button
            type="submit" disabled={status==="sending"}
            className="w-full py-3 rounded-2xl bg-[#94C11C] text-white font-semibold shadow hover:opacity-90 disabled:opacity-60"
          >
            {status==="sending" ? "Sende …" : "Nachricht senden"}
          </button>

          {status==="ok" && <p className="text-green-700">Danke! Ihre Nachricht wurde erfolgreich gesendet.</p>}
          {status==="error" && <p className="text-red-700">Fehler: {err}</p>}
          {!FORMSPREE_ID && (
            <p className="text-amber-600 text-sm">
              Hinweis: Es ist noch keine Formspree-ID gesetzt. Lege lokal eine <code>.env</code> mit
              <code>VITE_FORMSPREE_ID</code> an und trage die Variable in Vercel unter Settings → Environment Variables ein.
            </p>
          )}
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
