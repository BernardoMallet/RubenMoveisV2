export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary-300">Sobre</a></li>
              <li><a href="/portfolio" className="hover:text-primary-300">Portfolio</a></li>
              <li><a href="/contato" className="hover:text-primary-300">Contato</a></li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/produtos" className="hover:text-primary-300">Gôndolas</a></li>
              <li><a href="/produtos" className="hover:text-primary-300">Estantes</a></li>
              <li><a href="/produtos" className="hover:text-primary-300">Balcões</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+5521999049917" className="hover:text-primary-300">
                  📞 (21) 9990-49917
                </a>
              </li>
              <li>
                <a href="mailto:ruben-moreira@bol.com.br" className="hover:text-primary-300">
                  📧 ruben-moreira@bol.com.br
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=+5521999049917" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300">
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/ruben-moreira-santos-931b69106/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-600 pt-8 text-center text-sm">
          <p>© 2026 Ruben Moreira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
