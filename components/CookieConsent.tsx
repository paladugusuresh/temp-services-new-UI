"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1f2937",
        color: "#f3f4f6",
        padding: "16px 24px",
        zIndex: 9999,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: "1.5", flex: "1 1 400px" }}>
          We use cookies and similar technologies to serve personalized ads and improve your experience.
          By clicking &quot;Accept&quot;, you consent to the use of cookies for advertising and analytics.
          See our{" "}
          <a href="/privacy-policy/" style={{ color: "#93c5fd", textDecoration: "underline" }}>
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: "8px 20px",
              backgroundColor: "transparent",
              color: "#d1d5db",
              border: "1px solid #6b7280",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              padding: "8px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
