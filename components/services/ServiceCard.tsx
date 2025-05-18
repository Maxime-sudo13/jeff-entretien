"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  id: string;
  isReversed?: boolean;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  features,
  image,
  id,
  isReversed = false,
  delay = 0
}: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id={id} 
      className={`py-16 ${isReversed ? 'bg-accent/20' : 'bg-white'}`}
    >
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay }}
            className="relative h-[350px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: delay + 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 text-lg mb-6">{description}</p>
            
            <ul className="space-y-4 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;