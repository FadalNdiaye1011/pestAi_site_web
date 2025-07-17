"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

// Données JSON pour les solutions
const solutionsData = {
  header: {
    title: "Nos Solutions",
    subtitle:
      "Découvrez nos fonctionnalités innovantes conçues pour révolutionner l'agriculture africaine",
  },
  solutions: [
    {
      id: 1,
      title: "Diagnostic intelligent IA",
      description:
        "Identifiez maladies et ravageurs grâce à notre modèle IA entraîné sur des milliers d'images terrain.",
      icon: "brain",
      color: "bg-pest-highlight",
    },
    {
      id: 2,
      title: "Recommandations adaptées",
      description:
        "Recevez des conseils biologiques, culturels et chimiques, contextualisés à votre culture.",
      icon: "lightbulb",
      color: "bg-pest-highlight",
    },
    {
      id: 3,
      title: "Synthèse vocale en wolof",
      description:
        "Un assistant vocal lit les diagnostics dans la langue locale.",
      icon: "volume",
      color: "bg-pest-highlight",
    },
    {
      id: 4,
      title: "Suivi météo et alertes",
      description:
        "Soyez notifié des risques météorologiques ou phytosanitaires.",
      icon: "weather",
      color: "bg-pest-highlight",
    },
    {
      id: 5,
      title: "Tableau de bord",
      description:
        "Suivez vos cultures, vos historiques de diagnostic et vos performances.",
      icon: "dashboard",
      color: "bg-pest-highlight",
    },
    {
      id: 6,
      title: "Plateforme analytique",
      description:
        "Explorez les tendances maladies, ravageurs, rendements par région.",
      icon: "analytics",
      color: "bg-pest-highlight",
    },
  ],
};

// Types pour une meilleure sécurité TypeScript
type IconName =
  | "brain"
  | "lightbulb"
  | "volume"
  | "weather"
  | "dashboard"
  | "analytics";

// Composants SVG simplifiés avec couleurs unies
const BrainIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path
      d="M32 8 C20 8 12 16 12 28 C12 32 14 36 16 38 C16 42 18 46 22 48 C26 50 30 50 32 50 C34 50 38 50 42 48 C46 46 48 42 48 38 C50 36 52 32 52 28 C52 16 44 8 32 8 Z M32 12 C42 12 48 18 48 28 C48 30 47 32 46 34 C44 32 42 30 40 30 C38 30 36 32 36 34 C36 36 38 38 40 38 C42 38 44 36 46 34 C46 38 44 42 40 44 C36 46 32 46 32 46 C32 46 28 46 24 44 C20 42 18 38 18 34 C20 36 22 38 24 38 C26 38 28 36 28 34 C28 32 26 30 24 30 C22 30 20 32 18 34 C17 32 16 30 16 28 C16 18 22 12 32 12 Z"
      fill="currentColor"
    />
    <circle cx="26" cy="24" r="2" fill="white" />
    <circle cx="38" cy="24" r="2" fill="white" />
  </svg>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path
      d="M32 8 C24 8 18 14 18 22 C18 26 20 30 22 32 C24 34 24 36 24 38 L40 38 C40 36 40 34 42 32 C44 30 46 26 46 22 C46 14 40 8 32 8 Z M28 42 L36 42 L36 46 L28 46 Z M30 50 L34 50 C35 50 36 51 36 52 C36 53 35 54 34 54 L30 54 C29 54 28 53 28 52 C28 51 29 50 30 50 Z"
      fill="currentColor"
    />
    <path
      d="M32 12 L32 18 M22 18 L26 22 M42 18 L38 22 M18 32 L24 32 M46 32 L40 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M16 20 L16 44 L24 44 L36 52 L36 12 L24 20 Z" fill="currentColor" />
    <path
      d="M42 20 C46 24 46 40 42 44 M46 16 C52 22 52 42 46 48 M50 12 C58 18 58 46 50 52"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const WeatherIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <circle cx="20" cy="20" r="8" fill="currentColor" />
    <path
      d="M12 28 C8 28 6 32 6 36 C6 40 8 44 12 44 L48 44 C52 44 56 40 56 36 C56 32 52 28 48 28 C48 20 40 14 32 14 C28 14 24 16 22 20"
      fill="currentColor"
    />
    <path
      d="M20 48 L18 54 M26 48 L24 54 M32 48 L30 54 M38 48 L36 54 M44 48 L42 54"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DashboardIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <rect x="8" y="8" width="48" height="48" rx="4" fill="currentColor" />
    <rect x="12" y="12" width="18" height="12" rx="2" fill="white" />
    <rect x="34" y="12" width="18" height="12" rx="2" fill="white" />
    <rect x="12" y="28" width="18" height="24" rx="2" fill="white" />
    <rect x="34" y="28" width="18" height="10" rx="2" fill="white" />
    <rect x="34" y="42" width="18" height="10" rx="2" fill="white" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <rect x="8" y="40" width="8" height="16" fill="currentColor" />
    <rect x="20" y="28" width="8" height="28" fill="currentColor" />
    <rect x="32" y="16" width="8" height="40" fill="currentColor" />
    <rect x="44" y="24" width="8" height="32" fill="currentColor" />
    <path
      d="M8 20 L20 16 L32 12 L44 8 L56 16"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="20" r="3" fill="currentColor" />
    <circle cx="20" cy="16" r="3" fill="currentColor" />
    <circle cx="32" cy="12" r="3" fill="currentColor" />
    <circle cx="44" cy="8" r="3" fill="currentColor" />
    <circle cx="56" cy="16" r="3" fill="currentColor" />
  </svg>
);

