import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales d'Utilisation</h1>

      <p className="mb-4">
        Bienvenue sur <strong>Mindly</strong>, un service proposé par Capital Hype. En accédant à notre plateforme ou en l’utilisant,
        vous acceptez sans réserve ces conditions générales. Veuillez les lire attentivement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Objet</h2>
      <p className="mb-4">
        Les présentes Conditions ont pour objet de définir les modalités d'accès et d'utilisation des services proposés sur la
        plateforme Mindly, dédiée à l'apprentissage assisté par intelligence artificielle.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Inscription et Compte</h2>
      <p className="mb-4">
        Pour accéder à certaines fonctionnalités, vous devez créer un compte. Vous êtes responsable de la confidentialité de
        votre mot de passe et de toute activité sur votre compte.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Utilisation autorisée</h2>
      <p className="mb-4">
        Vous vous engagez à utiliser Mindly dans le respect de la loi, des bonnes mœurs et à ne pas porter atteinte aux droits
        d'autrui ni au bon fonctionnement du service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Propriété intellectuelle</h2>
      <p className="mb-4">
        Tous les contenus présents sur Mindly (textes, images, logos, code, IA, etc.) sont protégés par les lois relatives à
        la propriété intellectuelle. Toute reproduction ou réutilisation sans autorisation est interdite.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Données personnelles</h2>
      <p className="mb-4">
        Nous collectons et traitons vos données conformément à notre <a href="/privacy" className="text-blue-600 underline">Politique de confidentialité</a>. Vous pouvez à tout moment demander
        l’accès, la modification ou la suppression de vos données.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Résiliation</h2>
      <p className="mb-4">
        Vous pouvez supprimer votre compte à tout moment. Nous nous réservons également le droit de suspendre ou de résilier
        votre accès si vous ne respectez pas les présentes conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Limitation de responsabilité</h2>
      <p className="mb-4">
        Mindly est un outil d’accompagnement éducatif. Bien que nous mettions tout en œuvre pour garantir son bon
        fonctionnement, nous ne pouvons être tenus responsables en cas d’erreurs, de pertes de données ou d’indisponibilité
        temporaire.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Modifications</h2>
      <p className="mb-4">
        Ces conditions peuvent être modifiées à tout moment. Vous serez informé(e) des changements via la plateforme. En
        continuant à utiliser Mindly après modification, vous acceptez les nouvelles conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact</h2>
      <p className="mb-4">
        Pour toute question ou demande, vous pouvez nous contacter à l’adresse :{" "}
        <a href="mailto:capitalhype6@gmail.com" className="text-blue-600 underline">capitalhype6@gmail.com</a>
      </p>

      <p className="text-sm text-gray-500 mt-6">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
    </div>
  );
};

export default Terms;
