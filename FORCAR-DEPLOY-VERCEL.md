# 🔄 Forçar Deploy Manual na Vercel

## ✅ Situação Atual

- ✅ Projeto existe na Vercel
- ✅ Primeiro deploy funcionou
- ❌ Novos commits não estão fazendo deploy automático
- ❌ Versão antiga ainda está no ar

---

## 🚀 Solução: Fazer Deploy Manual

### Método 1️⃣: Redeploy do Último Commit (MAIS RÁPIDO)

1. **Acesse o Dashboard da Vercel**: [vercel.com](https://vercel.com)

2. **Clique no projeto**: `pageroletapreblack`

3. **Vá para a aba "Deployments"**

4. **Encontre o deploy mais recente** (pode ser o primeiro/antigo)

5. **Clique nos 3 pontinhos (⋮)** ao lado do deploy

6. **Clique em "Redeploy"**

7. **Marque a opção**: ✅ **"Use existing Build Cache"** (mais rápido)

8. **Clique em "Redeploy"**

⏱️ Aguarde 1-2 minutos

✅ Pronto! Acesse: `seu-dominio.vercel.app/landing`

---

### Método 2️⃣: Trigger Deploy com Commit Vazio

No seu terminal:

```bash
git commit --allow-empty -m "Deploy: Forçar atualização na Vercel"
git push origin main
```

Depois na Vercel, vá em **Deployments** e veja se apareceu um novo deploy.

Se NÃO aparecer = Deploy automático está desabilitado (vá para Método 3)

---

### Método 3️⃣: Verificar Configurações de Deploy Automático

Se os métodos acima não funcionaram, verifique as configurações:

#### No Dashboard da Vercel:

1. Clique no projeto `pageroletapreblack`

2. Vá em **"Settings"** (configurações)

3. No menu lateral, clique em **"Git"**

4. **Verifique estas configurações:**

```
Production Branch
┌─────────────────────────────────┐
│ main                    ✏️ Edit │  ← Deve ser "main"
└─────────────────────────────────┘

Connect Git Repository
┌─────────────────────────────────────────────┐
│ ✅ Connected                                │
│ 📦 24games/pageroletapreblack               │  ← Deve estar conectado
│ 🔗 Disconnect                               │
└─────────────────────────────────────────────┘

Ignored Build Step
┌─────────────────────────────────┐
│ [empty or default]              │  ← Deixe vazio
└─────────────────────────────────┘
```

5. **Se "Production Branch" NÃO for "main":**
   - Clique em "Edit"
   - Digite: `main`
   - Salve

6. **Se estiver "Disconnected":**
   - Clique em "Connect Git Repository"
   - Selecione: `24games/pageroletapreblack`
   - Branch: `main`

---

### Método 4️⃣: Deploy pela CLI da Vercel (Alternativa)

Se nada funcionar, use a CLI:

```bash
# Instalar Vercel CLI (primeira vez)
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

Siga as instruções no terminal.

---

## 🔍 Verificar se Funcionou

### 1. Verifique o último deploy na Vercel:

Na aba **"Deployments"**, o mais recente deve mostrar:

```
✅ Ready
🕒 2 minutes ago
📝 "Add: Imagens reais da landing (logo, roleta, ponteiro) em WEBP"
```

### 2. Teste no navegador:

1. Acesse: `seu-dominio.vercel.app/landing`

2. **Force refresh** (limpar cache):
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. **O que você DEVE ver agora**:
   - ✅ Logo "24Games" verde (real)
   - ✅ Roleta com os prêmios (100% DE BONO, 30% DE BONO, etc.)
   - ✅ Ponteiro azul em cima
   - ✅ Roleta balançando (animação idle)

4. **Clique na roleta**:
   - ✅ Deve girar por 5 segundos
   - ✅ Brilho azul fica intenso
   - ✅ Volta à posição original

---

## ❓ Ainda Mostrando Versão Antiga?

### Cache do Navegador:

1. **Abra em aba anônima** (Ctrl+Shift+N)
2. Acesse: `seu-dominio.vercel.app/landing`
3. Se funcionar na anônima = é cache do navegador

### Cache da Vercel/CDN:

1. Na Vercel, vá em **Settings** → **Caching**
2. Clique em **"Purge Everything"**
3. Aguarde 1-2 minutos
4. Teste novamente

### Domínio Customizado:

Se você configurou domínio próprio (ex: `24games.com`):
- O cache pode levar até 24h para atualizar
- Teste primeiro com: `*.vercel.app/landing`

---

## 📸 Se Continuar com Problema

Tire prints de:

1. **Vercel → Deployments** (histórico completo)
2. **Vercel → Settings → Git** (configurações)
3. **Console do navegador** (F12 → Console → erros)

E me mostre! Aí eu vejo exatamente o que está travando.

---

## ✅ Checklist Rápido

Faça nesta ordem:

- [ ] Método 1: Redeploy manual (3 pontinhos → Redeploy)
- [ ] Aguardar 2 minutos
- [ ] Force refresh no navegador (Ctrl+Shift+R)
- [ ] Testar em aba anônima
- [ ] Se não funcionar: Verificar Settings → Git
- [ ] Se não funcionar: Método 2 (commit vazio)
- [ ] Se não funcionar: Me avisa!

---

**Comece pelo Método 1 (Redeploy manual) que é o mais rápido!** 🚀


