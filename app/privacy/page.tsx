import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-left space-y-6">
      <h1 className="text-3xl font-bold">Politique de confidentialité – Mindly</h1>
      <p className="text-sm text-gray-500">Dernière mise à jour : 20 juin 2025</p>

      <section>
        <h2 className="text-xl font-semibold">1. Qui sommes-nous ?</h2>
        <p>
          Mindly est un service en ligne (SaaS) développé par Capitalhype, auto-entrepreneur
          basé en France. Email de contact : <strong>Capitalhype6@gmail.com</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. Données personnelles collectées</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>À l'inscription</strong> : nom, prénom (facultatif), email, mot de passe sécurisé, langue/pays</li>
          <li><strong>À l'utilisation</strong> : interactions IA, progression, historique, statistiques</li>
          <li><strong>Techniques</strong> : IP, navigateur, cookies essentiels</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">3. Utilisation des données</h2>
        <p>
          Vos données permettent la création de compte, l'adaptation pédagogique, les analyses internes,
          et la sécurité. <strong>Nous ne revendons jamais vos données.</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">4. Accès aux données</h2>
        <p>
          Seuls les administrateurs techniques y accèdent si nécessaire. Des prestataires peuvent les traiter :
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Supabase : base de données</li>
          <li>Render : hébergement</li>
          <li>Stripe : paiements (aucune carte enregistrée chez nous)</li>
          <li>Vapi & ElevenLabs : traitement vocal</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">5. Durée de conservation</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Compte : tant qu’actif</li>
          <li>Interactions : 12 mois max</li>
          <li>Facturation : 10 ans (obligation légale)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">6. Vos droits (RGPD)</h2>
        <p>Accès, rectification, effacement, portabilité, opposition. Demande à : <strong>Capitalhype6@gmail.com</strong></p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">7. Sécurité</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Connexion HTTPS</li>
          <li>Données chiffrées</li>
          <li>Accès restreint</li>
          <li>Mots de passe hashés</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">8. Cookies</h2>
        <p>Cookies uniquement fonctionnels. Pas de tracking ou publicité externe.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">9. Modifications</h2>
        <p>En cas de modification, une notification sera envoyée par email aux utilisateurs.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">10. Contact</h2>
        <p>
          Pour toute question, vous pouvez écrire à : <strong>Capitalhype6@gmail.com</strong>
        </p>
      </section>
    </div>
  );
}
