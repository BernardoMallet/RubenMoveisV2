import { useState } from 'react'
import Button from '../components/common/Button'
import GalleryModal from '../components/common/GalleryModal'
import gondolasImg from '../assets/images/gondolas-gancheiras.jpg'
import estantesImg from '../assets/images/estantes-de-aco.jpg'
import estantesMetalonImg from '../assets/images/estantes-em-metalon-e-madeira.jpg'
import balcoesImg from '../assets/images/balcoes-para-lojas.jpeg'
import bancadasImg from '../assets/images/bancadas-sob-medida.jpg'
import expositoresImg from '../assets/images/vitrines-expositoras.jpg'
import vitrinesImg from '../assets/images/vitrines-expositoras.jpg'
import estanteMiniImg from '../assets/images/estantes-mini-porta-pallet.jpg'
import obraImg from '../assets/images/obra-pronta.jpg'

const PRODUCTS = [
  { 
    id: 1, 
    name: 'Gôndolas', 
    description: 'Para lojas e centros comerciais', 
    image: gondolasImg,
    gallery: [
      { src: gondolasImg, title: 'Gôndola Premium', description: 'Gôndola profissional para lojas' },
      { src: gondolasImg, title: 'Gôndola Grande', description: 'Modelo extra grande' }
    ]
  },
  { 
    id: 2, 
    name: 'Estantes de aço', 
    description: 'Aço resistente e durável', 
    image: estantesImg,
    gallery: [
      { src: estantesImg, title: 'Estante Grande', description: 'Estante de aço alta capacidade' },
      { src: estantesImg, title: 'Estante Dupla', description: 'Estante dupla para carga pesada' }
    ]
  },
  { 
    id: 3, 
    name: 'Estantes metalon', 
    description: 'Metalon com madeira', 
    image: estantesMetalonImg,
    gallery: [
      { src: estantesMetalonImg, title: 'Estante Metalon', description: 'Estante em metalon e madeira' },
      { src: estantesMetalonImg, title: 'Estante Industrial', description: 'Modelo industrial com madeira' }
    ]
  },
  { 
    id: 4, 
    name: 'Balcões', 
    description: 'Sob medida para seu comércio', 
    image: balcoesImg,
    gallery: [
      { src: balcoesImg, title: 'Balcão Padrão', description: 'Balcão sob medida' },
      { src: balcoesImg, title: 'Balcão Premium', description: 'Balcão com acabamento premium' }
    ]
  },
  { 
    id: 5, 
    name: 'Bancadas', 
    description: 'Resistentes e práticas', 
    image: bancadasImg,
    gallery: [
      { src: bancadasImg, title: 'Bancada Simples', description: 'Bancada de aço' },
      { src: bancadasImg, title: 'Bancada Dupla', description: 'Bancada dupla reforçada' }
    ]
  },
  { 
    id: 6, 
    name: 'Expositores', 
    description: 'Para produtos em destaque', 
    image: expositoresImg,
    gallery: [
      { src: expositoresImg, title: 'Expositor Stand', description: 'Expositor em pé' },
      { src: expositoresImg, title: 'Expositor Parede', description: 'Expositor para parede' }
    ]
  },
  { 
    id: 7, 
    name: 'Vitrines', 
    description: 'Luxuosas e profissionais', 
    image: vitrinesImg,
    gallery: [
      { src: vitrinesImg, title: 'Vitrine Grande', description: 'Vitrine expositora premium' },
      { src: vitrinesImg, title: 'Vitrine Modulada', description: 'Vitrine com módulos' }
    ]
  },
  { 
    id: 8, 
    name: 'Estantes Mini', 
    description: 'Organizadores de espaço', 
    image: estanteMiniImg,
    gallery: [
      { src: estanteMiniImg, title: 'Mini Porta Pallet', description: 'Organizador compacto' },
      { src: estanteMiniImg, title: 'Mini Estante', description: 'Estante em tamanho reduzido' }
    ]
  },
  { 
    id: 9, 
    name: 'Projetos', 
    description: 'Sua ideia vira realidade', 
    image: obraImg,
    gallery: [
      { src: obraImg, title: 'Projeto Completo', description: 'Projeto executado' },
      { src: obraImg, title: 'Entrega Final', description: 'Obra pronta para uso' }
    ]
  }
]

export default function Produtos() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Produtos e Serviços</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore nossa linha completa de móveis de aço sob medida
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(product => (
              <div
                key={product.id}
                className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-display">{product.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 text-primary-600 hover:text-primary-700"
                    onClick={() => openModal(product)}
                  >
                    Saiba mais →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 font-display">Tem algo específico em mente?</h2>
            <p className="text-neutral-600 mb-6">
              Todos os nossos produtos podem ser customizados de acordo com suas necessidades
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/contato'}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={closeModal}
          category={selectedProduct.name}
          images={selectedProduct.gallery}
        />
      )}
    </div>
  )
}
