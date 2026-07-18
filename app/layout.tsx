import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.vercel.app"),

  title: {
    default: "Benazir Niyariya | Business Development & Operations Leader",
    template: "%s | Benazir Niyariya",
  },

  description:
    "Business Development and Operations professional with expertise in AI strategy, leadership, operational excellence, franchise expansion and business transformation.",

  keywords: [
    "Benazir Niyariya",
    "Business Development",
    "Operations Management",
    "AI Strategy",
    "Leadership",
    "Business Operations",
    "Business Transformation",
    "Project Management",
    "Operational Excellence",
    "Portfolio",
  ],

  authors: [
    {
      name: "Benazir Niyariya",
    },
  ],

  creator: "Benazir Niyariya",

  publisher: "Benazir Niyariya",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Benazir Niyariya | Business Development & Operations Leader",
    description:
      "Business Development and Operations professional focused on AI-driven transformation, leadership and operational excellence.",
    url: "https://YOUR-DOMAIN.vercel.app",
    siteName: "Benazir Niyariya Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Benazir Niyariya",
    description:
      "Business Development • Operations • AI Strategy",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}