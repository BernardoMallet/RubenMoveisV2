import Button from '../common/Button'
import gondolasImg from '../../assets/images/gondolas-gancheiras.jpg'
import estantesImg from '../../assets/images/estantes-de-aco.jpg'
import balcoesImg from '../../assets/images/balcoes-para-lojas.jpeg'
import bancadasImg from '../../assets/images/bancadas-sob-medida.jpg'
import expositoresImg from '../../assets/images/vitrines-expositoras.jpg'
import vitrinesImg from '../../assets/images/vitrines-expositoras.jpg'

const CATEGORIES = [
  { id: 1, name: 'Gôndolas', description: 'Para lojas e centros comerciais', image: gondolasImg },
  { id: 2, name: 'Estantes', description: 'Aço ou metalon + madeira', image: estantesImg },
  { id: 3, name: 'Balcões', description: 'Sob medida para seu comércio', image: balcoesImg },
  { id: 4, name: 'Bancadas', description: 'Resistentes e duráveis', image: bancadasImg },
  { id: 5, name: 'Expositores', description: 'Para produtos em destaque', image: expositoresImg },
  { id: 6, name: 'Vitrines', description: 'Luxuosas e profissionais', image: vitrinesImg }
]

export default function Products() {
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
                >
                  Ver mais →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
