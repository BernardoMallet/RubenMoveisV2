import { useState, useEffect } from 'react'
import Button from '../common/Button'
import gondolasImg from '../../assets/images/gondolas-para-centro-de-lojas.jpeg'
import balcoesImg from '../../assets/images/balcoes-para-lojas.jpeg'
import bancadasImg from '../../assets/images/bancadas-sob-medida.jpg'

export default function Hero() {
  const images = [gondolasImg, balcoesImg, bancadasImg]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 to-primary-600/85" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10 py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-display">
          Móveis de Aço Sob Medida
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          35 anos de experiência. Projetos, fabricação e entrega em Rio de Janeiro.
          Transformamos suas ideias em realidade com qualidade industrial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap">
          <Button
            size="lg"
            variant="primary"
            onClick={() => scrollTo('contato')}
          >
            📋 Solicitar Orçamento
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-white border-white hover:bg-white/10"
            onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=+5521999049917'}
          >
            📞 WhatsApp
          </Button>
        </div>

        {/* Stats preview */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-sm sm:text-base">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold">35+</div>
            <div className="text-blue-100">Anos</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold">200+</div>
            <div className="text-blue-100">Projetos</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold">100%</div>
            <div className="text-blue-100">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-3xl">▼</div>
      </div>
    </section>
  )
}
