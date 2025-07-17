'use client'
import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ eco: 0, econ: 0, social: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    // Animation des compteurs
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const ecoTarget = 25
      const econTarget = 30
      
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        setCounters({
          eco: Math.round(ecoTarget * easeOut),
          econ: Math.round(econTarget * easeOut),
          social: progress > 0.5 ? 1 : 0
        })
        
        if (step >= steps) clearInterval(timer)
      }, duration / steps)
    }
    
    const timeout = setTimeout(animateCounters, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="impact" className="py-20 bg-pest-bg-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
                <SectionTitle
                        title="Notre Impact" 
                        subtitle="Des bénéfices mesurables pour l'environnement, l'économie et la société"
                    />
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Impact Écologique */}
          <div className={`relative group transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-pest-white p-8 rounded-3xl shadow-pest-lg hover:shadow-pest-xl transform hover:-translate-y-3 transition-all duration-500 border border-pest-gray-200 hover:border-pest-accent relative overflow-hidden">
              <div className="absolute inset-0 bg-pest-bg-medium opacity-50"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-pest-accent rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-pest-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-pest-accent animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-pest-accent">Écologique</h3>
                <div className="text-6xl font-bold text-pest-accent mb-2 relative">
                  {counters.eco}%
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pest-accent-light rounded-full animate-ping"></div>
                </div>
                <p className="text-pest-gray-600 text-lg font-medium">Réduction de l'usage des pesticides</p>
                
                {/* SVG décoratif */}
                <svg className="absolute -bottom-5 -right-5 w-20 h-20 text-pest-gray-200 opacity-30 group-hover:opacity-60 transition-opacity duration-300" fill="currentColor" viewBox="0 0 100 100">
                  <path d="M50 10 Q80 40 50 70 Q20 40 50 10z"/>
                  <circle cx="50" cy="35" r="3" fill="currentColor"/>
                  <circle cx="40" cy="45" r="2" fill="currentColor"/>
                  <circle cx="60" cy="45" r="2" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Impact Économique */}
          <div className={`relative group transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-pest-white p-8 rounded-3xl shadow-pest-lg hover:shadow-pest-xl transform hover:-translate-y-3 transition-all duration-500 border border-pest-gray-200 hover:border-pest-highlight relative overflow-hidden">
              <div className="absolute inset-0 bg-pest-bg-medium opacity-50"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-pest-highlight rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-pest-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-pest-highlight" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-pest-highlight">Économique</h3>
                <div className="text-6xl font-bold text-pest-highlight mb-2 relative">
                  {counters.econ}%
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pest-highlight rounded-full animate-ping"></div>
                </div>
                <p className="text-pest-gray-600 text-lg font-medium">Amélioration du rendement, pertes réduites</p>
                
                {/* SVG décoratif */}
                <svg className="absolute -bottom-5 -right-5 w-20 h-20 text-pest-gray-200 opacity-30 group-hover:opacity-60 transition-opacity duration-300" fill="currentColor" viewBox="0 0 100 100">
                  <rect x="10" y="60" width="15" height="30" rx="2"/>
                  <rect x="30" y="40" width="15" height="50" rx="2"/>
                  <rect x="50" y="20" width="15" height="70" rx="2"/>
                  <rect x="70" y="30" width="15" height="60" rx="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Impact Social */}
          <div className={`relative group transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-pest-white p-8 rounded-3xl shadow-pest-lg hover:shadow-pest-xl transform hover:-translate-y-3 transition-all duration-500 border border-pest-gray-200 hover:border-pest-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-pest-bg-medium opacity-50"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-pest-primary rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-pest-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-pest-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73C8.93 13.14 10.37 12.75 12 12.75zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58-.74.32-1.22 1.04-1.22 1.85V18H24v-1.61c0-.83-.23-1.61-.63-2.29zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-pest-primary">Social</h3>
                <div className="text-4xl font-bold text-pest-primary mb-2 relative">
                  {counters.social ? (
                    <span className="inline-flex items-center">
                      Inclusion
                      <svg className="w-8 h-8 ml-2 text-pest-primary-light" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </span>
                  ) : (
                    <span className="opacity-30">Inclusion</span>
                  )}
                </div>
                <p className="text-pest-gray-600 text-lg font-medium">Accès facilité aux diagnostics vocaux, inclusion des femmes rurales</p>
                
                {/* SVG décoratif */}
                <svg className="absolute -bottom-5 -right-5 w-20 h-20 text-pest-gray-200 opacity-30 group-hover:opacity-60 transition-opacity duration-300" fill="currentColor" viewBox="0 0 100 100">
                  <circle cx="30" cy="30" r="12"/>
                  <circle cx="70" cy="30" r="12"/>
                  <circle cx="50" cy="70" r="12"/>
                  <path d="M30 42 L50 58 L70 42" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}