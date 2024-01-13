import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Jackson Moody",
  description: "Jackson Moody's Personal Website",
  openGraph: {
    title: "Jackson Moody",
    description: "Jackson Moody's Personal Website",
    url: "https://www.jacksonmoody.com",
    siteName: "Jackson Moody",
    images: [
      {
        url: "https://drive.usercontent.google.com/download?id=11SQzHKN2kfckajwbsH8ktPuj30sS6Wpu&export=view&authuser=0",
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
      <body className={"bg-slate-900"}>{children}</body>
      <Analytics />
    </html>
  );
}
