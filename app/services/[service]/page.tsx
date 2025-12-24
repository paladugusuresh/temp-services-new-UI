import { notFound } from "next/navigation";
import { SERVICES } from "@/content/services";
import { STATES } from "@/content/states";

export default function ServiceHub({ params }: { params: { service: string } }) {
  const svc = SERVICES.find((s) => s.key === params.service);
  if (!svc) return notFound();

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: 12 }}>{svc.name} Pricing by State</h1>
      <p style={{ color: "#4b5563", marginBottom: 24 }}>{svc.intro}</p>

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