const getIcon = (iconName: string): React.JSX.Element => {
  const icons: Record<IconName, React.JSX.Element> = {
    brain: <BrainIcon />,
    lightbulb: <LightbulbIcon />,
    volume: <VolumeIcon />,
    weather: <WeatherIcon />,
    dashboard: <DashboardIcon />,
    analytics: <AnalyticsIcon />,
  };

  const validIconName = iconName as IconName;
  return icons[validIconName] || icons.brain;
};

const PlantIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-pest-accent">
    <path
      fill="currentColor"
      d="M12 2C12.8 2 13.5 2.7 13.5 3.5C13.5 4.3 12.8 5 12 5S10.5 4.3 10.5 3.5C10.5 2.7 11.2 2 12 2M18 14.5V16.5C18 17.3 17.3 18 16.5 18H7.5C6.7 18 6 17.3 6 16.5V14.5C6 13.7 6.7 13 7.5 13H16.5C17.3 13 18 13.7 18 14.5M12 19L12 23L14 21H10L12 19Z"
    />
  </svg>
);

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="solutions" className="min-h-screen bg-pest-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionTitle
          title={solutionsData.header.title}
          subtitle={solutionsData.header.subtitle}
        />

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-pest-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-pest border border-pest-gray-200 hover:shadow-pest-md hover:-translate-y-3 transition-all duration-500 h-full relative overflow-hidden">
                {/* Icône */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div
                    className={`p-4 rounded-2xl ${solution.color} shadow-pest-sm text-pest-white transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {getIcon(solution.icon)}
                  </div>
                </div>

                {/* Contenu */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold mb-4 text-pest-accent group-hover:text-pest-primary-dark transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-pest-gray-600 leading-relaxed group-hover:text-pest-gray-700 transition-colors duration-300">
                    {solution.description}
                  </p>
                </div>

                {/* Indicateur de hover */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-pest-primary rounded-3xl p-12 shadow-pest-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-pest-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h4 className="text-pest-white text-3xl font-bold mb-6">
                Prêt à révolutionner votre agriculture ?
              </h4>
              <p className="text-pest-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Découvrez comment nos solutions peuvent transformer votre façon
                de cultiver et optimiser vos rendements avec l'intelligence
                artificielle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-pest-highlight text-pest-white px-8 py-4 rounded-xl font-semibold hover:text-pest-highlight hover:bg-pest-white hover:scale-105 transition-all duration-300 shadow-pest">
                  Tester la démo
                </button>
                <button className="bg-transparent border-2 border-pest-white text-pest-white px-8 py-4 rounded-xl font-semibold hover:bg-pest-white hover:text-pest-primary transition-all duration-300">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-pest-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-pest border border-pest-gray-200">
            <div className="text-4xl font-bold text-pest-primary mb-2">25%</div>
            <div className="text-pest-gray-600">de pesticides économisés</div>
          </div>
          <div className="text-center bg-pest-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-pest border border-pest-gray-200">
            <div className="text-4xl font-bold text-pest-primary mb-2">30%</div>
            <div className="text-pest-gray-600">de pertes en moins</div>
          </div>
          <div className="text-center bg-pest-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-pest border border-pest-gray-200">
            <div className="text-4xl font-bold text-pest-primary mb-2">
              +300K
            </div>
            <div className="text-pest-gray-600">agriculteurs ciblés</div>
          </div>
        </div>
      </div>
    </section>
  );
}
