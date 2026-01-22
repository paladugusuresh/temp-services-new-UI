import { notFound } from "next/navigation";
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";
import RegionalInsights from "@/components/RegionalInsights";
import { getInsightsForState } from "@/content/regional-insights";
import type { Metadata } from "next";

function findState(state: string) {
  return STATES.find(s => s.slug === state);
}

export function generateStaticParams() {
  return STATES.map(st => ({ state: st.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const st = findState(state);
  
  if (!st) return {};

  const title = `${st.name} Service Cost Estimates | Temp Services`;
  const description = `Get accurate cost estimates for professional services in ${st.name}. ${st.intro}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const st = findState(state);
  
  if (!st) return notFound();

  const insights = getInsightsForState(st.slug);

  return (
    <main className="page-container">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>
        {st.name} Service Cost Estimates
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "1.5rem" }}>
        {st.intro}
      </p>

      {/* Introduction to State Pricing */}
      <section style={{ 
        backgroundColor: "#f0fdf4", 
        padding: "24px", 
        borderRadius: "12px", 
        marginBottom: "32px",
        border: "1px solid #bbf7d0"
      }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#166534", marginBottom: "12px" }}>
          Understanding Home Service Costs in {st.name}
        </h2>
        <p style={{ color: "#15803d", lineHeight: "1.75" }}>
          Service costs in {st.name} are influenced by local labor rates, cost of living, regulatory requirements, 
          and seasonal demand patterns. Our estimates use Bureau of Economic Analysis Regional Price Parities and 
          Bureau of Labor Statistics Consumer Price Index data to adjust national baselines for {st.name}'s specific 
          economic conditions. Select a service below to see detailed pricing and hiring guides.
        </p>
      </section>

      <section className="section">
        <h2>Available Services in {st.name}</h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Click on any service to view detailed cost estimates, what affects pricing, and expert hiring advice for {st.name}:
        </p>
        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div key={service.key} className="card">
              <h3>{service.name}</h3>
              <p className="mb-2">{service.intro.split('.')[0]}.</p>
              <a href={`/${st.slug}/${service.slugCost}/`}>View cost estimates →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Insights - Adds substantial unique state-specific value */}
      {insights && <RegionalInsights insights={insights} stateName={st.name} />}

      <section style={{ background: "#f9fafb", borderRadius: "12px", padding: "2rem", marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>
          How We Calculate {st.name} Cost Estimates
        </h2>
        <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
          Our pricing estimates for {st.name} combine baseline ranges we maintain with regional cost adjustments:
        </p>
        <ol style={{ color: "#4b5563", marginLeft: "1.5rem", lineHeight: "1.75" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>National Baseline:</strong> We start with researched baseline price ranges for each service
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Regional Price Parities (RPP):</strong> We apply BEA data that measures how {st.name}'s prices 
            compare to the national average
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Consumer Price Index (CPI):</strong> We adjust for current inflation using BLS monthly data
          </li>
          <li>
            <strong>State-Specific Factors:</strong> We consider {st.name}'s unique economic and regulatory environment
          </li>
        </ol>
        <p style={{ color: "#4b5563", marginTop: "1rem", fontSize: "0.875rem" }}>
          <strong>Important:</strong> These are estimates for planning purposes only. Actual costs vary based on specific 
          requirements, contractor, timing, and other factors. Always get multiple local quotes before hiring.
        </p>
      </section>

      {/* Additional SEO Content */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          Hiring Home Service Professionals in {st.name}
        </h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          When hiring for home services in {st.name}, it's important to verify that contractors are properly licensed 
          and insured according to state requirements. {st.name} may have specific licensing requirements for trades 
          like electrical, plumbing, and HVAC work. Always ask to see proof of licensing and insurance before work begins.
        </p>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          Getting multiple quotes is especially important in {st.name} due to the variation in pricing across different 
          regions of the state. Urban areas typically have higher labor rates but more competition, while rural areas 
          may have fewer providers but potentially longer travel charges.
        </p>
        <p style={{ color: "#4b5563", lineHeight: "1.75" }}>
          Consider timing your projects strategically. Many services have peak seasons when demand is high and pricing 
          may be elevated. Scheduling during off-peak times can sometimes result in better availability and pricing.
        </p>
      </section>
    </main>
  );
}
