import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StyledComponentsRegistry from "@/styles/styled-registry";
import { Metadata } from "next";
import localFont from "next/font/local";
import { interDisplay } from "@/styles/fonts";
import AnalyticsProvider from "@/lib/analytics";
import seoData from "@/lib/next-seo.config";

export const metadata = {
  metadataBase: new URL(seoData.openGraph.url),
  title: {
    default: seoData.openGraph.title,
    template: " %s",
  },
  description: seoData.openGraph.description,
  keywords: seoData.openGraph.keywords,
  openGraph: {
    type: "website",
    description: seoData.openGraph.description,
    url: seoData.openGraph.url,
    title: seoData.openGraph.title,
    locale: "en_EN",
    siteName: "designtool.tips",
    images: [
      {
        width: 1200,
        height: 630,
        url: seoData.openGraph.images[0].url,
        alt: seoData.openGraph.title,
      },
    ],
  },
  twitter: {
    card: seoData.twitter.cardType,
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    creator: seoData.twitter.handle,
    creatorId: seoData.twitter.id,
    site: "vjy.me",
    images: [seoData.openGraph.images[0].url],
  },
  robots: {
    nosnippet: false,
    notranslate: true,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interDisplay.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <AnalyticsProvider children={undefined} />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
