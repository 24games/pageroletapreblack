# 🚀 Guia de Deploy

## ✅ Status do Deploy

- **GitHub**: https://github.com/24games/pageroletapreblack
- **Branch**: main
- **Deploy**: Vercel (automático)

---

## 📍 Estrutura de Rotas

### Rota Principal (Raiz)
```
/ → Landing page da roleta
```

A landing page está na **raiz do projeto** (`app/page.tsx`), então ao acessar seu domínio Vercel, a página já carrega diretamente.

### Rota Alternativa
```
/landing → Cópia da landing page (mantida para referência)
```

---

## 🔄 Deploy na Vercel

### Primeira Vez

1. Acesse [vercel.com](https://vercel.com)
2. Faça login e clique em **"Add New Project"**
3. Importe o repositório: `24games/pageroletapreblack`
4. Configurações automáticas (Next.js detectado):
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Clique em **"Deploy"**

### Deploy Automático

Após a primeira configuração, **todo push para `main`** faz deploy automático! 🎉

---

## 🌐 Acessar a Página

Após o deploy na Vercel, acesse:

```
https://seu-projeto.vercel.app/
```

A landing page carrega **direto na raiz** (`/`).

---

## 🔧 Comandos Git para Atualizações

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição da mudança"
git push origin main

# A Vercel faz o deploy automaticamente em ~30 segundos
```

---

## ⚠️ Checklist Pós-Deploy

Após o deploy, verificar:

- [ ] Página carrega na raiz (`/`)
- [ ] Logo placeholder está visível
- [ ] Roda placeholder está visível
- [ ] Badge "2 Giros Gratis" está visível
- [ ] Seletor de idioma "CL" está visível
- [ ] Footer com "© 2025 24Games" está visível
- [ ] Responsivo funciona em mobile
- [ ] Não há erros no console do navegador

---

## 🎨 Próximos Passos

1. **Substituir placeholders**:
   - `/public/placeholder-logo.svg` → Logo real
   - `/public/placeholder-wheel.svg` → Roda real

2. **Fazer commit e push**:
   ```bash
   git add public/
   git commit -m "Add: Logo e roda reais"
   git push origin main
   ```

3. **Aguardar redeploy automático** (~30 segundos)

---

## 📊 Status do Último Deploy

- **Commit**: "Fix: Mover landing page para raiz (/) para funcionar na Vercel"
- **Arquivos**: 6 novos arquivos adicionados
- **Hash**: `11ad5d7`
- **Data**: Hoje

---

## 🆘 Troubleshooting

### "Página não carrega / 404"
- Aguarde 1-2 minutos após o push
- Force refresh: `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
- Verifique o status do deploy no dashboard da Vercel

### "Build falhou"
- Verifique os logs na Vercel
- Teste localmente: `npm run build`
- Verifique erros de TypeScript: `npm run lint`

### "Imagens não carregam"
- Verifique se os arquivos estão em `/public/`
- Verifique se os paths no código são `/nome-arquivo.ext` (sem `/public/`)
- Limpe o cache da Vercel e faça redeploy

---

**Deploy configurado e funcionando!** ✅

