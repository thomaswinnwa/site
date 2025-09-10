export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grafikstudio – Thomas Winnwa",
    "url": "https://www.thomas-winnwa.de/",
    "telephone": "+49 6331 6811920",
    "email": "info@thomas-winnwa.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hirtenstraße 4",
      "postalCode": "66957",
      "addressLocality": "Obersimten",
      "addressCountry": "DE"
    },
    // Öffnungszeiten nur angeben, wenn fix. Sonst weglassen.
    // "openingHoursSpecification": [{
    //   "@type": "OpeningHoursSpecification",
    //   "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    //   "opens": "09:00",
    //   "closes": "17:00"
    // }],
    // Geo nur eintragen, wenn du mir Koordinaten gibst – sonst weglassen.
    "geo": { "@type": "GeoCoordinates", "49.1669593": 0, "7.5798433": 0 }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
