// app/robots.ts
export const dynamic = 'force-static';

export default function robots() {
  const base = process.env.SITE_URL ?? "https://temp-services.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base.replace(/\/$/, "")}/sitemap.xml`,
  };
}
