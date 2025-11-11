interface TopBadgeProps {
  number: string | number
  label: string
}

export default function TopBadge({ number, label }: TopBadgeProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        {/* Outer glow azul */}
        <div className="absolute inset-0 bg-[#00e5ff]/30 blur-2xl rounded-full scale-110" />
        
        {/* Badge pill */}
        <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#00e5ff]/60 rounded-full px-6 py-3 flex items-center gap-4 shadow-[0_0_30px_rgba(0,229,255,0.5)]">
          {/* Number */}
          <span className="text-4xl font-bold text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)] tracking-tight">
            {number}
          </span>
          
          {/* Divider */}
          <div className="h-8 w-px bg-[#00e5ff]/40" />
          
          {/* Label */}
          <span className="text-sm font-semibold text-[#00e5ff] uppercase tracking-wider drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

