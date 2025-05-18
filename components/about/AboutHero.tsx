"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <div className="relative py-24 md:py-32">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/garden-image.jpg"
          alt="À propos de Jeff Entretien"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Contenu */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
          <p className="text-xl text-white/90 mb-8">
            Découvrez l'histoire de Jeff Entretien, notre expertise et les valeurs 
            qui guident notre travail au quotidien.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHero;