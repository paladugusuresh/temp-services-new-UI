// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Temp Services",
  description: "Learn how Temp Services provides transparent cost estimates using official government data from BLS and BEA.",
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "24px" }}>About Temp Services</h1>

      <p>
        Temp Services helps homeowners and businesses understand typical costs for common home services across different states. 
        We provide <strong>estimated cost ranges</strong> based on official government economic data, not actual quotes.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>Our Methodology</h2>
      
      <p>
        We start with baseline ranges we maintain for common services, then adjust them using:
      </p>

      <ol style={{ paddingLeft: "24px" }}>
        <li>
          <strong>BEA Regional Price Parities (RPP)</strong> - Official data from the Bureau of Economic Analysis showing 
          state-by-state cost of living differences
        </li>
        <li>
          <strong>BLS Consumer Price Index (CPI-U)</strong> - Monthly inflation data from the Bureau of Labor Statistics 
          to keep estimates current
        </li>
      </ol>

      <p>
        This approach gives you a <em>defensible estimate</em> based on transparent, publicly available government data.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>What We're Not</h2>

      <ul>
        <li>❌ We don't provide quotes - only estimates</li>
        <li>❌ We don't connect you with contractors</li>
        <li>❌ We don't guarantee these prices are what you'll pay</li>
        <li>❌ We don't have "real local data" from actual jobs</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>Why Use Estimates?</h2>

      <p>
        Before you start calling contractors, it helps to know if you're in the ballpark. Our estimates show you:
      </p>

      <ul>
        <li>What factors affect pricing</li>
        <li>What's typically included vs not included</li>
        <li>How your state compares to national averages</li>
        <li>Whether a quote you receive seems reasonable</li>
      </ul>

      <p style={{ 
        background: "#fef3c7", 
        border: "1px solid #fbbf24", 
        borderRadius: "8px", 
        padding: "16px",
        marginTop: "24px"
      }}>
        <strong>Always get multiple local quotes</strong> before hiring. Actual prices vary by job size, access, 
        materials, timing, and contractor experience.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>Updates</h2>

      <p>
        We refresh our data monthly when new BLS CPI data becomes available, and annually when BEA releases updated 
        Regional Price Parities.
      </p>

      <p>
        Questions? <a href="/contact/" style={{ color: "#2563eb" }}>Contact us</a>.
      </p>
    </main>
  );
}
