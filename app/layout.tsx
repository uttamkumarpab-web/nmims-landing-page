import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AutoPopupModal from "@/components/AutoPopupModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nmims-landing-page.com"
  ),

  title: {
    default:
      "NMIMS Online MBA | NMIMS CDOE - One Degree, Unlimited Opportunities",
    template:
      "%s | NMIMS Online MBA",
  },

  description:
    "Pursue an Online MBA from NMIMS CDOE - UGC-Entitled, AICTE-Approved, NAAC A++. Live interactive lectures, 7 specialisations, learn anytime, anywhere.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <AutoPopupModal />
      </body>
    </html>
  );
}