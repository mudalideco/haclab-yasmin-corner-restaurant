import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/primitives/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasmin Corner Restaurant | Ugandan & Swahili Cuisine in Kampala",
  description:
    "Experience authentic Ugandan and Swahili cuisine at Yasmin Corner Restaurant on Clement Hill Road, Kampala. Catering, events, and delivery available.",
  openGraph: {
    title: "Yasmin Corner Restaurant | Ugandan & Swahili Cuisine",
    description:
      "Experience authentic Ugandan and Swahili cuisine at Yasmin Corner Restaurant on Clement Hill Road, Kampala.",
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
