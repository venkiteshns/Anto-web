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
  "Godrej Florenne Villas, Soukya Road, Whitefield | 4 & 5 BHK Luxury Villas";
const DESCRIPTION =
  "Godrej Florenne — luxury 4 & 5 BHK villas on Soukya Road, Whitefield, Bangalore. 218 independent French Renaissance-inspired villas on 20 acres, sizes 3,725 to 5,523 sq.ft, designed by Hafeez Contractor. Starting ₹5.40 Cr onwards. RERA registered. Enquire now.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Godrej Florenne",
  },
  description: DESCRIPTION,
  keywords: [
    "Godrej Florenne",
    "Godrej Florrene",
    "Godrej Properties Soukya Road",
    "Godrej Florenne Whitefield",
    "Godrej Villas",
    "Godrej Villa in Whitefield",
    "Godrej villas Whitefield",
    "Villas in Whitefield",
    "Villas on Soukya Road",
    "Luxury villas Whitefield",
    "Luxury villas Bangalore",
    "Rich villas Bangalore",
    "Premium villas Whitefield",
    "Independent villas Bangalore",
    "Rowhouse Whitefield",
    "Gated community villas Bangalore",
    "New launch villas Bangalore",
    "4 BHK villas Whitefield",
    "5 BHK villas Whitefield",
    "4 BHK rowhouse Bangalore",
    "5 BHK rowhouse Bangalore",
    "villas near ITPL Whitefield",
    "Villas in Whitefield under 10 Cr",
    "Godrej villas under 10 Cr",
    "Godrej villas under 9 Cr",
    "Godrej villas under 8 Cr",
    "Godrej villas under 7 Cr",
    "Godrej villas under 6 Cr",
    "Godrej villas under 5 Cr",
    "Godrej Florenne price",
    "Godrej Florenne RERA",
    "3725 sq ft villa Whitefield",
    "4000 sq ft villa Whitefield",
    "5000 sq ft villa Whitefield",
    "5500 sq ft villa Whitefield",
    "8000 sq ft carpet area villa",
    "Hafeez Contractor rowhouse project",
    "French Renaissance villas Bangalore",
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
