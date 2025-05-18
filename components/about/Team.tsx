"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Définition des membres de l'équipe
const team = [
  {
    name: "Jeff [Nom]",
    role: "Fondateur & Directeur",
    bio: "Passionné de jardinage depuis son plus jeune âge, Jeff a fondé l'entreprise après 10 ans d'expérience dans l'aménagement paysager. Il supervise tous les projets et apporte son expertise à chaque étape.",
    image: "/images/garden-image.jpg"
  },
  {
    name: "[Prénom] [Nom]",
    role: "Chef d'équipe",
    bio: "Avec plus de 8 ans d'expérience dans le paysagisme, [Prénom] coordonne les équipes sur le terrain et assure la qualité d'exécution de tous les chantiers.",
    image: "/images/garden-image.jpg"
  },
  {
    name: "[Prénom] [Nom]",
    role: "Paysagiste",
    bio: "Spécialiste de la conception de jardins, [Prénom] apporte sa créativité et son œil pour les détails à chaque projet d'aménagement paysager.",
    image: "/images/garden-image.jpg"
  },
  {
    name: "[Prénom] [Nom]",
    role: "Technicien espaces verts",
    bio: "Expert en entretien et taille, [Prénom] veille à la santé et à la beauté de vos espaces verts tout au long de l'année.",
    image: "/images/garden-image.jpg"
  }
];

export function Team() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre équipe</h2>
          <p className="text-lg text-gray-700">
            Découvrez les professionnels passionnés qui composent Jeff Entretien et mettent 
            leur expertise à votre service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;