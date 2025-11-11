import HeaderLogo from './components/HeaderLogo'
import TopBadge from './components/TopBadge'
import Wheel from './components/Wheel'
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
            src="/placeholder-logo.svg" 
            alt="Site logo placeholder" 
          />
        </header>

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-start">
          {/* Top badge with number and label */}
          <TopBadge 
            number="2" 
            label="Giros Gratis" 
          />

          {/* Wheel section */}
          <Wheel 
            src="/placeholder-wheel.svg" 
            alt="Wheel placeholder" 
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

