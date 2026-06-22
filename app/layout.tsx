import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Hind_Siliguri, Space_Grotesk, Anek_Bangla } from "next/font/google";
import { AppLayout } from "@/components/layout/AppLayout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const anekBangla = Anek_Bangla({
  variable: "--font-anek",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  themeColor: "#014A36",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bishorgoexperience.com"),
  title: "Bishorgo Experience — We Build Experiences People Remember",
  description:
    "Bishorgo Experience helps businesses turn ordinary brand touchpoints into memorable customer journeys through strategy, branding, content, technology, and real-world activation.",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicons/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Bishorgo Experience — We Build Experiences People Remember",
    description:
      "Bishorgo Experience helps businesses turn ordinary brand touchpoints into memorable customer journeys through strategy, branding, content, technology, and real-world activation.",
    url: "https://bishorgoexperience.com",
    siteName: "Bishorgo Experience",
    images: [
      {
        url: "/images/brand/logo-website.png",
        width: 800,
        height: 600,
        alt: "Bishorgo Experience Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishorgo Experience — We Build Experiences People Remember",
    description:
      "Bishorgo Experience helps businesses turn ordinary brand touchpoints into memorable customer journeys through strategy, branding, content, technology, and real-world activation.",
    images: ["/images/brand/logo-website.png"],
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
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${anekBangla.variable} ${hindSiliguri.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#014A36] text-[#F8F5EF]">
        {/* Subtle background film grain noise overlay */}
        <div className="film-grain" />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
