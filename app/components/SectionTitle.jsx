import React from 'react'

export const SectionTitle = ({ 
  title, 
  subtitle,
  className = ""
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-pest-primary mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-pest-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle