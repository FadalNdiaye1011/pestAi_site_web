'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentImageSlide, setCurrentImageSlide] = useState(0)
  const [currentAppSlide, setCurrentAppSlide] = useState(0)

  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('sticky-nav')
        } else {
          navbar.classList.remove('sticky-nav')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide')
    const showSlide = (index: number) => {
      slides.forEach(slide => slide.classList.remove('active'))
      slides[index]?.classList.add('active')
    }

    const slideshowInterval = setInterval(() => {
      setCurrentSlide(prev => {
        const newSlide = (prev + 1) % slides.length
        showSlide(newSlide)
        return newSlide
      })
    }, 3000)

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const anchor = e.target as HTMLAnchorElement
      const target = document.querySelector(anchor.getAttribute('href') || '')
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      // Close mobile menu if open
      mobileMenu?.classList.add('hidden')
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll)
    })


    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    // Image Slider Functionality
    const sliderTrack = document.getElementById('sliderTrack')
    const dots = document.querySelectorAll('.dot')

    const updateSlider = () => {
      if (sliderTrack) {
        const translateX = -(currentImageSlide * 100)
        sliderTrack.style.transform = `translateX(${translateX}%)`
      }
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageSlide)
      })
    }

    const imageSliderInterval = setInterval(() => {
      setCurrentImageSlide(prev => (prev + 1) % 3)
    }, 4000)

    // iPhone App Preview Slideshow
    const appPreviews = document.querySelectorAll('.app-preview')
    const showAppSlide = (index: number) => {
      appPreviews.forEach(preview => preview.classList.remove('active'))
      appPreviews[index]?.classList.add('active')
    }

    const appPreviewInterval = setInterval(() => {
      setCurrentAppSlide(prev => {
        const newSlide = (prev + 1) % appPreviews.length
        showAppSlide(newSlide)
        return newSlide
      })
    }, 3000)

    // Parallax effect on scroll
    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      const wave = document.querySelector('.wave-shape')
    }
    window.addEventListener('scroll', handleParallax)

    // Cleanup function
    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', () => {})
      }
      window.removeEventListener('scroll', handleScroll)
      clearInterval(slideshowInterval)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll)
      })
      clearInterval(imageSliderInterval)
      clearInterval(appPreviewInterval)
      window.removeEventListener('scroll', handleParallax)
    }
  }, [currentImageSlide])

  return (
    <section id="accueil" className="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden p-5" 
             >
      <div className="wave-shape"></div>
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="particle" 
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 5}%`,
            animationDelay: `${i}s`,
            background: 'var(--color-pest-white)'
          }}
        ></div>
      ))}

      <div className="content-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight mt-5">
              Protégeons les <span style={{ color: 'var(--color-pest-highlight)' }}>cultures</span> avec l'<span className='text-pest-highlight'>IA</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              PestAI révolutionne l'agriculture avec une solution intelligente qui détecte les maladies et ravageurs grâce à l'IA et une synthèse vocale en langue locale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="glow-button px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ 
                        background: 'var(--color-pest-white)',
                        color: 'var(--color-pest-primary)'
                      }}>
                � Découvrir l'application
              </button>
              <button className="glow-button border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                      style={{ 
                        borderColor: 'var(--color-pest-white)',
                        color: 'var(--color-pest-white)',
                        background: 'transparent'
                      }}>
                🎯 Tester la démo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="stats-card">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-pest-highlight)' }}>25%</div>
                <div className="text-sm opacity-80">de pesticides économisés</div>
              </div>
              <div className="stats-card">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-pest-accent)' }}>30%</div>
                <div className="text-sm opacity-80">de pertes en moins</div>
              </div>
              <div className="stats-card">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-pest-secondary)' }}>+300K</div>
                <div className="text-sm opacity-80">agriculteurs ciblés</div>
              </div>
            </div>
          </div>
          
          <div className="iphone-container">
            <div className="iphone">
              <div className="iphone-body" style={{ 
                background: 'var(--color-pest-gray-900)',
                boxShadow: '0 0 0 8px var(--color-pest-gray-700)'
              }}>
                <div className="notch"></div>
                <div className="iphone-screen">
                  <div className="screen-content" style={{ 
                    background: 'var(--gradient-pest-highlight)'
                  }}>
                    {[...Array(11)].map((_, i) => (
                      <img 
                        key={i}
                        src={`/preview${i+1}.webp`} 
                        alt={`PestAI Preview ${i+1}`} 
                        className={`app-preview ${i === 0 ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                  <div className="home-indicator" style={{ 
                    background: 'var(--color-pest-gray-300)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}