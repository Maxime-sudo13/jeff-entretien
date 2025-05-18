"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détecter le défilement pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center z-10">
          <div className="relative h-14 w-14 mr-2">
            <Image
              src="/images/logojeffentretien.png"
              alt="Jeff Entretien"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 40px, 56px"
              priority
            />
          </div>
          <div className={cn(
            "flex flex-col transition-colors",
            isScrolled ? "text-secondary" : "text-white"
          )}>
            <span className="font-serif font-bold text-xl leading-tight">Jeff Entretien</span>
            <span className="text-xs italic">Au delà du paysage, une expérience</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isScrolled
                  ? "text-secondary hover:bg-accent/50"
                  : "text-white hover:bg-white/20"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="ml-4">
            Demander un devis
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-secondary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-secondary" : "text-white"} />
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 h-screen bg-background flex flex-col pt-24 px-6 z-0 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary hover:text-primary py-3 text-xl border-b border-accent/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-6">Demander un devis</Button>
            </nav>
            
            <div className="mt-auto mb-10 text-center">
              <p className="text-secondary mb-2">Contactez-nous</p>
              <a href="tel:+33780497885" className="block text-primary hover:text-primary-medium">
                +33 7 80 49 78 85
              </a>
              <a href="mailto:jeff.entretien57@gmail.com" className="block text-primary hover:text-primary-medium">
                jeff.entretien57@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;