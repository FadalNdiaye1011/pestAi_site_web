'use client'

import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { supabase } from '../lib/lib/supabase'

export default function Contact() {
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();


  setIsLoading(true);
  setSubmitStatus(null);

  try {
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      throw new Error(error.message || 'Erreur inconnue lors de l\'envoi');
    }

    setSubmitStatus({
      success: true,
      message: 'Message envoyé avec succès! Nous vous contacterons bientôt.'
    });
    setFormData({ name: '', email: '', message: '' });
  } catch (error: any) {
    console.error('Détails de l\'erreur:', {
      message: error.message,
      stack: error.stack,
      supabaseError: error
    });
    
    setSubmitStatus({
      success: false,
      message: error.message || "Erreur lors de l'envoi du formulaire"
    });
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-pest-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionTitle 
          title="Contactez-nous" 
          subtitle="Prêt à révolutionner votre agriculture ? Parlons-en !"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-pest-gray-50 p-8 rounded-xl shadow-pest-sm">
            <h3 className="text-2xl font-bold mb-6 text-pest-gray-800">Envoyez-nous un message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-pest-gray-700 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 border border-pest-gray-300 rounded-lg focus:ring-2 focus:ring-pest-primary focus:border-transparent"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pest-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-pest-gray-300 rounded-lg focus:ring-2 focus:ring-pest-primary focus:border-transparent"
                   id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pest-gray-700 mb-2">Message</label>
                <textarea 
                   id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-pest-gray-300 rounded-lg focus:ring-2 focus:ring-pest-primary focus:border-transparent"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-pest-primary text-pest-white py-3 px-6 rounded-lg font-semibold hover:bg-pest-primary-dark transition-colors shadow-pest-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {submitStatus && (
                <div className={`mt-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
          
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-pest-gray-800">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pest-highlight rounded-full flex items-center justify-center mr-4 shadow-pest-xs">
                    <i className="fas fa-phone text-pest-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-pest-gray-800">Téléphone</p>
                    <p className="text-pest-gray-600">+221 784363537</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pest-highlight rounded-full flex items-center justify-center mr-4 shadow-pest-xs">
                    <i className="fas fa-envelope text-pest-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-pest-gray-800">Email</p>
                    <p className="text-pest-gray-600">contact.pestai@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pest-highlight rounded-full flex items-center justify-center mr-4 shadow-pest-xs">
                    <i className="fab fa-whatsapp text-pest-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-pest-gray-800">WhatsApp</p>
                    <p className="text-pest-gray-600">+221 784363537</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carte */}
            <div className="bg-pest-gray-200 h-64 rounded-xl flex items-center justify-center shadow-pest-sm">
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-4xl text-pest-gray-400 mb-4"></i>
                <p className="text-pest-gray-600">Carte interactive</p>
                <p className="text-sm text-pest-gray-500">Dakar, Sénégal</p>
              </div>
            </div>
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