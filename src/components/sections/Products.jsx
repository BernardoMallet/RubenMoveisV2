import { useState } from 'react'
import Button from '../common/Button'
import GalleryModal from '../common/GalleryModal'
import gondolasImg from '../../assets/images/gondolas-gancheiras.jpg'
import estantesImg from '../../assets/images/estantes-de-aco.jpg'
import balcoesImg from '../../assets/images/balcoes-para-lojas.jpeg'
import bancadasImg from '../../assets/images/bancadas-sob-medida.jpg'
import expositoresImg from '../../assets/images/vitrines-expositoras.jpg'
import vitrinesImg from '../../assets/images/vitrines-expositoras.jpg'

// Import gondola gallery images
import gondola1 from '../../assets/images/gondolas-gancheiras.jpg'
import gondola2 from '../../assets/images/gondolas-para-centro-de-lojas.jpeg'

// Estantes images - using main image as placeholder until individual images are added
import estantesMain from '../../assets/images/estantes-de-aco.jpg'

const CATEGORIES = [
  { id: 1, name: 'Gôndolas', description: 'Para lojas e centros comerciais', image: gondolasImg },
  { id: 2, name: 'Estantes', description: 'Aço ou metalon + madeira', image: estantesImg },
  { id: 3, name: 'Balcões', description: 'Sob medida para seu comércio', image: balcoesImg },
  { id: 4, name: 'Bancadas', description: 'Resistentes e duráveis', image: bancadasImg },
  { id: 5, name: 'Expositores', description: 'Para produtos em destaque', image: expositoresImg },
  { id: 6, name: 'Vitrines', description: 'Luxuosas e profissionais', image: vitrinesImg }
]

// Gallery data for each category
const GALLERIES = {
  1: [ // Gôndolas
    {
      src: gondola1,
      title: 'Gôndolas Gancheiras',
      description: 'Gôndolas com ganchos para display de produtos. Ideais para lojas de roupas e acessórios.'
    },
    {
      src: gondola2,
      title: 'Gôndolas para Centro de Lojas',
      description: 'Sistema de gôndolas duplas para centros comerciais. Máxima capacidade de exposição.'
    },
    {
      src: gondola1,
      title: 'Gôndolas Promocionais',
      description: 'Gôndolas móveis para campanhas e promoções sazonais.'
    },
    {
      src: gondola2,
      title: 'Gôndolas Especializadas',
      description: 'Soluções customizadas para diferentes tipos de produtos.'
    }
  ],
  2: [ // Estantes
    {
      src: estantesMain,
      title: 'Estantes de Aço - Modelo P1010281',
      description: 'Estantes robustas em aço carbono com prateleiras reforçadas. Ideal para ambientes comerciais com alto fluxo.'
    },
    {
      src: estantesMain,
      title: 'Estantes com Acabamento Profissional',
      description: 'Estrutura em aço com acabamento pintura epóxi. Resistente à corrosão e fácil limpeza.'
    },
    {
      src: estantesMain,
      title: 'Estantes Modulares',
      description: 'Sistema de estantes modulares em aço que se adapta a qualquer espaço. Capacidade de até 600kg por prateleira.'
    },
    {
      src: estantesMain,
      title: 'Estantes em Metalon e Madeira',
      description: 'Combinação de metalon com prateleiras em madeira. Estilo rústico e funcional para lojas modernas.'
    },
    {
      src: estantesMain,
      title: 'Estantes Duplas para Armazém',
      description: 'Estantes duplas frente-verso para aproveitar ao máximo o espaço disponível em galpões e armazéns.'
    },
    {
      src: estantesMain,
      title: 'Estantes com Acabamento Premium',
      description: 'Estantes de aço com tratamento anti-corrosão e acabamento profissional. Perfeitas para vitrines e lojas.'
    }
  ],
  3: [ // Balcões
    {
      src: balcoesImg,
      title: 'Balcões para Lojas',
      description: 'Balcões personalizados sob medida para seu comércio.'
    }
  ],
  4: [ // Bancadas
    {
      src: bancadasImg,
      title: 'Bancadas Sob Medida',
      description: 'Bancadas resistentes em aço com acabamento profissional.'
    }
  ],
  5: [ // Expositores
    {
      src: expositoresImg,
      title: 'Expositores Profissionais',
      description: 'Expositores para destacar seus produtos em loja.'
    }
  ],
  6: [ // Vitrines
    {
      src: vitrinesImg,
      title: 'Vitrines Expositoras',
      description: 'Vitrines de vidro luxuosas para produtos especiais.'
    }
  ]
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openGallery = (categoryId) => {
    setSelectedCategory(categoryId)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setTimeout(() => setSelectedCategory(null), 300) // Wait for modal animation
  }
  return (
    <section id="produtos" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-display">
          Nossas Categorias
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          Tudo que você precisa para sua loja, estoque ou projeto comercial
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map(category => (
            <div
              key={category.id}
              className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Real image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-display">{category.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{category.description}</p>
                <Button
                  variant="ghost"
                  className="p-0 text-primary-600 hover:text-primary-700"
                  onClick={() => openGallery(category.id)}
                >
                  Ver mais →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedCategory && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          category={CATEGORIES.find(c => c.id === selectedCategory)?.name}
          images={GALLERIES[selectedCategory]}
        />
      )}
    </section>
  )
}
