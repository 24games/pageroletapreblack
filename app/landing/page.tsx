'use client'

import { useState } from 'react'
import HeaderLogo from './components/HeaderLogo'
import TopBadge from './components/TopBadge'
import WheelInteractive from './components/WheelInteractive'
import LangSelector from './components/LangSelector'
import FooterLegal from './components/FooterLegal'
import PrizeModal from './components/PrizeModal'

export default function LandingPage() {
  const [showBadge, setShowBadge] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleSpinStart = () => {
    // Fade out da badge quando começa a girar
    setShowBadge(false)
  }

  const handleSpinEnd = () => {
    // Mostra modal quando termina de girar (após 5 segundos)
    setTimeout(() => {
      setShowModal(true)
    }, 500) // Delay de 0.5s após parar
  }

  const handleCloseModal = () => {
    setShowModal(false)
    // Pode adicionar lógica de redirecionamento aqui
    // window.location.href = '/cadastro' ou similar
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Container with max width and centering */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4">
        {/* Header with logo */}
        <header>
          <HeaderLogo 
            src="/logo-24games.webp" 
            alt="24Games Logo" 
          />
        </header>

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-start">
          {/* Top badge with number and label */}
          <TopBadge 
            number="1" 
            label="¡Giro Gratis!" 
            isVisible={showBadge}
          />

          {/* Interactive Wheel section */}
          <WheelInteractive 
            src="/wheel-24games.webp" 
            alt="Ruleta 24Games"
            pointerSrc="/pointer-24games.webp"
            pointerAlt="Puntero de la Ruleta"
            onSpinStart={handleSpinStart}
            onSpinEnd={handleSpinEnd}
          />

          {/* Language selector */}
          <LangSelector 
            countryCode="CL" 
            flagSrc="/placeholder-flag.svg" 
          />
        </div>

        {/* Footer with legal text */}
        <FooterLegal />
      </div>

      {/* Prize Modal */}
      <PrizeModal isOpen={showModal} onClose={handleCloseModal} />
    </main>
  )
}
