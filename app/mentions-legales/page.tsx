import Link from "next/link";

export const metadata = {
  title: "Mentions Légales",
  description: "Mentions légales et informations juridiques concernant l'entreprise Jeff Entretien.",
};

export default function MentionsLegales() {
  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>
      
      <div className="prose max-w-none">
        <h2>1. Informations légales</h2>
        <p>
          Le site Jeff Entretien est édité par :<br />
          <strong>Jeff Entretien</strong><br />
          6 rue de Montréal<br />
          55600 Marville<br />
          France<br />
          Téléphone : +33 7 80 49 78 85<br />
          Email : jeff.entretien57@gmail.com
        </p>
        
        <p>
          <strong>Responsable de la publication :</strong> [NOM DU RESPONSABLE]<br />
          <strong>Forme juridique :</strong> [FORME JURIDIQUE] au capital de [MONTANT] €<br />
          <strong>SIRET :</strong> [NUMÉRO SIRET]<br />
          <strong>TVA Intracommunautaire :</strong> [NUMÉRO TVA]
        </p>
        
        <h2>2. Hébergement</h2>
        <p>
          Le site Jeff Entretien est hébergé par :<br />
          <strong>[NOM DE L'HÉBERGEUR]</strong><br />
          [ADRESSE DE L'HÉBERGEUR]<br />
          [CODE POSTAL ET VILLE DE L'HÉBERGEUR]<br />
          [PAYS DE L'HÉBERGEUR]<br />
          Téléphone : [TÉLÉPHONE DE L'HÉBERGEUR]
        </p>
        
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments composant le site Jeff Entretien (textes, graphismes, logiciels, photographies, 
          images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont la propriété 
          exclusive de Jeff Entretien ou de ses partenaires. Ces éléments sont protégés par les lois relatives 
          à la propriété intellectuelle et notamment le droit d'auteur.
        </p>
        
        <p>
          Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou 
          partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
          autorisation écrite préalable de Jeff Entretien.
        </p>
        
        <h2>4. Données personnelles</h2>
        <p>
          Les informations personnelles collectées sur le site Jeff Entretien sont uniquement destinées à 
          l'usage de Jeff Entretien. Elles sont collectées dans le but de traiter vos demandes et de vous 
          tenir informé des services proposés par Jeff Entretien.
        </p>
        
        <p>
          Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d'un 
          droit d'accès, de rectification et de suppression des données qui vous concernent. Vous pouvez 
          exercer ce droit en nous contactant via le formulaire de contact ou par email à l'adresse : 
          jeff.entretien57@gmail.com.
        </p>
        
        <h2>5. Cookies</h2>
        <p>
          Le site Jeff Entretien peut utiliser des cookies pour améliorer l'expérience utilisateur. Un cookie 
          est un petit fichier texte stocké sur votre ordinateur. Ces cookies nous permettent d'analyser la 
          fréquentation du site et d'améliorer son contenu. Vous pouvez configurer votre navigateur pour qu'il 
          vous avertisse lors de l'utilisation de cookies et/ou pour refuser systématiquement certains cookies. 
          Si vous désactivez les cookies, veuillez noter que certaines fonctionnalités du site pourraient ne 
          plus être disponibles.
        </p>
        
        <h2>6. Limitation de responsabilité</h2>
        <p>
          Jeff Entretien s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées 
          sur son site. Toutefois, Jeff Entretien ne peut garantir l'exactitude, la précision ou l'exhaustivité 
          des informations mises à disposition sur le site. En conséquence, Jeff Entretien décline toute 
          responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations 
          disponibles sur le site.
        </p>
        
        <p>
          Jeff Entretien ne saurait être tenu responsable des dommages directs ou indirects, quelles qu'en 
          soient les causes, origines, natures ou conséquences, résultant de l'accès de quiconque au site ou 
          de l'impossibilité d'y accéder, de l'utilisation du site et/ou du crédit accordé à une quelconque 
          information provenant directement ou indirectement de ce dernier.
        </p>
        
        <h2>7. Liens hypertextes</h2>
        <p>
          Le site Jeff Entretien peut contenir des liens vers d'autres sites internet ou d'autres sources 
          d'informations. Dans la mesure où Jeff Entretien ne peut contrôler ces sites et ces sources externes, 
          Jeff Entretien ne peut être tenu pour responsable de la mise à disposition de ces sites et sources 
          externes, et ne peut supporter aucune responsabilité quant au contenu, publicités, produits, services 
          ou tout autre matériel disponible sur ou à partir de ces sites ou sources externes.
        </p>
        
        <h2>8. Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux 
          français seront seuls compétents.
        </p>
        
        <h2>9. Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse email 
          suivante : jeff.entretien57@gmail.com.
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/"
          className="text-primary hover:text-primary-medium underline"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}