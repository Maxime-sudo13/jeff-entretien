"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { X } from "lucide-react";

// Type pour les projets
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  images: string[];
  testimonial?: {
    name: string;
    text: string;
  };
}

// Catégories disponibles
const categories = ["Tous", "Aménagement paysager", "Clôture", "Espace vert"];

// Exemple de projets - à remplacer par de vraies données
const projects: Project[] = [
  {
    id: 1,
    title: "Aménagement complet d'un jardin résidentiel",
    description: "Transformation complète d'un jardin avec création d'allées, plantation d'arbustes et installation d'une terrasse en pavés.",
    category: "Aménagement paysager",
    location: "Marville, Meuse",
    date: "Juin 2024",
    images: [
      "/images/garden-image.jpg",
      "/images/garden-image.jpg",
      "/images/garden-image.jpg"
    ],
    testimonial: {
      name: "Marie L.",
      text: "Nous sommes ravis du travail réalisé par Jeff Entretien. Notre jardin s'est transformé en un véritable havre de paix, exactement comme nous le souhaitions."
    }
  },
  {
    id: 2,
    title: "Installation de clôture en bois composite",
    description: "Pose d'une clôture en bois composite avec portillon intégré pour délimiter une propriété.",
    category: "Clôture",
    location: "Longuyon",
    date: "Mai 2024",
    images: [
      "/images/garden-image.jpg",
      "/images/garden-image.jpg"
    ]
  },
  {
    id: 3,
    title: "Entretien saisonnier d'un grand parc",
    description: "Taille de haies, élagage d'arbres et entretien général d'un parc de 2000m².",
    category: "Espace vert",
    location: "Montmédy",
    date: "Avril 2024",
    images: [
      "/images/garden-image.jpg",
      "/images/garden-image.jpg"
    ],
    testimonial: {
      name: "Pierre D.",
      text: "Service impeccable et équipe très professionnelle. Je recommande vivement Jeff Entretien pour l'entretien régulier de grands espaces."
    }
  },
  {
    id: 4,
    title: "Création d'une terrasse en pavés",
    description: "Conception et réalisation d'une terrasse en pavés de 40m² avec bordures végétalisées.",
    category: "Aménagement paysager",
    location: "Stenay",
    date: "Mars 2024",
    images: [
      "/images/garden-image.jpg",
      "/images/garden-image.jpg",
      "/images/garden-image.jpg"
    ]
  },
  {
    id: 5,
    title: "Installation de grillage rigide",
    description: "Pose de 120 mètres de grillage rigide pour sécuriser un terrain.",
    category: "Clôture",
    location: "Marville",
    date: "Février 2024",
    images: [
      "/images/garden-image.jpg"
    ]
  },
  {
    id: 6,
    title: "Aménagement d'un jardin japonais",
    description: "Création d'un espace zen inspiré des jardins japonais avec bassin et plantes adaptées.",
    category: "Aménagement paysager",
    location: "Verdun",
    date: "Janvier 2024",
    images: [
      "/images/garden-image.jpg",
      "/images/garden-image.jpg"
    ],
    testimonial: {
      name: "Sophie M.",
      text: "Un travail remarquable et minutieux. Jeff Entretien a su capturer parfaitement l'essence d'un jardin japonais et l'adapter à notre climat."
    }
  }
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filtrer les projets par catégorie
  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Ouvrir le modal de projet
  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; // Empêcher le défilement
  };

  // Fermer le modal de projet
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Réactiver le défilement
  };

  // Navigation entre les images
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Notre portfolio</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-10">
            Parcourez nos réalisations pour découvrir notre savoir-faire et la diversité 
            de nos interventions dans le domaine de l'aménagement paysager.
          </p>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-gray-100 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="relative h-64">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.location} - {project.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Aucun projet ne correspond à cette catégorie pour le moment.
            </p>
          </div>
        )}

        {/* Modal de détail de projet */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-auto bg-black/80 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Fermeture */}
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Image principale */}
                <div className="relative h-72 md:h-96">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation des images */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      >
                        ←
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      >
                        →
                      </button>
                      
                      {/* Indicateur d'image */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                            className={`w-2 h-2 rounded-full ${
                              i === currentImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Information du projet */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedProject.location} - {selectedProject.date}</p>
                  
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  {/* Miniatures des images */}
                  {selectedProject.images.length > 1 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Galerie</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {selectedProject.images.map((img, i) => (
                          <div 
                            key={i}
                            className={`relative h-16 sm:h-20 rounded overflow-hidden cursor-pointer border-2 ${
                              i === currentImageIndex ? "border-primary" : "border-transparent"
                            }`}
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                          >
                            <Image
                              src={img}
                              alt={`Vue ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Témoignage client si disponible */}
                  {selectedProject.testimonial && (
                    <div className="bg-accent/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2">Témoignage client</h4>
                      <p className="italic text-gray-700 mb-2">"{selectedProject.testimonial.text}"</p>
                      <p className="text-right text-sm text-gray-600">— {selectedProject.testimonial.name}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default GalleryGrid;