import Link from "next/link";
import { Button } from "@/components/ui/button";
import AboutHero from "@/components/about/AboutHero";
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export const metadata = {
  title: "À Propos | Jeff Entretien",
  description: "Découvrez l'histoire de Jeff Entretien, nos valeurs et notre équipe de professionnels passionnés par l'aménagement paysager et l'entretien de jardins.",
};

export default function APropos() {
  return (
    <>
      <AboutHero />
      <History />
      <Values />
      <Team />
      
      {/* Certifications et formations */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos certifications</h2>
            <p className="text-lg text-gray-700">
              Chez Jeff Entretien, nous investissons dans la formation continue et les certifications 
              pour garantir un service professionnel et conforme aux meilleures pratiques du secteur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-accent/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Certification Paysagiste</h3>
              <p className="text-gray-700 text-center">
                Certification professionnelle reconnue dans l'aménagement et l'entretien paysager.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-accent/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Pratiques Éco-responsables</h3>
              <p className="text-gray-700 text-center">
                Formation aux techniques d'entretien respectueuses de l'environnement.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-accent/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Sécurité & Assurances</h3>
              <p className="text-gray-700 text-center">
                Entreprise pleinement assurée pour tous types de travaux paysagers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-primary/10 rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Prêt à travailler avec nous ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Maintenant que vous nous connaissez mieux, laissez-nous vous aider à 
              concrétiser votre projet d'aménagement extérieur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contactez-nous</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}