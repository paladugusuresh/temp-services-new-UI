// components/Faq.tsx
import type { FaqItem } from "@/content/faqs";

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section style={{ margin: "32px 0" }}>
      <h2>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {items.map((item) => (
          <div key={item.question} style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "16px" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "8px" }}>{item.question}</h3>
            <p style={{ color: "#4b5563", margin: 0 }}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
