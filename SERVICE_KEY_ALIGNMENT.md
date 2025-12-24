# Service Key Alignment - CRITICAL

## ⚠️ ACTION REQUIRED BEFORE DEPLOYMENT

Your UI service keys in `content/services.ts` **MUST** exactly match the keys in your API database, or users will see "Pricing unavailable" across your entire site.

## Current UI Service Keys

Your `content/services.ts` defines these exact keys:

```
junk-removal
moving-help
house-cleaning
handyman
yard-cleanup
pressure-washing
carpet-cleaning
pest-control
appliance-repair
dumpster-rental
gutter-cleaning
electrician
plumbing
garage-door-repair
leaf-removal
```

## Why This Is Critical

When the UI requests: `/api/estimate?service=yard-cleanup&location=ca`

Your API must have a service record with `key = 'yard-cleanup'` (exact match).

If the API has:
- Different key names (`yard_cleanup`, `yard-service`, etc.)
- Missing services
- Different number of services

Then the API returns 404, and with production mock data disabled, users see **"Pricing unavailable"** everywhere.

## How To Fix (Choose One)

### Option A: Update API Seeds to Match UI (RECOMMENDED)

Update your API `services` table seeds to use these exact keys:

```sql
INSERT INTO services (key, name, unit, ...) VALUES
('junk-removal', 'Junk Removal', 'job', ...),
('moving-help', 'Moving Help', 'hour', ...),
('house-cleaning', 'House Cleaning', 'hour', ...),
('handyman', 'Handyman', 'hour', ...),
('yard-cleanup', 'Yard Cleanup', 'job', ...),
('pressure-washing', 'Pressure Washing', 'sq_ft', ...),
('carpet-cleaning', 'Carpet Cleaning', 'room', ...),
('pest-control', 'Pest Control', 'visit', ...),
('appliance-repair', 'Appliance Repair', 'repair', ...),
('dumpster-rental', 'Dumpster Rental', 'week', ...),
('gutter-cleaning', 'Gutter Cleaning', 'linear_ft', ...),
('electrician', 'Electrician', 'hour', ...),
('plumbing', 'Plumbing', 'hour', ...),
('garage-door-repair', 'Garage Door Repair', 'repair', ...),
('leaf-removal', 'Leaf Removal', 'job', ...)
```

### Option B: Update UI to Match API Keys

If your API already has different keys, update `content/services.ts` to match them exactly.

## Verify Alignment

After updating, test each service:

```bash
# Test all services return 200
curl "https://your-api.azurewebsites.net/api/estimate?service=junk-removal&location=ca"
curl "https://your-api.azurewebsites.net/api/estimate?service=moving-help&location=ca"
curl "https://your-api.azurewebsites.net/api/estimate?service=yard-cleanup&location=ca"
# ... test all 15 services
```

All should return 200 with pricing data, not 404.

## Share Your API Services Output

Run this and paste the output:

```bash
curl "https://your-api.azurewebsites.net/api/services"
```

I'll tell you exactly what needs to change (UI or API) to match.
