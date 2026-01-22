// components/HiringGuide.tsx
// Rich educational content component to add substantial value to service pages

import { HiringGuide as HiringGuideType } from "@/content/guides";

type HiringGuideProps = {
  guide: HiringGuideType;
  serviceName: string;
};

export default function HiringGuide({ guide, serviceName }: HiringGuideProps) {
  return (
    <div style={{ marginTop: "48px" }}>
      {/* Introduction Section */}
      <section style={{
        backgroundColor: "#f8fafc",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "32px"
      }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "16px", color: "#1e293b" }}>
          Complete Guide to Hiring {serviceName} Services
        </h2>
        <p style={{ fontSize: "1.125rem", lineHeight: "1.75", color: "#475569" }}>
          {guide.introduction}
        </p>
      </section>

      {/* Before You Hire */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Before You Hire: Preparation Checklist
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          Taking these steps before contacting contractors will help you get accurate quotes and avoid surprises:
        </p>
        <ul style={{ 
          listStyle: "none", 
          padding: 0,
          display: "grid",
          gap: "12px"
        }}>
          {guide.beforeYouHire.map((item, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "12px 16px",
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px"
            }}>
              <span style={{ color: "#22c55e", fontWeight: "bold", flexShrink: 0 }}>✓</span>
              <span style={{ color: "#475569", lineHeight: "1.5" }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Questions to Ask */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Essential Questions to Ask Before Hiring
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          These questions help you evaluate contractors and protect yourself from poor service:
        </p>
        <div style={{ display: "grid", gap: "16px" }}>
          {guide.questionsToAsk.map((qa, i) => (
            <div key={i} style={{
              backgroundColor: "#eff6ff",
              borderLeft: "4px solid #3b82f6",
              padding: "16px 20px",
              borderRadius: "0 8px 8px 0"
            }}>
              <p style={{ fontWeight: "600", color: "#1e40af", marginBottom: "8px" }}>
                "{qa.question}"
              </p>
              <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.6" }}>
                <strong>Why this matters:</strong> {qa.whyItMatters}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* When to Call a Pro */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          When to Call a Professional
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          While some tasks can be DIY, these situations typically require professional expertise:
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "12px"
        }}>
          {guide.whenToCallPro.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              backgroundColor: "#fef3c7",
              borderRadius: "8px"
            }}>
              <span style={{ fontSize: "1.25rem" }}>⚠️</span>
              <span style={{ color: "#92400e", fontWeight: "500" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DIY Considerations */}
      <section style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "#f0fdf4",
        borderRadius: "12px",
        border: "1px solid #bbf7d0"
      }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px", color: "#166534" }}>
          DIY vs. Professional: What You Can Do Yourself
        </h3>
        <p style={{ color: "#15803d", lineHeight: "1.75" }}>
          {guide.diyConsiderations}
        </p>
      </section>

      {/* Red Flags */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#dc2626" }}>
          🚩 Red Flags: Warning Signs of Bad Contractors
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          Watch out for these warning signs that may indicate an unreliable or dishonest contractor:
        </p>
        <ul style={{ 
          listStyle: "none",
          padding: 0,
          display: "grid",
          gap: "10px"
        }}>
          {guide.redFlags.map((flag, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              backgroundColor: "#fef2f2",
              borderRadius: "8px",
              border: "1px solid #fecaca"
            }}>
              <span style={{ color: "#dc2626", fontWeight: "bold" }}>✗</span>
              <span style={{ color: "#991b1b" }}>{flag}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Seasonal Tips */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Seasonal Timing Tips
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          The best time to schedule service can save you money and ensure better availability:
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px"
        }}>
          {guide.seasonalTips.map((st, i) => (
            <div key={i} style={{
              padding: "16px",
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px"
            }}>
              <div style={{ 
                fontWeight: "700", 
                color: "#0369a1", 
                marginBottom: "8px",
                fontSize: "1.125rem"
              }}>
                {st.season}
              </div>
              <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: "1.5", margin: 0 }}>
                {st.tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Considerations */}
      <section style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "#fef2f2",
        borderRadius: "12px",
        border: "1px solid #fecaca"
      }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#991b1b" }}>
          ⚡ Safety Considerations
        </h3>
        <ul style={{ color: "#991b1b", lineHeight: "1.75", paddingLeft: "20px", marginBottom: 0 }}>
          {guide.safetyConsiderations.map((item, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Common Mistakes */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#1e293b" }}>
          Common Mistakes to Avoid
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          Learn from others' mistakes—these are the most common errors homeowners make:
        </p>
        <ul style={{ 
          listStyle: "none",
          padding: 0,
          display: "grid",
          gap: "10px"
        }}>
          {guide.commonMistakes.map((mistake, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "12px 16px",
              backgroundColor: "#fff7ed",
              borderRadius: "8px"
            }}>
              <span style={{ color: "#ea580c" }}>⚠</span>
              <span style={{ color: "#9a3412", lineHeight: "1.5" }}>{mistake}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Cost Saving Strategies */}
      <section style={{
        marginBottom: "32px",
        padding: "24px",
        backgroundColor: "#ecfdf5",
        borderRadius: "12px",
        border: "1px solid #a7f3d0"
      }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#047857" }}>
          💰 Cost-Saving Strategies
        </h3>
        <p style={{ color: "#065f46", marginBottom: "16px" }}>
          Smart ways to reduce costs without sacrificing quality:
        </p>
        <ul style={{ color: "#065f46", lineHeight: "1.75", paddingLeft: "20px", marginBottom: 0 }}>
          {guide.costSavingStrategies.map((strategy, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>{strategy}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
