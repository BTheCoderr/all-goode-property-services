import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("yard-cleanup");

export const metadata: Metadata = createMetadata({
  title: "Yard Cleanup in Providence, RI",
  description:
    "Yard cleanup in Providence and surrounding Rhode Island communities — overgrowth, leaves, brush and outdoor debris handled by All Goode Property Services.",
  path: "/services/yard-cleanup",
});

export default function YardCleanupPage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
