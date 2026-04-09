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

// Estantes images - using existing optimized images
import estantesAco from '../../assets/images/estantes-de-aco.jpg'
import estantesMetalon from '../../assets/images/estantes-em-metalon-e-madeira.jpg'
import estantesMini from '../../assets/images/estantes-mini-porta-pallet.jpg'

// Estantes balcões images - recently added
import estantesBalcoes01 from '../../assets/images/estantes-balcoes-01.jpg'
import estantesBalcoes02 from '../../assets/images/estantes-balcoes-02.jpg'
import estantesBalcoes03 from '../../assets/images/estantes-balcoes-03.jpeg'

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
      src: estantesAco,
      title: 'Estantes de Aço',
      description: 'Estantes robustas em aço carbono com alta resistência. Ideais para ambientes comerciais, galpões e armazéns com grande fluxo de movimentação.'
    },
    {
      src: estantesMetalon,
      title: 'Estantes em Metalon e Madeira',
      description: 'Combinação moderna de estrutura em metalon com prateleiras em madeira. Visual rústico-moderno, perfeito para lojas que buscam estilo e funcionalidade.'
    },
    {
      src: estantesMini,
      title: 'Estantes Mini Porta Pallet',
      description: 'Sistema compacto de estantes para armazenamento em páletes. Solução inteligente para maximizar o espaço em pequenas áreas de estoque.'
    }
  ],
  3: [ // Balcões
    {
      src: estantesBalcoes01,
      title: 'Balcão com Vitrine Integrada',
      description: 'Balcão com vitrine embutida para destaque de produtos. Estrutura robusta em aço com vidro temperado.'
    },
    {
      src: estantesBalcoes02,
      title: 'Balcão com Prateleiras de Aço',
      description: 'Balcão profissional com prateleiras de aço integradas. Ideal para lojas com alto fluxo de atendimento.'
    },
    {
      src: estantesBalcoes03,
      title: 'Balcão Modular para Lojas',
      description: 'Sistema modular de balcão que se adapta a diferentes espaços. Estrutura personalizável sob medida.'
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
