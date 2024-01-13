import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Jackson Moody",
  description: "Jackson Moody Personal Website",
  openGraph: {
    title: "Jackson Moody",
    description: "Jackson Moody Personal Website",
    url: "https://www.jacksonmoody.com",
    siteName: "Jackson Moody",
    images: [
      {
        url: "https://i.ibb.co/9HHL1sj/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
