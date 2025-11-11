import HeaderLogo from './components/HeaderLogo'
import TopBadge from './components/TopBadge'
import WheelInteractive from './components/WheelInteractive'
import LangSelector from './components/LangSelector'
import FooterLegal from './components/FooterLegal'

export default function LandingPage() {
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
            number="2" 
            label="Giros Gratis" 
          />

          {/* Interactive Wheel section */}
          <WheelInteractive 
            src="/wheel-24games.webp" 
            alt="Roda da Roleta 24Games"
            pointerSrc="/pointer-24games.webp"
            pointerAlt="Ponteiro da Roleta"
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
    </main>
  )
}
