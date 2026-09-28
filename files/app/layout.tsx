import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

// ---------------------------------------------------------------------------
// EDIT ME: swap this for your live domain before deploying.
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.godrejflorenne-soukyaroad.com";
const TITLE =
  "Godrej Florenne, Soukya Road, Whitefield | 4 & 5 BHK Luxury Rowhouses";
const DESCRIPTION =
  "Godrej Florenne is an ultra-premium French Renaissance-inspired rowhouse community on Soukya Road, Whitefield, Bangalore. 218 independent 4 & 5 BHK villas on 20 acres, designed by Hafeez Contractor. Starting ₹5.40 Cr onwards. RERA registered. Enquire now.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Godrej Florenne",
  },
  description: DESCRIPTION,
  keywords: [
    "Godrej Florenne",
    "Godrej Properties Soukya Road",
    "Godrej Florenne Whitefield",
    "4 BHK villas Whitefield",
    "5 BHK rowhouse Bangalore",
    "luxury rowhouses Soukya Road",
    "Godrej Florenne price",
    "Godrej Florenne RERA",
    "villas near ITPL Whitefield",
    "Hafeez Contractor rowhouse project",
  ],
  authors: [{ name: "Godrej Florenne" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Godrej Florenne",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Godrej Florenne — French Renaissance-inspired rowhouse community on Soukya Road, Whitefield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  category: "real estate",
};

// JSON-LD structured data — helps Google understand this as a real-estate
// listing (rich results eligibility) rather than a generic page.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: "Godrej Florenne",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Soukya Road",
    addressLocality: "Whitefield, Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  brand: {
    "@type": "Organization",
    name: "Godrej Properties Limited",
  },
  numberOfAccommodationUnits: 218,
  petsAllowed: true,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Clubhouse" },
    { "@type": "LocationFeatureSpecification", name: "Swimming Pool" },
    { "@type": "LocationFeatureSpecification", name: "Gymnasium" },
    { "@type": "LocationFeatureSpecification", name: "Sports Courts" },
    { "@type": "LocationFeatureSpecification", name: "Children's Play Area" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#1E3A32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
