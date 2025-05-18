"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

// Exemples de projets - à remplacer par de vraies données
const projects = [
  {
    id: 1,
    title: "Aménagement complet",
    category: "Aménagement paysager",
    image: "/images/garden-image.jpg",
    description: "Transformation complète d'un jardin avec création d'allées et plantation d'arbustes."
  },
  {
    id: 2,
    title: "Pose de clôture en bois",
    category: "Clôture",
    image: "/images/garden-image.jpg",
    description: "Installation d'une clôture en bois composite sur mesure avec portillon intégré."
  },
  {
    id: 3,
    title: "Entretien d'espace vert",
    category: "Espace vert",
    image: "/images/garden-image.jpg",
    description: "Taille de haies et entretien régulier d'un jardin de propriété."
  },
  {
    id: 4,
    title: "Création de terrasse",
    category: "Aménagement paysager",
    image: "/images/garden-image.jpg",
    description: "Conception et réalisation d'une terrasse en pavés avec bordures végétalisées."
  }
];

// Catégories de projets
const categories = ["Tous", "Aménagement paysager", "Clôture", "Espace vert"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filtrer les projets par catégorie
  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-accent/30">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire et notre 
            engagement envers la qualité.
          </p>
        </motion.div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-100 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href={`/realisations#projet-${project.id}`}
                  className="text-primary hover:text-primary-medium font-medium inline-block"
                >
                  Voir les détails
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/realisations">
              Voir toutes nos réalisations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;