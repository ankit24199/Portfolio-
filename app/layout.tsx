import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Yadav | MERN Stack Developer & Software Engineer",
  description:
    "Portfolio of Ankit Yadav — MERN Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB. Building scalable, secure, and high-performance web applications.",
  keywords: ["Ankit Yadav","MERN Stack Developer","React.js Developer","Node.js Developer","Full Stack Developer","Software Engineer","JavaScript Developer","Indore","Portfolio"],
  authors: [{ name: "Ankit Yadav" }],
  creator: "Ankit Yadav",
  openGraph: {
    type: "website",
    title: "Ankit Yadav | MERN Stack Developer",
    description: "Building scalable, secure, and high-performance web applications.",
    siteName: "Ankit Yadav Portfolio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Space Grotesk for headings + Plus Jakarta Sans & Inter for body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
