// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temp Services - Professional Service Cost Estimates",
  description: "Get accurate cost estimates for professional services across the United States. Pricing based on BEA Regional Price Parities and BLS Consumer Price Index.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; background: #f9fafb; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
          header { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          header .container { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 1rem; }
          header h1 { font-size: 1.875rem; font-weight: 700; }
          header h1 a { color: #111; text-decoration: none; }
          header h1 a:hover { color: #2563eb; }
          header p { font-size: 0.875rem; color: #666; margin-top: 0.25rem; }
          nav { display: flex; gap: 1.5rem; }
          nav a { color: #4b5563; text-decoration: none; }
          nav a:hover { color: #2563eb; }
          footer { background: #1f2937; color: white; margin-top: 4rem; padding: 2rem 0; }
          footer .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem; }
          footer h3 { font-weight: 600; margin-bottom: 0.75rem; }
          footer p, footer li { font-size: 0.875rem; color: #9ca3af; }
          footer ul { list-style: none; }
          footer ul li { margin: 0.5rem 0; }
          footer a { color: #9ca3af; text-decoration: none; }
          footer a:hover { color: white; }
          footer .copyright { border-top: 1px solid #374151; padding-top: 2rem; text-align: center; font-size: 0.875rem; color: #9ca3af; }
        `}</style>
      </head>
      <body>
        <header>
          <div className="container">
            <div>
              <h1>
                <a href="/">Temp Services</a>
              </h1>
              <p>Professional Service Cost Estimates</p>
            </div>
            <nav>
              <a href="/about/">About</a>
              <a href="/contact/">Contact</a>
              <a href="/privacy-policy/">Privacy</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="container">
            <div className="grid">
              <div>
                <h3>About Temp Services</h3>
                <p>
                  We provide accurate cost estimates for professional services across the United States,
                  based on government economic data from BEA and BLS.
                </p>
              </div>
              <div>
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/about/">About Us</a></li>
                  <li><a href="/contact/">Contact</a></li>
                  <li><a href="/disclaimer/">Disclaimer</a></li>
                  <li><a href="/privacy-policy/">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3>Data Sources</h3>
                <ul>
                  <li>Bureau of Economic Analysis (BEA)</li>
                  <li>Bureau of Labor Statistics (BLS)</li>
                  <li>Regional Price Parities (RPP)</li>
                  <li>Consumer Price Index (CPI)</li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Temp Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
