import { notFound } from "next/navigation";
import { SERVICES } from "@/content/services";
import { STATES } from "@/content/states";

export default async function ServiceHub({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.key === service);
  if (!svc) return notFound();

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: 12 }}>{svc.name} Pricing by State</h1>
      <p style={{ color: "#4b5563", marginBottom: 24, fontSize: "1.125rem", lineHeight: "1.75" }}>{svc.intro}</p>

      <div style={{ display: "grid", gap: "32px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginBottom: "48px" }}>
        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "12px" }}>What Affects the Price</h2>
          <ul style={{ color: "#4b5563", lineHeight: "1.6", paddingLeft: "20px" }}>
            {svc.drivers.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "12px" }}>Standard Inclusions</h2>
          <ul style={{ color: "#4b5563", lineHeight: "1.6", paddingLeft: "20px" }}>
            {svc.included.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
      </div>

      {svc.tips && svc.tips.length > 0 && (
        <section style={{ 
          marginBottom: "48px",
          padding: "24px",
          backgroundColor: "#f0fdf4",
          borderRadius: "12px",
          border: "1px solid #bbf7d0"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#166534" }}>Pro Tips for {svc.name}</h2>
          <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
            {svc.tips.map((tip) => <li key={tip} style={{ marginBottom: "8px" }}>{tip}</li>)}
          </ul>
        </section>
      )}

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "24px" }}>Select Your State</h2>
      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {STATES.map((st) => (
          <a
            key={st.slug}
            href={`/${st.slug}/${svc.slugCost}/`}
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 14,
            }}
          >
            <div style={{ fontWeight: 700 }}>{st.name}</div>
            <div style={{ color: "#6b7280", fontSize: 13, marginTop: 4 }}>View estimate →</div>
          </a>
        ))}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.key }));
}
