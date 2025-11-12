# 🎨 Como Trocar as Imagens

## 📍 Arquivos que Você Vai Enviar

Quando você tiver as 3 imagens prontas:

1. **Logo** → Coloque em: `/public/logo-24games.png`
2. **Roda da Roleta** → Coloque em: `/public/wheel-24games.png`
3. **Ponteiro** → Coloque em: `/public/pointer-24games.png`

---

## 📝 Passo a Passo

### 1️⃣ Coloque as Imagens na Pasta `/public/`

```
public/
├── logo-24games.png          ← Logo do topo
├── wheel-24games.png         ← Roda da roleta
└── pointer-24games.png       ← Ponteiro que fica em cima
```

**Formatos aceitos**: PNG, JPG, WEBP (PNG recomendado para transparência)

---

### 2️⃣ Atualize o Arquivo `app/landing/page.tsx`

Abra o arquivo e encontre as linhas:

```tsx
// Linha ~15 - Logo
<HeaderLogo 
  src="/placeholder-logo.svg" 
  alt="Site logo placeholder" 
/>

// Linha ~30 - Roda + Ponteiro
<Wheel 
  src="/placeholder-wheel.svg" 
  alt="Wheel placeholder" 
/>
```

**Substitua por:**

```tsx
// Logo real
<HeaderLogo 
  src="/logo-24games.png" 
  alt="24Games Logo" 
/>

// Roda + Ponteiro reais
<Wheel 
  src="/wheel-24games.png" 
  alt="Roda da Roleta 24Games"
  pointerSrc="/pointer-24games.png"
  pointerAlt="Ponteiro da Roleta"
/>
```

---

### 3️⃣ Ajuste Tamanhos (Se Necessário)

Se as imagens ficarem muito grandes ou pequenas, ajuste:

#### Logo (em `app/landing/components/HeaderLogo.tsx`)
```tsx
<Image
  src={src}
  alt={alt}
  width={120}    ← Ajustar largura
  height={40}    ← Ajustar altura
  ...
/>
```

#### Ponteiro (em `app/landing/components/Wheel.tsx` - linha ~41)
```tsx
<Image
  src={pointerSrc}
  alt={pointerAlt}
  width={60}     ← Ajustar largura
  height={60}    ← Ajustar altura
  ...
/>
```

#### Roda (em `app/landing/components/Wheel.tsx` - linha ~59)
```tsx
<Image
  src={src}
  alt={alt}
  width={340}    ← Ajustar largura
  height={340}   ← Ajustar altura
  ...
/>
```

---

### 4️⃣ Testar Localmente

```bash
npm run dev
```

Acesse: `http://localhost:3000/landing`

---

### 5️⃣ Enviar para GitHub

```bash
git add public/
git add app/landing/page.tsx
git commit -m "Add: Imagens reais (logo, roda, ponteiro)"
git push origin main
```

A Vercel faz deploy automático em ~30 segundos! 🚀

---

## 🎯 Dicas de Qualidade das Imagens

### Logo
- **Tamanho recomendado**: 240×80px (ou proporção 3:1)
- **Formato**: PNG com fundo transparente
- **Resolução**: @2x para telas Retina

### Roda
- **Tamanho recomendado**: 680×680px (ou 1000×1000px para alta qualidade)
- **Formato**: PNG com fundo transparente
- **Deve estar**: Centralizada, sem o ponteiro

### Ponteiro
- **Tamanho recomendado**: 120×120px
- **Formato**: PNG com fundo transparente
- **Deve apontar**: Para baixo (12h → 6h)

---

## 📂 Estrutura Final Esperada

```
public/
├── logo-24games.png          ✅
├── wheel-24games.png         ✅
├── pointer-24games.png       ✅
├── placeholder-logo.svg      (pode deletar depois)
└── placeholder-wheel.svg     (pode deletar depois)
```

---

## ⚠️ Troubleshooting

### "Imagem não aparece"
1. Verifique se o nome do arquivo está **exatamente** igual
2. Verifique se está em `/public/` (não em subpastas)
3. Limpe o cache: `Ctrl+Shift+R` no navegador

### "Imagem muito grande/pequena"
- Ajuste os valores de `width` e `height` nos componentes
- Mantenha a proporção original da imagem

### "Imagem com fundo branco/preto"
- Converta para PNG com transparência
- Use ferramenta: [remove.bg](https://remove.bg) ou Photoshop

---

## 🆘 Precisa de Ajuda?

Se tiver dúvida em qual arquivo editar:

1. **Logo**: `app/landing/page.tsx` (linha ~15)
2. **Roda + Ponteiro**: `app/landing/page.tsx` (linha ~30)
3. **Tamanhos**: Componentes em `app/landing/components/`

---

**Aguardando suas imagens para finalizar!** 🎨


