import Image from 'next/image'

interface WheelProps {
  src: string
  alt: string
}

export default function Wheel({ src, alt }: WheelProps) {
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
        {/* Top pointer/marker at 12 o'clock */}
        <div className="mb-2 flex justify-center">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-accent-glow drop-shadow-glow-subtle" />
        </div>

        {/* Wheel image */}
        <div className="relative">
          {/* Wheel glow */}
          <div className="absolute inset-0 bg-accent-glow/10 blur-3xl rounded-full scale-110" />
          
          {/* Wheel */}
          <div className="relative bg-gradient-to-br from-white/10 to-transparent border-2 border-accent-glow/40 rounded-full p-4 shadow-wheel-drop">
            <Image
              src={src}
              alt={alt}
              width={320}
              height={320}
              className="relative z-10 rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

