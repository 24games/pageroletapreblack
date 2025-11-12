'use client'

interface LangSelectorProps {
  countryCode: string
  flagSrc: string
}

export default function LangSelector({ countryCode, flagSrc }: LangSelectorProps) {
  return (
    <div className="flex justify-center py-6">
      <button
        className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-glow/50 focus:ring-offset-2 focus:ring-offset-near-black"
        aria-label={`Seleccionar idioma: ${countryCode}`}
      >
        {/* Flag circle */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-white to-red-500 flex items-center justify-center overflow-hidden border border-white/30">
          <span className="text-xs font-bold text-white drop-shadow-md">
            {countryCode}
          </span>
        </div>

        {/* Country code */}
        <span className="text-sm font-semibold text-white uppercase tracking-wide">
          {countryCode}
        </span>

        {/* Chevron */}
        <svg
          className="w-3 h-3 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  )
}


