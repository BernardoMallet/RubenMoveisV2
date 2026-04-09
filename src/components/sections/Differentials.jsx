import Button from '../common/Button'

export default function Differentials() {
  const differentials = [
    { icon: '🔧', title: 'Customização Total', description: 'Qualquer medida que você precisar' },
    { icon: '⚡', title: 'Entrega Rápida', description: 'De 2 a 4 semanas em RJ' },
    { icon: '💪', title: 'Estrutura Durável', description: 'Aço em alta qualidade' },
    { icon: '📞', title: 'Suporte Dedicado', description: 'Desde projeto até instalação' }
  ]

  return (
    <section className="py-16 sm:py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-display">
          Nossos Diferenciais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentials.map((diff, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">{diff.icon}</div>
              <h3 className="font-bold mb-2 font-display">{diff.title}</h3>
              <p className="text-neutral-600 text-sm">{diff.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-xl text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4 font-display">Pronto para seu projeto?</h3>
          <p className="mb-8 text-lg text-blue-100">Fale com nosso especialista hoje mesmo</p>
          <a 
            href="https://api.whatsapp.com/send?phone=+5521999049917&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-white text-primary-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <span>Chamar no WhatsApp</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
