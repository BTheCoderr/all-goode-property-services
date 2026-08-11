import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("property-cleanouts");

export const metadata: Metadata = createMetadata({
  title: "Property Cleanouts in Providence, RI",
  description:
    "Property and moving cleanouts in Providence, RI. Clear clutter, turn over rentals and get spaces ready with All Goode Property Services.",
  path: "/services/property-cleanouts",
});

export default function PropertyCleanoutsPage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
