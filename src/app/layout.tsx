import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saraswati | Kundalini-Krise & Spirituelle Begleitung",
  description:
    "Einfuhlsame Begleitung bei Kundalini-Krisen und spirituellen Notlagen. Saraswati bietet traumasensible Unterstutzung fur Menschen, die durch intensive spirituelle Erfahrungen gehen.",
  keywords: [
    "Kundalini Krise",
    "spirituelle Krise",
    "Kundalini Syndrom",
    "spirituelle Begleitung",
    "Kundalini Erwachen",
    "Saraswati",
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
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
