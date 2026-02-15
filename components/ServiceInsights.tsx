// components/ServiceInsights.tsx
// Renders unique, hand-written editorial content per service
import type { ServiceInsight } from "@/content/service-insights";

export default function ServiceInsights({
  insight,
  serviceName,
}: {
  insight: ServiceInsight;
  serviceName: string;
}) {
  return (
    <>
      {/* Deep Dive: unique pricing analysis */}
      <section style={{
        margin: "32px 0",
        padding: "24px",
        background: "linear-gradient(135deg, #faf5ff 0%, #f0f9ff 100%)",
        borderRadius: "12px",
        border: "1px solid #e9d5ff"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginTop: 0, marginBottom: "12px", color: "#581c87" }}>
          💰 Pricing Deep Dive: How {serviceName} Costs Really Work
        </h2>
        <p style={{ color: "#4b5563", lineHeight: "1.85", fontSize: "1.0625rem" }}>
          {insight.pricingDeepDive}
        </p>
      </section>

      {/* Common Mistakes */}
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          ⚠️ Common Mistakes When Hiring for {serviceName}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {insight.commonMistakes.map((mistake, i) => (
            <div key={i} style={{
              display: "flex",
              gap: "12px",
              padding: "14px 16px",
              background: i % 2 === 0 ? "#fef2f2" : "#fff7ed",
              borderRadius: "8px",
              border: `1px solid ${i % 2 === 0 ? "#fecaca" : "#fed7aa"}`,
              lineHeight: "1.6",
              color: "#374151",
            }}>
              <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>❌</span>
              <span>{mistake}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DIY vs Hire */}
      <section style={{
        margin: "32px 0",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden"
      }}>
        <div style={{
          padding: "16px 24px",
          background: "#f8fafc",
          borderBottom: "1px solid #e5e7eb"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0 }}>
            🔧 DIY or Hire a Pro? — {serviceName}
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
        }}>
          <div style={{ padding: "20px", borderRight: "1px solid #e5e7eb" }}>
            <h3 style={{ color: "#059669", marginTop: 0, fontSize: "1.125rem" }}>✅ You Can DIY</h3>
            <ul style={{ color: "#374151", lineHeight: "1.7", paddingLeft: "18px", margin: 0 }}>
              {insight.diyVsHire.canDiy.map((item, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ padding: "20px" }}>
            <h3 style={{ color: "#dc2626", marginTop: 0, fontSize: "1.125rem" }}>🚫 Hire a Professional</h3>
            <ul style={{ color: "#374151", lineHeight: "1.7", paddingLeft: "18px", margin: 0 }}>
              {insight.diyVsHire.mustHire.map((item, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{
          padding: "16px 24px",
          background: "#f0fdf4",
          borderTop: "1px solid #e5e7eb",
          fontSize: "0.9375rem",
          lineHeight: "1.6",
          color: "#166534",
        }}>
          <strong>Our Take:</strong> {insight.diyVsHire.verdict}
        </div>
      </section>

      {/* Real-World Cost Scenarios */}
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          📊 Real-World {serviceName} Cost Scenarios
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "16px" }}>
          Here's what you might actually pay in common real-world situations:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {insight.scenarios.map((scenario, i) => (
            <div key={i} style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              borderLeft: `4px solid ${i === 0 ? "#22c55e" : i === 1 ? "#3b82f6" : "#f59e0b"}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "1.125rem", fontWeight: "600" }}>
                  {scenario.title}
                </h3>
                <span style={{
                  fontWeight: "700",
                  fontSize: "1.0625rem",
                  color: i === 0 ? "#16a34a" : i === 1 ? "#2563eb" : "#d97706",
                  whiteSpace: "nowrap"
                }}>
                  {scenario.priceContext}
                </span>
              </div>
              <p style={{ color: "#6b7280", margin: "8px 0 0 0", lineHeight: "1.6" }}>
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Glossary */}
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          📖 {serviceName} Terms You Should Know
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "16px" }}>
          Understanding these industry terms helps you communicate with contractors and evaluate quotes:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {insight.glossary.map((item, i) => (
            <div key={i} style={{
              padding: "16px",
              background: i % 2 === 0 ? "#f9fafb" : "#ffffff",
              borderRadius: "8px",
              border: "1px solid #f3f4f6",
            }}>
              <dt style={{ fontWeight: "700", color: "#1e293b", marginBottom: "4px" }}>
                {item.term}
              </dt>
              <dd style={{ color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
                {item.definition}
              </dd>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
