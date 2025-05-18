import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";

export const metadata = {
  title: "Contact | Jeff Entretien",
  description: "Contactez Jeff Entretien pour toutes vos questions ou demandes de devis concernant l'aménagement paysager, l'entretien de jardin ou la pose de clôture.",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FAQ />
      
      {/* Carte */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Où nous trouver</h2>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Iframe Google Maps ou OpenStreetMap */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.255456758387!2d5.4502837!3d49.4517905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eac233d4a4fc9d%3A0x2600376f15f5bc40!2s6%20Rue%20de%20Montreal%2C%2055600%20Marville!5e0!3m2!1sfr!2sfr!4v1655394876050!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}