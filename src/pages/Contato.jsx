import ContactForm from '../components/forms/ContactForm'

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Fale Conosco</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Estamos prontos para ajudar com seu projeto
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-neutral-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-6 font-display">Informações de Contato</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <h4 className="font-bold mb-2">📞 Telefone</h4>
                    <a
                      href="tel:+5521999049917"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      (21) 99904-9917
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h4 className="font-bold mb-2">📧 Email</h4>
                    <a
                      href="mailto:ruben-moreira@bol.com.br"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      ruben-moreira@bol.com.br
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <h4 className="font-bold mb-2">💬 WhatsApp</h4>
                    <a
                      href="https://api.whatsapp.com/send?phone=+5521999049917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 inline-block"
                    >
                      Chamar no WhatsApp
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h4 className="font-bold mb-2">📍 Localização</h4>
                    <p className="text-neutral-600">Rio de Janeiro, RJ</p>
                  </div>

                  {/* Hours */}
                  <div>
                    <h4 className="font-bold mb-2">🕒 Horário de Funcionamento</h4>
                    <p className="text-neutral-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-neutral-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-primary-600 text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 font-display">Redes Sociais</h3>
                <a
                  href="https://www.linkedin.com/in/ruben-moreira-santos-931b69106/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-100 hover:text-white mb-2"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
