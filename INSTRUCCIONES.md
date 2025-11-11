# 🎰 Instrucciones de Instalación y Uso

## 📦 Instalación

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
```
http://localhost:3000/landing
```

## 🖼️ Reemplazar Assets

### Logo (Obligatorio)
1. Preparar tu logo en formato **PNG con transparencia**
2. Dimensiones recomendadas: **120×40px**
3. Colocar el archivo en `/public/` (ejemplo: `logo-24games.png`)
4. Actualizar en `app/landing/page.tsx`:
```tsx
<HeaderLogo 
  src="/logo-24games.png"  // ← Cambiar aquí
  alt="24Games logo" 
/>
```

### Roda de la Ruleta (Obligatorio)
1. Preparar la imagen de la roda en **PNG con transparencia**
2. Dimensiones recomendadas: **320×320px**
3. Colocar el archivo en `/public/` (ejemplo: `wheel-roulette.png`)
4. Actualizar en `app/landing/page.tsx`:
```tsx
<Wheel 
  src="/wheel-roulette.png"  // ← Cambiar aquí
  alt="Roda de ruleta" 
/>
```

## 🎨 Personalización

### Cambiar el número y texto del badge
En `app/landing/page.tsx`:
```tsx
<TopBadge 
  number="5"              // ← Cambiar número
  label="Jugadas Gratis"  // ← Cambiar texto
/>
```

### Cambiar el país/idioma
En `app/landing/page.tsx`:
```tsx
<LangSelector 
  countryCode="AR"  // ← Cambiar código (CL, AR, BR, etc.)
  flagSrc="/flag-ar.svg" 
/>
```

### Modificar colores
En `tailwind.config.ts`, sección `colors`:
```ts
colors: {
  'deep-charcoal': '#0E1217',    // Background superior
  'near-black': '#0B0F14',        // Background inferior
  'accent-glow': '#FF3366',       // Color de acento (rosa/rojo)
  'text-secondary': '#C9D1D9',    // Texto secundario
}
```

### Cambiar texto legal del footer
Editar `app/landing/components/FooterLegal.tsx`

## 🚀 Deploy

### Build de producción
```bash
npm run build
```

### Iniciar servidor de producción
```bash
npm start
```

## 🔧 Estructura de Rutas

- `/landing` → Página de la ruleta (landing page)
- `/` → Homepage existente (no modificada)

Para mover la landing a la raíz (`/`):
1. Renombrar `app/landing/page.tsx` → `app/page.tsx`
2. Mover la carpeta `components/` a `app/components/`
3. Actualizar los imports

## ✅ Checklist antes de publicar

- [ ] Reemplazar `placeholder-logo.svg` con logo real
- [ ] Reemplazar `placeholder-wheel.svg` con imagen de roda real
- [ ] Verificar texto del badge ("Giros Gratis")
- [ ] Confirmar país/idioma en selector (CL por defecto)
- [ ] Revisar texto legal del footer
- [ ] Probar en móvil (375px mínimo)
- [ ] Probar en tablet y desktop
- [ ] Verificar colores y efectos de glow

## 🎯 Acceso rápido

**Página landing**: `http://localhost:3000/landing`

## ❓ Troubleshooting

### "Module not found: Can't resolve 'next/image'"
```bash
npm install
```

### Los estilos no se aplican
1. Verificar que `globals.css` esté importado en `layout.tsx`
2. Reiniciar el servidor: `Ctrl+C` y `npm run dev`

### Las imágenes no cargan
1. Verificar que los archivos estén en `/public/`
2. No incluir `/public/` en el path del `src` (usar `/nombre-archivo.png`)

## 📝 Soporte

Para dudas o modificaciones, referirse al código en:
- `app/landing/page.tsx` - Página principal
- `app/landing/components/` - Componentes individuales
- `tailwind.config.ts` - Configuración de estilos

