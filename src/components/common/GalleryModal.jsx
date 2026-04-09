import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function GalleryModal({ isOpen, onClose, category, images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isOpen) return null

  const current = images[currentIndex]
  const next = () => setCurrentIndex((currentIndex + 1) % images.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length)

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      {/* Main carousel container */}
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 font-display">{category}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition"
            aria-label="Fechar"
          >
            <X size={24} className="text-neutral-600" />
          </button>
        </div>

        {/* Image container */}
        <div className="flex-1 relative bg-neutral-100 flex items-center justify-center overflow-hidden">
          <img
            src={current.src}
            alt={current.title}
            className="w-full h-full object-contain"
          />

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition shadow-lg"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={28} className="text-neutral-900" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition shadow-lg"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={28} className="text-neutral-900" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Image title and description */}
        <div className="p-6 border-t border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">{current.title}</h3>
          <p className="text-neutral-600 text-sm">{current.description}</p>
        </div>

        {/* Thumbnail grid */}
        <div className="border-t border-neutral-200 p-4 bg-neutral-50">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                  idx === currentIndex
                    ? 'border-primary-600 shadow-lg'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
