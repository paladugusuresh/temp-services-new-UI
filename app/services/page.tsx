import { SERVICES } from "@/content/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Service Cost Estimates by Category | Temp Services",
  description: "Browse all home service categories with estimated cost ranges. Compare pricing for plumbing, electrical, HVAC, roofing, and more across all 50 states.",
};

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: 12 }}>Home Service Cost Estimates</h1>
      <p style={{ color: "#4b5563", marginBottom: 8, fontSize: "1.125rem", lineHeight: "1.75" }}>
        Understanding typical costs before you contact a contractor puts you in a much stronger position.
        Below you&apos;ll find every service category we cover, with detailed cost ranges adjusted for each state
        using official government data from the Bureau of Economic Analysis and Bureau of Labor Statistics.
      </p>
      <p style={{ color: "#4b5563", marginBottom: 24, lineHeight: "1.75" }}>
        Select any service to see state-by-state pricing, what drives costs, what&apos;s typically included in a standard
        job, expert hiring tips, and common mistakes to avoid. Each estimate page also includes a detailed FAQ,
        a DIY vs. hire guide, and seasonal timing advice specific to your location.
      </p>

      {/* How to use this page */}
      <section style={{
        backgroundColor: "#f0fdf4",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "32px",
        border: "1px solid #bbf7d0"
      }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#166534", marginTop: 0, marginBottom: "12px" }}>
          How to Use Our Cost Estimates
        </h2>
        <ol style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px", margin: 0 }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>Choose a service category</strong> from the list below that matches your project
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Select your state</strong> on the service page to see costs adjusted for your local cost of living
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Review what&apos;s included</strong> so you can compare quotes on an apples-to-apples basis
          </li>
          <li>
            <strong>Use the estimate as a baseline</strong> when evaluating contractor quotes — not as a guarantee of price
          </li>
        </ol>
      </section>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 16 }}>All Service Categories</h2>
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
            <div style={{ color: "#6b7280", fontSize: 14 }}>{s.intro.split('.')[0]}.</div>
            <div style={{ color: "#2563eb", fontSize: 14, marginTop: 8, fontWeight: 500 }}>View pricing by state →</div>
          </a>
        ))}
      </div>

      {/* Understanding pricing section */}
      <section style={{ marginTop: "48px", padding: "24px", backgroundColor: "#f8fafc", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          What Affects Home Service Pricing?
        </h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          Home service costs are influenced by a complex set of factors that go well beyond the basic labor and materials.
          Understanding these factors helps you evaluate whether a quote is fair and why two contractors might give you
          very different prices for the same job.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "16px", background: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "8px", color: "#1e293b" }}>
              Geographic Location
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6", margin: 0, fontSize: "0.9375rem" }}>
              A plumber in Manhattan charges 2-3x more than one in rural Kansas — not because they&apos;re better,
              but because rent, insurance, labor markets, and cost of living differ dramatically. Our estimates
              use BEA Regional Price Parities to account for these differences at the state level.
            </p>
          </div>
          <div style={{ padding: "16px", background: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "8px", color: "#1e293b" }}>
              Job Complexity
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6", margin: 0, fontSize: "0.9375rem" }}>
              Replacing a standard water heater in an accessible basement is straightforward. Replacing one in a
              cramped crawl space with outdated plumbing requires more time, skill, and often code upgrades.
              The &quot;same&quot; job can cost 50-100% more depending on site conditions.
            </p>
          </div>
          <div style={{ padding: "16px", background: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "8px", color: "#1e293b" }}>
              Timing and Urgency
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6", margin: 0, fontSize: "0.9375rem" }}>
              Emergency calls on weekends or holidays can cost 50-100% more than scheduled appointments.
              Seasonal demand also matters — HVAC contractors are most expensive in extreme heat or cold,
              and roofers charge more right after major storms when demand spikes.
            </p>
          </div>
          <div style={{ padding: "16px", background: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "8px", color: "#1e293b" }}>
              Contractor Overhead
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6", margin: 0, fontSize: "0.9375rem" }}>
              A solo operator working out of a pickup truck has different overhead than a company with branded
              vans, a front office, and a marketing budget. Both can do quality work, but their pricing structures
              reflect very different business models.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for getting accurate quotes */}
      <section style={{ marginTop: "32px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>
          Tips for Getting Accurate Contractor Quotes
        </h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          Our cost estimates give you a solid starting point, but here&apos;s how to translate that into
          actionable quotes from local contractors:
        </p>
        <ul style={{ color: "#4b5563", lineHeight: "1.75", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>Get at least three quotes</strong> — one quote tells you nothing. Three quotes establish a market range
            and help you identify outliers (both high and low).
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Provide identical project descriptions</strong> — if each contractor is bidding on a different scope,
            you can&apos;t compare their prices meaningfully. Write down exactly what you need and share it with each bidder.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Ask what&apos;s included and excluded</strong> — a cheaper quote might not include cleanup, permits,
            or materials. Use our &quot;what&apos;s included&quot; lists on each service page as a reference checklist.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Verify licensing and insurance</strong> — the cheapest contractor might be unlicensed. Check your
            state&apos;s licensing board website (we link to these on our state pages).
          </li>
          <li>
            <strong>Be cautious of quotes far below our estimates</strong> — prices significantly below the typical range
            often signal cut corners, unlicensed work, or bait-and-switch tactics.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{
        marginTop: "48px",
        padding: "24px",
        textAlign: "center",
        backgroundColor: "#eff6ff",
        borderRadius: "12px",
        border: "1px solid #bfdbfe"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1e40af", marginBottom: "12px" }}>
          Not Sure Which Service You Need?
        </h2>
        <p style={{ color: "#3b82f6", marginBottom: "16px", maxWidth: "600px", margin: "0 auto 16px" }}>
          Browse our comprehensive hiring guides for expert advice on choosing the right
          professional for your project, what questions to ask, and red flags to avoid.
        </p>
        <a
          href="/guides/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Read Our Hiring Guides
        </a>
      </section>
    </main>
  );
}
