# 24Games Landing Page

Landing page pixel-perfect para roleta pre-black Friday.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (opcional, para transições sutis)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── landing/
│   │   ├── components/
│   │   │   ├── HeaderLogo.tsx      # Logo no topo com glow
│   │   │   ├── TopBadge.tsx        # Badge com número e label
│   │   │   ├── Wheel.tsx           # Roda da roleta com pointer
│   │   │   ├── LangSelector.tsx    # Seletor de idioma
│   │   │   └── FooterLegal.tsx     # Texto legal no rodapé
│   │   └── page.tsx                # Página principal da landing
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── placeholder-logo.svg        # ⚠️ SUBSTITUIR com logo real
│   └── placeholder-wheel.svg       # ⚠️ SUBSTITUIR com roda real
└── tailwind.config.ts
```

## 🎨 Assets para Substituir

### 1. Logo (`/public/placeholder-logo.svg`)
- **Dimensões recomendadas**: 120×40px
- **Formato**: PNG com transparência
- **Localização**: Substitua o arquivo ou atualize o `src` em `HeaderLogo`

### 2. Roda da Roleta (`/public/placeholder-wheel.svg`)
- **Dimensões recomendadas**: 320×320px
- **Formato**: PNG com transparência
- **Localização**: Substitua o arquivo ou atualize o `src` em `Wheel`

### 3. Bandeira (opcional)
- Atualmente renderizada via CSS
- Se quiser usar imagem real, adicione em `/public/` e atualize `LangSelector`

## 🎯 Cores e Estilos

### Palette
- **Background**: `#0E1217` → `#0B0F14` (gradiente vertical)
- **Accent/Glow**: `#FF3366` (rosa/vermelho)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#C9D1D9`

### Efeitos
- **Glows**: Utilizando `shadow-glow-subtle` e `shadow-glow-strong`
- **Raios radiais**: Background com múltiplas linhas em 8 direções
- **Backdrop blur**: Vidro fosco nos pills

## 🛠️ Comandos

### Instalar dependências
```bash
npm install
```

### Rodar em desenvolvimento
```bash
npm run dev
```

### Build de produção
```bash
npm run build
npm start
```

## 📱 Responsividade

- **Mobile first**: Otimizado para 375px+
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Hierarquia visual**: Mantida em todas as resoluções

## ♿ Acessibilidade

- ✅ Atributos `alt` descritivos em todas as imagens
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Focus ring visível no seletor de idioma
- ✅ Markup semântico (`header`, `main`, `footer`)
- ✅ Lang definido como `es-CL`

## 📝 Customização

### Alterar texto do badge
```tsx
<TopBadge 
  number="2" 
  label="Giros Gratis" 
/>
```

### Alterar país/idioma
```tsx
<LangSelector 
  countryCode="CL" 
  flagSrc="/placeholder-flag.svg" 
/>
```

### Modificar footer
Edite diretamente em `app/landing/components/FooterLegal.tsx`

## 📄 Licença

© 2025 24Games. Todos los derechos reservados y protegidos por la ley.

