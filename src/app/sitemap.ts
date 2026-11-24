import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lit-store.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/produtos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
