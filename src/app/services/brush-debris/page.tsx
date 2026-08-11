import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("brush-debris");

export const metadata: Metadata = createMetadata({
  title: "Brush & Debris Removal in Providence, RI",
  description:
    "Brush, branches and outdoor debris removal in Providence, RI. Loaded up and hauled away by All Goode Property Services.",
  path: "/services/brush-debris",
});

export default function BrushDebrisPage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
