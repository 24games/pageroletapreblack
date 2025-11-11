interface TopBadgeProps {
  number: string | number
  label: string
}

export default function TopBadge({ number, label }: TopBadgeProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-accent-glow/20 blur-2xl rounded-full scale-110" />
        
        {/* Badge pill */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-accent-glow/30 rounded-full px-6 py-3 flex items-center gap-4 shadow-glow-subtle">
          {/* Number */}
          <span className="text-4xl font-bold text-white drop-shadow-lg tracking-tight">
            {number}
          </span>
          
          {/* Divider */}
          <div className="h-8 w-px bg-white/20" />
          
          {/* Label */}
          <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

