import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankit Yadav | MERN Stack Developer & Software Engineer",
  description:
    "Portfolio of Ankit Yadav — MERN Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB. Building scalable, secure, and high-performance web applications.",
  keywords: [
    "Ankit Yadav",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "Software Engineer",
    "JavaScript Developer",
    "Indore",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Yadav" }],
  creator: "Ankit Yadav",
  openGraph: {
    type: "website",
    title: "Ankit Yadav | MERN Stack Developer",
    description:
      "Building scalable, secure, and high-performance web applications with modern technologies.",
    siteName: "Ankit Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Yadav | MERN Stack Developer",
    description: "Building scalable, secure, and high-performance web applications.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#050510] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
