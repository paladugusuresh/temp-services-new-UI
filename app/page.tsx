// app/page.tsx
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";

export default function HomePage() {
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

      <section className="section">
        <h2>Browse by State</h2>
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
        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div key={service.key} className="card">
              <h3>{service.name}</h3>
              <p className="mb-2">{service.intro}</p>
              <a href={`/services/${service.key}/`}>View pricing by state →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="info-box">
        <h2>How We Calculate Estimates</h2>
        <p>
          Our pricing estimates combine baseline ranges we maintain with regional cost adjustments:
        </p>
        <ol>
          <li>We start with national baseline ranges for each service type</li>
          <li>We apply <strong>Regional Price Parities (RPP)</strong> from the Bureau of Economic Analysis to adjust for local cost differences</li>
          <li>We adjust for inflation using the <strong>Consumer Price Index (CPI)</strong> from the Bureau of Labor Statistics</li>
          <li>This gives you location-specific estimates that reflect current market conditions</li>
        </ol>
        <p className="mt-2">
          <strong>Important:</strong> These are estimates for planning purposes only. Actual costs may vary based on
          specific requirements, service provider, and other factors. Always request quotes from multiple providers.
        </p>
      </section>

      <section className="cta">
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
