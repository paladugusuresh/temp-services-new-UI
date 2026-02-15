// app/[state]/[slug]/page.tsx
import { notFound } from "next/navigation";
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";
import EstimateCard from "@/components/EstimateCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import HiringGuide from "@/components/HiringGuide";
import RegionalInsights from "@/components/RegionalInsights";
import EditorialInfo from "@/components/EditorialInfo";
import LocalTips from "@/components/LocalTips";
import ServiceInsights from "@/components/ServiceInsights";
import { buildFaq } from "@/content/faqs";
import { getGuideForService } from "@/content/guides";
import { getInsightsForState } from "@/content/regional-insights";
import { getStateServiceTips } from "@/content/state-service-tips";
import { getServiceInsight } from "@/content/service-insights";
import type { Metadata } from "next";

function findState(state: string) {
  return STATES.find((s) => s.slug === state);
}

function findServiceByCostSlug(slug: string) {
  return SERVICES.find((s) => s.slugCost === slug);
}

async function fetchEstimate(serviceKey: string, stateSlug: string) {
  const base = process.env.NEXT_PUBLIC_PRICING_API_BASE || 'https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net';
  const url = `${base.replace(/\/$/, "")}/api/estimate?service=${encodeURIComponent(serviceKey)}&location=${encodeURIComponent(stateSlug)}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
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
  // Truncate intro for meta description to avoid it being too long
  const shortIntro = svc.intro.split('.')[0] + '.';
  const description = `${shortIntro} Get estimated ${svc.name.toLowerCase()} costs in ${st.name} based on BEA Regional Price Parities and the BLS Consumer Price Index.`;

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

  const estimate = await fetchEstimate(svc.key, st.slug);
  const faq = buildFaq(svc, st);
  const guide = getGuideForService(svc.key);
  const insights = getInsightsForState(st.slug);
  const localTips = getStateServiceTips(st.slug, svc.key, st.name, svc.name);
  const serviceInsight = getServiceInsight(svc.key);

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

      <EstimateCard service={svc} state={st} estimate={estimate} />

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What Affects the Price of {svc.name} in {st.name}</h2>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          Several factors influence how much you'll pay for {svc.name.toLowerCase()} services in {st.name}. Understanding these cost drivers helps you budget accurately and evaluate quotes from contractors:
        </p>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.drivers.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What's Typically Included in {svc.name} Services</h2>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          When you hire a {svc.name.toLowerCase()} professional in {st.name}, these services are generally part of a standard job:
        </p>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.included.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What's Usually Not Included (May Cost Extra)</h2>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          Be aware that these items are typically not included in standard quotes and may require additional fees:
        </p>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.notIncluded.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      {svc.tips && svc.tips.length > 0 && (
        <section style={{ 
          margin: "32px 0",
          padding: "24px",
          backgroundColor: "#f0fdf4",
          borderRadius: "12px",
          border: "1px solid #bbf7d0"
        }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px", color: "#166534" }}>Expert Tips for {svc.name} in {st.name}</h2>
          <p style={{ color: "#15803d", marginBottom: "16px" }}>
            Follow these pro tips to get the best value and results for your {svc.name.toLowerCase()} project:
          </p>
          <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
            {svc.tips.map((tip) => <li key={tip} style={{ marginBottom: "8px" }}>{tip}</li>)}
          </ul>
        </section>
      )}

      {/* Unique Service Editorial Content — hand-written per service */}
      {serviceInsight && <ServiceInsights insight={serviceInsight} serviceName={svc.name} />}

      {/* State-Specific Local Tips - Unique value per state/service combination */}
      <LocalTips tips={localTips} stateName={st.name} serviceName={svc.name} />

      {/* Hiring Guide Section - Adds substantial unique value */}
      {guide && <HiringGuide guide={guide} serviceName={svc.name} />}

      {/* Regional Insights Section - Adds state-specific value */}
      {insights && <RegionalInsights insights={insights} stateName={st.name} />}

      {/* Editorial Info - E-E-A-T signals */}
      <EditorialInfo serviceName={svc.name} stateName={st.name} />

      <section style={{
        background: "#eff6ff",
        border: "2px solid #3b82f6",
        borderRadius: "12px",
        padding: "24px",
        margin: "32px 0"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 0 }}>How This Estimate is Calculated</h2>
        <p style={{ lineHeight: "1.75", marginBottom: "12px" }}>
          This page shows an <strong>estimated cost range</strong> for {svc.name.toLowerCase()} in {st.name}, not a quote from a specific contractor.
        </p>
        <p style={{ lineHeight: "1.75", marginBottom: "12px" }}>
          Our methodology uses official government data to provide transparent, defensible estimates:
        </p>
        <ol style={{ lineHeight: "1.75", paddingLeft: "20px" }}>
          <li><strong>National Baseline:</strong> We start with a researched baseline range for {svc.name.toLowerCase()} services nationwide</li>
          <li><strong>Regional Adjustment:</strong> We apply <strong>BEA Regional Price Parities (RPP)</strong> to adjust for {st.name}'s specific cost of living</li>
          <li><strong>Inflation Adjustment:</strong> We use the <strong>BLS Consumer Price Index (CPI-U)</strong> to ensure estimates reflect current pricing</li>
        </ol>
        <p style={{ lineHeight: "1.75", marginBottom: 0 }}>
          <strong>Important:</strong> Actual prices vary by job size, access, materials, timing, and contractor. These estimates are for planning purposes only. Always get multiple local quotes before hiring.
        </p>
      </section>

      <Faq items={faq} />

      <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "48px", borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
        <strong>Disclaimer:</strong> Estimates vary based on job size, access, materials, timing, and contractor. This is
        not a guarantee of actual pricing. Always get multiple local quotes. Last updated: January 2026.
      </p>

      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${svc.name} Cost in ${st.name}`,
            "description": `${svc.intro.split('.')[0]}. Get estimated ${svc.name.toLowerCase()} costs in ${st.name}.`,
            "author": {
              "@type": "Organization",
              "name": "Temp Services Editorial Team",
              "url": "https://temp-services.com/about/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Temp Services",
              "url": "https://temp-services.com/"
            },
            "datePublished": "2025-06-01",
            "dateModified": "2026-01-28",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://temp-services.com/${st.slug}/${svc.slugCost}/`
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.slice(0, 5).map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </main>
  );
}
