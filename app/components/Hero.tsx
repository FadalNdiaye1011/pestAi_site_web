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
    <section id="accueil" className="hero-bg min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden px-4 sm:px-5" 
             >
      <div className="wave-shape"></div>
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="particle hidden sm:block" 
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 5}%`,
            animationDelay: `${i}s`,
            background: 'var(--color-pest-white)'
          }}
        ></div>
      ))}

      <div className="content-container max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Section texte */}
          <div className="text-white order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Protégeons les <span style={{ color: 'var(--color-pest-highlight)' }}>cultures</span> avec l'<span className='text-pest-highlight'>IA</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              PestAI révolutionne l'agriculture avec une solution intelligente qui détecte les maladies et ravageurs grâce à l'IA et une synthèse vocale en langue locale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button className="glow-button px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ 
                        background: 'var(--color-pest-white)',
                        color: 'var(--color-pest-primary)'
                      }}>
                📱 Découvrir l'application
              </button>
              <button className="glow-button border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
                      style={{ 
                        borderColor: 'var(--color-pest-white)',
                        color: 'var(--color-pest-white)',
                        background: 'transparent'
                      }}>
                🎯 Tester la démo
              </button>
            </div>
            
            {/* Stats - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="stats-card">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--color-pest-highlight)' }}>25%</div>
                <div className="text-xs sm:text-sm opacity-80">de pesticides économisés</div>
              </div>
              <div className="stats-card">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--color-pest-accent)' }}>30%</div>
                <div className="text-xs sm:text-sm opacity-80">de pertes en moins</div>
              </div>
              <div className="stats-card">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--color-pest-secondary)' }}>+300K</div>
                <div className="text-xs sm:text-sm opacity-80">agriculteurs ciblés</div>
              </div>
            </div>
          </div>
          
          {/* Section iPhone - Responsive */}
          <div className="iphone-container order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="iphone">
              <div className="iphone-body" style={{ 
                background: 'var(--color-pest-gray-900)',
                boxShadow: '0 0 0 4px var(--color-pest-gray-700), 0 8px 32px rgba(0,0,0,0.3)'
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