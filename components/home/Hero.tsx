"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/garden-image.jpg"
          alt="Aménagement paysager par Jeff Entretien"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Contenu */}
      <div className="container relative z-20 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entretien et création paysagère sur mesure
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-white/90 mb-8">
              Chez Jeff Entretien, nous créons et entretenons des espaces extérieurs qui reflètent votre style et répondent à vos besoins. Des solutions personnalisées pour valoriser votre propriété.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-base">
              Découvrir nos services
            </Button>
            <Button size="lg" variant="outline" className={cn(
              "text-base border-2 border-white text-white",
              "hover:bg-white hover:text-secondary hover:border-white"
            )}>
              Nous contacter
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Overlay décoratif */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
}

export default Hero;