// app/page.tsx
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";

export default function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
      <style>{`
        .hero { text-align: center; margin-bottom: 4rem; }
        .hero h1 { font-size: 2.5rem; font-weight: 700; color: #111; margin-bottom: 1rem; }
        .hero p { font-size: 1.25rem; color: #666; max-width: 800px; margin: 0 auto; }
        .section { margin-bottom: 4rem; }
        .section h2 { font-size: 2rem; font-weight: 700; color: #111; margin-bottom: 2rem; text-align: center; }
        .grid { display: grid; gap: 1.5rem; }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .grid-4 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        .card { background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; border: 1px solid #e5e7eb; transition: box-shadow 0.2s; }
        .card:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .card h3 { font-size: 1.125rem; font-weight: 600; color: #111; margin-bottom: 0.5rem; }
        .card p { font-size: 0.875rem; color: #666; }
        .card a { color: #2563eb; text-decoration: none; font-size: 0.875rem; font-weight: 500; }
        .card a:hover { color: #1d4ed8; }
        .info-box { background: #eff6ff; border-radius: 8px; padding: 2rem; margin-bottom: 4rem; }
        .info-box h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 1rem; }
        .info-box p { color: #4b5563; margin-bottom: 1rem; }
        .info-box ol { margin-left: 1.5rem; color: #4b5563; }
        .info-box li { margin: 0.5rem 0; }
        .cta { text-align: center; }
        .cta h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 1rem; }
        .cta p { color: #666; margin-bottom: 1.5rem; }
        .btn-group { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        .btn { padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 500; transition: background 0.2s; }
        .btn-primary { background: #2563eb; color: white; }
        .btn-primary:hover { background: #1d4ed8; }
        .btn-secondary { background: #e5e7eb; color: #1f2937; }
        .btn-secondary:hover { background: #d1d5db; }
      `}</style>

      <section className="hero">
        <h1>Professional Service Cost Estimates</h1>
        <p>
          Get accurate, data-driven cost estimates for professional services across the United States.
          Our pricing is based on official government economic data from the Bureau of Economic Analysis
          and Bureau of Labor Statistics.
        </p>
      </section>

      <section className="section">
        <h2>Browse by State</h2>
        <div className="grid grid-4">
          {STATES.map((state) => (
            <a key={state.slug} href={`/${state.slug}/junk-removal-cost/`} className="card" style={{textDecoration: 'none', color: 'inherit'}}>
              <h3>{state.name}</h3>
              <p style={{color: '#2563eb', marginTop: '0.5rem'}}>View cost estimates →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Services We Cover</h2>
        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div key={service.slug} className="card">
              <h3>{service.name}</h3>
              <p style={{marginBottom: '1rem'}}>{service.intro}</p>
              <a href={`/ca/${service.slugCost}/`}>View California pricing →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="info-box">
        <h2>How We Calculate Estimates</h2>
        <p>
          Our pricing estimates combine national baseline data with regional cost adjustments:
        </p>
        <ol>
          <li>We start with national average pricing from industry sources</li>
          <li>We apply <strong>Regional Price Parities (RPP)</strong> from the Bureau of Economic Analysis to adjust for local cost differences</li>
          <li>We adjust for inflation using the <strong>Consumer Price Index (CPI)</strong> from the Bureau of Labor Statistics</li>
          <li>This gives you location-specific estimates that reflect current market conditions</li>
        </ol>
        <p style={{marginTop: '1rem'}}>
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
