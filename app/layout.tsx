import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benazir-portfolio.vercel.app"),

  title: {
    default: "Benazir Niyariya | Business Development & Operations Leader",
    template: "%s | Benazir Niyariya",
  },

  description:
    "Official portfolio of Benazir Niyariya, a Business Development and Operations professional with 9+ years of experience in leadership, AI strategy, business growth, operations management and organizational transformation.",

  keywords: [
    "Benazir Niyariya",
    "Business Development",
    "Operations Manager",
    "Operations",
    "Leadership",
    "AI Strategy",
    "Business Growth",
    "Project Management",
    "Portfolio",
    "Business Operations",
    "Management",
  ],

  authors: [
    {
      name: "Benazir Niyariya",
    },
  ],

  creator: "Benazir Niyariya",

  publisher: "Benazir Niyariya",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benazir-portfolio.vercel.app",
    title:
      "Benazir Niyariya | Business Development & Operations Leader",
    description:
      "Business Development, Operations Management and AI Strategy Professional with 9+ years of leadership experience.",

    siteName: "Benazir Niyariya",

    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 1200,
        alt: "Benazir Niyariya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Benazir Niyariya | Business Development & Operations Leader",
    description:
      "Business Development, Operations and AI Strategy Professional.",

    images: ["/profile.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://benazir-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={geist.variable}
    >
      <body>{children}</body>
    </html>
  );
}