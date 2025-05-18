import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialShare from "@/components/layout/SocialShare";
import ScrollToTop from "@/components/layout/ScrollToTop";
import JsonLd from "./JsonLd";

// Définition des polices
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jeff Entretien | Entretien et Création Paysagère",
    template: "%s | Jeff Entretien"
  },
  description: "Jeff Entretien, votre expert en entretien de parcs et jardins, aménagement paysager, pose de clôture et bien plus encore. Au delà du paysage, une expérience.",
  keywords: "entretien jardin, aménagement paysager, pose clôture, élagage, Marville, Meuse, Grand Est",
  authors: [{ name: "Jeff Entretien" }],
  creator: "Jeff Entretien",
  publisher: "Jeff Entretien",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://www.jeffentretien.fr"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.jeffentretien.fr",
    siteName: "Jeff Entretien",
    title: "Jeff Entretien | Entretien et Création Paysagère",
    description: "Expert en entretien de parcs et jardins, aménagement paysager et pose de clôture. Au delà du paysage, une expérience.",
    images: [
      {
        url: "https://www.jeffentretien.fr/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeff Entretien - Entretien et Création Paysagère",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeff Entretien | Entretien et Création Paysagère",
    description: "Expert en entretien de parcs et jardins, aménagement paysager et pose de clôture. Au delà du paysage, une expérience.",
    images: ["https://www.jeffentretien.fr/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0A5D36" />
        <meta name="theme-color" content="#0A5D36" />
        <JsonLd />
      </head>
      <body className={`${raleway.variable} ${playfair.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
        <SocialShare 
          url="https://www.jeffentretien.fr" 
          title="Jeff Entretien - Entretien et Création Paysagère"
          description="Découvrez nos services d'entretien de jardins et d'aménagement paysager."
        />
      </body>
    </html>
  );
}