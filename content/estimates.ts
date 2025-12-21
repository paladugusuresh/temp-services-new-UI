// content/estimates.ts
import estimates from "./estimates.json";

export type Estimate = {
  low: number;
  typical: number;
  high: number;
  inputs: any;
  computed_at: string;
};

export function getEstimate(stateSlug: string, serviceKey: string): Estimate | null {
  const key = `${stateSlug}:${serviceKey}`;
  return (estimates as any)?.data?.[key] ?? null;
}

export function getEstimateMeta() {
  return {
    generatedAt: (estimates as any)?.generatedAt ?? null,
    newestComputedAt: (estimates as any)?.newestComputedAt ?? null,
  };
}
