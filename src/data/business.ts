/** Shared business facts for UI + structured data. Update phone/domain when live. */
export const business = {
  name: "Weed and Read",
  description:
    "A privacy-first cannabis boutique offering anonymous cash sales in a vintage, literary-themed reading room. Adults 21+. Please Consume Responsibly.",
  url: "https://www.yourdomain.com",
  telephone: null as string | null, // set when public number is ready, e.g. "+1-505-555-0100"
  image: [
    "/images/interior-hero.jpg",
    "/images/exterior.jpg",
  ] as string[],
  address: {
    streetAddress: "1017 San Mateo Blvd SE",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87108",
    addressCountry: "US",
  },
  geo: {
    latitude: 35.0683,
    longitude: -106.5855,
  },
  openingHours: {
    opens: "10:00",
    closes: "20:00",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ] as const,
  },
  sameAs: ["https://www.instagram.com/weedandreadabq"] as string[],
  paymentAccepted: "Cash",
} as const;

export function buildLocalBusinessJsonLd() {
  const { address, geo, openingHours } = business;
  const absoluteImages = business.image.map((path) =>
    path.startsWith("http") ? path : `${business.url}${path}`,
  );

  return {
    "@context": "https://schema.org",
    // "Dispensary" is not a standard Schema.org type; Store is valid for retail.
    "@type": "Store",
    name: business.name,
    description: business.description,
    ...(absoluteImages.length > 0 ? { image: absoluteImages } : {}),
    "@id": business.url,
    url: business.url,
    ...(business.telephone ? { telephone: business.telephone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...openingHours.dayOfWeek],
        opens: openingHours.opens,
        closes: openingHours.closes,
      },
    ],
    sameAs: [...business.sameAs],
    paymentAccepted: business.paymentAccepted,
    // Adults 21+ retail only — do not mark as medical / accepting patients.
  };
}
