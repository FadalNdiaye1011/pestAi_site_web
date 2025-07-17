'use client'

import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Données JSON des témoignages
  const testimonials = [
    {
      id: 1,
      name: "Amadou Ba",
      role: "Agriculteur, Thiès",
      quote: "Avant Pest AI, je perdais 40% de mes récoltes... aujourd'hui, je sais agir vite.",
      avatar: "AB",
      rating: 5,
      location: "Thiès",
      crop: "Mil",
      color: "bg-pest-highlight"
    },
    {
      id: 2,
      name: "Fatou Diop",
      role: "Coopérative des Niayes",
      quote: "L'application en wolof nous aide énormément. Mes rendements se sont améliorés de 35%.",
      avatar: "FD",
      rating: 5,
      location: "Niayes",
      crop: "Légumes",
      color: "bg-pest-highlight"
    },
    {
      id: 3,
      name: "Moussa Sow",
      role: "Producteur de tomates",
      quote: "Grâce à PestAI, je détecte les maladies plus tôt et j'économise sur les traitements.",
      avatar: "MS",
      rating: 4,
      location: "Kaolack",
      crop: "Tomates",
      color: "bg-pest-highlight"
    },
    {
      id: 4,
      name: "Aissatou Ndiaye",
      role: "Productrice de riz",
      quote: "Cette technologie a révolutionné ma façon de cultiver. Les diagnostics sont précis !",
      avatar: "AN",
      rating: 3,
      location: "Saint-Louis",
      crop: "Riz",
      color: "bg-pest-highlight"
    },
    {
      id: 5,
      name: "Ousmane Diallo",
      role: "Maraîcher",
      quote: "Même sans savoir lire, je peux utiliser l'app grâce à la synthèse vocale. Formidable !",
      avatar: "OD",
      rating: 5,
      location: "Ziguinchor",
      crop: "Maraîchage",
      color: "bg-pest-highlight"
    },
    {
      id: 6,
      name: "Mariama Sy",
      role: "Présidente coopérative",
      quote: "PestAI a permis à notre coopérative d'augmenter ses revenus de 50%. Merci !",
      avatar: "MS",
      rating: 5,
      location: "Tambacounda",
      crop: "Sésame",
      color: "bg-pest-highlight"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsAnimating(false)
    }, 300)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length
      visible.push({ ...testimonials[index], position: i })
    }
    return visible
  }

  return (
    <section id="temoignages" className="py-20 bg-pest-bg-light relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-20 left-10 w-16 h-16 text-pest-gray-300 animate-spin" style={{animationDuration: '15s'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute bottom-20 right-20 w-20 h-20 text-pest-gray-300 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <SectionTitle
                    title="Témoignages" 
                    subtitle="Ce que disent nos utilisateurs sur le terrain"
                  />
          
          {/* Statistiques rapides */}
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pest-highlight">500+</div>
              <div className="text-sm text-pest-gray-500">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pest-accent">4.9</div>
              <div className="text-sm text-pest-gray-500">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pest-secondary">40%</div>
              <div className="text-sm text-pest-gray-500">Amélioration moyenne</div>
            </div>
          </div>
        </div>
        
        {/* Slider principal */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transform transition-all duration-500 ${
                  isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                } ${index === 1 ? 'lg:scale-105 lg:z-10' : ''}`}
              >
                <div className="bg-pest-white p-8 rounded-3xl shadow-pest hover:shadow-pest-md transition-all duration-500 border border-pest-gray-200 hover:border-pest-accent relative overflow-hidden group">
                  {/* Fond */}
                  <div className={`absolute inset-0 ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Header avec avatar */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center mr-4 shadow-pest-sm`}>
                        <span className="text-pest-white font-bold text-lg">{testimonial.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-pest-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-pest-gray-600 mb-1">{testimonial.role}</p>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-pest-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span className="text-xs text-pest-gray-500">{testimonial.location}</span>
                        
                        </div>
                      </div>
                    </div>
                    
                    {/* Étoiles */}
                    <div className="flex mb-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-pest-highlight" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <div className="relative">
                      <svg className="absolute -top-2 -left-2 w-8 h-8 text-pest-gray-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35L8.945 5.5c-.014.07-.051.131-.088.182-.325.38-.567.726-.775 1.023-.208.302-.341.599-.341.944v.345c-.135.015-.273.022-.411.022-.688 0-1.275-.36-1.275-1.016 0-.435.264-.825.705-1.022.22-.098.448-.144.681-.144.683 0 1.351.43 1.351 1.172 0 .742-.668 1.172-1.351 1.172zm6.5 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35L14.945 5.5c-.014.07-.051.131-.088.182-.325.38-.567.726-.775 1.023-.208.302-.341.599-.341.944v.345c-.135.015-.273.022-.411.022-.688 0-1.275-.36-1.275-1.016 0-.435.264-.825.705-1.022.22-.098.448-.144.681-.144.683 0 1.351.43 1.351 1.172 0 .742-.668 1.172-1.351 1.172z"/>
                      </svg>
                      <p className="text-pest-gray-700 italic leading-relaxed pl-6 pr-2">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                  
                  {/* Élément décoratif */}
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-pest-gray-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-pest-white rounded-full shadow-pest hover:shadow-pest-md flex items-center justify-center text-pest-gray-600 hover:text-pest-primary transition-all duration-300 disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-pest-white rounded-full shadow-pest hover:shadow-pest-md flex items-center justify-center text-pest-gray-600 hover:text-pest-primary transition-all duration-300 disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-pest-accent scale-125'
                  : 'bg-pest-gray-300 hover:bg-pest-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-pest-gray-600 mb-6">
            Rejoignez des centaines d'agriculteurs qui transforment leur agriculture !
          </p>
          <button className="bg-pest-primary text-pest-white px-8 py-3 rounded-full font-semibold hover:bg-pest-primary-dark transform hover:scale-105 transition-all duration-300 shadow-pest hover:shadow-pest-md">
            Télécharger PestAI
          </button>
        </div>
      </div>
    </section>
  )
}