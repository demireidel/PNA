import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Plan Nuclear Argentino",
  description: "Sitio del Plan Nuclear Argentino",
  openGraph: {
    title: "Plan Nuclear Argentino",
    description: "Sitio del Plan Nuclear Argentino",
    url: "https://example.com",
    siteName: "PNA",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Plan Nuclear Argentino", description: "Sitio del Plan Nuclear Argentino" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
