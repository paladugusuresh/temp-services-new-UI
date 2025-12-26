'use client';

import { useEffect, useState } from 'react';
import EstimateCard from './EstimateCard';

interface DynamicEstimateProps {
  serviceKey: string;
  stateSlug: string;
  service: any;
  state: any;
}

export default function DynamicEstimate({ serviceKey, stateSlug, service, state }: DynamicEstimateProps) {
  const [estimate, setEstimate] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEstimate() {
      const base = process.env.NEXT_PUBLIC_PRICING_API_BASE || 'https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net';
      const url = `${base.replace(/\/$/, "")}/api/v1/estimates/${encodeURIComponent(serviceKey)}/${encodeURIComponent(stateSlug)}?year=2024`;

      try {
        const res = await fetch(url); // Client-side - fetches fresh data on every visit
        if (!res.ok) {
          setEstimate(null);
        } else {
          const data = await res.json();
          setEstimate(data);
        }
      } catch (err) {
        console.error(`Failed to fetch estimate for ${serviceKey} in ${stateSlug}:`, err);
        setEstimate(null);
      } finally {
        setLoading(false);
      }
    }

    loadEstimate();
  }, [serviceKey, stateSlug]);

  if (loading) {
    return (
      <div style={{ padding: "32px", textAlign: "center", color: "#6b7280", border: "2px dashed #e5e7eb", borderRadius: "8px", margin: "24px 0" }}>
        Loading pricing data...
      </div>
    );
  }

  return <EstimateCard service={service} state={state} estimate={estimate} />;
}
