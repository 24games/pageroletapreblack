'use client'

import Image from 'next/image'
import { useState } from 'react'

interface WheelInteractiveProps {
  src: string
  alt: string
  pointerSrc?: string
  pointerAlt?: string
}

export default function WheelInteractive({ 
  src, 
  alt, 
  pointerSrc, 
  pointerAlt = "Ponteiro" 
}: WheelInteractiveProps) {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleSpin = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    
    // Para após 5 segundos
    setTimeout(() => {
      setIsSpinning(false)
    }, 5000)
  }

  return (
    <div className="relative flex justify-center items-center py-8 px-4">
      {/* Radial spotlight rays background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {/* Multiple rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[400px] bg-gradient-to-b from-white/5 via-white/2 to-transparent"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                transformOrigin: 'center center',
              }}
            />
          ))}
          
          {/* Central radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Wheel container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top pointer/marker at 12 o'clock - FIXED */}
        <div className="mb-[-10px] flex justify-center relative z-30">
          {pointerSrc ? (
            <Image
              src={pointerSrc}
              alt={pointerAlt}
              width={80}
              height={80}
              className="drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]"
              priority
            />
          ) : (
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-[#00e5ff] drop-shadow-glow-subtle" />
          )}
        </div>

        {/* Wheel image - ROTATES */}
        <div className="relative">
          {/* Blue pulsing glow behind wheel */}
          <div 
            className={`absolute inset-0 rounded-full blur-3xl transition-all duration-300 ${
              isSpinning 
                ? 'bg-[#00e5ff]/60 scale-125 animate-pulse-fast' 
                : 'bg-[#00e5ff]/30 scale-110 animate-pulse-slow'
            }`}
          />
          
          {/* Clickable Wheel */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className={`relative block focus:outline-none focus:ring-4 focus:ring-[#00e5ff]/50 rounded-full transition-transform ${
              !isSpinning ? 'hover:scale-105 cursor-pointer' : 'cursor-wait'
            }`}
            aria-label="Girar a roleta"
          >
            <div className={`relative ${
              isSpinning 
                ? 'animate-spin-wheel' 
                : 'animate-wobble-wheel'
            }`}>
              <Image
                src={src}
                alt={alt}
                width={360}
                height={360}
                className="relative z-10 drop-shadow-2xl select-none"
                priority
                draggable={false}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

