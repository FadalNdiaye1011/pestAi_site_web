'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Smooth scroll handler
    const handleSmoothScroll = (e: { currentTarget: { getAttribute: (arg0: string) => any; }; preventDefault: () => void; }) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click event to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          {/* Logo avec image PEST AI */}
          <div className="flex items-center group cursor-pointer">
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
          
          {/* Menu desktop avec couleurs PEST AI */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-pest-gray-700 font-medium hover:text-pest-highlight transition-all duration-300 group overflow-hidden rounded-xl"
              >
                {/* Fond animé au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-pest-primary/10 to-pest-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pest-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10">{item.label}</span>
                
                {/* Soulignement animé */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pest-highlight group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          
          {/* Bouton menu mobile avec couleurs PEST AI */}
          <button
            onClick={toggleMobileMenu}
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
      
      {/* Menu mobile avec couleurs PEST AI */}
      <div className={`md:hidden relative z-50 overflow-hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pb-2' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-pest-white/98 backdrop-blur-xl shadow-pest-xl border-t border-pest-accent/20">
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block relative px-4 py-3 text-pest-gray-700 font-medium hover:text-pest-highlight transition-all duration-300 group rounded-xl overflow-hidden"
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
              </a>
            ))}
            
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}