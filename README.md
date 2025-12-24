# Temp Services - Web Frontend

Professional service cost estimates across the United States. Server-side rendered Next.js application with runtime API integration.

## 📋 Overview

- **Framework**: Next.js 15.5 (App Router)
- **Deployment**: Azure App Service (SSR/Standalone)
- **Runtime**: Server-side rendering with runtime API calls
- **Pages**: 345+ dynamic state/service combinations (15 states × 23 services)
- **Data Source**: Runtime API integration + BEA RPP + BLS CPI adjustments

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
# Build for production (creates standalone server)
npm run build

# Test build locally
npm start
# Open http://localhost:3000
```

## 📁 Structure

```
temp-services-web/
├── app/                    # Next.js App Router pages
│   ├── [state]/           # State pages (15 states)
│   │   └── [slug]/        # Service estimate pages (345 combinations: 15 states × 23 services)
│   ├── services/          # Services hub pages
│   │   └── [service]/     # Service-specific hub (23 services)
│   ├── about/             # Static pages
│   ├── contact/
│   ├── privacy-policy/
│   ├── disclaimer/
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── EstimateCard.tsx   # Pricing display (handles null)
│   ├── Breadcrumbs.tsx
│   └── Faq.tsx
└── content/               # Static content
    ├── states.ts          # 15 states with metadata
    ├── services.ts        # 23 services with metadata
    └── faqs.ts            # FAQ generator
```

## 🌍 Coverage

**States (15):**
California, Texas, Florida, New York, Illinois, Pennsylvania, Georgia, Washington, Massachusetts, Arizona, Colorado, North Carolina, Ohio, Michigan, Virginia

**Services (23):**
Appliance Repair, Carpentry, Carpet Cleaning, Dumpster Rental, Electrician, Garage Door Repair, Gutter Cleaning, Handyman, House Cleaning, HVAC, Junk Removal, Landscaping, Lawn Mowing, Leaf Removal, Moving Help, Painting, Pest Control, Pet Sitting, Plumbing, Pressure Washing, Roofing, Snow Removal, Yard Cleanup

**Total Pages:** 345 service estimate pages + 23 service hubs + 15 state pages + static pages = 385+ total pages

## ⚙️ Environment Variables

### Required for Production

```bash
# API endpoint for runtime pricing data
PRICING_API_BASE=https://temp-services-api.azurewebsites.net

# Base URL for sitemap generation
SITE_URL=https://temp-services.com

# Runtime environment
NODE_ENV=production
```

### Local Development

Create `.env.local`:

```bash
PRICING_API_BASE=http://localhost:8080
SITE_URL=http://localhost:3000
```

## 🚢 Deployment to Azure App Service

### Prerequisites

1. Azure App Service created (Node.js runtime)
2. API deployed and running
3. Environment variables configured in App Service

### Deployment Steps

```bash
# Build for production
npm run build

# Deploy to Azure App Service via ZIP
az webapp deployment source config-zip \
  --resource-group temp-s20'
      
      - run: npm install
      
      - run: npm run build
      
      - uses: azure/webapps-deploy@v2
        with:
          app-name: 'temp-services-web'
          publish-profile: ${{ secrets.AZURE_WEB_PUBLISH_PROFILE }}
          package: '.next/standalone'
```

### App Service Configuration

In Azure Portal → App Service → Configuration:

**Application Settings:**
```
PRICING_API_BASE=https://temp-services-api.azurewebsites.net
SITE_URL=https://temp-services.com
NODE_ENV=production
```

## 📊 Architecture

- **Runtime**: Server-side rendering on each request
- **API Integration**: Fetches pricing from API at runtime
- **Fallback**: Mock data in development only, "Pricing unavailable" in production
- **Critical Requirement**: Service keys must match exactly between UI and API

## 🔍 SEO

- ✅ Unique content for each page (state-specific intros, service-specific drivers)
- ✅ Metadata (title, description, Open Graph)
- ✅ Dynamic sitemap.xml (261 URLs)
- ✅ Robots.txt
- ✅ Privacy Policy
- ✅ Methodology disclosure

## 🔗 Related

- **API Repository**: temp-services-api
- **Database**: Neon Postgres (managed by API)

## ⚠️ Critical: Service Key Alignment

Your UI expects these exact service keys from the API:
```
junk-removal, moving-help, house-cleaning, handyman, yard-cleanup,
pressure-washing, carpet-cleaning, pest-control, appliance-repair,
dumpster-rental, gutter-cleaning, electrician, plumbing,
garage-door-repair, leaf-removal
```

Verify with: `curl https://your-api.azurewebsites.net/api/services`

If keys don't match, estimates show "Pricing unavailable" in production.

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
