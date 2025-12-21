# Temp Services - Web Frontend

Professional service cost estimates across the United States. Static Next.js site with 225 unique pages (15 states × 15 services).

## 📋 Overview

- **Framework**: Next.js 15.5 (App Router)
- **Output**: Static HTML export (`output: 'export'`)
- **Pages**: 225 state/service combinations + 4 trust pages
- **Data Source**: BEA Regional Price Parities + BLS Consumer Price Index

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
# Set API base URL for prefetching pricing data
export PRICING_API_BASE=https://temp-services-api.azurewebsites.net

# Build static site
npm run build

# Output in /out directory (233 static HTML files)
```

### Test Static Build Locally

```bash
npx serve out
```

## 📁 Structure

```
temp-services-web/
├── app/                    # Next.js pages
│   ├── [state]/[slug]/    # 225 dynamic pages
│   ├── about/             # Trust pages
│   ├── contact/
│   ├── privacy-policy/
│   ├── disclaimer/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap generator
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── EstimateCard.tsx
│   ├── Breadcrumbs.tsx
│   └── Faq.tsx
├── content/               # Static data
│   ├── states.ts          # 15 states with metadata
│   ├── services.ts        # 15 services with metadata
│   ├── faqs.ts            # FAQ generator
│   └── estimates.ts       # Estimate loader
└── scripts/
    └── prefetch-estimates.mjs  # Build-time data fetcher
```

## 🌍 Coverage

**States (15):**
California, Texas, Florida, New York, Illinois, Pennsylvania, Georgia, Washington, Massachusetts, Arizona, Colorado, North Carolina, Ohio, Michigan, Virginia

**Services (15):**
Junk Removal, Moving Help, House Cleaning, Handyman, Yard Cleanup, Pressure Washing, Carpet Cleaning, Pest Control, Appliance Repair, Dumpster Rental, Gutter Cleaning, Electrician, Plumbing, Garage Door Repair, Leaf Removal

## ⚙️ Environment Variables

### Build Time Only

```bash
# API endpoint for prefetching pricing data
PRICING_API_BASE=https://temp-services-api.azurewebsites.net
```

## 🚢 Deployment to Azure App Service

### Option 1: Deploy Static Build

```bash
# Build locally
npm run build

# Deploy /out folder to App Service
az webapp deployment source config-zip \
  --resource-group temp-services-rg \
  --name temp-services-web \
  --src out.zip
```

### Option 2: CI/CD with GitHub Actions

```yaml
name: Deploy Web
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      
      - run: npm run build
        env:
          PRICING_API_BASE: https://temp-services-api.azurewebsites.net
      
      - uses: azure/webapps-deploy@v2
        with:
          app-name: 'temp-services-web'
          publish-profile: ${{ secrets.AZURE_WEB_PUBLISH_PROFILE }}
          package: './out'
```

## 📊 Build Output

- **Total Pages**: 233
  - 225 state/service pages
  - 4 trust pages (About, Contact, Privacy, Disclaimer)
  - 1 homepage
  - 1 sitemap.xml
  - 1 robots.txt
  - 1 404 page

## 🔍 SEO

- ✅ Unique content for each page (state-specific intros, service-specific drivers)
- ✅ Metadata (title, description, Open Graph)
- ✅ Sitemap.xml with all 233 URLs
- ✅ Robots.txt
- ✅ Privacy Policy (required for AdSense)
- ✅ Methodology disclosure on every estimate page

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Prefetch data + build static site
- `npm run prefetch` - Fetch pricing data from API (called during build)
- `npm start` - Start production server (not needed for static export)

## 🔗 Related

- **API Repository**: [temp-services-api](../temp-services-api)
- **Database**: Neon Postgres (managed by API)
