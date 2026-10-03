import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://godrejflorenne-whitefield.com"),
  title: "Godrej Florenne | French Renaissance Row Villas in Whitefield, Bengaluru",
  description:
    "Twenty acres of connected G+3 French Renaissance row villas with blue slate mansard roofs and cream limestone façades in Whitefield, Bengaluru by Godrej Properties.",
  keywords: [
    "Godrej Florenne",
    "French Renaissance villas",
    "Row villas Whitefield",
    "Luxury villas Bengaluru",
    "Soukya Road villas",
    "Godrej Properties Whitefield",
  ],
  authors: [{ name: "Godrej Properties Limited" }],
  openGraph: {
    title: "Godrej Florenne | French Renaissance Row Villas in Whitefield",
    description:
      "Twenty acres of connected G+3 French Renaissance row villas with blue slate mansard roofs and cream limestone façades set among tree-lined avenues.",
    url: "https://godrejflorenne-whitefield.com",
    siteName: "Godrej Florenne",
    images: [
      {
        url: "/images/hero-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Godrej Florenne French Renaissance Luxury Row Villas",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godrej Florenne | French Renaissance Row Villas in Whitefield",
    description:
      "Twenty acres of connected G+3 French Renaissance row villas in Whitefield, Bengaluru by Godrej Properties.",
    images: ["/images/hero-villa.jpg"],
  },
  alternates: {
    canonical: "https://godrejflorenne-whitefield.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Godrej Florenne",
  description:
    "Twenty acres of connected G+3 French Renaissance row villas with blue slate mansard roofs and cream limestone façades in Whitefield, Bengaluru by Godrej Properties.",
  url: "https://godrejflorenne-whitefield.com",
  image: "https://godrejflorenne-whitefield.com/images/hero-villa.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Soukya Road, Whitefield",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560067",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9698,
    longitude: 77.7499,
  },
  brand: {
    "@type": "Organization",
    name: "Godrej Properties Limited",
    url: "https://www.godrejproperties.com",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    category: "Luxury 4 & 5 BHK French Renaissance Row Villas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://godrejflorenne-whitefield.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-estate-bg text-estate-primary antialiased selection:bg-estate-primary selection:text-estate-bg">
        {children}
      </body>
    </html>
  );
}
