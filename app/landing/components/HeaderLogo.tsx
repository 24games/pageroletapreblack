import Image from 'next/image'

interface HeaderLogoProps {
  src: string
  alt: string
}

export default function HeaderLogo({ src, alt }: HeaderLogoProps) {
  return (
    <div className="flex justify-center pt-12 pb-6">
      <div className="relative">
        <div className="absolute inset-0 blur-xl bg-accent-glow/20 rounded-full" />
        <Image
          src={src}
          alt={alt}
          width={120}
          height={40}
          className="relative z-10 drop-shadow-glow-subtle"
          priority
        />
      </div>
    </div>
  )
}

