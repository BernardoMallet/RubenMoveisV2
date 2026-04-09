import { useEffect, useState } from 'react'
import rubenImg from '../../assets/images/ruben-moreira.jpg'
import obraImg from '../../assets/images/obra-pronta.jpg'

function Counter({ target, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = target / 50
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(timer)
          return target
        }
        return prev + increment
      })
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
        {Math.round(count)}+
      </div>
      <div className="text-neutral-600">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Foto + Info Ruben */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center md:justify-start">
            <img 
              src={rubenImg} 
              alt="Ruben Moreira" 
              className="w-80 h-80 rounded-2xl object-cover shadow-xl border-4 border-primary-600"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
              Sobre a Ruben Móveis
            </h2>
            <p className="text-neutral-700 mb-4 text-lg leading-relaxed">
              Com mais de 35 anos trabalhados no mercado de móveis de aço, Ruben passou a ser notado por 
              prestar um serviço de confiança, transparente e de qualidade.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Diante dessa fama e reconhecimento, veio a vontade de empreender. Criando uma nova empresa 
              e o inicio de um novo projeto! Você está mais do que convidado para ser nosso parceiro.
            </p>
          </div>
        </div>

        {/* Contadores */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-display">
          Números que falam
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <Counter target={35} label="Anos no mercado" />
          <Counter target={200} label="Projetos realizados" />
          <Counter target={100} label="% Satisfação" />
        </div>

        {/* 2 cards com imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img 
              src={obraImg} 
              alt="Obra pronta" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-display">Sua ideia vira realidade!</h3>
              <p className="text-neutral-700">
                Fabricamos qualquer móvel de aço sobre qualquer medida. Vem fazer um orçamento conosco!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img 
              src={obraImg} 
              alt="Projeto"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-display">Projetamos e fabricamos</h3>
              <p className="text-neutral-700">
                Trabalhamos com metodologias, planejamentos e tecnologia para garantir sua satisfação!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
