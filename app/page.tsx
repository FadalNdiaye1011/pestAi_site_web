'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Service from "./components/Service";
import Impact from "./components/Impact";
import Parcours from "./components/Parcours";
import Testimonials from "./components/Testimonials";
import Partenaire from "./components/Partenaire";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<any>('accueil');
  const [isLoading, setIsLoading] = useState<any>(false);

  // Gérer le changement de page via l'URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'accueil';
      setCurrentPage(hash);
    };

    // Écouter les changements de hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Définir la page initiale
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Fonction pour changer de page avec animation
  const handlePageChange = (page:any) => {
    if (page === currentPage) return;
    
    setIsLoading(true);
    
    // Simuler un petit délai pour l'animation
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      
      // Faire défiler vers le haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  // Composant pour l'animation de chargement
  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pest-highlight"></div>
        <p className="mt-4 text-pest-primary font-medium">Chargement...</p>
      </div>
    </div>
  );

  // Fonction pour rendre le contenu selon la page
  const renderPageContent = () => {
    const pageClass = "min-h-screen animate-fadeIn";
    
    switch (currentPage) {
      case 'accueil':
        return (
          <div className={pageClass}>
            <Hero />
            <About />
            <Solutions />
            <Service />
            <Impact />
            <Parcours />
            <Testimonials />
            <Partenaire />
            <Contact />
          </div>
        );
      
      case 'about':
        return (
          <div className={pageClass}>
            <div className="pt-20"> {/* Padding pour compenser la navbar fixe */}
              <About />
              {/* Informations supplémentaires pour la page About */}
              <section className="py-20 bg-pest-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-pest-primary mb-6">
                        Notre Histoire
                      </h3>
                      <p className="text-pest-gray-700 mb-4 leading-relaxed">
                        Fondée en 2023, PEST AI est née de la vision de démocratiser l'accès aux technologies agricoles 
                        intelligentes en Afrique. Nos fondateurs, forts de leur expérience en agronomie et en intelligence 
                        artificielle, ont identifié le besoin crucial d'outils adaptés aux défis spécifiques de l'agriculture africaine.
                      </p>
                      <p className="text-pest-gray-700 mb-4 leading-relaxed">
                        Depuis notre création, nous avons développé des solutions innovantes qui combinent l'IA, 
                        les langues locales et les connaissances agronomiques traditionnelles pour créer un écosystème 
                        technologique inclusif et accessible.
                      </p>
                    </div>
                    <div className="bg-pest-white rounded-2xl p-8 shadow-lg">
                      <h4 className="text-2xl font-bold text-pest-primary mb-6">Nos Chiffres</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pest-highlight mb-2">500+</div>
                          <div className="text-pest-gray-600">Agriculteurs formés</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pest-highlight mb-2">95%</div>
                          <div className="text-pest-gray-600">Taux de satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pest-highlight mb-2">10+</div>
                          <div className="text-pest-gray-600">Partenaires</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pest-highlight mb-2">3</div>
                          <div className="text-pest-gray-600">Pays couverts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      case 'solutions':
        return (
          <div className={pageClass}>
            <div className="pt-20">
              <Solutions />
              {/* Informations supplémentaires pour Solutions */}
              <section className="py-20 bg-pest-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h3 className="text-3xl font-bold text-pest-primary mb-12 text-center">
                    Technologies Utilisées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-pest-bg-light rounded-2xl">
                      <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-white">🤖</span>
                      </div>
                      <h4 className="text-xl font-bold text-pest-primary mb-3">Intelligence Artificielle</h4>
                      <p className="text-pest-gray-700">
                        Algorithmes de machine learning pour la détection des maladies et ravageurs
                      </p>
                    </div>
                    <div className="text-center p-6 bg-pest-bg-light rounded-2xl">
                      <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-white">🗣️</span>
                      </div>
                      <h4 className="text-xl font-bold text-pest-primary mb-3">Reconnaissance Vocale</h4>
                      <p className="text-pest-gray-700">
                        Interface vocale en wolof et autres langues locales africaines
                      </p>
                    </div>
                    <div className="text-center p-6 bg-pest-bg-light rounded-2xl">
                      <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-white">📱</span>
                      </div>
                      <h4 className="text-xl font-bold text-pest-primary mb-3">Application Mobile</h4>
                      <p className="text-pest-gray-700">
                        Solution mobile intuitive adaptée aux conditions rurales
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className={pageClass}>
            <div className="pt-20">
              <Service />
              {/* Informations supplémentaires pour Services */}
              <section className="py-20 bg-pest-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h3 className="text-3xl font-bold text-pest-primary mb-12 text-center">
                    Processus de Service
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { step: "1", title: "Analyse", desc: "Diagnostic de votre situation agricole" },
                      { step: "2", title: "Recommandation", desc: "Solutions personnalisées par IA" },
                      { step: "3", title: "Formation", desc: "Accompagnement et formation" },
                      { step: "4", title: "Suivi", desc: "Monitoring continu des résultats" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">{item.step}</span>
                        </div>
                        <h4 className="text-xl font-bold text-pest-primary mb-3">{item.title}</h4>
                        <p className="text-pest-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      case 'impact':
        return (
          <div className={pageClass}>
            <div className="pt-20">
              <Impact />
              {/* Informations supplémentaires pour Impact */}
              <section className="py-20 bg-pest-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h3 className="text-3xl font-bold text-pest-primary mb-12 text-center">
                    Études de Cas
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-pest-bg-light p-8 rounded-2xl">
                      <h4 className="text-2xl font-bold text-pest-primary mb-4">
                        Coopérative de Thiès
                      </h4>
                      <p className="text-pest-gray-700 mb-4">
                        Augmentation de 40% du rendement grâce à notre système de diagnostic précoce 
                        des maladies du mil et du sorgho.
                      </p>
                      <div className="flex items-center text-pest-highlight">
                        <span className="font-semibold">200 agriculteurs impactés</span>
                      </div>
                    </div>
                    <div className="bg-pest-bg-light p-8 rounded-2xl">
                      <h4 className="text-2xl font-bold text-pest-primary mb-4">
                        Ferme Pilote de Kaolack
                      </h4>
                      <p className="text-pest-gray-700 mb-4">
                        Réduction de 60% de l'utilisation de pesticides grâce à nos recommandations 
                        de lutte biologique intégrée.
                      </p>
                      <div className="flex items-center text-pest-highlight">
                        <span className="font-semibold">500 hectares traités</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      case 'temoignages':
        return (
          <div className={pageClass}>
            <div className="pt-20">
              <Testimonials />
              {/* Témoignages supplémentaires */}
              <section className="py-20 bg-pest-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h3 className="text-3xl font-bold text-pest-primary mb-12 text-center">
                    Plus de Témoignages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        name: "Fatou Diop",
                        role: "Agricultrice, Diourbel",
                        message: "Avec PEST AI, j'ai appris à identifier les maladies de mes cultures plus rapidement. L'interface en wolof m'aide énormément."
                      },
                      {
                        name: "Moussa Sall",
                        role: "Coopérative de Louga",
                        message: "Nos rendements ont augmenté de 35% depuis que nous utilisons les recommandations de PEST AI. C'est révolutionnaire!"
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-pest-white p-8 rounded-2xl shadow-lg">
                        <p className="text-pest-gray-700 mb-6 italic">"{testimonial.message}"</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-pest-highlight rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-pest-primary">{testimonial.name}</h4>
                            <p className="text-pest-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className={pageClass}>
            <div className="pt-20">
              <Contact />
              {/* Informations de contact supplémentaires */}
              <section className="py-20 bg-pest-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-pest-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-white">📍</span>
                      </div>
                      <h4 className="text-xl font-bold text-pest-primary mb-3">Adresse</h4>
                      <p className="text-pest-gray-700">
                        Zone B, Université Cheikh Anta Diop<br />
                        Dakar, Sénégal
                      </p>
                    </div>
                    <div className="text-center p-6 bg-pest-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-white">📞</span>
                      </div>
                      <h4 className="text-xl font-bold text-pest-primary mb-3">Téléphone</h4>
                      <p className="text-pest-gray-700">
                        +221 77 123 45 67<br />
                        +221 76 987 65 43
                      </p>
                    </div>
                    <div className="text-center p-6 bg-pest-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-pest-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-white">📧</span>
                      </div>
                      <h4 className="text-xl font-bold text-pest-primary mb-3">Email</h4>
                      <p className="text-pest-gray-700">
                        contact@pestai.sn<br />
                        support@pestai.sn
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      default:
        return (
          <div className={pageClass}>
            <Hero />
            <About />
            <Solutions />
            <Service />
            <Impact />
            <Parcours />
            <Testimonials />
            <Partenaire />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="bg-white">
      {isLoading && <LoadingSpinner />}
      
      {/* Navbar modifiée pour gérer les clics */}
      <NavbarWithPageHandling onPageChange={handlePageChange} currentPage={currentPage} />
      
      {/* Contenu principal */}
      <main className="transition-all duration-300">
        {renderPageContent()}
      </main>
      
      {/* Footer (toujours visible) */}
      <Footer />
      
      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

// Composant Navbar modifié
function NavbarWithPageHandling({ onPageChange, currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href, label) => {
    const page = href.replace('#', '');
    onPageChange(page);
    
    // Fermer le menu mobile
    setIsMobileMenuOpen(false);
    
    // Mettre à jour l'URL sans recharger la page
    window.history.pushState({}, '', href);
  };

  const menuItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#services', label: 'Services' },
    { href: '#impact', label: 'Impact' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-pest-white/95 backdrop-blur-xl shadow-pest-xl' 
        : 'bg-gradient-to-r from-pest-white/90 to-pest-bg-light/90 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => handleMenuClick('#accueil', 'Accueil')}>
            <div className="relative">
              <div className="w-15 h-15 bg-gradient-to-br rounded-2xl flex items-center justify-center mr-4 shadow-pest-lg group-hover:shadow-pest-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="PEST AI Logo"
                  width={35}
                  height={35}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-3xl font-black bg-pest-highlight bg-clip-text text-transparent group-hover:from-pest-primary-light group-hover:via-pest-secondary-light group-hover:to-pest-accent-light transition-all duration-300">
                PEST AI
              </span>
            </div>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.href, item.label)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group overflow-hidden rounded-xl ${
                  currentPage === item.href.replace('#', '') 
                    ? 'text-pest-highlight bg-pest-primary/10' 
                    : 'text-pest-gray-700 hover:text-pest-highlight'
                }`}
              >
                {/* Fond animé au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-pest-primary/10 to-pest-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pest-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10">{item.label}</span>
                
                {/* Soulignement animé */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pest-highlight group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </div>
          
          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-pest-highlight shadow-pest-lg hover:shadow-pest-xl transition-all duration-300 hover:scale-110"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-pest-white transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-pest-white transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-pest-white transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div className={`md:hidden relative z-50 overflow-hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pb-2' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-pest-white/98 backdrop-blur-xl shadow-pest-xl border-t border-pest-accent/20">
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.href, item.label)}
                className={`block w-full text-left relative px-4 py-3 font-medium transition-all duration-300 group rounded-xl overflow-hidden ${
                  currentPage === item.href.replace('#', '') 
                    ? 'text-pest-highlight bg-pest-primary/10' 
                    : 'text-pest-gray-700 hover:text-pest-highlight'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                }}
              >
                {/* Fond animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-pest-primary/10 to-pest-accent/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                
                {/* Icône décorative */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pest-highlight rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10 pl-4 group-hover:pl-6 transition-all duration-300">
                  {item.label}
                </span>
                
                {/* Ligne décorative */}
                <div className="absolute bottom-0 left-4 w-0 h-0.5 bg-pest-highlight group-hover:w-1/2 transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}