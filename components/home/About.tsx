"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/garden-image.jpg"
              alt="Jeff Entretien au travail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de Jeff Entretien</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Fort d'une expérience solide dans l'aménagement paysager, Jeff Entretien s'est établi comme 
              expert dans la création et l'entretien d'espaces extérieurs d'exception dans la région de 
              Marville et ses environs.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Notre équipe passionnée et qualifiée met son savoir-faire à votre service pour transformer 
              votre jardin en un espace à votre image, alliant esthétique, fonctionnalité et harmonie avec la nature.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expertise et professionnalisme</h3>
                  <p className="text-gray-600">Des années d'expérience au service de votre satisfaction.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Solutions personnalisées</h3>
                  <p className="text-gray-600">Chaque projet est unique et reçoit une attention particulière.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Engagement qualité</h3>
                  <p className="text-gray-600">Nous nous engageons à fournir un travail soigné et durable.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link href="/a-propos">
                En savoir plus sur nous
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;