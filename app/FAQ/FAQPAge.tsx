import React, { useState } from "react";

const faqData = [
  {
    question: "Comment créer un assistant IA sur Mindly ?",
    answer: "Pour créer un assistant, cliquez sur 'Créer un Assistant' dans la navigation et suivez les instructions.",
  },
  {
    question: "Quels sont les abonnements disponibles ?",
    answer: "Nous proposons plusieurs formules d'abonnement adaptées à vos besoins. Consultez la page Abonnements pour plus de détails.",
  },
  {
    question: "Comment puis-je contacter le support ?",
    answer: "Vous pouvez nous contacter via la page 'Nous contacter' ou par email à support@mindly.com.",
  },
  {
    question: "Puis-je utiliser Mindly gratuitement ?",
    answer: "Une version gratuite est disponible avec des fonctionnalités limitées. Pour accéder à toutes les fonctionnalités, un abonnement est nécessaire.",
  },
  {
    question: "Comment réinitialiser mon mot de passe ?",
    answer: "Cliquez sur 'Mot de passe oublié' lors de la connexion et suivez les instructions.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h1>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg bg-white">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 focus:outline-none"
              onClick={() => toggleIndex(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{item.question}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="px-6 pb-4 text-gray-700"
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQPage;