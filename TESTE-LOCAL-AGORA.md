# 🧪 Teste Local AGORA (Enquanto Configura Vercel)

## 🎯 Vamos Ver Funcionando no Seu PC!

Enquanto você configura a Vercel, pode testar tudo localmente:

---

## 🚀 Execute Estes Comandos:

### 1️⃣ Navegue até a pasta do projeto (se não estiver):

```bash
cd "C:\Users\Boi\Desktop\Bet Lead\CURSOR - TODOS PROJETOS\24GAMES\NOV 2025\11 - page roleta pre black"
```

### 2️⃣ Instale as dependências (se ainda não instalou):

```bash
npm install
```

⏱️ Aguarde 30-60 segundos...

### 3️⃣ Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Você verá algo como:

```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.3s
```

### 4️⃣ Abra no navegador:

```
http://localhost:3000/landing
```

---

## ✅ O Que Você Deve Ver:

### Visuais
- ✅ Logo "24Games" verde no topo (pequena)
- ✅ Badge "2 | Giros Gratis"
- ✅ **Roleta COM OS PRÊMIOS REAIS** (100% DE BONO, 30% DE BONO, 15 GIROS GRATIS, NADA!)
- ✅ **Ponteiro azul** fixo em cima da roleta
- ✅ Seletor "CL" na parte inferior
- ✅ Footer "© 2025 24Games"

### Animações Automáticas (SEM CLICAR)
- ✅ **Roleta balançando** suavemente (-3° para +3°)
- ✅ **Brilho azul** pulsando atrás da roleta (cresce e diminui)

### Interatividade (CLIQUE NA ROLETA)
- ✅ **Clique na roleta**
- ✅ Ela começa a **GIRAR RÁPIDO**
- ✅ **Brilho azul fica INTENSO**
- ✅ Gira por **5 segundos**
- ✅ **Para e volta** à posição original
- ✅ **Retoma o balanço** suave

---

## 🎮 Teste a Roleta:

1. **Passe o mouse** sobre a roleta → Ela dá um leve zoom (scale 1.05)
2. **Clique** na roleta → Ela começa a girar!
3. **Observe** o brilho azul atrás ficar intenso
4. **Aguarde 5 segundos** → Ela para e volta
5. **Clique novamente** → Funciona de novo!

---

## 📱 Teste no Mobile (Opcional):

### No mesmo Wi-Fi:

1. Veja o IP que apareceu quando você rodou `npm run dev`:
   ```
   Network: http://192.168.x.x:3000
   ```

2. No celular, abra o navegador e acesse:
   ```
   http://192.168.x.x:3000/landing
   ```

3. Teste a roleta clicando nela!

---

## ❌ Se Não Funcionar:

### Erro: "Cannot find module"
```bash
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Pare o processo anterior (Ctrl+C)
# Ou use outra porta:
npm run dev -- -p 3001
# Acesse: http://localhost:3001/landing
```

### Imagens não aparecem
- Verifique se as 3 imagens estão em `/public/`:
  - `logo-24games.webp`
  - `wheel-24games.webp`
  - `pointer-24games.webp`

### Roleta não gira
- Abra o Console do navegador (F12)
- Me mostre os erros (se tiver)

---

## 🎯 Está Funcionando Localmente?

Se SIM: ✅ O código está perfeito! O problema é só a conexão com a Vercel.

Se NÃO: ❌ Me avisa qual erro aparece que eu te ajudo!

---

## 📸 Gravação da Tela (Opcional)

Se quiser me mostrar funcionando:

1. Grave a tela (Win+G no Windows)
2. Clique na roleta
3. Mostre ela girando
4. Me mande o vídeo!

---

**Teste agora e me avisa se funcionou!** 🎮

Enquanto isso, veja o arquivo `CONFIGURAR-VERCEL.md` para conectar na Vercel.

