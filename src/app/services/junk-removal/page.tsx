import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const service = getServiceBySlug("junk-removal");

export const metadata: Metadata = createMetadata({
  title: "Junk Removal in Providence, RI",
  description:
    "Junk removal and junk hauling in Providence and surrounding Rhode Island communities. Send photos for a free quote from All Goode Property Services.",
  path: "/services/junk-removal",
});

export default function JunkRemovalPage() {
  if (!service) notFound();
  return <ServicePage service={service} />;
}
