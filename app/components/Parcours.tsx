'use client'

import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'

export default function Parcours() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    // Animation séquentielle des étapes
    const timer = setInterval(() => {
      setVisibleSteps(prev => {
        if (prev.length < 6) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 200)

    // Animation du step actuel
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 6)
    }, 2000)

    return () => {
      clearInterval(timer)
      clearInterval(stepTimer)
    }
  }, [])

  const steps = [
    {
      number: 1,
      title: "Téléchargement",
      description: "Téléchargez l'application PestAI depuis Google Play ou App Store",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      ),
      color: "bg-pest-highlight",
      bgColor: "bg-pest-bg-light"
    },
    {
      number: 2,
      title: "Profil",
      description: "Créez votre profil (zone, type de culture)",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      color: "bg-pest-highlight",
      bgColor: "bg-pest-bg-light"
    },
    {
      number: 3,
      title: "Photo",
      description: "Prenez une photo de votre culture suspecte",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM17.5 9L16 6.5 14.5 9H7V18h10V9h.5zM20 6h-2.5l-1.5-2h-8L6.5 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      color: "bg-pest-highlight",
      bgColor: "bg-pest-bg-light"
    },
    {
      number: 4,
      title: "Analyse IA",
      description: "L'IA analyse l'image et détecte la maladie/ravageur",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      color: "bg-pest-highlight",
      bgColor: "bg-pest-bg-light"
    },
    {
      number: 5,
      title: "Synthèse vocale",
      description: "Une synthèse vocale en wolof lit la recommandation",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      ),
      color: "bg-pest-highlight",
      bgColor: "bg-pest-bg-light"
    },
    {
      number: 6,
      title: "Historique",
      description: "Consultez votre historique sur le tableau de bord",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      ),
      color: "bg-pest-highlight",
      bgColor: "bg-pest-bg-light"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionTitle
                            title=" Parcours Utilisateur" 
                            subtitle="Découvrez comment utiliser PestAI en 6 étapes simples"
                          />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transform transition-all duration-700 ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Carte principale */}
              <div className={`bg-pest-white p-8 rounded-2xl shadow-pest hover:shadow-pest-md transition-all duration-500 border-2 ${
                currentStep === index ? 'border-pest-accent shadow-pest-accent/20' : 'border-pest-gray-200'
              } relative overflow-hidden group`}>
                
                {/* Fond */}
                <div className={`absolute inset-0 ${step.bgColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  {/* Numéro avec icône */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-pest-sm transform group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-pest-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Badge numéro */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-pest-accent rounded-full shadow-pest-xs flex items-center justify-center border-2 border-pest-accent">
                      <span className="text-sm font-bold text-pest-gray-700">{step.number}</span>
                    </div>
                    
                    {/* Effet de pulsation pour l'étape active */}
                    {currentStep === index && (
                      <div className="absolute inset-0 rounded-full bg-pest-accent opacity-30 animate-ping"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-pest-accent group-hover:text-pest-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-pest-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Élément décoratif SVG */}
                <svg className="absolute -bottom-3 -right-3 w-12 h-12 text-pest-gray-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              {/* Ligne de connexion entre les étapes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-pest-gray-300 z-20">
                  <div className="w-full h-full bg-pest-gray-400 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Indicateur de progression */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  visibleSteps.includes(index)
                    ? currentStep === index 
                      ? 'bg-pest-accent scale-125' 
                      : 'bg-pest-gray-300'
                    : 'bg-pest-gray-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}