export const business = {
  name: "All Goode Property Services",
  shortName: "All Goode",
  legalName: "All Goode Property Services",
  tagline: "Property Problems? It's All Goode.",
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
  /**
   * Temporary reference logo extracted from business Instagram.
   * Replace this file with the official high-res/vector export — no layout changes needed.
   */
  logoPath: "/brand/all-goode-logo.png",
} as const;

export type Business = typeof business;

/** Official brand palette derived from the All Goode logo */
export const brandColors = {
  nearBlack: "#070807",
  allGoodeGreen: "#2F7D32",
  deepForest: "#14521E",
  freshGreen: "#5F963F",
  warmOffWhite: "#F5F6F2",
  white: "#FFFFFF",
  charcoal: "#20231F",
  /** Tiny service accents only — not primary brand colors */
  junkAccent: "#B86A2F",
  snowAccent: "#7EB6C9",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/contact", label: "Get a Quote" },
] as const;

export const trustStrip = [
  "JUNK REMOVAL",
  "CLEANOUTS",
  "LANDSCAPING",
  "YARD WORK",
  "SNOW REMOVAL",
] as const;

export const brandPhrases = {
  primary: "Property Problems? It's All Goode.",
  messy: "From Messy to All Goode.",
  cleanedUp: "Get It Cleaned Up. Get It All Goode.",
  needItGone: "Need It Gone? It's All Goode.",
  handled: "Your Property. Handled.",
  oneCall: "One Call. It's All Goode.",
} as const;
