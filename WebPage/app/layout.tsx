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

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://godrejflorenne-whitefield.com/#organization",
      name: "Godrej Properties Limited",
      url: "https://www.godrejproperties.com",
      logo: "https://godrejflorenne-whitefield.com/images/hero-villa.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    },
    {
      "@type": "RealEstateListing",
      "@id": "https://godrejflorenne-whitefield.com/#listing",
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
        "@id": "https://godrejflorenne-whitefield.com/#organization",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        category: "Luxury 4 & 5 BHK French Renaissance Row Villas",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://godrejflorenne-whitefield.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://godrejflorenne-whitefield.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Villas in Whitefield",
          item: "https://godrejflorenne-whitefield.com/#typologies",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Godrej Florenne",
          item: "https://godrejflorenne-whitefield.com",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://godrejflorenne-whitefield.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Godrej Florenne and where is it located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Godrej Florenne is a 20-acre ultra-luxury gated community enclave featuring connected G+3 French Renaissance row villas, located on Soukya Road in Whitefield, Bengaluru, Karnataka 560067.",
          },
        },
        {
          "@type": "Question",
          name: "What villa configurations are available at Godrej Florenne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Godrej Florenne offers spacious 4 BHK and 5 BHK French Renaissance row villas and luxury townhomes across multi-level G+3 architectural layouts with private terraces, parking, and double-height living spaces.",
          },
        },
        {
          "@type": "Question",
          name: "What is the RERA registration number for Godrej Florenne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Godrej Florenne is registered under Karnataka RERA with registration numbers PRM/KA/RERA/1250/304/PR/150926/008942 for Phase 1 and PRM/KA/RERA/1250/304/PR/150926/008943 for Phase 2.",
          },
        },
        {
          "@type": "Question",
          name: "How is the connectivity from Godrej Florenne to major IT parks and tech hubs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The estate is strategically situated on Soukya Road with swift access to ITPL, EPIP Zone, Hoodi, Kadugodi Metro Station, and Outer Ring Road via Whitefield Main Road and Hope Farm Junction.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key lifestyle amenities provided in the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amenities include a grand French-inspired central clubhouse, resort swimming pool, landscaped promenade avenues, tennis court, fully equipped wellness gymnasium, children's play zones, and 24/7 multi-tier security.",
          },
        },
        {
          "@type": "Question",
          name: "Are floor plans and master layout diagrams available for download?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, complete high-resolution floor plans, unit schematics, and the comprehensive estate brochure can be accessed directly on the website by clicking 'Get Floor Plan' or 'Download Brochure'.",
          },
        },
        {
          "@type": "Question",
          name: "Is Godrej Florenne suitable for NRI real estate investment in Bengaluru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, as an exclusive low-density row villa development by Godrej Properties in the high-growth Whitefield micro-market, it offers strong capital appreciation potential, premium rental yields, and clear legal title compliance.",
          },
        },
        {
          "@type": "Question",
          name: "What architectural style is followed at Godrej Florenne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The estate is designed in authentic French Renaissance architecture, featuring blue slate mansard roofs, cream limestone façades, classical balustrades, wrought-iron railings, and manicured parterre gardens.",
          },
        },
        {
          "@type": "Question",
          name: "How can I schedule a private site visit to Godrej Florenne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private site visits can be arranged by submitting your preferred date and contact details through the 'Schedule A Visit' form on the website. A designated relationship manager will confirm your private tour.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the developer of Godrej Florenne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Godrej Florenne is developed by Godrej Properties Limited, one of India's most trusted and celebrated real estate development firms with a legacy of over 125 years of trust and innovation.",
          },
        },
      ],
    },
  ],
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
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Whitefield, Bengaluru" />
        <meta name="geo.position" content="12.9698;77.7499" />
        <meta name="ICBM" content="12.9698, 77.7499" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="bg-estate-bg text-estate-primary antialiased selection:bg-estate-primary selection:text-estate-bg">
        {children}
      </body>
    </html>
  );
}
