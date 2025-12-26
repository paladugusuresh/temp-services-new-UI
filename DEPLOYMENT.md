# Production Deployment Guide

## ✅ Current Architecture

**Static Export with Client-Side API Fetching**
- 394 pre-rendered HTML pages (15 states × 23 services + homepage + about/contact/etc)
- Client-side JavaScript fetches fresh pricing data on every page visit
- No server required - can deploy to Azure Static Web Apps, Netlify, Vercel, or any CDN

## 🔧 How It Works

### Build Time
1. Next.js generates 394 static HTML pages with all content EXCEPT pricing data
2. Each page includes the `DynamicEstimate` client component
3. Static files are exported to `out/` directory

### Runtime (User Visit)
1. Browser loads pre-rendered HTML (instant page load)
2. `DynamicEstimate` component makes API call to fetch fresh pricing
3. Pricing card updates with live data from API
4. If API fails, shows "Pricing unavailable" message

## 📋 Environment Variables

### Required for Production

```bash
# Add this in Azure Static Web Apps configuration
NEXT_PUBLIC_PRICING_API_BASE=https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net
```

**Important:** Must use `NEXT_PUBLIC_` prefix because:
- Client-side code runs in the browser
- Only `NEXT_PUBLIC_*` variables are exposed to browser
- Regular env variables are server-side only (won't work in static export)

### Local Development

File: `.env.local` (already created, git-ignored)
```bash
NEXT_PUBLIC_PRICING_API_BASE=https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net
SITE_URL=http://localhost:3000
```

## 🚀 Deployment

### GitHub Actions Workflow

File: `.github/workflows/static-deploy.yml`

**Triggers:** Push to `main` branch or manual dispatch

**Steps:**
1. Checkout code
2. Install dependencies (`npm ci`)
3. Build static site (`npm run build`) with env vars
4. Export to `out/` directory
5. Deploy to Azure

### Manual Deployment

```bash
# Build locally (if Windows file lock issue persists, use WSL or CI/CD)
npm run build

# Output directory
out/

# Deploy contents of out/ to any static host
```

## 🔍 Key Files Changed

### Components
- **`components/DynamicEstimate.tsx`** - NEW client component that fetches API data
- Uses `useEffect` to call API on component mount
- Shows loading state while fetching

### Pages
- **`app/[state]/[slug]/page.tsx`** - Server component with static generation
- Renders static content (titles, descriptions, FAQs)
- Embeds `<DynamicEstimate>` client component for pricing

### Config
- **`next.config.js`** - `output: 'export'` for static HTML generation
- **`.env.local`** - Local environment variables (git-ignored)
- **`.env.example`** - Updated with `NEXT_PUBLIC_` prefix

### Workflows
- **`.github/workflows/static-deploy.yml`** - Active workflow for static deployment
- **`.github/workflows/main_temp-services-ui.yml`** - Disabled (was for standalone mode)

## ⚠️ Known Issues

### Windows Build Error
```
Error: ENOTEMPTY: directory not empty, rmdir '.next\export'
```

**Cause:** Windows file locking prevents Next.js from cleaning export directory

**Workarounds:**
1. ✅ Use GitHub Actions (Linux runner - no issue)
2. Use WSL (Windows Subsystem for Linux)
3. Manually delete `.next` before each build
4. Restart VS Code/terminal to release locks

**Not a blocker** - GitHub Actions builds successfully on Linux

## 📊 API Integration

### API Endpoint Format
```
GET https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net/api/v1/estimates/{serviceKey}/{stateSlug}?year=2024
```

### Example
```
GET /api/v1/estimates/appliance-repair/ca?year=2024
```

### Response
```json
{
  "low": 75,
  "high": 150,
  "unit": "hour",
  "year": 2024
}
```

### Error Handling
- API returns 404 → Shows "Pricing unavailable"
- Network error → Shows "Pricing unavailable" 
- API timeout → Shows "Pricing unavailable"

## 🎯 Next Steps

### Before Production Launch

1. **Verify API is running** - Test the pricing API endpoint
   ```bash
   curl https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net/api/v1/estimates/appliance-repair/ca?year=2024
   ```

2. **Set env variable in Azure Static Web Apps**
   - Go to Azure Portal → Static Web App
   - Configuration → Application settings
   - Add: `NEXT_PUBLIC_PRICING_API_BASE` = `https://temp-services-c3b6drdzhag3gxbw.australiacentral-01.azurewebsites.net`

3. **Test deployment**
   - Push to main branch
   - Wait for GitHub Actions to complete
   - Verify pages load and pricing displays

4. **API cleanup** (if needed)
   - Remove duplicate services from database
   - Add missing services
   - Normalize units (per hour → hour)

## 🔄 Switching Back to Standalone (SSR)

If you need server-side rendering instead:

1. Change `next.config.js`:
   ```js
   output: 'standalone'  // instead of 'export'
   ```

2. Revert to server component with fetch:
   ```tsx
   const res = await fetch(url, { next: { revalidate: 3600 } })
   ```

3. Use `main_temp-services-ui.yml` workflow (re-enable)

4. Change env variable back to `PRICING_API_BASE` (no NEXT_PUBLIC_)

## 📝 Summary

✅ **Static export with client-side fetching** - Fast initial load, fresh API data  
✅ **394 pages generated** - Full SEO coverage for all states/services  
✅ **GitHub Actions automated** - Push to main = auto-deploy  
✅ **Environment variables configured** - Both local and CI/CD  
⚠️ **Windows build issue** - Use GitHub Actions or WSL  
🔄 **API not tested yet** - Verify endpoint returns data  

**Result:** Static website that loads instantly and fetches fresh pricing data from API on every visit!
