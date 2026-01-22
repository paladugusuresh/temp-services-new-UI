// components/RegionalInsights.tsx
// Component to display rich state-specific content

import { RegionalInsight } from "@/content/regional-insights";

type RegionalInsightsProps = {
  insights: RegionalInsight;
  stateName: string;
};

export default function RegionalInsights({ insights, stateName }: RegionalInsightsProps) {
  return (
    <div style={{ marginTop: "48px" }}>
      {/* Economic Factors */}
      <section style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "#f8fafc",
        borderRadius: "12px"
      }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "16px", color: "#1e293b" }}>
          Understanding Service Costs in {stateName}
        </h2>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          These economic factors influence what you'll pay for home services in {stateName}:
        </p>
        <ul style={{ color: "#475569", lineHeight: "1.75", paddingLeft: "20px" }}>
          {insights.economicFactors.map((factor, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{factor}</li>
          ))}
        </ul>
      </section>

      {/* Climate Concerns */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Climate & Weather Considerations
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          {stateName}'s climate creates specific challenges and service needs:
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "12px"
        }}>
          {insights.climateConcerns.map((concern, i) => (
            <div key={i} style={{
              padding: "16px",
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px"
            }}>
              <span style={{ fontSize: "1.25rem" }}>🌤️</span>
              <span style={{ color: "#475569", lineHeight: "1.5" }}>{concern}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Notes */}
      <section style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "#eff6ff",
        borderRadius: "12px",
        border: "1px solid #bfdbfe"
      }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e40af" }}>
          Local Regulations & Requirements
        </h3>
        <p style={{ color: "#3b82f6", marginBottom: "16px" }}>
          Important regulatory considerations for {stateName} homeowners:
        </p>
        <ul style={{ color: "#1e40af", lineHeight: "1.75", paddingLeft: "20px" }}>
          {insights.regulatoryNotes.map((note, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Best Time to Hire */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Best Time to Hire by Service Type
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          Timing your service requests strategically can save money and ensure better availability:
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
            borderRadius: "8px",
            overflow: "hidden"
          }}>
            <thead>
              <tr style={{ backgroundColor: "#f1f5f9" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "600", color: "#475569" }}>Service</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "600", color: "#475569" }}>Best Timing</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "600", color: "#475569" }}>Why</th>
              </tr>
            </thead>
            <tbody>
              {insights.bestTimeToHire.map((item, i) => (
                <tr key={i} style={{ borderTop: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "500", color: "#1e293b" }}>{item.service}</td>
                  <td style={{ padding: "12px 16px", color: "#059669", fontWeight: "500" }}>{item.timing}</td>
                  <td style={{ padding: "12px 16px", color: "#64748b" }}>{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Local Considerations */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Local Considerations for {stateName} Homeowners
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "12px"
        }}>
          {insights.localConsiderations.map((consideration, i) => (
            <div key={i} style={{
              padding: "16px",
              backgroundColor: "#fefce8",
              borderRadius: "8px",
              border: "1px solid #fef08a"
            }}>
              <span style={{ color: "#a16207", lineHeight: "1.5" }}>{consideration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Issues */}
      <section style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "#fff7ed",
        borderRadius: "12px",
        border: "1px solid #fed7aa"
      }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#c2410c" }}>
          Common Issues in {stateName}
        </h3>
        <p style={{ color: "#ea580c", marginBottom: "16px" }}>
          These are the most frequent problems homeowners in {stateName} experience:
        </p>
        <ul style={{ color: "#9a3412", lineHeight: "1.75", paddingLeft: "20px" }}>
          {insights.commonIssues.map((issue, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{issue}</li>
          ))}
        </ul>
      </section>

      {/* Market Trends */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Current Market Trends in {stateName}
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          What's happening in the home services market in {stateName} right now:
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "12px"
        }}>
          {insights.marketTrends.map((trend, i) => (
            <div key={i} style={{
              padding: "16px",
              backgroundColor: "#f0fdf4",
              borderRadius: "8px",
              border: "1px solid #bbf7d0",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px"
            }}>
              <span style={{ color: "#16a34a" }}>📈</span>
              <span style={{ color: "#166534", lineHeight: "1.5" }}>{trend}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
