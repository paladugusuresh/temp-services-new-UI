// app/[state]/[slug]/page.tsx
import { notFound } from "next/navigation";
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";
import EstimateCard from "@/components/EstimateCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import { buildFaq } from "@/content/faqs";
import type { Metadata } from "next";

function findState(state: string) {
  return STATES.find((s) => s.slug === state);
}

function findServiceByCostSlug(slug: string) {
  return SERVICES.find((s) => s.slugCost === slug);
}

async function fetchEstimate(serviceKey: string, stateSlug: string) {
  const base = process.env.PRICING_API_BASE;
  if (!base) {
    if (process.env.NODE_ENV === "production") {
      console.error("PRICING_API_BASE is not set in production");
    }
    if (process.env.NODE_ENV === "development") {
      // Mock data for development
      return { low: 75, high: 150, unit: "hour", year: 2024 };
    }
    return null;
  }

  const url = `${base.replace(/\/$/, "")}/api/v1/estimates/${encodeURIComponent(serviceKey)}/${encodeURIComponent(stateSlug)}?year=2024`;

  try {
    const res = await fetch(url, { cache: 'force-cache' }); // Static build - cache all API responses
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Failed to fetch estimate for ${serviceKey} in ${stateSlug}:`, err);
    return null;
  }
}

export function generateStaticParams() {
  const paths: { state: string; slug: string }[] = [];
  for (const st of STATES) {
    for (const svc of SERVICES) {
      paths.push({ state: st.slug, slug: svc.slugCost });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { state, slug } = await params;
  const st = findState(state);
  const svc = findServiceByCostSlug(slug);
  if (!st || !svc) return {};

  const title = `${svc.name} Cost in ${st.name} | Temp Services`;
  const description = `${svc.intro} Get estimated ${svc.name.toLowerCase()} costs in ${st.name} based on BEA Regional Price Parities and the BLS Consumer Price Index.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const st = findState(state);
  const svc = findServiceByCostSlug(slug);

  if (!st || !svc) return notFound();

  const est = await fetchEstimate(svc.key, st.slug);
  const faq = buildFaq(svc, st);

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: st.name, href: `/${st.slug}/` },
          { name: `${svc.name} Cost`, href: `/${st.slug}/${svc.slugCost}/` },
        ]}
      />

      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
        {svc.name} Cost in {st.name}
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#4b5563", lineHeight: "1.75" }}>{st.intro}</p>
      <p style={{ fontSize: "1.125rem", color: "#4b5563", lineHeight: "1.75" }}>{svc.intro}</p>

      <EstimateCard service={svc} state={st} estimate={est} />

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What Affects the Price</h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.drivers.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What's Usually Included</h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.included.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What's Usually Not Included</h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.notIncluded.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{
        background: "#eff6ff",
        border: "2px solid #3b82f6",
        borderRadius: "12px",
        padding: "24px",
        margin: "32px 0"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 0 }}>How This Estimate is Calculated</h2>
        <p style={{ lineHeight: "1.75", marginBottom: "12px" }}>
          This page shows an <strong>estimated cost range</strong>, not a quote.
        </p>
        <ol style={{ lineHeight: "1.75", paddingLeft: "20px" }}>
          <li>Start with a national baseline range for the service</li>
          <li>Adjust for state price levels using <strong>BEA Regional Price Parities (RPP)</strong></li>
          <li>Adjust for inflation using the <strong>BLS Consumer Price Index (CPI-U)</strong></li>
        </ol>
        <p style={{ lineHeight: "1.75", marginBottom: 0 }}>
          Actual prices vary by job size, access, materials, timing, and contractor. Get multiple local quotes before you
          book.
        </p>
      </section>

      <Faq items={faq} />

      <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "48px", borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
        <strong>Disclaimer:</strong> Estimates vary based on job size, access, materials, timing, and contractor. This is
        not a guarantee of actual pricing. Always get multiple local quotes.
      </p>
    </main>
  );
}
