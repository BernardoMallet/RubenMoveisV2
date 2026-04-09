import rubenImg from '../assets/images/ruben-moreira.jpg'
import gifImg from '../assets/images/gif-ruben-moveis.gif'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Sobre a Ruben Móveis</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            35 anos de experiência e confiança no mercado
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-display">Nossa História</h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Com mais de 35 anos trabalhados no mercado de móveis de aço, Ruben passou a ser
                notado por prestar um serviço de confiança, transparente e de qualidade.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Diante dessa fama e reconhecimento, veio a vontade de empreender. Criando uma nova
                empresa e o início de um novo projeto! E você está mais do que convidado para
                ser nosso parceiro.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Trabalhamos com metodologias, planejamentos e tecnologia para garantir a satisfação
                dos nossos clientes!
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={rubenImg} 
                alt="Ruben Moreira" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 2 Cards com informações */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={gifImg} 
                alt="Projeto Gif" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-display">Projetamos o que você pede</h3>
                <p className="text-neutral-700">
                  Trabalhamos com metodologias, planejamentos e tecnologia para garantir 
                  a satisfação dos nossos clientes!
                </p>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={rubenImg} 
                alt="Obra Pronta" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-display">Sua ideia vira realidade!</h3>
                <p className="text-neutral-700">
                  Fabricamos qualquer móvel de aço sobre qualquer medida. 
                  Venha fazer um orçamento conosco!
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">35+</div>
              <div className="font-bold">Anos de experiência</div>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">200+</div>
              <div className="font-bold">Projetos por ano</div>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">100%</div>
              <div className="font-bold">Satisfação clients</div>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">RJ</div>
              <div className="font-bold">Entrega local</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
