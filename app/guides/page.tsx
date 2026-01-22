import { Metadata } from "next";
import { EDUCATIONAL_TIPS } from "@/content/educational-tips";

export const metadata: Metadata = {
  title: "Home Service Guides & Tips | Expert Advice for Hiring Contractors",
  description: "Learn how to hire contractors, avoid scams, get better quotes, and make informed decisions about home services. Expert advice and educational resources for homeowners.",
  keywords: "home service tips, hiring contractors, contractor guide, home improvement advice, avoid contractor scams",
};

export default function GuidesPage() {
  return (
    <main className="page-container">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>
        Home Service Guides & Expert Tips
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "2rem", maxWidth: "800px" }}>
        Making informed decisions about home services starts with knowledge. Our comprehensive guides 
        help you understand the process, avoid common pitfalls, and get the best value for your investment.
      </p>

      {/* Quick Navigation */}
      <nav style={{
        backgroundColor: "#f0f9ff",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "48px",
        border: "1px solid #bae6fd"
      }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#0369a1", marginBottom: "16px" }}>
          Quick Navigation
        </h2>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px", listStyle: "none", padding: 0, margin: 0 }}>
          {EDUCATIONAL_TIPS.map((tip) => (
            <li key={tip.id}>
              <a 
                href={`#${tip.id}`}
                style={{ color: "#0284c7", textDecoration: "none" }}
              >
                → {tip.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Featured Articles */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "24px" }}>
          Featured Guides
        </h2>
        
        {EDUCATIONAL_TIPS.map((tip, index) => (
          <article 
            key={tip.id}
            id={tip.id}
            style={{
              marginBottom: "48px",
              paddingBottom: "48px",
              borderBottom: index < EDUCATIONAL_TIPS.length - 1 ? "1px solid #e5e7eb" : "none"
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111", marginBottom: "16px" }}>
              {tip.title}
            </h3>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "#4b5563", 
              lineHeight: "1.75", 
              marginBottom: "24px",
              backgroundColor: "#f9fafb",
              padding: "16px",
              borderRadius: "8px",
              borderLeft: "4px solid #10b981"
            }}>
              {tip.introduction}
            </p>
            
            {tip.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "1.15rem", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>
                  {section.heading}
                </h4>
                <p style={{ color: "#4b5563", lineHeight: "1.75" }}>
                  {section.content}
                </p>
              </div>
            ))}
            
            {/* Key Takeaways */}
            <div style={{
              backgroundColor: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: "12px",
              padding: "24px",
              marginTop: "24px"
            }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#065f46", marginBottom: "12px" }}>
                ✓ Key Takeaways
              </h4>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#047857" }}>
                {tip.keyTakeaways.map((takeaway, i) => (
                  <li key={i} style={{ marginBottom: "6px", lineHeight: "1.6" }}>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Additional Resources Section */}
      <section style={{
        backgroundColor: "#fffbeb",
        padding: "32px",
        borderRadius: "12px",
        border: "1px solid #fcd34d",
        marginBottom: "48px"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#92400e", marginBottom: "16px" }}>
          💡 Pro Tips for Homeowners
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#78350f", marginBottom: "8px" }}>
              Document Everything
            </h3>
            <p style={{ color: "#92400e", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Before any contractor arrives, photograph existing conditions. Keep all receipts, 
              contracts, and warranty documents in a dedicated home maintenance file.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#78350f", marginBottom: "8px" }}>
              Build Relationships
            </h3>
            <p style={{ color: "#92400e", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Finding reliable contractors takes time. When you find good ones, nurture those 
              relationships—they'll prioritize loyal customers and may offer better rates.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#78350f", marginBottom: "8px" }}>
              Plan Ahead
            </h3>
            <p style={{ color: "#92400e", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Emergency repairs cost more. Schedule maintenance and address small issues before 
              they become emergencies. Budget 1-4% of home value annually for maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust This Information */}
      <section style={{ backgroundColor: "#f9fafb", padding: "32px", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px" }}>
          About Our Guides
        </h2>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          Our educational content is developed by researching industry best practices, consumer protection 
          guidelines, and input from experienced contractors. We aim to provide balanced, practical advice 
          that helps homeowners make informed decisions.
        </p>
        <p style={{ color: "#4b5563", lineHeight: "1.75", marginBottom: "16px" }}>
          <strong>Important:</strong> Every situation is unique. Our guides provide general information, 
          not professional advice for specific circumstances. Local regulations, contractor availability, 
          and your particular needs may require different approaches.
        </p>
        <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          Have suggestions for additional guides or corrections to existing content? We welcome feedback 
          to improve our resources for the homeowner community.
        </p>
      </section>
    </main>
  );
}
