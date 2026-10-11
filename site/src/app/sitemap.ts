import type { MetadataRoute } from "next";
import { getCourseGroups } from "@/content/courses";

const siteUrl = "https://www.pan-lio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/courses", "/coaching", "/services", "/about", "/contact", "/privacy", "/terms"];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/courses" || path === "/coaching" ? 0.9 : 0.6,
    })),
    ...getCourseGroups().map((g) => ({
      url: `${siteUrl}/courses/${g.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
