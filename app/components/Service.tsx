'use client'
import React, { useState } from 'react'
import SectionTitle from './SectionTitle'

// Données JSON pour les services
const servicesData = {
  header: {
    title: "Nos Services à Valeur Ajoutée",
    subtitle: "Des prestations complémentaires pour maximiser votre succès agricole"
  },
  services: [
    {
      id: 1,
      title: "Études de terrain",
      description: "Réalisation d'enquêtes sur les cultures, maladies et rendements par zone pour une compréhension approfondie de votre environnement agricole.",
      icon: "search",
      color: "bg-pest-highlight",
      features: ["Enquêtes personnalisées", "Analyse des sols", "Cartographie des zones"]
    },
    {
      id: 2,
      title: "Base de données maladies et ravageurs",
      description: "Accès à un référentiel complet avec mise à jour permanente des dernières menaces phytosanitaires.",
      icon: "database",
      color: "bg-pest-highlight",
      features: ["Référentiel complet", "Mise à jour en temps réel", "Fiches techniques détaillées"]
    },
    {
      id: 3,
      title: "Consulting & formations",
      description: "Accompagnement personnalisé des coopératives, instituts et ONG pour optimiser leurs pratiques agricoles.",
      icon: "training",
      color: "bg-pest-highlight",
      features: ["Formation sur mesure", "Accompagnement terrain", "Certification des pratiques"]
    },
    {
      id: 4,
      title: "API & intégration",
      description: "Connexion transparente à vos systèmes internes via notre API robuste et sécurisée.",
      icon: "api",
      color: "bg-pest-highlight",
      features: ["API REST complète", "Documentation détaillée", "Support technique 24/7"]
    }
  ]
}

// Types pour TypeScript
type IconName = 'search' | 'database' | 'training' | 'api'

// Composants SVG simplifiés avec couleurs unies
const SearchIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.3" />
    <path d="M34 34 L48 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
)

const DatabaseIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <ellipse cx="32" cy="16" rx="20" ry="8" fill="currentColor" />
    <ellipse cx="32" cy="32" rx="20" ry="8" fill="currentColor" />
    <ellipse cx="32" cy="48" rx="20" ry="8" fill="currentColor" />
    <path d="M12 16 L12 48" stroke="currentColor" strokeWidth="2" />
    <path d="M52 16 L52 48" stroke="currentColor" strokeWidth="2" />
    <path d="M12 32 L52 32" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
)

const TrainingIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <rect x="8" y="16" width="48" height="32" rx="4" fill="currentColor" />
    <rect x="12" y="20" width="40" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="55" r="3" fill="currentColor" />
    <circle cx="32" cy="55" r="3" fill="currentColor" />
    <circle cx="44" cy="55" r="3" fill="currentColor" />
    <path d="M16 24 L24 32 L20 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 26 L48 26 M28 30 L44 30 M28 34 L40 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ApiIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8">
    <rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" />
    <path d="M16 20 L48 20" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="16" r="2" fill="currentColor" />
    <circle cx="28" cy="16" r="2" fill="currentColor" />
    <circle cx="36" cy="16" r="2" fill="currentColor" />
    <path d="M16 28 L20 32 L16 36 M24 36 L28 36 M32 28 L36 36 M40 28 L44 28 L44 36 L40 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 42 L48 42 M16 46 L40 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// Fonction pour récupérer les icônes
const getIcon = (iconName: string): React.JSX.Element => {
  const icons: Record<IconName, React.JSX.Element> = {
    search: <SearchIcon />,
    database: <DatabaseIcon />,
    training: <TrainingIcon />,
    api: <ApiIcon />
  }
  
  const validIconName = iconName as IconName
  return icons[validIconName] || icons.search
}

// Icône de service général
const ServiceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-pest-accent">
    <path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V14L9 16V21C9 22.1 9.9 23 11 23H13C14.1 23 15 22.1 15 21V16L13 14V11C14.1 11 15 10.1 15 9C15 7.9 14.1 7 13 7C11.9 7 11 7.9 11 9Z" />
  </svg>
)

export default function Service() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services" className="min-h-screen bg-pest-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}

          <SectionTitle
                                title={servicesData.header.title}
                                subtitle={servicesData.header.subtitle}
                            />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-pest-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-pest border border-pest-gray-200 hover:shadow-pest-md hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                
                {/* Icône */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} shadow-pest-sm text-pest-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(service.icon)}
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-pest-accent group-hover:text-pest-primary-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-pest-gray-600 mb-6 leading-relaxed group-hover:text-pest-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Fonctionnalités */}
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${service.color}`}></div>
                        <span className="text-sm text-pest-gray-600 group-hover:text-pest-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Indicateur de hover */}
                <div className={`absolute bottom-0 left-0 w-full h-1 ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-pest-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
                  Service Premium
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}