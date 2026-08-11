import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/data/business";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...createMetadata({}),
  title: {
    default:
      "All Goode Property Services | Junk Removal & Property Services in Providence, RI",
    template: `%s | ${business.shortName}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
