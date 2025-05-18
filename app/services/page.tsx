import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata = {
  title: "Nos Services | Jeff Entretien",
  description: "Découvrez tous les services d'entretien et d'aménagement paysager proposés par Jeff Entretien : clôtures, espaces verts, terrasses et aménagements sur mesure.",
};

export default function Services() {
  return (
    <>
      <ServiceHero />
      
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Notre expertise à votre service</h2>
            <p className="text-lg text-gray-700 mb-6">
              Chez Jeff Entretien, nous mettons notre savoir-faire et notre professionnalisme 
              au service de vos projets d'extérieur. De l'entretien régulier à l'aménagement complet, 
              nous vous accompagnons pour créer des espaces qui vous ressemblent.
            </p>
            <p className="text-lg text-gray-700">
              Découvrez ci-dessous l'ensemble de nos prestations et n'hésitez pas à nous 
              contacter pour un devis personnalisé et gratuit.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <ServiceCard
        id="cloture"
        title="Pose de clôture"
        description="Sécurisez et délimitez votre propriété avec des solutions de clôture adaptées à vos besoins et à votre environnement. Nous travaillons avec une large gamme de matériaux pour un résultat esthétique et durable."
        features={[
          "Grillage souple et rigide pour tous types de terrains",
          "Clôtures en bois, PVC ou composite selon vos préférences",
          "Large gamme d'occultants et brise-vue sur mesure",
          "Installation de portails et portillons assortis",
          "Solutions résistantes aux intempéries et durables dans le temps"
        ]}
        image="/images/garden-image.jpg"
      />
      
      <ServiceCard
        id="espace-vert"
        title="Entretien d'espaces verts"
        description="Maintenez la beauté de votre jardin tout au long de l'année grâce à nos services d'entretien d'espaces verts. Nos professionnels prennent soin de vos végétaux avec expertise et minutie."
        features={[
          "Taille et mise en forme de fruitiers et haies",
          "Élagage et abattage d'arbres en toute sécurité",
          "Engazonnement, scarification et aération de pelouse",
          "Désherbage et traitement préventif",
          "Contrats d'entretien régulier adaptés à vos besoins"
        ]}
        image="/images/garden-image.jpg"
        isReversed={true}
        delay={0.1}
      />
      
      <ServiceCard
        id="amenagement"
        title="Aménagement paysager"
        description="Transformez votre extérieur en un espace harmonieux et fonctionnel avec nos services d'aménagement paysager. De la conception à la réalisation, nous donnons vie à vos idées."
        features={[
          "Remise à niveau et préparation de terrain",
          "Pose de pavés et création d'allées",
          "Petite maçonnerie et terrassement",
          "Création d'espaces de vie extérieurs",
          "Aménagement sur mesure selon vos envies et votre budget"
        ]}
        image="/images/garden-image.jpg"
        delay={0.2}
      />
      
      {/* Call to action */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit. 
              Notre équipe se fera un plaisir de vous conseiller et de vous accompagner dans la réalisation 
              de vos aménagements extérieurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}