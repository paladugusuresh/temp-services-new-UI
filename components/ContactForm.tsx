// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Send to mailto as fallback (in production, connect to an API/email service)
    const mailtoLink = `mailto:hello@temp-services.com?subject=${encodeURIComponent(
      `[${formData.subject}] From ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        backgroundColor: "#ecfdf5",
        border: "1px solid #a7f3d0",
        borderRadius: "12px",
        padding: "32px",
        textAlign: "center"
      }}>
        <h3 style={{ color: "#065f46", fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}>
          ✓ Thank You!
        </h3>
        <p style={{ color: "#047857", lineHeight: "1.6" }}>
          Your email client should have opened with your message. If it didn't, 
          please email us directly at{" "}
          <a href="mailto:hello@temp-services.com" style={{ color: "#059669", fontWeight: "600" }}>
            hello@temp-services.com
          </a>
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "general", message: "" }); }}
          style={{
            marginTop: "16px",
            padding: "8px 20px",
            backgroundColor: "#059669",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "24px" }}>
      {error && (
        <div style={{
          backgroundColor: "#fef2f2",
          border: "1px solid #fca5a5",
          borderRadius: "8px",
          padding: "12px",
          marginBottom: "16px",
          color: "#991b1b"
        }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="name" style={{ display: "block", fontWeight: "600", marginBottom: "6px", color: "#374151" }}>
          Your Name <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Smith"
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="email" style={{ display: "block", fontWeight: "600", marginBottom: "6px", color: "#374151" }}>
          Email Address <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="subject" style={{ display: "block", fontWeight: "600", marginBottom: "6px", color: "#374151" }}>
          Subject
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "1rem",
            outline: "none",
            backgroundColor: "white",
          }}
        >
          <option value="general">General Question</option>
          <option value="pricing">Question About Pricing Data</option>
          <option value="methodology">Question About Methodology</option>
          <option value="correction">Report a Data Issue</option>
          <option value="feedback">Feedback or Suggestion</option>
          <option value="partnership">Partnership Inquiry</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="message" style={{ display: "block", fontWeight: "600", marginBottom: "6px", color: "#374151" }}>
          Message <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help you?"
          rows={6}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "1rem",
            outline: "none",
            resize: "vertical",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "12px 32px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Send Message
      </button>

      <p style={{ marginTop: "12px", fontSize: "0.875rem", color: "#9ca3af" }}>
        We typically respond within 1-2 business days.
      </p>
    </form>
  );
}
