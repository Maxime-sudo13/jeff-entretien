import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité décrivant la collecte, l'utilisation et la protection des données personnelles par Jeff Entretien.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
      
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8 text-center">
          Dernière mise à jour : 17 mai 2025
        </p>
        
        <h2>Introduction</h2>
        <p>
          Chez Jeff Entretien, nous accordons une grande importance à la protection de vos données personnelles. 
          Cette politique de confidentialité vous informe de la manière dont nous collectons, utilisons et 
          protégeons vos informations lorsque vous utilisez notre site web et nos services.
        </p>
        
        <h2>Collecte des données personnelles</h2>
        <p>
          Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
        </p>
        <ul>
          <li>Remplissez un formulaire de contact</li>
          <li>Demandez un devis</li>
          <li>Vous inscrivez à notre newsletter</li>
          <li>Nous contactez par téléphone ou par email</li>
        </ul>
        
        <p>Les types de données personnelles que nous pouvons collecter incluent :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Adresse postale</li>
          <li>Informations concernant votre projet d'aménagement ou d'entretien</li>
        </ul>
        
        <h2>Utilisation des données</h2>
        <p>
          Nous utilisons vos données personnelles dans les buts suivants :
        </p>
        <ul>
          <li>Vous fournir les services que vous avez demandés (devis, informations, etc.)</li>
          <li>Répondre à vos questions et demandes</li>
          <li>Vous tenir informé de nos services et offres susceptibles de vous intéresser</li>
          <li>Améliorer notre site web et nos services</li>
          <li>Respecter nos obligations légales et réglementaires</li>
        </ul>
        
        <h2>Base légale du traitement</h2>
        <p>
          Nous traitons vos données personnelles sur la base des fondements juridiques suivants :
        </p>
        <ul>
          <li>Votre consentement pour l'envoi de communications marketing</li>
          <li>L'exécution d'un contrat lorsque nous vous fournissons nos services</li>
          <li>Nos intérêts légitimes à développer et améliorer nos services</li>
          <li>Le respect de nos obligations légales</li>
        </ul>
        
        <h2>Conservation des données</h2>
        <p>
          Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités 
          pour lesquelles elles ont été collectées, sauf si une période de conservation plus longue est requise 
          ou permise par la loi.
        </p>
        
        <h2>Partage des données</h2>
        <p>
          Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre 
          consentement, à l'exception des cas suivants :
        </p>
        <ul>
          <li>Avec des prestataires de services qui nous aident dans l'exploitation de notre site web ou dans la conduite de nos activités (sous réserve d'accords de confidentialité)</li>
          <li>Si nécessaire pour se conformer à une ordonnance judiciaire ou à une obligation légale</li>
          <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos clients ou d'autres personnes</li>
        </ul>
        
        <h2>Cookies et technologies similaires</h2>
        <p>
          Notre site web peut utiliser des cookies et des technologies similaires pour améliorer votre expérience 
          utilisateur, analyser l'utilisation du site et personnaliser le contenu. Vous pouvez configurer votre 
          navigateur pour refuser tous les cookies ou pour vous avertir lorsqu'un cookie est envoyé. Cependant, 
          certaines fonctionnalités du site peuvent ne pas fonctionner correctement si vous désactivez les cookies.
        </p>
        
        <h2>Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants 
          concernant vos données personnelles :
        </p>
        <ul>
          <li>Droit d'accès : Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet</li>
          <li>Droit de rectification : Vous pouvez demander la correction de données inexactes ou incomplètes</li>
          <li>Droit à l'effacement : Vous pouvez demander la suppression de vos données dans certaines circonstances</li>
          <li>Droit à la limitation du traitement : Vous pouvez demander la restriction du traitement de vos données</li>
          <li>Droit à la portabilité des données : Vous pouvez demander le transfert de vos données à un autre organisme</li>
          <li>Droit d'opposition : Vous pouvez vous opposer au traitement de vos données à des fins de marketing direct</li>
        </ul>
        
        <p>
          Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse email suivante : jeff.entretien57@gmail.com.
        </p>
        
        <h2>Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre 
          tout accès non autorisé, altération, divulgation ou destruction. Cependant, aucune méthode de transmission 
          sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
        </p>
        
        <h2>Liens vers des sites tiers</h2>
        <p>
          Notre site peut contenir des liens vers des sites web tiers. Nous n'avons aucun contrôle sur le contenu 
          et les pratiques de ces sites et ne sommes pas responsables de leurs politiques de confidentialité. Nous 
          vous encourageons à lire les politiques de confidentialité de chaque site que vous visitez.
        </p>
        
        <h2>Enfants</h2>
        <p>
          Notre site web n'est pas destiné aux enfants de moins de 16 ans, et nous ne collectons pas sciemment des 
          données personnelles auprès d'enfants de moins de 16 ans. Si vous êtes parent ou tuteur et que vous pensez 
          que votre enfant nous a fourni des informations personnelles, veuillez nous contacter.
        </p>
        
        <h2>Modifications de la politique de confidentialité</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter des changements 
          dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous encourageons 
          à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
        </p>
        
        <h2>Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité ou la manière dont nous traitons 
          vos données personnelles, veuillez nous contacter à l'adresse email suivante : jeff.entretien57@gmail.com 
          ou par courrier à l'adresse : 6 rue de Montréal, 55600 Marville, France.
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