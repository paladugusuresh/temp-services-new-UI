import type { Service } from "@/content/services";
import type { State } from "@/content/states";

type Estimate = {
  low: number;
  typical: number;
  high: number;
  computed_at?: string;
  inputs?: any;
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
              <div style={{ fontSize: "1.125rem", fontWeight: "500" }}>{service.unit}</div>
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

          <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "12px", marginBottom: 0 }}>
            Estimate updated:{" "}
            {estimate.computed_at ? new Date(estimate.computed_at).toLocaleDateString() : "—"}
          </p>
        </>
      )}
    </section>
  );
}
