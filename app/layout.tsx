import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  icons: {
    icon: "/josh_logo.jpeg",
    apple: "/josh_logo.jpeg",
    shortcut: "/josh_logo.jpeg",
  },
  title: "Joshua Choi — Portfolio",
  description:
    "Software Engineer building scalable infrastructure, AI systems, and production-grade platforms. Identity systems, automation, and applied AI.",
  keywords: ["Software Engineer", "Joshua Choi", "Salesforce", "AI", "Full Stack", "Next.js"],
  authors: [{ name: "Joshua Choi" }],
  openGraph: {
    title: "Joshua Choi — Portfolio",
    description:
      "Software Engineer building scalable infrastructure, AI systems, and production-grade platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
