import React, { useState, useEffect } from 'react'

// Données JSON pour la mission et l'équipe
const companyData = {
  mission: {
    vision: "Démocratiser l'agriculture intelligente pour améliorer les vies rurales.",
    mission: "Offrir une technologie de diagnostic agricole accessible, locale et efficace.",
    valeurs: "Accessibilité, Impact social, Innovation locale, Inclusion numérique."
  },
  team: [
    {
      id: 1,
      nom: "Thierno Bocar DIENG",
      poste: "Fondateur",
      specialite: "AI/NLP Developer",
      image: "/thierno-bocar-dieng.jpg"
    },
    {
      id: 2,
      nom: "Déthié Gueye",
      poste: "Co-Fondateur",
      specialite: "Ingénieur agronome",
      image: "/dethie-gueye.jpg"
    },
    {
      id: 3,
      nom: "Ibrahima Fall",
      poste: "Co-Fondateur",
      specialite: "Ingénieur agronome",
      image: "/ibrahima-fall.jpg"
    },
    {
      id: 4,
      nom: "Cheikh Bamba Ndour",
      poste: "Lead Dev",
      specialite: "Développeur mobile",
      image: "/cheikh-bamba-ndour.jpg"
    },
    {
      id: 5,
      nom: "Seydina Mouhamed DIOP",
      poste: "Responsable Design",
      specialite: "UI/UX Design",
      image: "/seydina-mouhamed-diop.jpg"
    },
    {
      id: 6,
      nom: "Woury Ba",
      poste: "Project Manager",
      specialite: "Gestion de projet",
      image: "/woury-ba.jpg"
    },
    {
      id: 7,
      nom: "Elimane Gning",
      poste: "Développeur BackEnd",
      specialite: "Développement Backend",
      image: "/eliman-gning.jpg"
    },
    {
      id: 8,
      nom: "Ibrahima Gabar Diop",
      poste: "Lead AI/Computer Vision",
      specialite: "AI Developer",
      image: "/ibrahima-gabar-diop.jpg"
    },
    {
      id: 9,
      nom: "Mouhamadou Fadal Ndiaye",
      poste: "Développeur Full Stack",
      specialite: "Développement Full Stack Web",
      image: "/fadal-ndiaye.jpg"
    }
  ]
}

// Composants SVG avec les couleurs du thème
const VisionIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#visionGradient)" />
    <circle cx="32" cy="32" r="12" fill="white" />
    <circle cx="32" cy="32" r="6" fill="#10B981" />
    <circle cx="35" cy="29" r="2" fill="white" />
  </svg>
)

const MissionIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#missionGradient)" />
    <path d="M32 16 L38 28 L50 28 L40 36 L44 48 L32 42 L20 48 L24 36 L14 28 L26 28 Z" fill="white" />
  </svg>
)

const ValuesIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <defs>
      <linearGradient id="valuesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#valuesGradient)" />
    <path d="M32 18 C25 18 20 24 20 32 C20 40 25 46 32 46 C39 46 44 40 44 32 C44 24 39 18 32 18 Z M32 42 C27 42 24 38 24 32 C24 26 27 22 32 22 C37 22 40 26 40 32 C40 38 37 42 32 42 Z" fill="white" />
    <path d="M28 28 L30 32 L36 26" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <defs>
      <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#userGradient)" />
    <circle cx="32" cy="24" r="8" fill="white" />
    <path d="M16 52 C16 44 23 38 32 38 C41 38 48 44 48 52" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
)

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-500">
    <path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H14V9H19V21Z" />
  </svg>
)

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const membersPerPage = 5
  const totalPages = Math.ceil(companyData.team.length / membersPerPage)

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [totalPages])

  const getCurrentMembers = () => {
    const start = currentIndex * membersPerPage
    const end = start + membersPerPage
    return companyData.team.slice(start, end)
  }

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex)
  }

  return (
    <section id='about' className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header avec animation */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <LeafIcon />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Qui sommes-nous ?
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="mb-6">
                <span className="font-semibold text-emerald-600">Pest AI</span> est une filiale de{' '}
                <span className="font-semibold text-emerald-600">AVIX</span> (Agriculture Vétérinaire Intelligente pour l'eXcellence), 
                un acteur engagé dans la transformation du secteur agricole et vétérinaire en Afrique par les technologies intelligentes.
              </p>
              <p className="text-green-700 font-medium">
                Notre mission est de démocratiser l'agritech pour les communautés rurales en intégrant des outils puissants 
                d'intelligence artificielle, une interface vocale en langue locale (comme le wolof), et des données agronomiques 
                adaptées au contexte africain.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cards Vision, Mission, Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="flex justify-center mb-6">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <VisionIcon />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600 text-center">Vision</h3>
              <p className="text-gray-700 text-center leading-relaxed">{companyData.mission.vision}</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="flex justify-center mb-6">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <MissionIcon />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600 text-center">Mission</h3>
              <p className="text-gray-700 text-center leading-relaxed">{companyData.mission.mission}</p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="flex justify-center mb-6">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <ValuesIcon />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600 text-center">Valeurs</h3>
              <p className="text-gray-700 text-center leading-relaxed">{companyData.mission.valeurs}</p>
            </div>
          </div>
        </div>
        
        {/* Section Équipe */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Texte à gauche */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Notre équipe 
              <span className="text-emerald-600"> talentueuse</span> & 
              <span className="text-emerald-600"> créative</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ces personnes travaillent pour rendre notre produit exceptionnel et révolutionner l'agriculture africaine.
            </p>
  
          </div>

          {/* Mosaïque d'équipe à droite */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Grid en mosaïque */}
              <div className="grid grid-cols-3 gap-4 h-96">
                {getCurrentMembers().slice(0, 5).map((member, index) => {
                  // Définir les tailles et positions pour créer une mosaïque
                  let gridClass = "";
                  let sizeClass = "";
                  
                  switch(index) {
                    case 0: // Grand carré en haut à gauche
                      gridClass = "col-span-2 row-span-2";
                      sizeClass = "h-full";
                      break;
                    case 1: // Petit carré en haut à droite
                      gridClass = "col-span-1 row-span-1";
                      sizeClass = "h-full";
                      break;
                    case 2: // Petit carré au milieu à droite
                      gridClass = "col-span-1 row-span-1";
                      sizeClass = "h-full";
                      break;
                    case 3: // Rectangle en bas à gauche
                      gridClass = "col-span-1 row-span-1";
                      sizeClass = "h-full";
                      break;
                    case 4: // Rectangle en bas à droite
                      gridClass = "col-span-2 row-span-1";
                      sizeClass = "h-full";
                      break;
                    default:
                      gridClass = "col-span-1 row-span-1";
                      sizeClass = "h-full";
                  }

                  return (
                    <div 
                      key={member.id} 
                      className={`${gridClass} ${sizeClass} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Image de fond */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600">
                        <img 
                          src={member.image} 
                          alt={member.nom}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        {/* Fallback icon */}
                        <div className="absolute inset-0 hidden items-center justify-center p-4">
                          <UserIcon />
                        </div>
                      </div>
                      
                      {/* Overlay avec informations */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h4 className="font-bold text-sm mb-1 leading-tight">{member.nom}</h4>
                          <div className="bg-emerald-500 text-white px-2 py-1 rounded text-xs font-medium mb-1 inline-block">
                            {member.poste}
                          </div>
                          <p className="text-xs text-gray-200">{member.specialite}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Indicateurs de pagination */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-emerald-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Statistiques de l'équipe */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="text-emerald-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {companyData.team.length} membres dans l'équipe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section décorative */}
        <div className="mt-20 text-center">
          <div className="bg-emerald-600 rounded-2xl p-8 shadow-xl">
            <h4 className="text-white text-2xl font-bold mb-4">
              Révolutionnons l'agriculture ensemble
            </h4>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Rejoignez-nous dans notre mission de transformer l'agriculture africaine grâce à l'intelligence artificielle 
              et aux technologies innovantes adaptées aux besoins locaux.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}