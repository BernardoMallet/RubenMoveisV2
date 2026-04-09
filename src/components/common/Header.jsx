import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Produtos', href: '/produtos' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary-700 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-display">
          🏢 Ruben Móveis
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="hover:text-primary-300 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary-700 flex flex-col p-4 md:hidden">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="py-2 hover:text-primary-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
