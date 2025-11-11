# 📐 Estructura del Proyecto

```
24games-landing/
│
├── 📁 app/
│   ├── layout.tsx                    # Layout raíz con Inter font
│   ├── globals.css                   # Estilos globales + Tailwind
│   │
│   └── 📁 landing/                   # ← LANDING PAGE
│       ├── page.tsx                  # Página principal (/landing)
│       │
│       └── 📁 components/
│           ├── HeaderLogo.tsx        # 🔝 Logo con glow sutil
│           ├── TopBadge.tsx          # 🎟️ Badge "2 Giros Gratis"
│           ├── Wheel.tsx             # 🎡 Roda con pointer y rays
│           ├── LangSelector.tsx      # 🇨🇱 Selector "CL"
│           └── FooterLegal.tsx       # ⚖️ Texto legal en ES-CL
│
├── 📁 public/
│   ├── placeholder-logo.svg          # ⚠️ Reemplazar con logo real
│   └── placeholder-wheel.svg         # ⚠️ Reemplazar con roda real
│
├── 📁 config/
│   ├── tailwind.config.ts            # Colores, shadows, fonts
│   ├── tsconfig.json                 # TypeScript config
│   ├── next.config.js                # Next.js config
│   └── postcss.config.js             # PostCSS + Tailwind
│
├── 📄 package.json                   # Dependencies
├── 📄 .gitignore
├── 📄 .eslintrc.json
│
└── 📚 Documentación/
    ├── README.md                     # Overview completo
    ├── INSTRUCCIONES.md              # Guía de personalización
    ├── INICIO-RAPIDO.md              # 3 pasos para empezar
    └── ESTRUCTURA.md                 # Este archivo
```

---

## 🎨 Componentes Visuales

### 1. HeaderLogo
```tsx
<HeaderLogo 
  src="/placeholder-logo.svg" 
  alt="Site logo placeholder" 
/>
```
- Posición: Top center
- Padding superior: Generoso
- Efecto: Glow sutil rosa/rojo

### 2. TopBadge
```tsx
<TopBadge 
  number="2" 
  label="Giros Gratis" 
/>
```
- Layout: Number (grande) | divider | Label (uppercase)
- Efecto: Pill translúcido con border + glow
- Backdrop: Blur glass effect

### 3. Wheel
```tsx
<Wheel 
  src="/placeholder-wheel.svg" 
  alt="Wheel placeholder" 
/>
```
- Pointer: Triangle arriba (12 o'clock)
- Background: 8 rayos radiales en 45° intervals
- Efecto: Drop shadow + border glow

### 4. LangSelector
```tsx
<LangSelector 
  countryCode="CL" 
  flagSrc="/placeholder-flag.svg" 
/>
```
- Layout: Flag circle | Code | Chevron down
- Estado: Hover + Focus ring
- Interactivo: Preparado para onClick

### 5. FooterLegal
```tsx
<FooterLegal />
```
- Línea 1: `© 2025 24Games`
- Línea 2: `Todos los derechos reservados...`
- Estilo: Small, centered, high contrast

---

## 🎯 Paleta de Colores

| Elemento | Color | Variable Tailwind |
|----------|-------|-------------------|
| Background top | `#0E1217` | `deep-charcoal` |
| Background bottom | `#0B0F14` | `near-black` |
| Accent/Glow | `#FF3366` | `accent-glow` |
| Text primary | `#FFFFFF` | `white` |
| Text secondary | `#C9D1D9` | `text-secondary` |

---

## 📱 Responsive Breakpoints

- **Mobile**: 375px+ (default)
- **SM**: 640px+
- **MD**: 768px+
- **LG**: 1024px+

---

## ✨ Efectos Aplicados

### Glows
- `shadow-glow-subtle`: Logo, badge, pointer
- `shadow-glow-strong`: Wheel (opcional)
- `shadow-wheel-drop`: Wheel container

### Backdrops
- `backdrop-blur-sm`: Badge y selector pills
- `bg-white/5`: Backgrounds translúcidos

### Gradientes
- Vertical: Background principal
- Radial: Spotlight detrás de la wheel

---

## 🔧 Archivos de Configuración Clave

### tailwind.config.ts
Define:
- Colores personalizados
- Shadows/glows
- Font family (Inter)
- Gradient utilities

### app/globals.css
Define:
- Import de Tailwind
- Variables CSS root
- Background gradient body

### tsconfig.json
Define:
- Paths aliases (`@/*`)
- TypeScript strict mode
- Next.js plugin

---

## 📍 Rutas

| URL | Archivo | Descripción |
|-----|---------|-------------|
| `/landing` | `app/landing/page.tsx` | Landing de ruleta |
| `/` | (no creado) | Homepage existente |

---

## 🔄 Flujo de Datos

```
page.tsx
  ├─→ HeaderLogo (props: src, alt)
  ├─→ TopBadge (props: number, label)
  ├─→ Wheel (props: src, alt)
  ├─→ LangSelector (props: countryCode, flagSrc)
  └─→ FooterLegal (static)
```

---

## ✅ Checklist Visual

- [x] Logo centrado con glow
- [x] Badge pill con número grande y label
- [x] Roda centrada con pointer arriba
- [x] 8 rayos radiales de fondo
- [x] Selector de idioma con chevron
- [x] Footer con texto legal en ES-CL
- [x] Background gradient vertical oscuro
- [x] Accent color rosa/rojo (#FF3366)
- [x] Font Inter cargado
- [x] Mobile-first responsive
- [x] Placeholders fáciles de reemplazar

---

**Próximo paso**: Reemplazar placeholders con assets reales 🎨

