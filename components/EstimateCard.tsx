import type { Service } from "@/content/services";
import type { State } from "@/content/states";

type Estimate = {
  service_key: string;
  service_name: string;
  unit: string;
  location_slug: string;
  type: string;
  state_code: string;
  state_name: string;
  city_name?: string | null;
  low: number;
  typical: number;
  high: number;
  inputs?: {
    rpp_year: number;
    rpp_index: number;
    cpi_latest: number;
    cpi_series: string;
    cpi_baseline: number;
  };
  computed_at?: string;
} | null;

export default function EstimateCard({
  service,
  state,
  estimate,
}: {
  service: Service;
  state: State;
  estimate: Estimate;
}) {
  const fmt = (n: number) =>
    n.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        padding: "24px",
        borderRadius: "12px",
        margin: "24px 0",
        background: "#f9fafb",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "1.5rem", fontWeight: "600" }}>
        Estimated Cost Range
      </h2>

      {!estimate ? (
        <p style={{ color: "#6b7280" }}>
          Pricing unavailable. Please check back later or contact us for assistance.
        </p>
      ) : (
        <>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", margin: "16px 0" }}>
            <div>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>Low</div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#059669" }}>
                {fmt(Number(estimate.low))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>Typical</div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2563eb" }}>
                {fmt(Number(estimate.typical))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>High</div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#dc2626" }}>
                {fmt(Number(estimate.high))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>Unit</div>
              <div style={{ fontSize: "1.125rem", fontWeight: "500" }}>{estimate.unit || service.unit}</div>
            </div>
          </div>

          <div
            style={{
              background: "#fef3c7",
              border: "1px solid #fbbf24",
              borderRadius: "8px",
              padding: "12px",
              marginTop: "16px",
              fontSize: "0.875rem",
            }}
          >
            <strong>⚠️ This is an estimate, not a quote.</strong> Actual prices vary by job size, access, materials,
            timing, and contractor.
          </div>

          <div style={{ marginTop: "16px", padding: "12px", background: "#f3f4f6", borderRadius: "8px", fontSize: "0.875rem" }}>
            <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>How We Calculate Estimates</p>
            <p style={{ margin: "0 0 8px 0" }}>
              Our estimates are based on national baseline pricing adjusted for your location using:
            </p>
            <ul style={{ margin: "0 0 8px 0", paddingLeft: "20px" }}>
              <li>
                <a 
                  href="https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  BEA Regional Price Parities (RPP)
                </a> - Adjusts for cost of living differences by state
              </li>
              <li>
                <a 
                  href="https://www.bls.gov/cpi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  BLS Consumer Price Index (CPI)
                </a> - Adjusts for inflation over time
              </li>
            </ul>
            <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>
              Last updated: {estimate.computed_at ? new Date(estimate.computed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently"}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
