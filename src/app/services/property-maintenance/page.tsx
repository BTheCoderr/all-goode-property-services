import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("property-maintenance");

export const metadata: Metadata = createMetadata({
  title: "Property Maintenance in Providence, RI",
  description:
    "Property maintenance help for homes and investment properties in Providence and surrounding Rhode Island communities.",
  path: "/services/property-maintenance",
});

export default function PropertyMaintenancePage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
