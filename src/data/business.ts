export const business = {
  name: "All Goode Property Services",
  shortName: "All Goode",
  legalName: "All Goode Property Services",
  tagline: "Property Problems? Consider Them Handled.",
  phoneDisplay: "401-201-7670",
  phoneTel: "+14012017670",
  phoneSms: "+14012017670",
  email: "", // Add business email when available
  instagramUrl: "https://www.instagram.com/allgoodepropertyservices",
  instagramHandle: "@allgoodepropertyservices",
  /** Personal account — for brand context only; do not put in primary nav */
  ownerInstagramUrl: "https://www.instagram.com/mikelarry44",
  serviceAreaLabel: "Serving Providence and surrounding Rhode Island communities",
  serviceAreaHeadline: "Proudly Serving Rhode Island",
  homeBase: "Providence, RI",
  /** Only list cities once verified by the owner */
  serviceCities: ["Providence"] as string[],
  /** Set true only if owner confirms MA coverage */
  servesNearbyMassachusetts: false,
  address: {
    addressLocality: "Providence",
    addressRegion: "RI",
    addressCountry: "US",
  },
  hoursNote: "Call or text for availability",
  reviewUrl: "", // Add Google Business / review link when available
  /** Update once the production domain is confirmed */
  websiteUrl: "https://allgoodepropertyservices.com",
  logoPath: "/brand/logo.svg",
} as const;

export type Business = typeof business;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/contact", label: "Get a Quote" },
] as const;

export const trustLine =
  "Junk Removal • Cleanouts • Yard Work • Property Services";

export const brandPhrases = {
  primary: "Property Problems? Consider Them Handled.",
  handled: "Call All Goode and consider it handled.",
  messy: "From Messy to All Goode.",
  enjoy: "We Handle the Mess. You Enjoy the Property.",
  oneCall: "One Call. One Less Thing to Worry About.",
} as const;
