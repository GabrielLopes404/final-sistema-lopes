# ⚡ Comandos Rápidos para Deploy no Vercel

## 📝 COMANDOS PARA COPIAR E COLAR

### 1️⃣ Configurar Git (primeira vez apenas)
```bash
git config --global user.name "SEU NOME AQUI"
git config --global user.email "seu-email@exemplo.com"
```

### 2️⃣ Preparar e enviar para GitHub
```bash
# Verificar status
git status

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Deploy inicial - Portfolio Lopes Designer"

# Adicionar repositório remoto (SUBSTITUA pela sua URL do GitHub!)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Enviar para GitHub
git push -u origin main
```

### 3️⃣ Para atualizações futuras
```bash
git add .
git commit -m "Atualização do site"
git push
```

---

## 🔧 CONFIGURAÇÕES DO VERCEL

Quando importar no Vercel, use estas configurações:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist/public` |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x (automático) |

---

## 🌐 URLs

Depois do deploy, seu site estará em:
- **URL Vercel:** `https://seu-projeto.vercel.app`
- **Dashboard:** https://vercel.com/dashboard

---

## ✅ CHECKLIST RÁPIDO

- [ ] Criar repositório no GitHub
- [ ] Configurar git local
- [ ] Fazer push do código
- [ ] Conectar Vercel ao GitHub
- [ ] Importar projeto no Vercel
- [ ] Configurar build (Vite)
- [ ] Deploy!
- [ ] Testar site online

---

## 🆘 COMANDO DE EMERGÊNCIA

Se algo der errado e precisar reverter:
```bash
git log --oneline  # Ver histórico
git reset --hard HEAD~1  # Voltar 1 commit (cuidado!)
git push -f  # Forçar envio (cuidado!)
```

**ATENÇÃO:** Só use isso se souber o que está fazendo!
