// app/sitemap.ts
import { SERVICES } from "@/content/services";
import { STATES } from "@/content/states";

export const dynamic = 'force-static';

export default function sitemap() {
  const base = process.env.SITE_URL ?? "https://temp-services.com";

  const urls = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/guides/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/privacy-policy/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${base}/disclaimer/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  // Add service hub pages
  for (const svc of SERVICES) {
    urls.push({
      url: `${base}/services/${svc.key}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    });
  }

  // Add state pages
  for (const st of STATES) {
    urls.push({
      url: `${base}/${st.slug}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    });
  }

  // Add all state/service pages (15 states × 23 services = 345 pages)
  for (const st of STATES) {
    for (const svc of SERVICES) {
      urls.push({
        url: `${base}/${st.slug}/${svc.slugCost}/`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      });
    }
  }

  return urls;
}
