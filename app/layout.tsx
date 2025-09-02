import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Heroes & Sober Living | Support for Recovery & Wellness",
  description:
    "Join Heroes & Sober Living for resources, guidance, and a supportive community focused on veterans, homeless, and the disabled community.",
  keywords: [
    "sober living",
    "homeless",
    "mental health support",
    "group homes",
    "veteran support",
  ],
  openGraph: {
    title: "Heroes & Sober Living",
    description:
      "Join Heroes & Sober Living for resources, guidance, and a supportive community focused on veterans, homeless, and the disabled community.",
    url: "https://heroessoberliving.com",
    siteName: "Heroes & Sober Living",
    type: "website",
  },
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
        <meta
          name="google-site-verification"
          content="A0aufht3b5ggjrH5rxoOlHqWy--sE2nsMxyepAE407g"
        />
        <link rel="canonical" href="https://heroessoberliving.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300..900&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
