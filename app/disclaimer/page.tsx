// app/disclaimer/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Temp Services",
  description: "Important disclaimers about our cost estimates and limitations.",
};

export default function DisclaimerPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "24px" }}>Disclaimer</h1>

      <div style={{
        background: "#fef3c7",
        border: "2px solid #fbbf24",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "32px"
      }}>
        <strong style={{ fontSize: "1.125rem" }}>⚠️ These are estimates, not quotes.</strong>
        <p style={{ marginBottom: 0, marginTop: "8px" }}>
          Actual prices you pay will vary based on your specific job requirements, location, contractor, and timing.
        </p>
      </div>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        About Our Estimates
      </h2>

      <p>
        The cost ranges shown on this website are <strong>estimates</strong> derived from:
      </p>

      <ol>
        <li>National baseline pricing from public cost guides (primarily Angi)</li>
        <li>BEA Regional Price Parities (RPP) for state-level cost adjustments</li>
        <li>BLS Consumer Price Index (CPI-U) for inflation adjustments</li>
      </ol>

      <p>
        These estimates are <strong>not guarantees</strong> of what you will pay. Actual costs depend on many factors we cannot predict.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Factors That Affect Actual Pricing
      </h2>

      <ul>
        <li><strong>Job Size and Complexity:</strong> Larger or more complex jobs cost more</li>
        <li><strong>Access and Logistics:</strong> Stairs, parking, gates, etc.</li>
        <li><strong>Materials and Parts:</strong> Quality, availability, shipping</li>
        <li><strong>Timing:</strong> Emergency, weekend, holiday, seasonal demand</li>
        <li><strong>Contractor Experience:</strong> Licensed professionals charge more than unlicensed</li>
        <li><strong>Local Market Conditions:</strong> Competition, demand, permits</li>
        <li><strong>Property Conditions:</strong> Age, condition, surprises during the job</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        No Professional Relationship
      </h2>

      <p>
        Using this website does not create any professional or advisory relationship with Temp Services. We:
      </p>

      <ul>
        <li>❌ Do not provide quotes or binding price guarantees</li>
        <li>❌ Do not recommend specific contractors</li>
        <li>❌ Are not responsible for work quality or contractor performance</li>
        <li>❌ Do not mediate disputes between you and contractors</li>
        <li>❌ Do not verify contractor licensing, insurance, or qualifications</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Your Responsibility
      </h2>

      <p>
        When hiring a contractor, you should:
      </p>

      <ul>
        <li>✅ Get multiple written quotes</li>
        <li>✅ Verify licenses and insurance</li>
        <li>✅ Check references and reviews</li>
        <li>✅ Get a written contract before work begins</li>
        <li>✅ Understand what's included and excluded</li>
        <li>✅ Check local permit requirements</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Limitation of Liability
      </h2>

      <p>
        To the fullest extent permitted by law, Temp Services and its operators shall not be liable for any damages 
        arising from your use of this website or reliance on the cost estimates provided, including but not limited 
        to direct, indirect, incidental, consequential, or punitive damages.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Data Accuracy
      </h2>

      <p>
        While we strive for accuracy, we make no warranty that:
      </p>

      <ul>
        <li>Our estimates reflect current market conditions in your exact location</li>
        <li>Our data sources (BLS, BEA, Angi) are error-free</li>
        <li>Our calculations are free from errors</li>
        <li>The website is always available or error-free</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        External Links
      </h2>

      <p>
        This website may contain links to third-party websites (including government sources like BLS and BEA). 
        We are not responsible for the content, accuracy, or availability of external sites.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Changes
      </h2>

      <p>
        We reserve the right to update, modify, or discontinue any part of this website or our cost estimates at any 
        time without notice.
      </p>

      <p style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e5e7eb", fontSize: "0.875rem", color: "#9ca3af" }}>
        By using this website, you acknowledge that you have read, understood, and agree to this disclaimer.
      </p>
    </main>
  );
}
