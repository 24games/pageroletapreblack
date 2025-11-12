# 🚀 Como Configurar Deploy na Vercel

## ⚠️ Problema: Deploy não está acontecendo

Se o histórico de deploy está vazio ou não atualiza, a Vercel pode não estar conectada ao GitHub.

---

## 📋 Passo a Passo para Configurar

### 1️⃣ Acesse a Vercel

1. Vá para: [vercel.com](https://vercel.com)
2. Faça login (se ainda não estiver logado)

---

### 2️⃣ Verificar se o Projeto Existe

No dashboard da Vercel:

**CENÁRIO A: Projeto NÃO existe na lista**
- Vá para o passo 3 (Criar Novo Projeto)

**CENÁRIO B: Projeto JÁ existe na lista**
- Clique no projeto `pageroletapreblack`
- Vá para "Settings" (Configurações)
- Vá para "Git" no menu lateral
- **Verifique se está conectado ao repositório**: `24games/pageroletapreblack`
- Se NÃO estiver conectado, reconecte ou delete e crie novo (passo 3)

---

### 3️⃣ Criar/Conectar Projeto na Vercel

#### A. No Dashboard da Vercel:

1. Clique em **"Add New..."** → **"Project"**

#### B. Importar Repositório:

1. Procure por: **`24games/pageroletapreblack`**
2. Se não aparecer, clique em **"Adjust GitHub App Permissions"**:
   - Autorize a Vercel a acessar o repositório
   - Volte e procure novamente

3. Clique em **"Import"** no repositório `pageroletapreblack`

#### C. Configurações do Projeto:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build  (ou deixar em branco)
Output Directory: .next  (ou deixar em branco)
Install Command: npm install  (ou deixar em branco)
```

**IMPORTANTE**: Não precisa configurar variáveis de ambiente para este projeto.

4. Clique em **"Deploy"**

---

### 4️⃣ Aguardar Primeiro Deploy

- ⏱️ Tempo: 1-3 minutos
- Status: Você verá logs em tempo real
- ✅ Sucesso: "Your project has been deployed"
- ❌ Erro: Verifique os logs (pode me mostrar)

---

### 5️⃣ Configurar Deploy Automático

Após o primeiro deploy bem-sucedido:

1. Vá em **"Settings"** do projeto
2. Vá em **"Git"**
3. Verifique se está assim:

```
✅ Production Branch: main
✅ Automatic deployments enabled
✅ Connected to: 24games/pageroletapreblack
```

---

## 🔍 Verificar se Está Funcionando

### Teste Manual:

1. Faça uma mudança pequena no código:

```bash
# Adicione um espaço ou comentário em qualquer arquivo
git add .
git commit -m "Test: Verificar deploy automático"
git push origin main
```

2. Volte para o dashboard da Vercel
3. Na aba **"Deployments"** você deve ver:
   - 🟡 **Building...** (construindo)
   - ✅ **Ready** (pronto) após 1-2 minutos

---

## 🌐 Encontrar a URL do Projeto

### No Dashboard da Vercel:

1. Clique no projeto `pageroletapreblack`
2. Você verá a URL principal, algo como:
   ```
   https://pageroletapreblack.vercel.app
   ```
3. A landing page estará em:
   ```
   https://pageroletapreblack.vercel.app/landing
   ```

---

## 📊 Histórico de Deploys

Você deve ver algo assim na aba **"Deployments"**:

```
✅ Production - Add: Imagens reais...  (2 min ago)
✅ Production - Feature: Roleta...     (10 min ago)
✅ Production - Initial commit         (1 hour ago)
```

Se estiver vazio = Vercel não está conectada ao GitHub!

---

## 🆘 Problemas Comuns

### "Repository not found"
- Verifique se você tem permissões no repositório `24games/pageroletapreblack`
- Reconecte a Vercel ao GitHub

### "Build failed"
- Me mostre os logs de erro
- Pode ser falta de `package.json` ou erro no código

### "Deploy não acontece automaticamente"
- Vá em Settings → Git
- Ative "Automatic deployments"
- Verifique se a branch é "main"

### "Página não carrega / 404"
- Acesse: `/landing` (não apenas `/`)
- Aguarde 2-3 minutos após o deploy

---

## ✅ Checklist Final

Após configurar, verifique:

- [ ] Projeto aparece no dashboard da Vercel
- [ ] Status do último deploy: "Ready" (verde)
- [ ] URL acessível: `https://seu-dominio.vercel.app`
- [ ] Rota `/landing` funciona
- [ ] Commits novos geram deploys automáticos

---

## 📸 Me Mostre Se Precisar

Se continuar com problema, tire print de:

1. Dashboard da Vercel (lista de projetos)
2. Aba "Deployments" (histórico)
3. Settings → Git (configurações)
4. Logs de erro (se tiver)

Aí eu te ajudo a resolver! 🚀


