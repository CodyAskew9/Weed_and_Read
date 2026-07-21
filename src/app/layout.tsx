import type { Metadata } from "next";
import { Berkshire_Swash, Inter, Playfair_Display } from "next/font/google";
import { AgeGate } from "@/components/AgeGate";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const berkshire = Berkshire_Swash({
  weight: "400",
  variable: "--font-berkshire",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weed and Read | Albuquerque Cannabis Boutique",
  description:
    "A privacy-first cannabis boutique and Victorian reading room in Albuquerque, New Mexico. Adults 21+. Please Consume Responsibly.",
  robots: {
    index: true,
    follow: true,
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
      className={`${playfair.variable} ${berkshire.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <LocalBusinessJsonLd />
        <AgeGate>{children}</AgeGate>
      </body>
    </html>
  );
}
