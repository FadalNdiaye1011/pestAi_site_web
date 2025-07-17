'use client'

import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'

export default function Partenaire() {
  // Données des partenaires en JSON
  const partnersData = [
    {
      id: 1,
      name: "AVIX",
      logo: "https://via.placeholder.com/80x80/10B981/ffffff?text=AVIX",
      url: "https://avix.com",
      icon: "fas fa-leaf",
      color: "bg-pest-primary"
    },
    {
      id: 2,
      name: "FORCE N",
      logo: "https://via.placeholder.com/80x80/3B82F6/ffffff?text=FN",
      url: "https://forcen.com",
      icon: "fas fa-bolt",
      color: "bg-pest-secondary"
    },
    {
      id: 3,
      name: "GGGI",
      logo: "https://via.placeholder.com/80x80/059669/ffffff?text=GGGI",
      url: "https://gggi.org",
      icon: "fas fa-globe",
      color: "bg-pest-accent"
    },
    {
      id: 4,
      name: "Ignite.e",
      logo: "https://via.placeholder.com/80x80/F97316/ffffff?text=IGN",
      url: "https://ignite.com",
      icon: "fas fa-fire",
      color: "bg-pest-highlight"
    },
    {
      id: 5,
      name: "IHaske Ventures",
      logo: "https://via.placeholder.com/80x80/8B5CF6/ffffff?text=IHV",
      url: "https://ihaskeventures.com",
      icon: "fas fa-rocket",
      color: "bg-pest-primary-dark"
    },
    {
      id: 6,
      name: "GPES",
      logo: "https://via.placeholder.com/80x80/EF4444/ffffff?text=GPES",
      url: "https://gpes.com",
      icon: "fas fa-handshake",
      color: "bg-pest-secondary-dark"
    },
    {
      id: 7,
      name: "Challenge Hub",
      logo: "https://via.placeholder.com/80x80/6366F1/ffffff?text=CH",
      url: "https://challengehub.com",
      icon: "fas fa-cogs",
      color: "bg-pest-gray-600"
    },
    {
      id: 8,
      name: "DER/FJ",
      logo: "https://via.placeholder.com/80x80/EAB308/ffffff?text=DER",
      url: "https://der-fj.com",
      icon: "fas fa-star",
      color: "bg-pest-gray-700"
    },
    {
      id: 9,
      name: "HEC Challenge +",
      logo: "https://via.placeholder.com/80x80/EC4899/ffffff?text=HEC",
      url: "https://hec-challenge.com",
      icon: "fas fa-trophy",
      color: "bg-pest-gray-800"
    },
    {
      id: 10,
      name: "Ambassade France",
      logo: "https://via.placeholder.com/80x80/2563EB/ffffff?text=FR",
      url: "https://ambassade-france.com",
      icon: "fas fa-flag",
      color: "bg-pest-gray-900"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Carrousel automatique
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const itemsPerSlide = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 3 : 2
        const maxIndex = Math.ceil(partnersData.length / itemsPerSlide) - 1
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, partnersData.length])

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5
      if (window.innerWidth >= 768) return 3
      return 2
    }
    return 5
  }

  const itemsPerSlide = getItemsPerSlide()
  const maxIndex = Math.ceil(partnersData.length / itemsPerSlide) - 1

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getCurrentSlidePartners = () => {
    const startIndex = currentIndex * itemsPerSlide
    return partnersData.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="py-20 bg-pest-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionTitle 
                  title="Nos Partenaires" 
                  subtitle="Ils nous font confiance et nous accompagnent dans notre mission"
                />

        {/* Carrousel */}
        <div className="relative">
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partnersData.length / itemsPerSlide) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
                    {partnersData
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((partner) => (
                        <div
                          key={partner.id}
                          className="bg-pest-white p-6 rounded-xl shadow-pest hover:shadow-pest-md transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                          onClick={() => window.open(partner.url, '_blank')}
                        >
                          <div className="text-center">
                            <div className="relative mb-4">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-16 h-16 mx-auto rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  // Fallback vers l'icône si l'image ne charge pas
                                  e.target.style.display = 'none'
                                  e.target.nextSibling.style.display = 'flex'
                                }}
                              />
                              <div 
                                className={`w-16 h-16 ${partner.color} rounded-full hidden items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                              >
                                <i className={`${partner.icon} text-pest-white text-xl`}></i>
                              </div>
                            </div>
                            <p className="font-semibold text-sm text-pest-gray-800 group-hover:text-pest-primary transition-colors duration-300">
                              {partner.name}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contrôles de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pest-white/80 hover:bg-pest-white text-pest-gray-800 p-3 rounded-full shadow-pest transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pest-white/80 hover:bg-pest-white text-pest-gray-800 p-3 rounded-full shadow-pest transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pest-primary scale-125' 
                    : 'bg-pest-gray-300 hover:bg-pest-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ajout de FontAwesome pour les icônes */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </section>
  )
}