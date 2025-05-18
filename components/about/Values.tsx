"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Leaf, ThumbsUp, Clock, Users, Sparkles } from "lucide-react";

// Définition des valeurs
const values = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Passion",
    description: "Nous mettons notre passion au service de chaque projet, petit ou grand, avec le même enthousiasme et la même attention aux détails."
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Respect de l'environnement",
    description: "Nous utilisons des pratiques respectueuses de l'environnement et privilégions les solutions durables dans tous nos travaux."
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: "Qualité",
    description: "La qualité est notre priorité absolue, tant dans les matériaux utilisés que dans l'exécution de nos chantiers."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Fiabilité",
    description: "Nous respectons nos engagements en termes de délais et de budget, pour une tranquillité d'esprit totale."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Proximité client",
    description: "Nous valorisons une relation de confiance avec nos clients et restons à l'écoute de leurs besoins tout au long du projet."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Innovation",
    description: "Nous nous formons continuellement aux nouvelles techniques et tendances pour vous proposer les meilleures solutions."
  }
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-accent/20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos valeurs</h2>
          <p className="text-lg text-gray-700">
            Nos valeurs guident chacune de nos actions et définissent notre façon de travailler
            au quotidien pour vous offrir un service d'excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;