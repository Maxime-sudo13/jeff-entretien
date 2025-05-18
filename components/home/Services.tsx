"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Pose de clôture",
    description: "Installation de clôtures, grillages, brise-vues et portails pour délimiter et sécuriser votre propriété.",
    link: "/services#cloture",
    icon: "🏗️",
    items: [
      "Grillage souple & rigide", 
      "Clôture en Bois / PVC / Composite", 
      "Brise-vue sur mesure", 
      "Portail & portillon"
    ]
  },
  {
    title: "Espace vert",
    description: "Entretien et mise en valeur de vos espaces verts : taille, élagage et aménagement de gazon.",
    link: "/services#espace-vert",
    icon: "🌳",
    items: [
      "Taille et mise en forme de haies", 
      "Élagage & abattage d'arbres", 
      "Engazonnement & scarification", 
      "Entretien régulier"
    ]
  },
  {
    title: "Aménagement paysager",
    description: "Création d'espaces extérieurs harmonieux, alliant esthétique et fonctionnalité pour valoriser votre propriété.",
    link: "/services#amenagement",
    icon: "🏞️",
    items: [
      "Création d'allées et terrasses", 
      "Pose de pavés", 
      "Petite maçonnerie", 
      "Terrassement"
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <ul className="mb-5 space-y-2">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href={service.link}
          className="inline-flex items-center text-primary hover:text-primary-medium font-medium"
        >
          En savoir plus
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export function Services() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services d'entretien et d'aménagement paysager pour transformer votre extérieur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;