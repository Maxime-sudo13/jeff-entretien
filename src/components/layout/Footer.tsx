"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative h-14 w-14 bg-accent rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logojeffentretien.png"
                  alt="Jeff Entretien"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-xl">Jeff Entretien</h3>
                <p className="text-xs italic text-accent">Au delà du paysage, une expérience</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Transformez votre espace extérieur avec notre expertise en entretien et aménagement paysager. 
              Des solutions sur mesure pour sublimer votre jardin et créer un environnement harmonieux.
            </p>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos services", href: "/services" },
                { name: "Réalisations", href: "/realisations" },
                { name: "À propos", href: "/a-propos" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-accent flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Services */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2">
              {[
                "Pose de clôture",
                "Élagage & abattage",
                "Aménagement de jardin",
                "Engazonnement",
                "Petite maçonnerie",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-accent flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-1" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  6 rue de Montréal<br />55600 Marville
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <a href="tel:+33780497885" className="text-gray-300 hover:text-accent">
                  +33 7 80 49 78 85
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <a href="mailto:jeff.entretien57@gmail.com" className="text-gray-300 hover:text-accent">
                  jeff.entretien57@gmail.com
                </a>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-primary-light mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Lun - Ven: 8h-18h<br />Sam: 9h-16h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="h-px bg-gray-700 my-8"></div>

        {/* Pied de page */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jeff Entretien. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <Link href="/mentions-legales" className="text-gray-400 text-sm hover:text-accent">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-400 text-sm hover:text-accent">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;