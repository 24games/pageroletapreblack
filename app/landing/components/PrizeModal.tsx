'use client'

import { useState } from 'react'

interface PrizeModalProps {
  isOpen: boolean
  onClose?: () => void
}

export default function PrizeModal({ isOpen, onClose }: PrizeModalProps) {
  const [buttonPulse, setButtonPulse] = useState(false)

  if (!isOpen) return null

  const handleBackdropClick = () => {
    // Ao invés de fechar, faz o botão pulsar
    setButtonPulse(true)
    setTimeout(() => setButtonPulse(false), 600) // Duração da animação
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop - Agora pulsa o botão ao invés de fechar */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer" onClick={handleBackdropClick} />
      
      {/* Modal Glass */}
      <div className={`relative w-full max-w-md transition-all duration-700 ${
        isOpen ? 'scale-100 opacity-100 animate-pulse-in' : 'scale-95 opacity-0'
      }`}>
        {/* Glow azul atrás */}
        <div className="absolute inset-0 bg-[#00e5ff]/20 blur-3xl rounded-3xl" />
        
        {/* Glass card */}
        <div className="relative bg-gradient-to-br from-[#0a1929]/95 to-[#0d1b2a]/95 backdrop-blur-xl border-2 border-[#00e5ff]/40 rounded-3xl shadow-[0_0_60px_rgba(0,229,255,0.4)] p-8">
          
          {/* Título: 100% */}
          <div className="text-center mb-2">
            <h1 className="text-8xl font-black text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.8)] tracking-tighter leading-none">
              100%
            </h1>
          </div>

          {/* Subtítulo: DE BONO */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.6)] tracking-wide">
              ¡DE BONO!
            </h2>
          </div>

          {/* Texto explicativo - 3 linhas com negrito */}
          <div className="text-center text-white/90 text-base leading-relaxed mb-8 px-2 space-y-2">
            <p>
              ¡Tu oportunidad de rescatar este bono es haciendo clic
            </p>
            <p>
              en el botón de abajo <span className="font-bold text-white">¡AHORA MISMO!</span>
            </p>
            <p>
              Si lo dejas para después, <span className="font-bold text-white">tu oferta va a expirar.</span>
            </p>
          </div>

          {/* Botão verde */}
          <button
            onClick={onClose}
            className={`w-full bg-gradient-to-r from-[#00d665] to-[#00b855] hover:from-[#00f070] hover:to-[#00d665] text-white font-bold text-lg py-4 px-8 rounded-full shadow-[0_0_30px_rgba(0,214,101,0.5)] hover:shadow-[0_0_40px_rgba(0,214,101,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              buttonPulse ? 'animate-button-pulse' : ''
            }`}
          >
            ¡RESCATAR BONO!
          </button>
        </div>
      </div>
    </div>
  )
}

