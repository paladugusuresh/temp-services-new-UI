// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Temp Services",
  description: "Get in touch with Temp Services for questions about our cost estimates.",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "24px" }}>Contact Us</h1>

      <p>
        Have questions about our cost estimates or methodology? We'd love to hear from you.
      </p>

      <div style={{
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "24px",
        marginTop: "32px"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 0 }}>Email</h2>
        <p style={{ marginBottom: 0 }}>
          <a href="mailto:hello@temp-services.com" style={{ color: "#2563eb", fontSize: "1.125rem" }}>
            hello@temp-services.com
          </a>
        </p>
      </div>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "48px", marginBottom: "16px" }}>
        Frequently Asked Questions
      </h2>

      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
        <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Can you connect me with a contractor?</h3>
        <p style={{ color: "#6b7280" }}>
          No, we only provide cost estimates. We don't have partnerships with contractors or lead generation services.
        </p>
      </div>

      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px", marginTop: "16px" }}>
        <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Why don't you show exact prices?</h3>
        <p style={{ color: "#6b7280" }}>
          Every job is different. We show estimated ranges based on government economic data (BEA RPP and BLS CPI) 
          to give you a baseline. Always get multiple local quotes for your specific project.
        </p>
      </div>

      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px", marginTop: "16px" }}>
        <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>How often do you update your estimates?</h3>
        <p style={{ color: "#6b7280" }}>
          We update monthly when BLS releases new CPI data, and annually when BEA publishes updated Regional Price Parities.
        </p>
      </div>

      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px", marginTop: "16px" }}>
        <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Can I submit pricing data from my area?</h3>
        <p style={{ color: "#6b7280" }}>
          Not at this time. We rely exclusively on official government data sources (BLS and BEA) to maintain transparency and defensibility.
        </p>
      </div>

      <p style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e5e7eb", fontSize: "0.875rem", color: "#9ca3af" }}>
        Response time: We typically respond within 2-3 business days.
      </p>
    </main>
  );
}
