import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO, SITE_INFO } from "../constants/businessinfo";

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
}) => {
  // Valores padrão
  const pageTitle = title || `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`;
  const pageDescription = description || BUSINESS_INFO.description;
  const pageKeywords = keywords || BUSINESS_INFO.keywords.join(", ");
  const pageCanonical = canonical || SITE_INFO.canonicalUrl;
  const pageImage = ogImage || `${SITE_INFO.url}/og-image.jpg`;

  // Schema.org
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    image: pageImage,
    url: SITE_INFO.url,
    telephone: `+${BUSINESS_INFO.phone}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.stateCode,
      addressCountry: BUSINESS_INFO.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [BUSINESS_INFO.social.instagram, BUSINESS_INFO.social.facebook],
    areaServed: {
      "@type": "City",
      name: BUSINESS_INFO.serviceArea,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Veterinários",
      itemListElement: BUSINESS_INFO.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  // Schema.org
  const schemaProfessional = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    serviceType: "Veterinary Care",
    provider: {
      "@type": "Person",
      name: BUSINESS_INFO.shortName,
      jobTitle: "Médica Veterinária",
      worksFor: {
        "@type": "VeterinaryCare",
        name: BUSINESS_INFO.name,
      },
    },
  };

  // Schema.org
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_INFO.url,
      },
    ],
  };

  // Schema.org
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_INFO.name,
    url: SITE_INFO.url,
    logo: `${SITE_INFO.url}${SITE_INFO.logo}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${BUSINESS_INFO.phone}`,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      <link rel="canonical" href={pageCanonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:locale" content="pt_BR" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageCanonical} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content={BUSINESS_INFO.name} />
      <meta name="geo.region" content={`BR-${BUSINESS_INFO.stateCode}`} />
      <meta name="geo.placename" content={BUSINESS_INFO.city} />
      <meta
        name="geo.position"
        content={`${BUSINESS_INFO.coordinates.latitude};${BUSINESS_INFO.coordinates.longitude}`}
      />
      <meta
        name="ICBM"
        content={`${BUSINESS_INFO.coordinates.latitude}, ${BUSINESS_INFO.coordinates.longitude}`}
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="theme-color" content="#28574e" />

      <script type="application/ld+json">
        {JSON.stringify(schemaLocalBusiness)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaProfessional)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrganization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaBreadcrumb)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
