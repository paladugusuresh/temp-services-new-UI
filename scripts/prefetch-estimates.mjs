// scripts/prefetch-estimates.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_BASE = process.env.PRICING_API_BASE;
if (!API_BASE) {
  console.error("❌ Missing PRICING_API_BASE env var");
  console.error("   Set it to your API URL, e.g.: export PRICING_API_BASE=https://temp-services-api.azurewebsites.net");
  process.exit(1);
}

const SERVICES = [
  "junk-removal","moving-help","house-cleaning","handyman","yard-cleanup","pressure-washing","carpet-cleaning",
  "pest-control","appliance-repair","dumpster-rental","gutter-cleaning","electrician","plumbing","garage-door-repair","leaf-removal"
];
const STATES = ["ca","tx","fl","ny","il","pa","ga"];

async function getEstimate(service, locationSlug) {
  const url = `${API_BASE}/api/estimate?service=${encodeURIComponent(service)}&location=${encodeURIComponent(locationSlug)}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.warn(`   ⚠️  Failed to fetch ${locationSlug}:${service}`);
    return null;
  }
}

(async () => {
  console.log("📥 Fetching pricing estimates from API...\n");
  console.log(`   API: ${API_BASE}`);
  console.log(`   Services: ${SERVICES.length}`);
  console.log(`   States: ${STATES.length}`);
  console.log(`   Total: ${SERVICES.length * STATES.length} estimates\n`);

  const out = {};
  let newest = null;
  let fetched = 0;

  for (const st of STATES) {
    for (const svc of SERVICES) {
      const est = await getEstimate(svc, st);
      const key = `${st}:${svc}`;
      out[key] = est;

      if (est) {
        const ts = est?.computed_at ? new Date(est.computed_at).toISOString() : null;
        if (ts && (!newest || ts > newest)) newest = ts;
        fetched++;
      }

      process.stdout.write(".");
    }
  }

  console.log(`\n\n✅ Fetched ${fetched}/${SERVICES.length * STATES.length} estimates`);

  const payload = {
    generatedAt: new Date().toISOString(),
    newestComputedAt: newest,
    data: out
  };

  const target = path.join(__dirname, "../content/estimates.json");
  fs.writeFileSync(target, JSON.stringify(payload, null, 2), "utf8");

  console.log(`📝 Wrote ${target}\n`);
})();
