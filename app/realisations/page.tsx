import Link from "next/link";
import { Button } from "@/components/ui/button";
import GalleryHero from "@/components/realisations/GalleryHero";
import GalleryGrid from "@/components/realisations/GalleryGrid";

export const metadata = {
  title: "Nos Réalisations | Jeff Entretien",
  description: "Découvrez nos projets d'aménagement paysager, pose de clôture et entretien d'espaces verts. Galerie de photos avant/après et témoignages clients.",
};

export default function Realisations() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      
      {/* Call to action */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Vous avez un projet similaire ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Nous pouvons vous aider à créer un espace extérieur à votre image.
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}