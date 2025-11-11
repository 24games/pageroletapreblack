# 🎨 Como Salvar as 3 Imagens

## 📍 IMPORTANTE - Siga estes passos:

### 1️⃣ Salve as 3 imagens que você me enviou:

**Baixe as imagens do chat e salve com estes nomes EXATOS:**

```
public/
├── logo-24games.png          ← Imagem 1 (logo verde "24games")
├── wheel-24games.png         ← Imagem 2 (roleta com os prêmios)
└── pointer-24games.png       ← Imagem 3 (ponteiro azul)
```

---

### 2️⃣ Clique com botão direito em cada imagem no chat:

1. **Primeira imagem** (logo verde):
   - Botão direito → "Salvar imagem como..."
   - Salvar em: `/public/logo-24games.png`

2. **Segunda imagem** (roleta preta/azul):
   - Botão direito → "Salvar imagem como..."
   - Salvar em: `/public/wheel-24games.png`

3. **Terceira imagem** (ponteiro azul):
   - Botão direito → "Salvar imagem como..."
   - Salvar em: `/public/pointer-24games.png`

---

### 3️⃣ Teste localmente:

```bash
npm run dev
```

Acesse: `http://localhost:3000/landing`

---

### ✅ O que deve funcionar:

- ✅ Logo "24Games" no topo
- ✅ Roleta com os segmentos de prêmios
- ✅ Ponteiro azul fixo em cima
- ✅ **Animação idle**: Roleta "ameaça" girar (balança suavemente)
- ✅ **Clique**: Roleta gira por 5 segundos e volta
- ✅ **Brilho azul**: Pulsa atrás da roleta
- ✅ **Brilho intenso**: Aumenta quando está girando

---

### 4️⃣ Enviar para GitHub:

```bash
git add public/
git add app/
git commit -m "Add: Imagens reais + Roleta interativa com animações"
git push origin main
```

---

## 🎮 Como Funciona:

### Animação Idle (Parada)
- Roleta balança suavemente (-3° a +3°)
- Brilho azul pulsa devagar (scale 1.1 → 1.2)
- Loop infinito

### Ao Clicar
- Roleta gira 5 voltas completas (1800°)
- Dura exatos 5 segundos
- Easing suave (cubic-bezier)
- Brilho azul fica intenso e rápido
- Volta à posição original após 5 segundos
- Continua animação idle depois

---

**Depois de salvar as 3 imagens, testa e me avisa!** 🚀

