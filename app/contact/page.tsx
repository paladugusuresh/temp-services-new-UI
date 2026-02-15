// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Temp Services",
  description: "Get in touch with Temp Services for questions about our cost estimates, methodology, or to report a data issue.",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif", lineHeight: "1.75" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "12px" }}>Contact Us</h1>
      <p style={{ color: "#4b5563", fontSize: "1.125rem", marginBottom: "8px" }}>
        Have questions about our cost estimates, methodology, or want to report a data issue? 
        We'd love to hear from you.
      </p>

      {/* Contact Form */}
      <section style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "32px",
        marginTop: "32px"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 0, marginBottom: "4px" }}>
          Send Us a Message
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "16px" }}>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </section>

      {/* Alternative Contact */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        marginTop: "32px"
      }}>
        <div style={{
          background: "#f0f9ff",
          border: "1px solid #bae6fd",
          borderRadius: "12px",
          padding: "24px",
        }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#0369a1", marginTop: 0, marginBottom: "8px" }}>
            📧 Email Directly
          </h3>
          <p style={{ color: "#0284c7", margin: 0 }}>
            <a href="mailto:hello@temp-services.com" style={{ color: "#0284c7" }}>
              hello@temp-services.com
            </a>
          </p>
        </div>
        <div style={{
          background: "#fefce8",
          border: "1px solid #fef08a",
          borderRadius: "12px",
          padding: "24px",
        }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#854d0e", marginTop: 0, marginBottom: "8px" }}>
            ⏱ Response Time
          </h3>
          <p style={{ color: "#a16207", margin: 0 }}>
            We typically respond within 1-2 business days
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: "600", marginBottom: "24px" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <details style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px" }}>
            <summary style={{ fontWeight: "600", cursor: "pointer" }}>Can you connect me with a contractor?</summary>
            <p style={{ color: "#6b7280", marginTop: "12px" }}>
              No, we only provide cost estimates to help you budget and evaluate quotes. We don't have partnerships 
              with contractors or operate as a lead generation service. We recommend searching for licensed, insured 
              contractors in your area through your state's licensing board or trusted review platforms.
            </p>
          </details>

          <details style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px" }}>
            <summary style={{ fontWeight: "600", cursor: "pointer" }}>Why don't you show exact prices?</summary>
            <p style={{ color: "#6b7280", marginTop: "12px" }}>
              Every job is different. The size of the project, materials needed, site accessibility, and contractor 
              experience all affect the final price. We show estimated ranges based on government economic data 
              (BEA Regional Price Parities and BLS Consumer Price Index) to give you a realistic baseline. 
              Always get multiple local quotes for your specific project.
            </p>
          </details>

          <details style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px" }}>
            <summary style={{ fontWeight: "600", cursor: "pointer" }}>How often do you update your estimates?</summary>
            <p style={{ color: "#6b7280", marginTop: "12px" }}>
              We update our estimates monthly when the Bureau of Labor Statistics releases new Consumer Price Index 
              data, and annually when the Bureau of Economic Analysis publishes updated Regional Price Parities. 
              This ensures our estimates reflect current economic conditions and inflation.
            </p>
          </details>

          <details style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px" }}>
            <summary style={{ fontWeight: "600", cursor: "pointer" }}>I found an error in your data. How do I report it?</summary>
            <p style={{ color: "#6b7280", marginTop: "12px" }}>
              We appreciate data corrections! Use the form above and select "Report a Data Issue" as the subject. 
              Please include the specific page URL, what appears incorrect, and any supporting information you have. 
              We'll investigate and update our data as needed.
            </p>
          </details>

          <details style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px" }}>
            <summary style={{ fontWeight: "600", cursor: "pointer" }}>Do you offer an API or data licensing?</summary>
            <p style={{ color: "#6b7280", marginTop: "12px" }}>
              Currently, our data is only available through this website. If you're interested in data licensing, 
              bulk access, or API partnerships, please contact us with details about your use case.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
