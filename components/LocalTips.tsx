// components/LocalTips.tsx
// Displays state-specific and service-specific tips for unique page value

import { StateServiceTip } from "@/content/state-service-tips";

type LocalTipsProps = {
  tips: StateServiceTip;
  stateName: string;
  serviceName: string;
};

export default function LocalTips({ tips, stateName, serviceName }: LocalTipsProps) {
  return (
    <section style={{
      margin: "32px 0",
      padding: "24px",
      backgroundColor: "#f0f9ff",
      borderRadius: "12px",
      border: "1px solid #bae6fd"
    }}>
      <h2 style={{ 
        fontSize: "1.5rem", 
        fontWeight: "600", 
        color: "#0369a1",
        marginBottom: "16px",
        marginTop: 0
      }}>
        {serviceName} Tips Specific to {stateName}
      </h2>

      {/* Local Tips */}
      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ 
          fontSize: "1.125rem", 
          fontWeight: "600", 
          color: "#0c4a6e",
          marginBottom: "12px"
        }}>
          Local Recommendations
        </h3>
        <ul style={{ 
          color: "#0369a1", 
          lineHeight: "1.75", 
          paddingLeft: "20px",
          margin: 0
        }}>
          {tips.localTips.map((tip, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Quick Stats Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginBottom: "20px"
      }}>
        <div style={{ 
          backgroundColor: "white", 
          padding: "16px", 
          borderRadius: "8px",
          border: "1px solid #e0f2fe"
        }}>
          <strong style={{ color: "#0c4a6e", display: "block", marginBottom: "4px" }}>
            Typical Wait Time
          </strong>
          <span style={{ color: "#0369a1" }}>{tips.averageWaitTime}</span>
        </div>
        <div style={{ 
          backgroundColor: "white", 
          padding: "16px", 
          borderRadius: "8px",
          border: "1px solid #e0f2fe"
        }}>
          <strong style={{ color: "#0c4a6e", display: "block", marginBottom: "4px" }}>
            Best Time to Hire
          </strong>
          <span style={{ color: "#0369a1" }}>{tips.bestMonthsToHire}</span>
        </div>
      </div>

      {/* Seasonal Advice */}
      <div style={{ 
        backgroundColor: "white", 
        padding: "16px", 
        borderRadius: "8px",
        border: "1px solid #e0f2fe",
        marginBottom: "16px"
      }}>
        <h3 style={{ 
          fontSize: "1rem", 
          fontWeight: "600", 
          color: "#0c4a6e",
          marginBottom: "8px",
          marginTop: 0
        }}>
          ⏰ Seasonal Timing in {stateName}
        </h3>
        <p style={{ color: "#0369a1", lineHeight: "1.6", margin: 0 }}>
          {tips.seasonalAdvice}
        </p>
      </div>

      {/* Local Consideration */}
      <div style={{ 
        backgroundColor: "#fef3c7", 
        padding: "16px", 
        borderRadius: "8px",
        border: "1px solid #fde68a"
      }}>
        <h3 style={{ 
          fontSize: "1rem", 
          fontWeight: "600", 
          color: "#92400e",
          marginBottom: "8px",
          marginTop: 0
        }}>
          📋 {stateName} Regulatory Note
        </h3>
        <p style={{ color: "#b45309", lineHeight: "1.6", margin: 0 }}>
          {tips.localConsideration}
        </p>
      </div>
    </section>
  );
}
