"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Demande d'information"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par un vrai système d'envoi d'e-mail)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "Demande d'information"
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vous avez un projet d'aménagement ou une question ? N'hésitez pas à nous contacter,
            nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8"
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message envoyé !</h3>
                <p className="text-gray-600 mb-6">
                  Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
                </p>
                <Button onClick={() => setSubmitSuccess(false)}>
                  Envoyer un nouveau message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="Demande d'information">Demande d'information</option>
                      <option value="Demande de devis">Demande de devis</option>
                      <option value="Rendez-vous">Prise de rendez-vous</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </div>
                
                {submitError && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md">
                    {submitError}
                  </div>
                )}
              </form>
            )}
          </motion.div>
          
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-primary text-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-6">Nos coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p>6 rue de Montréal<br />55600 Marville</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p>+33 7 80 49 78 85</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p>jeff.entretien57@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Horaires</h4>
                  <p>Lundi - Vendredi: 8h-18h<br />Samedi: 9h-16h<br />Dimanche: Fermé</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <h4 className="font-semibold mb-3">Zone d'intervention</h4>
              <p>Nous intervenons dans un rayon de 30 km autour de Marville, dans la Meuse et le nord de la région Grand Est.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;