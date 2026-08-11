import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("landscaping");

export const metadata: Metadata = createMetadata({
  title: "Landscaping in Providence, RI",
  description:
    "Straightforward landscaping and exterior property work in Providence, RI from All Goode Property Services.",
  path: "/services/landscaping",
});

export default function LandscapingPage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
