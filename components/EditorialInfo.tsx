// components/EditorialInfo.tsx
// Adds E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) for SEO

type EditorialInfoProps = {
  serviceName: string;
  stateName: string;
  lastUpdated?: string;
};

export default function EditorialInfo({ serviceName, stateName, lastUpdated = "January 2026" }: EditorialInfoProps) {
  return (
    <aside style={{
      backgroundColor: "#fefce8",
      border: "1px solid #fef08a",
      borderRadius: "12px",
      padding: "20px",
      marginTop: "32px",
      marginBottom: "32px"
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
        {/* Author/Editorial Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ 
            fontSize: "0.9375rem", 
            fontWeight: "600", 
            color: "#854d0e",
            marginBottom: "8px",
            marginTop: 0
          }}>
            About This Guide
          </h3>
          <p style={{ 
            fontSize: "0.875rem", 
            color: "#713f12", 
            lineHeight: "1.6",
            margin: 0
          }}>
            This {serviceName.toLowerCase()} cost guide for {stateName} was researched and written by our 
            editorial team using official BEA and BLS data, industry sources, and input from licensed contractors. 
            We update our estimates monthly to reflect current market conditions.
          </p>
        </div>

        {/* Credentials & Trust Signals */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ 
            fontSize: "0.9375rem", 
            fontWeight: "600", 
            color: "#854d0e",
            marginBottom: "8px",
            marginTop: 0
          }}>
            Our Data Sources
          </h3>
          <ul style={{ 
            fontSize: "0.875rem", 
            color: "#713f12", 
            lineHeight: "1.6",
            margin: 0,
            paddingLeft: "18px"
          }}>
            <li>Bureau of Economic Analysis (BEA) Regional Price Parities</li>
            <li>Bureau of Labor Statistics (BLS) Consumer Price Index</li>
            <li>Industry research and contractor surveys</li>
          </ul>
        </div>
      </div>

      {/* Last Updated & Editorial Standards */}
      <div style={{ 
        marginTop: "16px", 
        paddingTop: "12px", 
        borderTop: "1px solid #fef08a",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px"
      }}>
        <p style={{ 
          fontSize: "0.8125rem", 
          color: "#a16207",
          margin: 0
        }}>
          <strong>Last Updated:</strong> {lastUpdated}
        </p>
        <p style={{ 
          fontSize: "0.8125rem", 
          color: "#a16207",
          margin: 0
        }}>
          <strong>Editorial Policy:</strong> We maintain independence and don't accept payment for placement.
        </p>
      </div>
    </aside>
  );
}
