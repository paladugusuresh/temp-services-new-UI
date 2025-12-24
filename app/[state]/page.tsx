import { notFound } from "next/navigation";
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";
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

  return (
    <main className="page-container">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>
        {st.name} Service Cost Estimates
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "3rem" }}>
        {st.intro}
      </p>

      <section className="section">
        <h2>Available Services in {st.name}</h2>
        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div key={service.key} className="card">
              <h3>{service.name}</h3>
              <p className="mb-2">{service.intro}</p>
              <a href={`/${st.slug}/${service.slugCost}/`}>View cost estimates →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f9fafb", borderRadius: "8px", padding: "2rem", marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>
          About Our Cost Estimates
        </h2>
        <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
          Our pricing estimates for {st.name} combine baseline ranges we maintain with regional cost adjustments using:
        </p>
        <ul style={{ color: "#4b5563", marginLeft: "1.5rem", lineHeight: "1.75" }}>
          <li><strong>Regional Price Parities (RPP)</strong> from the Bureau of Economic Analysis</li>
          <li><strong>Consumer Price Index (CPI)</strong> from the Bureau of Labor Statistics</li>
          <li>State-specific cost factors and market conditions</li>
        </ul>
        <p style={{ color: "#4b5563", marginTop: "1rem", fontSize: "0.875rem" }}>
          <strong>Important:</strong> These are estimates for planning purposes only. Actual costs vary based on specific requirements, service provider, and other factors.
        </p>
      </section>
    </main>
  );
}
