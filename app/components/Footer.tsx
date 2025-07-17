import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
      <section className="bg-pest-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
                <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-br w-28 h-28 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-pest-lg group-hover:shadow-pest-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 overflow-hidden">
                                        <Image
                                          src="/logo.png"
                                          alt="PEST AI Logo"
                                          width={35}
                                          height={35}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 max-w-md">
                        Révolutionnez votre agriculture avec l'intelligence artificielle. Une solution locale, accessible et efficace pour tous les agriculteurs africains.
                    </p>
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-sm text-gray-400">Une filiale de</span>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center mr-2">
                                <i className="fas fa-leaf text-white text-xs"></i>
                            </div>
                            <span className="font-semibold">AVIX</span>
                        </div>
                    </div>
                </div>
                
              
                <div>
                    <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                    <ul className="space-y-2">
                        <li><a href="#accueil" className="text-gray-300 hover:text-primary transition-colors">Accueil</a></li>
                        <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">À propos</a></li>
                        <li><a href="#solutions" className="text-gray-300 hover:text-primary transition-colors">Solutions</a></li>
                        <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
                
               
                <div>
                    <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                    <p className="text-gray-300 text-sm mb-4">Restez informé de nos dernières actualités</p>
                    <div className="flex">
                        <input type="email" placeholder="Votre email" className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:border-primary"/>
                        <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-secondary transition-colors">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <hr className="border-gray-700 my-8"/>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2024 PestAI. Tous droits réservés.
                </div>
                
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <i className="fab fa-youtube text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <i className="fab fa-facebook text-xl"></i>
                    </a>
                </div>
                
                <div className="flex space-x-4 text-sm text-gray-400">
                    <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
                    <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
                </div>
            </div>
        </div>
    </section>
  )
}
