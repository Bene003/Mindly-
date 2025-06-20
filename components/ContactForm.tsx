
"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeMethod, setActiveMethod] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      subtitle: 'Réponse sous 24h',
      action: () => window.location.href = "mailto:capitalhype6@gmail.com",
      gradient: 'from-blue-500 to-purple-600',
      hoverGradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Téléphone',
      subtitle: 'Lun-Ven 9h-18h',
      action: () => window.location.href = "tel:+1234567890",
      gradient: 'from-green-500 to-teal-600',
      hoverGradient: 'from-green-600 to-teal-700'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header avec animation */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="relative inline-block">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Contactez-nous
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
          Nous sommes là pour vous aider. Choisissez votre méthode de contact préférée.
        </p>
      </div>

      {/* Cards de contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {contactMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <div
              key={method.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                activeMethod === method.id ? 'scale-105' : ''
              }`}
              onClick={method.action}
              onMouseEnter={() => setActiveMethod(method.id)}
              onMouseLeave={() => setActiveMethod(null)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  activeMethod === method.id ? method.hoverGradient : method.gradient
                } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.gradient} mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      

      {/* Informations supplémentaires */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="flex items-center justify-center space-x-3 text-gray-600">
          <MapPin className="w-5 h-5 text-red-500" />
          <span>Paris, France</span>
        </div>
        <div className="flex items-center justify-center space-x-3 text-gray-600">
          <Clock className="w-5 h-5 text-red-500" />
          <span>Réponse garantie sous 24h</span>
        </div>
      </div>

      {/* Particules flottantes pour l'effet visuel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-25 animate-bounce"></div>
      </div>
    </div>
  );
};

export default ContactForm;
