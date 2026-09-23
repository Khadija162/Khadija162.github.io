import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const pages = ["", "/projects", "/publications"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const projectPages = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
  }));
  return [...pages, ...projectPages];
}
