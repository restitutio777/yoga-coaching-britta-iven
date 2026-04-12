import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Tangerine } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tangerine = Tangerine({
  variable: "--font-disruption",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Britta Iven | Kundalini-Krise & Spirituelle Begleitung",
  description:
    "Einfuhlsame Begleitung bei Kundalini-Krisen und spirituellen Notlagen. Britta Iven bietet traumasensible Unterstutzung fur Menschen, die durch intensive spirituelle Erfahrungen gehen.",
  keywords: [
    "Kundalini Krise",
    "spirituelle Krise",
    "Kundalini Syndrom",
    "spirituelle Begleitung",
    "Kundalini Erwachen",
    "Britta Iven",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${dmSans.variable} ${tangerine.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
