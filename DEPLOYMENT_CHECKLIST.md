# Pre-Deployment Checklist

## ✅ Code Fixes (Completed)
- [x] Fixed fake prices in production
- [x] Fixed TypeScript params typing  
- [x] Updated data source wording
- [x] Removed duplicate app/public/ directory
- [x] Updated .gitignore
- [x] Moved inline styles to globals.css
- [x] Removed `await params` from all pages
- [x] Added /services routes to sitemap

## ⚠️ CRITICAL: Before Deployment

### 1. Align Service Keys (BLOCKER)

Your UI expects these exact service keys:
```
junk-removal, moving-help, house-cleaning, handyman, yard-cleanup,
pressure-washing, carpet-cleaning, pest-control, appliance-repair,
dumpster-rental, gutter-cleaning, electrician, plumbing,
garage-door-repair, leaf-removal
```

**Action Required:**
1. Get your API service keys: `curl https://your-api.azurewebsites.net/api/services`
2. Verify they match the list above **exactly**
3. If not, update either:
   - API seeds to match UI (recommended), OR
   - `content/services.ts` to match API

**Until this is done, your site will show "Pricing unavailable" everywhere.**

See [SERVICE_KEY_ALIGNMENT.md](SERVICE_KEY_ALIGNMENT.md) for details.

### 2. Configure Environment Variables

In your **temp-services-web** App Service:

**Required:**
```
PRICING_API_BASE=https://<your-api-app>.azurewebsites.net
NODE_ENV=production
```

**To verify:**
1. Go to Azure Portal → App Service → Configuration → Application settings
2. Add both variables above
3. Save and restart the App Service

**Without `PRICING_API_BASE`, all estimates will return null.**

## 🧪 Pre-Deployment Testing

### Local Build Test
```bash
npm run build
```
Should complete with no TypeScript errors.

### Service Key Verification
```bash
# Test each service endpoint
curl "https://your-api.azurewebsites.net/api/estimate?service=junk-removal&location=ca"
curl "https://your-api.azurewebsites.net/api/estimate?service=moving-help&location=ca"
curl "https://your-api.azurewebsites.net/api/estimate?service=yard-cleanup&location=ca"
# ... repeat for all 15 services
```

All should return 200 with pricing data.

### Development Mode Test
```bash
# Verify mock data still works locally
npm run dev
# Visit http://localhost:3000/ca/junk-removal-cost/
# Should show prices (from mock data)
```

## 📋 Post-Deployment Verification

After deploying to Azure:

1. **Check homepage:** https://temp-services.com/
   - Should load without errors
   - State and service links work

2. **Check state page:** https://temp-services.com/ca/
   - Shows service cards
   - All links work

3. **Check service-state page:** https://temp-services.com/ca/junk-removal-cost/
   - If API is configured: Shows real pricing
   - If service keys mismatch: Shows "Pricing unavailable"

4. **Check services hub:** https://temp-services.com/services/
   - Lists all services

5. **Check sitemap:** https://temp-services.com/sitemap.xml
   - Should include /services/ routes
   - Should have 15 states × 15 services = 225 pages + state pages + service pages

6. **Check console:**
   - No TypeScript errors
   - No 404s for missing files

## 🚨 If You See "Pricing unavailable" Everywhere

This means one of:
1. `PRICING_API_BASE` not set in App Service config
2. API is down/unreachable
3. Service keys don't match between UI and API

**Quick fix to verify API connectivity:**
```bash
# From Azure Cloud Shell or local terminal
curl "https://<your-web-app>.azurewebsites.net"
curl "https://<your-api-app>.azurewebsites.net/api/services"
```

Both should return 200.

## 📊 Success Criteria

- [x] Build completes with no errors
- [ ] Service keys aligned between UI and API
- [ ] Environment variables set in Azure
- [ ] All pages load without 404s
- [ ] Real pricing shows (or "Pricing unavailable" if API down, not mock data)
- [ ] Sitemap includes all routes
- [ ] No console errors in production
