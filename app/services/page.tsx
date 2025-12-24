import { SERVICES } from "@/content/services";

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: 12 }}>Services</h1>
      <p style={{ color: "#4b5563", marginBottom: 24 }}>
        Choose a service to view estimates by state.
      </p>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {SERVICES.map((s) => (
          <a
            key={s.key}
            href={`/services/${s.key}/`}
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{s.name}</div>
            <div style={{ color: "#6b7280", fontSize: 14 }}>{s.intro}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
