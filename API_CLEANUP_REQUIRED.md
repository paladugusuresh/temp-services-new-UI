# API Database Cleanup Required

## Overview
The frontend has been updated to support 23 services (up from 15). The API needs corresponding changes to align with the frontend and improve data consistency.

## Current State
- **API**: 25 services with duplicates and inconsistent units
- **Frontend**: 23 services (alphabetically ordered, normalized metadata)

## Required Changes

### 1. Remove Duplicate Services (CRITICAL)
The following services should be **removed** from the database to align API with UI:

| Service to Remove | Reason | Keep Instead |
|------------------|--------|--------------|
| `moving` | Duplicate functionality | `moving-help` |
| `plumber` | Duplicate functionality | `plumbing` |

**SQL to execute:**
```sql
-- Remove duplicate services and their associated pricing data
DELETE FROM service_prices WHERE service_key IN ('moving', 'plumber');
DELETE FROM services WHERE service_key IN ('moving', 'plumber');

-- Verify removal
SELECT COUNT(*) FROM services;  -- Should now return 23
```

### 2. Add Missing Services (if needed)
After removing duplicates, verify these 8 services exist in the database. If any are missing, add them:

```sql
-- Check which services might be missing
SELECT service_key FROM services 
WHERE service_key IN ('carpentry', 'hvac', 'landscaping', 'lawn-mowing', 'painting', 'pet-sitting', 'roofing', 'snow-removal')
ORDER BY service_key;

-- Add any missing services (adjust as needed)
INSERT INTO services (service_key, name, unit) 
VALUES 
  ('carpentry', 'Carpentry', 'hour'),
  ('hvac', 'HVAC', 'hour'),
  ('landscaping', 'Landscaping', 'hour'),
  ('lawn-mowing', 'Lawn Mowing', 'visit'),
  ('painting', 'Painting', 'hour'),
  ('pet-sitting', 'Pet Sitting', 'day'),
  ('roofing', 'Roofing', 'sq_ft'),
  ('snow-removal', 'Snow Removal', 'visit')
ON CONFLICT (service_key) DO NOTHING;  -- Skip if already exists
```

### 2. Normalize Unit Naming
Current API uses verbose units like "per hour", "per visit". Should be normalized to match frontend expectations:

| Current Unit | Normalized Unit | Services Affected |
|--------------|----------------|-------------------|
| `per hour` | `hour` | electrician, handyman, house-cleaning, hvac, moving-help, plumbing, carpentry, landscaping, painting |
| `per visit` | `visit` | pest-control, lawn-mowing, snow-removal |
| `per day` | `day` | pet-sitting |
| `per square foot` | `sq_ft` | pressure-washing, roofing |
| `per linear foot` | `linear_ft` | gutter-cleaning |
| `per room` | `room` | carpet-cleaning |
| `per job` | `job` | junk-removal, yard-cleanup, leaf-removal |
| `per week` | `week` | dumpster-rental |
| `per repair` | `repair` | appliance-repair, garage-door-repair |

**SQL to execute:**
```sql
-- Normalize units across all services
UPDATE services SET unit = 'hour' WHERE unit = 'per hour';
UPDATE services SET unit = 'visit' WHERE unit = 'per visit';
UPDATE services SET unit = 'day' WHERE unit = 'per day';
UPDATE services SET unit = 'sq_ft' WHERE unit = 'per square foot';
UPDATE services SET unit = 'linear_ft' WHERE unit = 'per linear foot';
UPDATE services SET unit = 'room' WHERE unit = 'per room';
UPDATE services SET unit = 'job' WHERE unit = 'per job';
UPDATE services SET unit = 'week' WHERE unit = 'per week';
UPDATE services SET unit = 'repair' WHERE unit = 'per repair';
```

### 3. Verify Service Keys Match Frontend
After cleanup, the API should have exactly these 23 services:

1. appliance-repair
2. carpentry
3. carpet-cleaning
4. dumpster-rental
5. electrician
6. garage-door-repair
7. gutter-cleaning
8. handyman
9. house-cleaning
10. hvac
11. junk-removal
12. landscaping
13. lawn-mowing
14. leaf-removal
15. moving-help
16. painting
17. pest-control
18. pet-sitting
19. plumbing
20. pressure-washing
21. roofing
22. snow-removal
23. yard-cleanup

**SQL to verify:**
```sql
-- Verify count
SELECT COUNT(*) FROM services;  -- Should return 23

-- List all service keys (should match above list)
SELECT service_key FROM services ORDER BY service_key;
```

### 4. Add Missing Services (if needed)
If any services from the list above are missing in the database after removing duplicates:

```sql
-- Example insert (adjust values as needed)
INSERT INTO services (service_key, name, unit) 
VALUES 
  ('carpentry', 'Carpentry', 'hour'),
  ('hvac', 'HVAC', 'hour'),
  ('landscaping', 'Landscaping', 'hour'),
  ('lawn-mowing', 'Lawn Mowing', 'visit'),
  ('painting', 'Painting', 'hour'),
  ('pet-sitting', 'Pet Sitting', 'day'),
  ('roofing', 'Roofing', 'sq_ft'),
  ('snow-removal', 'Snow Removal', 'visit');
```

## Impact Analysis

### Before Cleanup
- 25 services × 15 states = 375 possible pages
- Duplicates cause confusion (`moving` vs `moving-help`)
- Unit inconsistency breaks frontend display
- Frontend only supports 15 services (225 actual pages)

### After Cleanup
- 23 services × 15 states = 345 pages (all functional)
- No duplicate services
- Consistent unit naming matches frontend expectations
- Frontend supports all 23 services (345 actual pages)
- **+120 pages** for SEO and ranking opportunities

## Testing After Cleanup

1. **Verify API Response:**
   ```bash
   curl http://localhost:8080/api/v1/estimates/services
   # Should return 23 services with normalized units
   ```

2. **Test Estimate Fetch:**
   ```bash
   curl "http://localhost:8080/api/v1/estimates/carpentry/california?year=2024"
   # Should return pricing data for new service
   ```

3. **Check Frontend Integration:**
   - Build site: `npm run build`
   - Verify sitemap: Should show 345 service pages (23 services × 15 states)
   - Test pages for new services: `/services/carpentry`, `/california/carpentry-cost`

## Deployment Order

1. **API Update First**: Run SQL cleanup scripts in production database
2. **Deploy API**: Restart API service to reflect changes
3. **Deploy Frontend**: Deploy updated frontend with 23 services
4. **Verify**: Check `/services` page shows all 23 services

## Rollback Plan

If issues occur after deployment:

1. Keep database backups before running DELETE statements
2. Frontend is backward compatible - will show "Pricing unavailable" for missing services
3. Can temporarily re-add removed services if critical data exists

## Notes

- Frontend metadata (intro, drivers, included/excluded) is UI-only and doesn't need to be in API
- API only needs: `service_key`, `name`, `unit` for core functionality
- All pricing data in `service_prices` table will be preserved (except for deleted services)
