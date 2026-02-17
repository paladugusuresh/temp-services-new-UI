// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Temp Services",
  description: "Privacy policy including cookie disclosures and third-party advertising information.",
};

export default function PrivacyPage() {
  const lastUpdated = "February 15, 2026";

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "8px" }}>Privacy Policy</h1>
      <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "32px" }}>
        Last updated: {lastUpdated}
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Information We Collect
      </h2>

      <p>
        Temp Services is an informational website. We do not collect personal information directly. However, we use 
        third-party services that may collect information about your visit.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Third-Party Advertising
      </h2>

      <p>
        We use third-party advertising companies to serve ads when you visit our website. These companies may use 
        information about your visits to this and other websites (excluding your name, address, email address, or 
        telephone number) in order to provide advertisements about goods and services of interest to you.
      </p>

      <p>
        We may use Google AdSense and other advertising networks. These partners use cookies and similar technologies 
        to collect information about your browsing activity for ad personalization and measurement.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Cookies and Tracking
      </h2>

      <p>
        This website and our third-party partners use cookies and similar technologies to:
      </p>

      <ul>
        <li>Serve personalized advertisements</li>
        <li>Measure ad performance</li>
        <li>Understand site usage patterns</li>
        <li>Improve user experience</li>
      </ul>

      <p style={{ marginTop: "16px" }}>
        When you first visit our website, a cookie consent banner will appear allowing you to accept
        or decline non-essential cookies. If you decline, personalized advertising cookies will not be set.
        You can change your preference at any time by clearing your browser cookies and revisiting the site.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Google AdSense
      </h2>

      <p>
        We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on
        your prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and
        its partners to serve ads based on your visit to this site and/or other sites on the Internet.
        You may opt out of personalized advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>Google Ads Settings</a>.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Your Choices and Opt-Out
      </h2>

      <p>
        You have choices regarding cookies and personalized advertising:
      </p>

      <ul>
        <li>
          <strong>Google Ad Settings:</strong>{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>
            Manage your Google ad preferences
          </a>
        </li>
        <li>
          <strong>Network Advertising Initiative:</strong>{" "}
          <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>
            Opt out of participating ad networks
          </a>
        </li>
        <li>
          <strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing cookies
        </li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Data We Do NOT Collect
      </h2>

      <ul>
        <li>We do not require account registration</li>
        <li>We do not collect names, emails, or phone numbers</li>
        <li>We do not store payment information (we don't sell anything)</li>
        <li>We do not track your identity across sites</li>
      </ul>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Children's Privacy
      </h2>

      <p>
        Our website is not directed to children under 13, and we do not knowingly collect information from children under 13.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Changes to This Policy
      </h2>

      <p>
        We may update this privacy policy from time to time. The "Last updated" date at the top reflects the most recent changes.
      </p>

      <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginTop: "32px", marginBottom: "16px" }}>
        Contact Us
      </h2>

      <p>
        Questions about this privacy policy?{" "}
        <a href="/contact/" style={{ color: "#2563eb" }}>Contact us</a>.
      </p>

      <div style={{
        background: "#eff6ff",
        border: "1px solid #3b82f6",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "48px",
        fontSize: "0.875rem"
      }}>
        <strong>California Residents:</strong> Under CCPA, you have the right to know what personal information is 
        collected and request deletion. Since we don't directly collect personal information, this primarily relates 
        to third-party advertising partners. Use the opt-out links above to exercise your rights.
      </div>

      <div style={{
        background: "#f0fdf4",
        border: "1px solid #86efac",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "16px",
        fontSize: "0.875rem"
      }}>
        <strong>European Visitors (GDPR):</strong> If you are located in the European Economic Area, you have rights
        under the General Data Protection Regulation including the right to access, rectify, or erase personal data
        processed by our advertising partners. We display a cookie consent banner on your first visit and will not
        set non-essential cookies without your consent. To exercise your GDPR rights or withdraw consent, clear your
        browser cookies and decline on your next visit, or contact us at{" "}
        <a href="mailto:hello@temp-services.com" style={{ color: "#16a34a" }}>hello@temp-services.com</a>.
      </div>

      <p style={{ marginTop: "32px" }}>
        See also our <a href="/terms-of-service/" style={{ color: "#2563eb" }}>Terms of Service</a> and{" "}
        <a href="/disclaimer/" style={{ color: "#2563eb" }}>Disclaimer</a>.
      </p>
    </main>
  );
}
