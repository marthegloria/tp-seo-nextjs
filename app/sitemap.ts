import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marthiedemo.fwh.is/",
      priority: 1,
    },
  ];
}