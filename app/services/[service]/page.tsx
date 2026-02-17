import { notFound } from "next/navigation";
import { SERVICES } from "@/content/services";
import { STATES } from "@/content/states";
import HiringGuide from "@/components/HiringGuide";
import ServiceInsights from "@/components/ServiceInsights";
import { getGuideForService } from "@/content/guides";
import { getServiceInsight } from "@/content/service-insights";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.key === service);
  if (!svc) return {};

  const title = `${svc.name} Cost Estimates by State | Temp Services`;
  const description = `${svc.intro.split('.')[0]}. Compare ${svc.name.toLowerCase()} costs across all states with expert hiring advice, pricing insights, and tips.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ServiceHub({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.key === service);
  if (!svc) return notFound();

  const guide = getGuideForService(svc.key);
  const serviceInsight = getServiceInsight(svc.key);

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: 12 }}>{svc.name} Pricing by State</h1>
      <p style={{ color: "#4b5563", marginBottom: 24, fontSize: "1.125rem", lineHeight: "1.75" }}>{svc.intro}</p>

      <div style={{ display: "grid", gap: "32px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginBottom: "48px" }}>
        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "12px" }}>What Affects the Price</h2>
          <p style={{ color: "#64748b", marginBottom: "12px", fontSize: "0.9375rem" }}>
            Understanding these cost drivers helps you budget accurately and evaluate contractor quotes:
          </p>
          <ul style={{ color: "#4b5563", lineHeight: "1.6", paddingLeft: "20px" }}>
            {svc.drivers.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "12px" }}>Standard Inclusions</h2>
          <p style={{ color: "#64748b", marginBottom: "12px", fontSize: "0.9375rem" }}>
            These items are typically included in a standard {svc.name.toLowerCase()} quote:
          </p>
          <ul style={{ color: "#4b5563", lineHeight: "1.6", paddingLeft: "20px" }}>
            {svc.included.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
      </div>

      {/* What's Not Included */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "12px" }}>What's Typically Not Included</h2>
        <p style={{ color: "#64748b", marginBottom: "12px", fontSize: "0.9375rem" }}>
          These items usually cost extra or require a separate contractor:
        </p>
        <ul style={{ color: "#4b5563", lineHeight: "1.6", paddingLeft: "20px" }}>
          {svc.notIncluded.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      {svc.tips && svc.tips.length > 0 && (
        <section style={{ 
          marginBottom: "48px",
          padding: "24px",
          backgroundColor: "#f0fdf4",
          borderRadius: "12px",
          border: "1px solid #bbf7d0"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#166534" }}>Pro Tips for {svc.name}</h2>
          <p style={{ color: "#15803d", marginBottom: "12px" }}>
            Expert advice to help you get the best value and results:
          </p>
          <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
            {svc.tips.map((tip) => <li key={tip} style={{ marginBottom: "8px" }}>{tip}</li>)}
          </ul>
        </section>
      )}

      {/* Unique Service Editorial Content — hand-written per service */}
      {serviceInsight && <ServiceInsights insight={serviceInsight} serviceName={svc.name} />}

      {/* Hiring Guide Section */}
      {guide && <HiringGuide guide={guide} serviceName={svc.name} />}

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", marginTop: "48px" }}>Get {svc.name} Cost Estimates by State</h2>
      <p style={{ color: "#64748b", marginBottom: "24px" }}>
        Select your state below to view estimated costs adjusted for your local cost of living. 
        Our estimates use official government data from the Bureau of Economic Analysis and Bureau of Labor Statistics.
      </p>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {STATES.map((st) => (
          <a
            key={st.slug}
            href={`/${st.slug}/${svc.slugCost}/`}
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 14,
            }}
          >
            <div style={{ fontWeight: 700 }}>{st.name}</div>
            <div style={{ color: "#6b7280", fontSize: 13, marginTop: 4 }}>View estimate →</div>
          </a>
        ))}
      </div>

      {/* Additional SEO Content */}
      <section style={{ marginTop: "48px", padding: "24px", backgroundColor: "#f9fafb", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          Understanding {svc.name} Costs Nationwide
        </h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          {svc.name} costs vary significantly across the United States based on regional labor rates, 
          cost of living differences, and local market conditions. States with higher costs of living, 
          like California and New York, typically see higher service prices, while more affordable regions 
          offer lower rates.
        </p>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          Beyond geography, the actual cost of your project depends on factors specific to your situation: 
          the scope of work, accessibility, materials required, and the timing of your project. 
          Emergency or after-hours service typically commands premium rates, while scheduling during 
          a contractor's off-peak season may offer savings.
        </p>
        <p style={{ color: "#4b5563", lineHeight: "1.75" }}>
          To get the most accurate pricing for your specific needs, we recommend requesting quotes from 
          at least three local contractors. Use our estimates as a starting point to understand whether 
          the quotes you receive are in line with typical market rates for your area.
        </p>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.key }));
}
