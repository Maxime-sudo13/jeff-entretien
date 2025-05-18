import { LocalBusiness, WebSite, WithContext } from "schema-dts";

export function LocalBusinessJsonLd() {
  const localBusiness: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jeff Entretien",
    description: "Entreprise d'entretien de parcs et jardins, aménagement paysager, pose de clôture en région de Marville.",
    url: "https://www.jeffentretien.fr",
    telephone: "+33 7 80 49 78 85",
    email: "jeff.entretien57@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 rue de Montréal",
      addressLocality: "Marville",
      postalCode: "55600",
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.4517905",
      longitude: "5.4502837"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/jeffentretien", // À remplacer par les vraies URL si disponibles
      "https://www.instagram.com/jeffentretien"
    ],
    priceRange: "€€",
    image: "https://www.jeffentretien.fr/images/logojeffentretien.png",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "49.4517905",
        longitude: "5.4502837"
      },
      geoRadius: "30000"
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pose de clôture",
          description: "Installation de clôtures, grillages, brise-vues et portails"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entretien d'espaces verts",
          description: "Taille, élagage et entretien de jardins"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aménagement paysager",
          description: "Création d'espaces extérieurs, terrasses, allées"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness)
      }}
    />
  );
}

export function WebsiteJsonLd() {
  const website: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jeff Entretien",
    url: "https://www.jeffentretien.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.jeffentretien.fr/search?q={search_term_string}",
      // @ts-ignore - schema-dts doesn't have this property 
"query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(website)
      }}
    />
  );
}

export default function JsonLd() {
  return (
    <>
      <LocalBusinessJsonLd />
      <WebsiteJsonLd />
    </>
  );
}