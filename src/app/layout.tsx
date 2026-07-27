import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | Electricians in Lugarno & Sydney`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "electrician",
    "electrical contractor",
    "air conditioning",
    "Lugarno",
    "Sydney",
    "Sutherland Shire",
    "St George",
    "licensed electrician",
  ],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Electricians in Lugarno & Sydney`,
    description: siteConfig.tagline,
    // TODO: add a real 1200x630 og-image.jpg to /public before launch
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Electricians in Lugarno & Sydney`,
    description: siteConfig.tagline,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
