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

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>Our Mission</h2>
        
        <p>
          We believe that transparent pricing information empowers consumers to make better decisions. When you know 
          what a service typically costs in your area, you can:
        </p>

        <ul style={{ paddingLeft: "24px", marginTop: "16px" }}>
          <li>Recognize when you're being overcharged</li>
          <li>Spot suspiciously low bids that might indicate poor quality</li>
          <li>Budget accurately for home projects</li>
          <li>Negotiate from an informed position</li>
          <li>Make fair comparisons between contractor quotes</li>
        </ul>

        <p style={{ marginTop: "16px" }}>
          We created Temp Services because we believe this information should be freely available to everyone, 
          not locked behind paywalls or buried in contractor marketing materials.
        </p>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>Our Methodology</h2>
        
        <p>
          We use a transparent, data-driven approach to generate our cost estimates:
        </p>

        <div style={{ marginTop: "24px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", color: "#1e40af" }}>
            1. National Baseline Research
          </h3>
          <p style={{ marginBottom: "20px" }}>
            We research and maintain baseline price ranges for each service category. These baselines represent 
            typical costs at a national level, accounting for labor time, materials, and standard scope of work. 
            We regularly review and update these baselines to reflect market changes.
          </p>

          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", color: "#1e40af" }}>
            2. Regional Price Parities (RPP)
          </h3>
          <p style={{ marginBottom: "20px" }}>
            The Bureau of Economic Analysis (BEA) publishes Regional Price Parities that measure price differences 
            across states. If a state has an RPP of 110, prices there are about 10% higher than the national average. 
            We apply these parities to adjust our baseline estimates for each state.
          </p>

          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", color: "#1e40af" }}>
            3. Consumer Price Index Adjustment
          </h3>
          <p style={{ marginBottom: "20px" }}>
            The Bureau of Labor Statistics (BLS) publishes the Consumer Price Index (CPI-U) monthly. We use this 
            data to adjust our estimates for inflation, ensuring they reflect current economic conditions rather 
            than outdated pricing.
          </p>

          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", color: "#1e40af" }}>
            4. Regular Updates
          </h3>
          <p>
            We update our estimates monthly when new CPI data is released and annually when the BEA publishes 
            updated Regional Price Parities. This ensures our estimates stay current with economic changes.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>Data Sources</h2>
        
        <p>
          We use exclusively official government data sources for our regional adjustments:
        </p>

        <div style={{ 
          display: "grid", 
          gap: "16px", 
          marginTop: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
        }}>
          <div style={{ 
            padding: "20px", 
            backgroundColor: "#eff6ff", 
            borderRadius: "8px",
            border: "1px solid #bfdbfe"
          }}>
            <h4 style={{ fontWeight: "600", color: "#1e40af", marginBottom: "8px" }}>
              Bureau of Economic Analysis (BEA)
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "#3730a3" }}>
              Regional Price Parities measure how prices for goods and services in each state compare 
              to the national average. Published annually.
            </p>
          </div>
          <div style={{ 
            padding: "20px", 
            backgroundColor: "#f0fdf4", 
            borderRadius: "8px",
            border: "1px solid #bbf7d0"
          }}>
            <h4 style={{ fontWeight: "600", color: "#166534", marginBottom: "8px" }}>
              Bureau of Labor Statistics (BLS)
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "#15803d" }}>
              Consumer Price Index (CPI-U) measures changes in prices paid by urban consumers for 
              goods and services. Published monthly.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What We're Not</h2>

        <p style={{ marginBottom: "16px" }}>
          To be completely transparent about what Temp Services is and isn't, here's what we don't do:
        </p>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span style={{ color: "#dc2626" }}>❌</span>
            <span><strong>We don't provide quotes</strong> - Only estimates based on typical market rates</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span style={{ color: "#dc2626" }}>❌</span>
            <span><strong>We don't connect you with contractors</strong> - We're not a lead generation service</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span style={{ color: "#dc2626" }}>❌</span>
            <span><strong>We don't guarantee prices</strong> - Your actual cost will depend on your specific situation</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span style={{ color: "#dc2626" }}>❌</span>
            <span><strong>We don't have "real local data"</strong> - We use government statistics, not crowdsourced job data</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
            <span style={{ color: "#dc2626" }}>❌</span>
            <span><strong>We don't sell your information</strong> - We have no user accounts or data collection</span>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>Why Use Estimates?</h2>

        <p>
          Before you start calling contractors, it helps to know if you're in the ballpark. Our estimates help you:
        </p>

        <ul style={{ paddingLeft: "24px", marginTop: "16px" }}>
          <li><strong>Understand price drivers:</strong> What factors affect how much you'll pay</li>
          <li><strong>Know what's included:</strong> Typical scope of work vs. common add-ons</li>
          <li><strong>Compare regionally:</strong> How your state compares to national averages</li>
          <li><strong>Evaluate quotes:</strong> Whether a quote you receive seems reasonable</li>
          <li><strong>Budget effectively:</strong> Plan your finances before starting a project</li>
        </ul>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>Limitations of Our Estimates</h2>

        <p>
          While we strive for accuracy, our estimates have inherent limitations:
        </p>

        <ul style={{ paddingLeft: "24px", marginTop: "16px" }}>
          <li>State-level RPPs don't capture city-level variations (San Francisco vs. Fresno, for example)</li>
          <li>Our baselines represent typical jobs, not complex or unusual situations</li>
          <li>Market conditions can change faster than government data is published</li>
          <li>Individual contractor pricing varies based on experience, overhead, and current workload</li>
          <li>Emergency and after-hours service typically costs more than our estimates suggest</li>
        </ul>

        <p style={{ 
          background: "#fef3c7", 
          border: "1px solid #fbbf24", 
          borderRadius: "8px", 
          padding: "16px",
          marginTop: "24px"
        }}>
          <strong>Always get multiple local quotes</strong> before hiring. Actual prices vary by job size, access, 
          materials, timing, and contractor experience. Use our estimates as a starting point, not a final answer.
        </p>
      </section>

      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>Updates and Improvements</h2>

        <p>
          We continuously work to improve our estimates and expand our coverage:
        </p>

        <ul style={{ paddingLeft: "24px", marginTop: "16px" }}>
          <li><strong>Monthly:</strong> Refresh data when new BLS CPI data becomes available</li>
          <li><strong>Annually:</strong> Update when BEA releases new Regional Price Parities</li>
          <li><strong>Ongoing:</strong> Review and refine baseline ranges based on market research</li>
          <li><strong>Regular:</strong> Add new service categories and expand hiring guides</li>
        </ul>
      </section>

      <p style={{ marginTop: "48px" }}>
        Questions or feedback? <a href="/contact/" style={{ color: "#2563eb" }}>Contact us</a>.
      </p>
    </main>
  );
}
