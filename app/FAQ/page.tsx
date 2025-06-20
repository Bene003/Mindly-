"use client";

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Qu'est-ce que Mindly ?",
    answer: "Mindly est une plateforme d'apprentissage qui utilise des assistants IA personnalisés pour vous aider à explorer et maîtriser vos matières préférées de manière interactive et engageante."
  },
  {
    id: 2,
    question: "Comment créer un assistant IA ?",
    answer: "Vous pouvez créer un assistant IA en cliquant sur 'Créer un Assistant' dans le menu principal. Choisissez votre matière, définissez les objectifs d'apprentissage et personnalisez votre compagnon d'étude."
  },
  {
    id: 3,
    question: "Les assistants sont-ils gratuits ?",
    answer: "Nous proposons un accès gratuit limité à nos assistants. Pour un accès complet et illimité, consultez nos plans d'abonnement dans la section 'Abonnements'."
  },
  {
    id: 4,
    question: "Comment suivre mes progrès ?",
    answer: "Votre progression est automatiquement sauvegardée. Vous pouvez consulter votre parcours d'apprentissage dans la section 'Mon Parcours' pour voir vos sessions complétées et vos statistiques."
  },
  {
    id: 5,
    question: "Puis-je utiliser Mindly sur mobile ?",
    answer: "Oui, Mindly est entièrement responsive et fonctionne parfaitement sur tous les appareils : ordinateurs, tablettes et smartphones."
  },
  {
    id: 6,
    question: "Comment contacter le support ?",
    answer: "Vous pouvez nous contacter via la page 'Nous contacter' dans le footer, ou directement par email. Notre équipe vous répondra dans les plus brefs délais."
  },
  {
    id: 7,
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Nous prenons la sécurité de vos données très au sérieux. Consultez notre Politique de confidentialité pour plus de détails sur la protection de vos informations."
  },
  {
    id: 8,
    question: "Puis-je annuler mon abonnement ?",
    answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre profil. L'accès aux fonctionnalités premium restera actif jusqu'à la fin de votre période de facturation."
  }
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Questions Fréquemment Posées</h1>
        <p className="text-lg text-gray-600">
          Trouvez rapidement les réponses à vos questions sur Mindly
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openItems.includes(item.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openItems.includes(item.id) && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      
    </main>
  );
};

export default FAQPage;