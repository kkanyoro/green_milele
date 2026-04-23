import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenmilele.vercel.app"),

  title: "Green Milele | Youth-Led Environmental Initiative",
  description: "Join Green Milele in protecting our environment for future generations through action, community, and education.",
  keywords: ["environment", "conservation", "youth-led", "climate action", "tree planting", "Green Milele"],
  openGraph: {
    title: "Green Milele",
    description: "Join the movement to protect our environment.",
    url: "https://greenmilele.vercel.app",
    siteName: "Green Milele",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Green Milele environmental action",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Milele",
    description: "Youth-Led Environmental Initiative",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* next-themes recommends suppressing hydration warnings on the html tag */}
      <html lang="en" suppressHydrationWarning>
        <body className={`${plusJakarta.variable} font-sans antialiased min-h-screen relative flex flex-col transition-colors duration-300`}>
          <ThemeProvider>
            {/* Subtle background gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--color-secondary)_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

            <Navbar />

            <main className="relative z-10 flex-1 pt-24 pb-12 w-full max-w-8xl mx-auto px-6">
              {children}
            </main>

            <Footer />

          </ThemeProvider>

        </body>
      </html>
    </>
  );
}