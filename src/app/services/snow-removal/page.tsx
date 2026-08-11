import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("snow-removal");

export const metadata: Metadata = createMetadata({
  title: "Snow Removal in Providence, RI",
  description:
    "Seasonal snow clearing for driveways, walks and property access in Providence and surrounding Rhode Island communities.",
  path: "/services/snow-removal",
});

export default function SnowRemovalPage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
