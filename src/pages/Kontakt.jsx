import { useEffect, useRef, useState } from "react";

export default function Kontakt() {
  // --- SEO ---
  useEffect(() => {
    document.title = "Kontakt – Grafikstudio Thomas Winnwa";
    setMetaDesc("Fragen, Angebote oder Projektstart – melden Sie sich. Wir antworten zeitnah.");
  }, []);

  // --- ENV / Debug ---
  const action = import.meta.env.VITE_FORMSPREE_ENDPOINT; // z. B. https://formspree.io/f/xxxxabcd
  const MODE = import.meta.env.MODE;
  const DEBUG_SHOW = false; // <- bei Bedarf temporär auf true setzen
  const masked = action ? action.replace(/^(.{24}).*$/, "$1…") : "(leer)";
  if (DEBUG_SHOW) {
    console.log("[Kontakt] MODE:", MODE);
    console.log("[Kontakt] VITE_FORMSPREE_ENDPOINT vorhanden:", Boolean(action));
    console.log("[Kontakt] Endpoint (masked):", masked);
  }

  // --- Refs / State ---
  const formRef = useRef(null);
  const successRef = useRef(null);
  const errorRef = useRef(null);
  const firstInvalidRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot (unsichtbar, muss leer bleiben)
  });

  // --- Helpers ---
  function setMetaDesc(content) {
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = content;
  }

  const validate = () => {
    const es = {};
    if (!values.name.trim()) es.name = "Bitte geben Sie Ihren Namen an.";
    if (!values.email.trim()) es.email = "Bitte geben Sie Ihre E-Mail an.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) es.email = "Bitte geben Sie eine gültige E-Mail an.";
    if (!values.message.trim()) es.message = "Bitte schreiben Sie eine kurze Nachricht.";
    if (values.company.trim()) es.company = "Spam erkannt."; // Honeypot gefüllt
    return es;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSent(false);
    setErrors({});
    firstInvalidRef.current = null;

    const es = validate();
    if (Object.keys(es).length) {
      setErrors(es);
      // Fokus auf erstes fehlerhaftes Feld
      for (const key of ["name", "email", "message"]) {
        if (es[key]) {
          const el = formRef.current?.querySelector(`#${key}`);
          if (el) { el.focus(); firstInvalidRef.current = el; }
          break;
        }
      }
      errorRef.current?.focus();
      return;
    }

    if (!action) {
      setErrors({ form: "Formular ist serverseitig noch nicht konfiguriert (VITE_FORMSPREE_ENDPOINT fehlt)." });
      errorRef.current?.focus();
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(action, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        if (DEBUG_SHOW) console.error("[Kontakt] Formspree error:", res.status, txt);
        throw new Error(`Formspree ${res.status}`);
      }

      // Sicheres Reset über Ref (kein currentTarget)
      formRef.current?.reset();
      setValues({ name: "", email: "", message: "", company: "" });
      setSent(true);
      successRef.current?.focus();
    } catch (err) {
      setErrors({ form: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." });
      errorRef.current?.focus();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Kontakt</h1>
      <p className="mb-8">
        Sie haben eine Anfrage oder möchten ein Projekt starten? Schreiben Sie uns – wir melden uns zeitnah.
      </p>

      {/* Optional sichtbare Diagnose (nur wenn DEBUG_SHOW = true) */}
      {DEBUG_SHOW && (
        <div className="mb-4 text-xs border rounded-lg px-3 py-2 bg-amber-50 text-amber-900 border-amber-200">
          <strong>Diagnose:</strong>{" "}
          MODE: <b>{MODE}</b>, ENV vorhanden: <b>{String(Boolean(action))}</b>, Endpoint: <b>{masked}</b>
        </div>
      )}

      {/* Erfolgsmeldung */}
      {sent && (
        <div
          ref={successRef}
          tabIndex="-1"
          className="mb-6 border rounded-xl px-4 py-3 bg-green-50 text-green-900 border-green-200"
          role="status"
          aria-live="polite"
        >
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
        </div>
      )}

      {/* Fehlermeldungen auf Form-Ebene */}
      {(errors.form || errors.company) && (
        <div
          ref={errorRef}
          tabIndex="-1"
          className="mb-6 border rounded-xl px-4 py-3 bg-red-50 text-red-900 border-red-200"
          role="alert"
          aria-live="polite"
        >
          {errors.form || "Bitte prüfen Sie Ihre Eingaben."}
        </div>
      )}

      <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
        {/* Honeypot (unsichtbar für Nutzer) */}
        <div className="hidden">
          <label htmlFor="company">Firma</label>
          <input id="company" name="company" autoComplete="organization" value={values.company} onChange={onChange} />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-semibold text-gray-900">
            Ihr Name <span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "err-name" : undefined}
            className="mt-1 w-full border rounded-lg p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C]"
            autoComplete="name"
          />
          {errors.name && (
            <p id="err-name" className="mt-1 text-sm text-red-700" role="alert" aria-live="polite">
              {errors.name}
            </p>
          )}
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-900">
            E-Mail <span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "err-email" : undefined}
            className="mt-1 w-full border rounded-lg p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C]"
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && (
            <p id="err-email" className="mt-1 text-sm text-red-700" role="alert" aria-live="polite">
              {errors.email}
            </p>
          )}
        </div>

        {/* Nachricht */}
        <div>
          <label htmlFor="message" className="block font-semibold text-gray-900">
            Ihre Nachricht <span className="sr-only">(Pflichtfeld)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            value={values.message}
            onChange={onChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "err-message" : undefined}
            className="mt-1 w-full border rounded-lg p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94C11C]"
          />
          {errors.message && (
            <p id="err-message" className="mt-1 text-sm text-red-700" role="alert" aria-live="polite">
              {errors.message}
            </p>
          )}
        </div>

        {/* DSGVO-Hinweis kurz */}
        <p className="text-sm">
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer{" "}
          <a className="underline hover:text-[#5A7F10]" href="/datenschutz">Datenschutzerklärung</a> zu.
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#5A7F10] text-white font-semibold shadow hover:opacity-90 disabled:opacity-60"
        >
          {submitting ? "Wird gesendet …" : "Nachricht senden"}
        </button>
      </form>
    </section>
  );
}
