export default function PartnerLogos() {
  const logos = [
    { src: "/logos/partner1.svg", alt: "Partner 1 – Logo" },
    { src: "/logos/partner2.svg", alt: "Partner 2 – Logo" },
    { src: "/logos/partner3.svg", alt: "Partner 3 – Logo" },
    { src: "/logos/partner4.svg", alt: "Partner 4 – Logo" },
    { src: "/logos/partner5.svg", alt: "Partner 5 – Logo" },
  ];

  return (
    <section aria-labelledby="partner" className="bg-white">
      <h2 id="partner" className="text-sm uppercase tracking-widest text-gray-500 mb-6">
        Ausgewählte Kunden & Partner
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
        {logos.map((l, i) => (
          <img key={i} src={l.src} alt={l.alt} className="h-10 w-auto mx-auto object-contain" loading="lazy" />
        ))}
      </div>
    </section>
  );
}
