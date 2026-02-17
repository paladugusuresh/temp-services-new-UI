// app/terms-of-service/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Temp Services",
  description: "Terms and conditions for using the Temp Services website and cost estimate tools.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "February 15, 2026";

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "8px" }}>Terms of Service</h1>
      <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "32px" }}>
        Last updated: {lastUpdated}
      </p>

      <p>
        Welcome to Temp Services (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website at
        temp-services.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree
        with any part of these terms, please do not use the Site.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        1. Description of Service
      </h2>
      <p>
        Temp Services provides estimated cost ranges for common home services across the United States.
        Our estimates are derived from national baseline research adjusted using Bureau of Economic
        Analysis (BEA) Regional Price Parities and Bureau of Labor Statistics (BLS) Consumer Price Index data.
        The Site is for informational and educational purposes only.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        2. Use of Estimates
      </h2>
      <p>
        Cost estimates displayed on the Site are <strong>not quotes, bids, or guarantees</strong> of pricing.
        They represent estimated ranges based on publicly available government economic data and our
        independent research. Actual costs will vary based on your specific project requirements, location,
        contractor, materials, timing, and other factors.
      </p>
      <p style={{ marginTop: "12px" }}>
        You should always obtain multiple written quotes from licensed, insured contractors before
        making hiring decisions. Do not rely solely on our estimates for budgeting or financial planning.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        3. Intellectual Property
      </h2>
      <p>
        All content on the Site, including text, data, graphics, and design, is the property of
        Temp Services or its content providers and is protected by U.S. and international copyright laws.
        You may not reproduce, distribute, or create derivative works from our content without written permission.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        4. Acceptable Use
      </h2>
      <p>You agree not to:</p>
      <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
        <li>Use the Site for any unlawful purpose</li>
        <li>Scrape, crawl, or harvest data from the Site in bulk without authorization</li>
        <li>Interfere with or disrupt the Site or its servers</li>
        <li>Attempt to gain unauthorized access to any part of the Site</li>
        <li>Use the Site to transmit spam, malware, or other harmful content</li>
        <li>Misrepresent our estimates as official quotes or price guarantees</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        5. Third-Party Links and Services
      </h2>
      <p>
        The Site may contain links to third-party websites, including government data sources (BEA, BLS).
        We are not responsible for the content, accuracy, or privacy practices of external sites.
        We may display third-party advertisements through Google AdSense and other advertising partners.
        These ads are served by third parties and are subject to their own terms and privacy policies.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        6. Disclaimer of Warranties
      </h2>
      <p>
        The Site and all content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
        either express or implied, including but not limited to warranties of merchantability, fitness
        for a particular purpose, accuracy, or non-infringement.
      </p>
      <p style={{ marginTop: "12px" }}>
        We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other
        harmful components. We do not guarantee the accuracy or completeness of any cost estimates or
        other content on the Site.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        7. Limitation of Liability
      </h2>
      <p>
        To the fullest extent permitted by applicable law, Temp Services and its operators shall not be
        liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of
        profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
        or other intangible losses resulting from:
      </p>
      <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
        <li>Your use or inability to use the Site</li>
        <li>Any reliance on cost estimates or other information provided on the Site</li>
        <li>Any unauthorized access to or alteration of your transmissions or data</li>
        <li>Any conduct or content of any third party on the Site</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        8. Indemnification
      </h2>
      <p>
        You agree to indemnify and hold harmless Temp Services and its operators from any claims,
        damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of
        the Site or violation of these Terms.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        9. Privacy
      </h2>
      <p>
        Your use of the Site is also governed by our{" "}
        <a href="/privacy-policy/" style={{ color: "#2563eb" }}>Privacy Policy</a>, which describes
        how we handle cookies, third-party advertising, and any data collection by our advertising partners.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        10. Changes to These Terms
      </h2>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be effective immediately
        upon posting to the Site. Your continued use of the Site after changes are posted constitutes
        acceptance of the modified Terms. We encourage you to review this page periodically.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        11. Governing Law
      </h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the United States.
        Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the
        courts in the applicable jurisdiction.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        12. Contact Information
      </h2>
      <p>
        If you have questions about these Terms of Service, please{" "}
        <a href="/contact/" style={{ color: "#2563eb" }}>contact us</a> or email us at{" "}
        <a href="mailto:hello@temp-services.com" style={{ color: "#2563eb" }}>hello@temp-services.com</a>.
      </p>

      <p style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e5e7eb", fontSize: "0.875rem", color: "#9ca3af" }}>
        By using this website, you acknowledge that you have read, understood, and agree to these Terms of Service.
      </p>
    </main>
  );
}
