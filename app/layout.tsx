// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
        <meta name="google-adsense-account" content="ca-pub-9491350510503451" />
        <link rel="icon" href="/images/favicon1.ico" />
      </head>
      <body>
        <header>
          <div className="container">
            <div>
              <a href="/">
                <img src="/images/logo.png" alt="Temp Services Logo" style={{ height: '45px', width: 'auto' }} />
              </a>
            </div>
            <nav>
              <a href="/services/">Services</a>
              <a href="/guides/">Guides</a>
              <a href="/about/">About</a>
              <a href="/contact/">Contact</a>
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
                  <li><a href="/services/">All Services</a></li>
                  <li><a href="/guides/">Hiring Guides</a></li>
                  <li><a href="/about/">About Us</a></li>
                  <li><a href="/contact/">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3>Resources</h3>
                <ul>
                  <li><a href="/guides/#getting-multiple-quotes">Getting Quotes</a></li>
                  <li><a href="/guides/#avoiding-scams">Avoiding Scams</a></li>
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
