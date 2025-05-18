import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: "Jeff Entretien | Entretien et Création Paysagère",
  description: "Jeff Entretien, votre expert en entretien de parcs et jardins, aménagement paysager, pose de clôture et bien plus encore. Au delà du paysage, une expérience.",
  keywords: "entretien jardin, aménagement paysager, pose clôture, élagage, Marville, Meuse, Grand Est",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${raleway.variable} ${playfair.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}