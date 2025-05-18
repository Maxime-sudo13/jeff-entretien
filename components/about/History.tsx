"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function History() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre histoire</h2>
          <p className="text-lg text-gray-700">
            Découvrez comment Jeff Entretien est devenu un acteur de référence dans l'entretien et l'aménagement paysager.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/garden-image.jpg"
              alt="Histoire de Jeff Entretien"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Une passion devenue métier</h3>
            <p className="text-gray-700 mb-4">
              Fondée en [année de création], Jeff Entretien est née de la passion de son fondateur, 
              Jeff [Nom de famille], pour l'aménagement paysager et le travail en extérieur.
            </p>
            <p className="text-gray-700 mb-4">
              Après plusieurs années d'expérience dans le domaine du paysagisme et fort d'une formation 
              qualifiante, Jeff a décidé de créer sa propre entreprise pour mettre son expertise 
              au service des particuliers et professionnels de la région.
            </p>
            <p className="text-gray-700 mb-4">
              Ce qui a commencé comme une petite entreprise locale s'est progressivement développé 
              pour devenir un acteur reconnu de l'aménagement paysager dans la Meuse et ses environs, 
              tout en conservant les valeurs d'origine : qualité, proximité et respect de l'environnement.
            </p>
            <p className="text-gray-700">
              Aujourd'hui, l'équipe de Jeff Entretien continue de grandir et d'enrichir son expertise 
              pour vous proposer des services toujours plus complets et adaptés à vos besoins.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default History;