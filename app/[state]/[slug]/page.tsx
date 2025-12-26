// app/[state]/[slug]/page.tsx
import { notFound } from "next/navigation";
import { STATES } from "@/content/states";
import { SERVICES } from "@/content/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import DynamicEstimate from "@/components/DynamicEstimate";
import Faq from "@/components/Faq";
import { buildFaq } from "@/content/faqs";

function findState(state: string) {
  return STATES.find((s) => s.slug === state);
}

function findServiceByCostSlug(slug: string) {
  return SERVICES.find((s) => s.slugCost === slug);
}

export function generateStaticParams() {
  const paths: { state: string; slug: string }[] = [];
  for (const st of STATES) {
    for (const svc of SERVICES) {
      paths.push({ state: st.slug, slug: svc.slugCost });
    }
  }
  return paths;
}

export default async function Page({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const st = findState(state);
  const svc = findServiceByCostSlug(slug);

  if (!st || !svc) return notFound();

  const faq = buildFaq(svc, st);

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: st.name, href: `/${st.slug}/` },
          { name: `${svc.name} Cost`, href: `/${st.slug}/${svc.slugCost}/` },
        ]}
      />

      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
        {svc.name} Cost in {st.name}
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#4b5563", lineHeight: "1.75" }}>{st.intro}</p>
      <p style={{ fontSize: "1.125rem", color: "#4b5563", lineHeight: "1.75" }}>{svc.intro}</p>

      <DynamicEstimate serviceKey={svc.key} stateSlug={st.slug} service={svc} state={st} />

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What Affects the Price</h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.drivers.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What's Usually Included</h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.included.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "16px" }}>What's Usually Not Included</h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {svc.notIncluded.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </section>

      <section style={{
        background: "#eff6ff",
        border: "2px solid #3b82f6",
        borderRadius: "12px",
        padding: "24px",
        margin: "32px 0"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 0 }}>How This Estimate is Calculated</h2>
        <p style={{ lineHeight: "1.75", marginBottom: "12px" }}>
          This page shows an <strong>estimated cost range</strong>, not a quote.
        </p>
        <ol style={{ lineHeight: "1.75", paddingLeft: "20px" }}>
          <li>Start with a national baseline range for the service</li>
          <li>Adjust for state price levels using <strong>BEA Regional Price Parities (RPP)</strong></li>
          <li>Adjust for inflation using the <strong>BLS Consumer Price Index (CPI-U)</strong></li>
        </ol>
        <p style={{ lineHeight: "1.75", marginBottom: 0 }}>
          Actual prices vary by job size, access, materials, timing, and contractor. Get multiple local quotes before you
          book.
        </p>
      </section>

      <Faq items={faq} />

      <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "48px", borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
        <strong>Disclaimer:</strong> Estimates vary based on job size, access, materials, timing, and contractor. This is
        not a guarantee of actual pricing. Always get multiple local quotes.
      </p>
    </main>
  );
}
