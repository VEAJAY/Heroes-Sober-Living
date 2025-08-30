import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Heroes Sober Living",
  description: "Next.js Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
