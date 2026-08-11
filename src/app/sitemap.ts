import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { homepageServices } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.websiteUrl;
  const now = new Date();

  const staticRoutes = ["", "/services", "/work", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = homepageServices.map((service) => ({
    url: `${base}${service.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: service.slug === "junk-removal" ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
