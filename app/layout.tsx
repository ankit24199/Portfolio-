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
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
