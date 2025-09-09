export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grafikstudio – Thomas Winnwa",
    "image": "https://www.thomas-winnwa.de/wp-content/uploads/2024/07/Thomas-Winnwa_Logo-Grafikstudio-2024.svg",
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
    "areaServed": "DE",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/"
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
