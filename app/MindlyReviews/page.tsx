"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, User, Quote } from "lucide-react";

const MindlyReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Emma Leclerc",
      role: "Étudiante en Terminal S",
      rating: 5,
      comment: "Mindly m'a sauvé la vie pour le bac ! J'étais nulle en maths et maintenant j'ai 16 de moyenne. L'IA explique super bien et je peux réviser à n'importe quelle heure. Mes parents ont économisé une fortune comparé aux cours particuliers à 40€/h.",
      savings: "Économie de 1500€/an",
      subject: "Mathématiques",
      avatar: "EL"
    },
    {
      id: 2,
      name: "Sophie Martinez",
      role: "Mère de famille",
      rating: 5,
      comment: "Mindly a révolutionné l'apprentissage de ma fille ! En 3 mois, elle a rattrapé son retard en mathématiques. L'IA s'adapte parfaitement à son rythme et coûte 10 fois moins cher qu'un professeur particulier.",
      savings: "Économie de 2400€/an",
      subject: "Mathématiques",
      avatar: "SM"
    },
    {
      id: 3,
      name: "Lucas Moreau",
      role: "Étudiant en Licence",
      rating: 5,
      comment: "Avec mon petit budget étudiant, impossible de me payer des cours particuliers. Mindly me permet d'avoir un prof perso en physique pour moins de 20€/mois. C'est dingue ! Mes notes ont explosé depuis que j'utilise l'IA.",
      savings: "Économie de 800€/an",
      subject: "Physique",
      avatar: "LM"
    },
    {
      id: 4,
      name: "Camille Rousseau",
      role: "Maman solo",
      rating: 5,
      comment: "Être maman célibataire, c'est jongler avec le budget. Mindly m'a permis d'offrir un soutien scolaire de qualité à mon fils sans me ruiner. Il adore son 'prof virtuel' qui ne le juge jamais !",
      savings: "Économie de 2000€/an",
      subject: "Anglais",
      avatar: "CR"
    },
    {
      id: 5,
      name: "Anaïs Dubois",
      role: "Étudiante en 1ère",
      rating: 5,
      comment: "J'avais des lacunes énormes en français et mes parents stressaient pour mon bac. Avec Mindly, j'ai rattrapé mon niveau en quelques mois. L'IA me donne confiance et s'adapte à ma façon d'apprendre. Génial !",
      savings: "Économie de 1200€/an",
      subject: "Français",
      avatar: "AD"
    },
    {
      id: 6,
      name: "Pierre Moreau",
      role: "Cadre dirigeant",
      rating: 5,
      comment: "L'efficacité de Mindly surpasse tous mes espoirs. Ma fille était en échec scolaire, maintenant elle est dans le premier tiers de sa classe. L'investissement le plus rentable que j'aie fait !",
      savings: "Économie de 2800€/an",
      subject: "Physique-Chimie",
      avatar: "PM"
    },
    {
      id: 7,
      name: "Théo Lavigne",
      role: "Étudiant en BTS",
      rating: 5,
      comment: "Les maths en BTS c'est pas évident... Mindly m'accompagne tous les soirs pour mes devoirs. C'est comme avoir un prof particulier ultra patient qui coûte presque rien. Je recommande à tous mes potes !",
      savings: "Économie de 900€/an",
      subject: "Mathématiques",
      avatar: "TL"
    },
    {
      id: 8,
      name: "Isabelle Garnier",
      role: "Pharmacienne",
      rating: 5,
      comment: "Mindly comprend les difficultés de mon fils dyslexique et adapte sa méthode. Aucun professeur particulier n'avait réussi à le motiver autant. Et le prix ? Imbattable !",
      savings: "Économie de 3600€/an",
      subject: "Lecture & Écriture",
      avatar: "IG"
    },
    {
      id: 9,
      name: "Chloé Martin",
      role: "Étudiante en Prépa",
      rating: 5,
      comment: "La prépa c'est l'enfer, surtout en physique. Mindly m'aide à comprendre les concepts difficiles à mon rythme. Disponible 24h/24, c'est parfait pour mes révisions nocturnes. Mes parents sont ravis des économies !",
      savings: "Économie de 2500€/an",
      subject: "Physique",
      avatar: "CM"
    },
    {
      id: 10,
      name: "Julien Roux",
      role: "Artisan",
      rating: 5,
      comment: "Avec mon budget serré, je pensais ne jamais pouvoir offrir de soutien scolaire à mon fils. Mindly a changé la donne ! Il progresse énormément et moi je dors sur mes deux oreilles niveau budget.",
      savings: "Économie de 1600€/an",
      subject: "Toutes matières",
      avatar: "JR"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Ils ont choisi Mindly
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
          Découvrez comment des milliers de familles économisent tout en boostant les résultats scolaires de leurs enfants
        </p>
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="flex">{renderStars(5)}</div>
          <span className="text-gray-600 font-medium">4.9/5 • Plus de 10,000 familles satisfaites</span>
        </div>
      </div>

      {/* Carousel principal */}
      <div className="relative mb-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden border border-gray-100">
          {/* Icône de citation */}
          <Quote className="absolute top-6 left-6 w-12 h-12 text-red-200" />
          
          {/* Contenu de l'avis */}
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {reviews[currentReview].avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{reviews[currentReview].name}</h3>
                <p className="text-gray-600">{reviews[currentReview].role}</p>
                <div className="flex mt-1">{renderStars(reviews[currentReview].rating)}</div>
              </div>
            </div>

            <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
              "{reviews[currentReview].comment}"
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full font-semibold">
                💰 {reviews[currentReview].savings}
              </div>
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full font-semibold">
                📚 {reviews[currentReview].subject}
              </div>
            </div>
          </div>

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-40"></div>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevReview}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextReview}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center space-x-2 mb-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentReview
                ? 'bg-red-400 scale-125'
                : 'bg-gray-300 hover:bg-red-200'
            }`}
          />
        ))}
      </div>

      

      {/* Stats de confiance */}
      <div className="mt-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-red-100">Familles satisfaites</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2,800€</div>
            <div className="text-red-100">Économie moyenne/an</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">+3.2</div>
            <div className="text-red-100">Points de moyenne gagnés</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-red-100">Disponibilité IA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindlyReviews;