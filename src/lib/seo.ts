import type { Metadata } from "next";
import { business } from "@/data/business";

const defaultTitle =
  "All Goode Property Services | Junk Removal & Property Services in Providence, RI";
const defaultDescription =
  "Junk removal, property cleanouts, yard cleanup, landscaping and dependable property services in Providence and surrounding Rhode Island communities. Request a free quote from All Goode Property Services.";

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const url = `${business.websiteUrl}${path === "/" ? "" : path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(business.websiteUrl),
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [{ url: "/brand/logo.svg", alt: business.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: { index: true, follow: true },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: `${business.websiteUrl}${business.logoPath}`,
    url: business.websiteUrl,
    telephone: business.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      addressCountry: business.address.addressCountry,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rhode Island",
    },
    sameAs: [business.instagramUrl],
    description: defaultDescription,
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneTel,
      areaServed: "Providence, RI",
    },
    areaServed: {
      "@type": "City",
      name: "Providence",
    },
    url,
  };
}
