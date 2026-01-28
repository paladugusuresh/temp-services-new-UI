// app/guides/[slug]/page.tsx
// Individual guide pages - each guide gets its own indexable page with unique content

import { notFound } from "next/navigation";
import { EDUCATIONAL_TIPS, getTipById } from "@/content/educational-tips";
import type { Metadata } from "next";

export function generateStaticParams() {
  return EDUCATIONAL_TIPS.map((tip) => ({ slug: tip.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tip = getTipById(slug);
  
  if (!tip) return {};

  return {
    title: `${tip.title} | Home Service Guide | Temp Services`,
    description: tip.introduction,
    openGraph: {
      title: tip.title,
      description: tip.introduction,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tip = getTipById(slug);

  if (!tip) return notFound();

  // Find related guides
  const relatedGuides = EDUCATIONAL_TIPS.filter(t => t.id !== slug).slice(0, 3);

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      {/* Breadcrumbs */}
      <nav style={{ marginBottom: "24px", fontSize: "0.875rem" }}>
        <a href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Home</a>
        <span style={{ margin: "0 8px", color: "#9ca3af" }}>/</span>
        <a href="/guides/" style={{ color: "#2563eb", textDecoration: "none" }}>Guides</a>
        <span style={{ margin: "0 8px", color: "#9ca3af" }}>/</span>
        <span style={{ color: "#6b7280" }}>{tip.title}</span>
      </nav>

      {/* Article Header */}
      <article>
        <header style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", lineHeight: "1.2", marginBottom: "16px" }}>
            {tip.title}
          </h1>
          
          {/* Author & Date Info - E-E-A-T */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "16px",
            flexWrap: "wrap",
            padding: "16px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            marginBottom: "24px"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                borderRadius: "50%", 
                backgroundColor: "#3b82f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "1.25rem"
              }}>
                TS
              </div>
              <div>
                <p style={{ fontWeight: "600", margin: 0, color: "#1f2937" }}>Temp Services Editorial Team</p>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0 }}>Home Service Cost Experts</p>
              </div>
            </div>
            <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              <span>Updated: January 2026</span>
              <span style={{ margin: "0 8px" }}>•</span>
              <span>{Math.ceil(tip.sections.length * 1.5 + 3)} min read</span>
            </div>
          </div>

          {/* Introduction */}
          <p style={{ 
            fontSize: "1.25rem", 
            color: "#374151", 
            lineHeight: "1.75",
            backgroundColor: "#ecfdf5",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "4px solid #10b981"
          }}>
            {tip.introduction}
          </p>
        </header>

        {/* Table of Contents */}
        <nav style={{
          backgroundColor: "#f0f9ff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "32px"
        }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#0369a1", marginTop: 0, marginBottom: "12px" }}>
            In This Guide
          </h2>
          <ol style={{ margin: 0, paddingLeft: "20px", color: "#0284c7" }}>
            {tip.sections.map((section, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <a href={`#section-${index}`} style={{ color: "#0284c7", textDecoration: "none" }}>
                  {section.heading}
                </a>
              </li>
            ))}
            <li><a href="#key-takeaways" style={{ color: "#0284c7", textDecoration: "none" }}>Key Takeaways</a></li>
          </ol>
        </nav>

        {/* Main Content Sections */}
        {tip.sections.map((section, index) => (
          <section key={index} id={`section-${index}`} style={{ marginBottom: "40px" }}>
            <h2 style={{ 
              fontSize: "1.5rem", 
              fontWeight: "600", 
              color: "#1f2937",
              marginBottom: "16px",
              paddingTop: "16px"
            }}>
              {section.heading}
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.875", fontSize: "1.0625rem" }}>
              {section.content}
            </p>
          </section>
        ))}

        {/* Key Takeaways */}
        <section id="key-takeaways" style={{
          backgroundColor: "#ecfdf5",
          border: "1px solid #a7f3d0",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "40px"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem", 
            fontWeight: "600", 
            color: "#065f46",
            marginTop: 0,
            marginBottom: "16px"
          }}>
            ✓ Key Takeaways
          </h2>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#047857", lineHeight: "1.75" }}>
            {tip.keyTakeaways.map((takeaway, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>{takeaway}</li>
            ))}
          </ul>
        </section>

        {/* Expert Note */}
        <aside style={{
          backgroundColor: "#fefce8",
          border: "1px solid #fef08a",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "32px"
        }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#854d0e", marginTop: 0, marginBottom: "8px" }}>
            💡 Expert Note
          </h3>
          <p style={{ color: "#713f12", lineHeight: "1.6", margin: 0, fontSize: "0.9375rem" }}>
            This guide is based on industry best practices and our research into home service pricing and quality. 
            Individual situations vary—always use your judgment and consult with licensed professionals for specific advice. 
            For cost estimates tailored to your state, explore our <a href="/services/" style={{ color: "#b45309" }}>service pricing pages</a>.
          </p>
        </aside>

        {/* Schema.org Article Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": tip.title,
              "description": tip.introduction,
              "author": {
                "@type": "Organization",
                "name": "Temp Services Editorial Team",
                "url": "https://temp-services.com/about/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Temp Services",
                "url": "https://temp-services.com/"
              },
              "datePublished": "2025-06-01",
              "dateModified": "2026-01-28",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://temp-services.com/guides/${slug}/`
              }
            })
          }}
        />
      </article>

      {/* Related Guides */}
      <section style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "20px" }}>
          Related Guides
        </h2>
        <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {relatedGuides.map((guide) => (
            <a 
              key={guide.id}
              href={`/guides/${guide.id}/`}
              style={{
                display: "block",
                padding: "20px",
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
                textDecoration: "none",
                border: "1px solid #e5e7eb"
              }}
            >
              <h3 style={{ fontSize: "1.0625rem", fontWeight: "600", color: "#1f2937", marginTop: 0, marginBottom: "8px" }}>
                {guide.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>
                {guide.introduction.slice(0, 120)}...
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: "#eff6ff",
        borderRadius: "12px",
        padding: "32px",
        marginTop: "48px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1e40af", marginTop: 0, marginBottom: "12px" }}>
          Ready to Get Cost Estimates?
        </h2>
        <p style={{ color: "#3730a3", marginBottom: "20px" }}>
          Use our free tools to understand typical service costs in your state.
        </p>
        <a 
          href="/services/"
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
          Browse Services →
        </a>
      </section>
    </main>
  );
}
