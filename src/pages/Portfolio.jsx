import gondolasImg from '../assets/images/gondolas-para-centro-de-lojas.jpeg'
import estantesImg from '../assets/images/estantes-de-aco.jpg'
import balcoesImg from '../assets/images/balcoes-para-lojas.jpeg'
import estantesMetalonImg from '../assets/images/estantes-em-metalon-e-madeira.jpg'
import vitrinesImg from '../assets/images/vitrines-expositoras.jpg'
import obraImg from '../assets/images/obra-pronta.jpg'

const PROJETOS = [
  {
    id: 1,
    title: 'Gôndolas para Centro Comercial',
    image: gondolasImg,
    local: 'Rio de Janeiro - RJ',
    tamanho: '150m²'
  },
  {
    id: 2,
    title: 'Estantes de Aço para Estoque',
    image: estantesImg,
    local: 'Rio de Janeiro - RJ',
    tamanho: '200m²'
  },
  {
    id: 3,
    title: 'Balcões para Loja de Roupas',
    image: balcoesImg,
    local: 'Rio de Janeiro - RJ',
    tamanho: '85m²'
  },
  {
    id: 4,
    title: 'Estantes Metalon e Madeira',
    image: estantesMetalonImg,
    local: 'Rio de Janeiro - RJ',
    tamanho: '120m²'
  },
  {
    id: 5,
    title: 'Vitrines Expositoras',
    image: vitrinesImg,
    local: 'Rio de Janeiro - RJ',
    tamanho: '95m²'
  },
  {
    id: 6,
    title: 'Estrutura Completa Obra',
    image: obraImg,
    local: 'Rio de Janeiro - RJ',
    tamanho: '180m²'
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Nossos Projetos</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore alguns de nossos melhores trabalhos realizados para clientes
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJETOS.map(projeto => (
              <div key={projeto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img 
                  src={projeto.image} 
                  alt={projeto.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">{projeto.title}</h3>
                  <p className="text-neutral-600 mb-4">
                    Projeto de qualidade com acabamento profissional realizado com sucesso
                  </p>
                  <div className="text-sm text-neutral-500">
                    <p>📍 Local: {projeto.local}</p>
                    <p>📐 Tamanho: {projeto.tamanho}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 font-display">Gostou? Vamos fazer seu projeto!</h2>
            <p className="text-neutral-600 mb-6">
              Clique abaixo e solicite um orçamento personalizado para seu espaço
            </p>
            <button 
              onClick={() => window.location.href = '/contato'}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
