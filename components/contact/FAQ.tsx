"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Questions fréquemment posées
const faqs = [
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons principalement dans un rayon de 30 km autour de Marville, couvrant une grande partie de la Meuse et le nord de la région Grand Est. Pour des projets plus éloignés, n'hésitez pas à nous contacter pour étudier la faisabilité."
  },
  {
    question: "Comment obtenir un devis ?",
    answer: "Vous pouvez demander un devis gratuit via notre formulaire de contact, par téléphone ou par email. Pour les projets d'aménagement, nous organisons généralement une visite sur place afin d'évaluer précisément vos besoins et vous proposer les solutions les plus adaptées."
  },
  {
    question: "Combien de temps faut-il pour réaliser un projet d'aménagement ?",
    answer: "La durée d'un projet dépend de sa nature et de son ampleur. Un simple entretien peut être réalisé en quelques heures, tandis qu'un aménagement complet peut s'étaler sur plusieurs jours, voire semaines. Nous établissons toujours un calendrier précis lors de l'établissement du devis."
  },
  {
    question: "Proposez-vous des contrats d'entretien régulier ?",
    answer: "Oui, nous proposons des contrats d'entretien sur mesure adaptés à vos besoins, que ce soit pour des interventions mensuelles, trimestrielles ou saisonnières. Ces contrats vous garantissent un suivi régulier et optimal de vos espaces extérieurs."
  },
  {
    question: "Quelles sont les méthodes de paiement acceptées ?",
    answer: "Nous acceptons les paiements par chèque, virement bancaire et espèces. Pour les projets importants, un échelonnement du paiement peut être mis en place selon l'avancement des travaux."
  },
  {
    question: "Êtes-vous assuré pour tous types de travaux ?",
    answer: "Oui, notre entreprise est pleinement assurée pour tous les travaux que nous réalisons, vous garantissant une tranquillité d'esprit totale. Nos certifications et assurances peuvent vous être présentées sur simple demande."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-16 bg-accent/20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-lg text-gray-700">
            Retrouvez les réponses aux questions les plus fréquemment posées 
            concernant nos services et notre fonctionnement.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`flex justify-between items-center w-full p-5 text-left transition-colors rounded-lg ${
                  openIndex === index 
                    ? "bg-primary text-white" 
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-white border border-gray-100 rounded-b-lg mt-px">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;