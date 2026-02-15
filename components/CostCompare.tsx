"use client";

import { useState } from "react";

type ServiceOption = { key: string; name: string; slugCost: string };
type StateOption = { slug: string; name: string; code: string };

type EstimateResult = {
  low: number;
  typical: number;
  high: number;
  unit: string;
  state_name: string;
  service_name: string;
  inputs?: {
    rpp_year: number;
    rpp_index: number;
    cpi_latest: number;
    cpi_baseline: number;
  };
};

const fmt = (n: number) =>
  n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export default function CostCompare({
  services,
  states,
}: {
  services: ServiceOption[];
  states: StateOption[];
}) {
  const [service, setService] = useState("");
  const [stateA, setStateA] = useState("");
  const [stateB, setStateB] = useState("");
  const [results, setResults] = useState<{ a: EstimateResult | null; b: EstimateResult | null } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const base = "https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net";

  async function handleCompare() {
    if (!service || !stateA || !stateB) {
      setError("Please select a service and two states to compare.");
      return;
    }
    if (stateA === stateB) {
      setError("Please select two different states to compare.");
      return;
    }
    setError("");
    setLoading(true);
    setResults(null);

    try {
      const [resA, resB] = await Promise.all([
        fetch(`${base}/api/estimate?service=${encodeURIComponent(service)}&location=${encodeURIComponent(stateA)}`),
        fetch(`${base}/api/estimate?service=${encodeURIComponent(service)}&location=${encodeURIComponent(stateB)}`),
      ]);

      const dataA = resA.ok ? await resA.json() : null;
      const dataB = resB.ok ? await resB.json() : null;

      setResults({ a: dataA, b: dataB });
    } catch {
      setError("Failed to fetch estimates. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const selectedService = services.find((s) => s.key === service);
  const stateAName = states.find((s) => s.slug === stateA)?.name || "";
  const stateBName = states.find((s) => s.slug === stateB)?.name || "";

  const pctDiff =
    results?.a && results?.b
      ? ((results.b.typical - results.a.typical) / results.a.typical) * 100
      : null;

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px", background: "white" }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 0, marginBottom: "4px" }}>
        🔍 Compare Costs Between States
      </h3>
      <p style={{ color: "#6b7280", marginBottom: "20px", fontSize: "0.9375rem" }}>
        Select a service and two states to see how costs differ by location.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label htmlFor="compare-service" style={{ display: "block", fontWeight: "500", marginBottom: "4px", fontSize: "0.875rem", color: "#374151" }}>
            Service
          </label>
          <select
            id="compare-service"
            value={service}
            onChange={(e) => { setService(e.target.value); setResults(null); }}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              background: "white",
            }}
          >
            <option value="">Choose a service...</option>
            {services.map((s) => (
              <option key={s.key} value={s.key}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="compare-stateA" style={{ display: "block", fontWeight: "500", marginBottom: "4px", fontSize: "0.875rem", color: "#374151" }}>
            State A
          </label>
          <select
            id="compare-stateA"
            value={stateA}
            onChange={(e) => { setStateA(e.target.value); setResults(null); }}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              background: "white",
            }}
          >
            <option value="">Choose state...</option>
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="compare-stateB" style={{ display: "block", fontWeight: "500", marginBottom: "4px", fontSize: "0.875rem", color: "#374151" }}>
            State B
          </label>
          <select
            id="compare-stateB"
            value={stateB}
            onChange={(e) => { setStateB(e.target.value); setResults(null); }}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              background: "white",
            }}
          >
            <option value="">Choose state...</option>
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleCompare}
        disabled={loading}
        style={{
          padding: "12px 28px",
          background: loading ? "#93c5fd" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: loading ? "wait" : "pointer",
          width: "100%",
        }}
      >
        {loading ? "Fetching estimates..." : "Compare Costs"}
      </button>

      {error && (
        <p style={{ color: "#dc2626", marginTop: "12px", fontWeight: "500" }}>{error}</p>
      )}

      {results && (
        <div style={{ marginTop: "24px" }}>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "16px" }}>
            {selectedService?.name} — {stateAName} vs. {stateBName}
          </h4>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {/* State A */}
            <div style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "10px",
              padding: "20px",
            }}>
              <div style={{ fontWeight: "600", fontSize: "1.0625rem", marginBottom: "12px", color: "#1e40af" }}>
                {stateAName}
              </div>
              {results.a ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div><span style={{ color: "#6b7280", fontSize: "0.875rem" }}>Low</span> <strong style={{ color: "#059669" }}>{fmt(results.a.low)}</strong></div>
                  <div><span style={{ color: "#6b7280", fontSize: "0.875rem" }}>Typical</span> <strong style={{ color: "#2563eb", fontSize: "1.25rem" }}>{fmt(results.a.typical)}</strong></div>
                  <div><span style={{ color: "#6b7280", fontSize: "0.875rem" }}>High</span> <strong style={{ color: "#dc2626" }}>{fmt(results.a.high)}</strong></div>
                  <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>Per {results.a.unit}</div>
                  {results.a.inputs && (
                    <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>
                      RPP Index: {results.a.inputs.rpp_index}
                    </div>
                  )}
                </div>
              ) : (
                <p style={{ color: "#9ca3af" }}>Estimate unavailable</p>
              )}
            </div>

            {/* State B */}
            <div style={{
              background: "#fdf4ff",
              border: "1px solid #e9d5ff",
              borderRadius: "10px",
              padding: "20px",
            }}>
              <div style={{ fontWeight: "600", fontSize: "1.0625rem", marginBottom: "12px", color: "#7e22ce" }}>
                {stateBName}
              </div>
              {results.b ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div><span style={{ color: "#6b7280", fontSize: "0.875rem" }}>Low</span> <strong style={{ color: "#059669" }}>{fmt(results.b.low)}</strong></div>
                  <div><span style={{ color: "#6b7280", fontSize: "0.875rem" }}>Typical</span> <strong style={{ color: "#7e22ce", fontSize: "1.25rem" }}>{fmt(results.b.typical)}</strong></div>
                  <div><span style={{ color: "#6b7280", fontSize: "0.875rem" }}>High</span> <strong style={{ color: "#dc2626" }}>{fmt(results.b.high)}</strong></div>
                  <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>Per {results.b.unit}</div>
                  {results.b.inputs && (
                    <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "4px" }}>
                      RPP Index: {results.b.inputs.rpp_index}
                    </div>
                  )}
                </div>
              ) : (
                <p style={{ color: "#9ca3af" }}>Estimate unavailable</p>
              )}
            </div>
          </div>

          {/* Comparison insight */}
          {pctDiff !== null && results.a && results.b && (
            <div style={{
              marginTop: "16px",
              padding: "16px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "0.9375rem",
              lineHeight: "1.6",
            }}>
              <strong>💡 Insight:</strong>{" "}
              {Math.abs(pctDiff) < 3 ? (
                <>
                  {selectedService?.name} costs are <strong>roughly similar</strong> between {stateAName} and {stateBName} (within {Math.abs(pctDiff).toFixed(1)}%).
                </>
              ) : pctDiff > 0 ? (
                <>
                  {selectedService?.name} is typically <strong>{pctDiff.toFixed(0)}% more expensive</strong> in {stateBName} compared to {stateAName} — a difference of about {fmt(results.b.typical - results.a.typical)} per {results.a.unit}.
                  {pctDiff > 20 && " This significant difference is driven by regional cost-of-living variations, local labor markets, and state-specific regulations."}
                </>
              ) : (
                <>
                  {selectedService?.name} is typically <strong>{Math.abs(pctDiff).toFixed(0)}% cheaper</strong> in {stateBName} compared to {stateAName} — a savings of about {fmt(results.a.typical - results.b.typical)} per {results.a.unit}.
                  {Math.abs(pctDiff) > 20 && " This significant difference is driven by regional cost-of-living variations, local labor markets, and state-specific regulations."}
                </>
              )}
            </div>
          )}

          {/* Links to full pages */}
          <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {selectedService && (
              <>
                <a
                  href={`/${stateA}/${selectedService.slugCost}/`}
                  style={{ color: "#2563eb", fontSize: "0.9375rem" }}
                >
                  Full {selectedService.name} guide for {stateAName} →
                </a>
                <a
                  href={`/${stateB}/${selectedService.slugCost}/`}
                  style={{ color: "#7e22ce", fontSize: "0.9375rem" }}
                >
                  Full {selectedService.name} guide for {stateBName} →
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
