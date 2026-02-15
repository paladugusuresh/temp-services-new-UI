// app/page.tsx
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";
import CostCompare from "@/components/CostCompare";

export default function HomePage() {
  const serviceOptions = SERVICES.map(s => ({ key: s.key, name: s.name, slugCost: s.slugCost }));
  const stateOptions = STATES.map(s => ({ slug: s.slug, name: s.name, code: s.code }));

  return (
    <div className="page-container">
      <section className="hero">
        <h1>Professional Service Cost Estimates</h1>
        <p>
          Get data-driven cost estimates for professional services across the United States.
          Our pricing uses baseline ranges we maintain, adjusted using the Bureau of Economic Analysis
          Regional Price Parities and the Bureau of Labor Statistics Consumer Price Index.
        </p>
      </section>

      {/* Educational Introduction */}
      <section className="section" style={{ backgroundColor: "#f8fafc", padding: "32px", borderRadius: "12px", marginBottom: "32px" }}>
        <h2>Why Use Cost Estimates Before Hiring?</h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          Before you pick up the phone to call a contractor, understanding typical costs in your area puts you in a stronger position. 
          Whether you're planning a home improvement project, dealing with an emergency repair, or budgeting for routine maintenance, 
          knowing what to expect helps you:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginTop: "20px" }}>
          <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <strong style={{ color: "#059669" }}>✓ Avoid Overpaying</strong>
            <p style={{ color: "#6b7280", marginTop: "8px", fontSize: "0.9375rem" }}>
              Recognize when a quote is significantly above market rate and negotiate from an informed position
            </p>
          </div>
          <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <strong style={{ color: "#059669" }}>✓ Budget Accurately</strong>
            <p style={{ color: "#6b7280", marginTop: "8px", fontSize: "0.9375rem" }}>
              Plan your finances before starting a project, avoiding unpleasant surprises mid-job
            </p>
          </div>
          <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <strong style={{ color: "#059669" }}>✓ Identify Suspiciously Low Bids</strong>
            <p style={{ color: "#6b7280", marginTop: "8px", fontSize: "0.9375rem" }}>
              A quote far below average often signals cut corners, unlicensed work, or hidden fees
            </p>
          </div>
          <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <strong style={{ color: "#059669" }}>✓ Compare Fairly</strong>
            <p style={{ color: "#6b7280", marginTop: "8px", fontSize: "0.9375rem" }}>
              Understand if differences in quotes reflect scope, quality, or just different pricing strategies
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Cost Comparison Tool */}
      <section className="section" style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "8px" }}>Cost Comparison Tool</h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Use our interactive tool to compare what the same service costs in different states — powered by live data from our pricing API:
        </p>
        <CostCompare services={serviceOptions} states={stateOptions} />
      </section>

      <section className="section">
        <h2>Browse by State</h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Service costs vary significantly by location. Select your state to see estimates adjusted for your local cost of living:
        </p>
        <div className="grid grid-4">
          {STATES.map((state) => (
            <a key={state.slug} href={`/${state.slug}/`} className="card" style={{textDecoration: 'none', color: 'inherit'}}>
              <h3>{state.name}</h3>
              <p className="text-blue mt-1">View cost estimates →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Services We Cover</h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          We provide detailed cost estimates and hiring guides for common home services:
        </p>
        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div key={service.key} className="card">
              <h3>{service.name}</h3>
              <p className="mb-2">{service.intro.split('.')[0]}.</p>
              <a href={`/services/${service.key}/`}>View pricing by state →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Methodology Section */}
      <section className="info-box" style={{ marginTop: "48px" }}>
        <h2>How We Calculate Estimates</h2>
        <p>
          Our pricing estimates combine baseline ranges we maintain with regional cost adjustments using official government data:
        </p>
        <ol style={{ lineHeight: "1.75", marginTop: "16px" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>National Baseline Research:</strong> We start with researched national baseline ranges for each service type, 
            accounting for typical job scope, labor time, and materials
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>Regional Price Parities (RPP):</strong> We apply the Bureau of Economic Analysis Regional Price Parities 
            to adjust for state-level cost differences. RPP measures how much prices for goods and services differ from the national average
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>Consumer Price Index (CPI):</strong> We adjust for inflation using the Bureau of Labor Statistics 
            Consumer Price Index (CPI-U), ensuring our estimates reflect current market conditions
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>Continuous Updates:</strong> We refresh our data monthly when new CPI data becomes available and annually 
            when BEA releases updated Regional Price Parities
          </li>
        </ol>
        <p className="mt-2">
          <strong>Important:</strong> These are estimates for planning purposes only. Actual costs may vary based on
          specific requirements, service provider, job complexity, and other factors. Always request quotes from multiple providers 
          and never hire based solely on price.
        </p>
      </section>

      {/* Educational Content: Hiring Tips */}
      <section style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f0fdf4", borderRadius: "12px" }}>
        <h2 style={{ color: "#166534", marginBottom: "16px" }}>General Tips for Hiring Home Service Professionals</h2>
        <p style={{ color: "#15803d", lineHeight: "1.75", marginBottom: "20px" }}>
          Regardless of what service you need, these universal principles help you find reliable contractors and avoid common pitfalls:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          <div>
            <h3 style={{ color: "#166534", fontSize: "1.125rem", marginBottom: "8px" }}>Before You Call</h3>
            <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
              <li>Define your project scope clearly</li>
              <li>Set a realistic budget range</li>
              <li>Research typical costs (that's why you're here!)</li>
              <li>Gather photos or details of the issue</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#166534", fontSize: "1.125rem", marginBottom: "8px" }}>Getting Quotes</h3>
            <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
              <li>Always get at least 3 quotes</li>
              <li>Get everything in writing</li>
              <li>Ask about licensing and insurance</li>
              <li>Request references from recent jobs</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#166534", fontSize: "1.125rem", marginBottom: "8px" }}>Red Flags to Watch For</h3>
            <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
              <li>Demands for large upfront payment</li>
              <li>No written contract or estimate</li>
              <li>Pressure to decide immediately</li>
              <li>Unable to provide license info</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#166534", fontSize: "1.125rem", marginBottom: "8px" }}>After Hiring</h3>
            <ul style={{ color: "#15803d", lineHeight: "1.75", paddingLeft: "20px" }}>
              <li>Confirm start date and timeline</li>
              <li>Discuss payment schedule milestones</li>
              <li>Keep communication documented</li>
              <li>Do a walkthrough before final payment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Understanding Price Variation */}
      <section style={{ marginTop: "48px" }}>
        <h2>Why Prices Vary So Much</h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "20px" }}>
          You might wonder why the same service can cost twice as much in one city versus another, or why two contractors 
          in the same town give wildly different quotes. Here's what drives those differences:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.125rem", marginBottom: "8px", color: "#1e293b" }}>Geographic Factors</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Labor costs, rent, insurance, and general cost of living vary dramatically by location. 
              A plumber in San Francisco has much higher overhead than one in rural Texas.
            </p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.125rem", marginBottom: "8px", color: "#1e293b" }}>Contractor Experience</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              A master electrician with 30 years of experience charges more than a recently licensed technician. 
              Both might do quality work, but expertise and reputation have value.
            </p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.125rem", marginBottom: "8px", color: "#1e293b" }}>Business Model</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Large companies with trucks, uniforms, and marketing budgets have higher overhead than solo operators. 
              Each model has tradeoffs in reliability, availability, and accountability.
            </p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.125rem", marginBottom: "8px", color: "#1e293b" }}>Timing and Demand</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Emergency repairs cost more than scheduled work. Peak seasons (AC repair in summer, heating in winter) 
              command premium prices due to high demand.
            </p>
          </div>
        </div>
      </section>

      <section className="cta" style={{ marginTop: "48px" }}>
        <h2>Ready to Get Started?</h2>
        <p>Select your state and service to view estimated costs in your area.</p>
        <div className="btn-group">
          <a href="/about/" className="btn btn-primary">Learn More About Us</a>
          <a href="/contact/" className="btn btn-secondary">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
