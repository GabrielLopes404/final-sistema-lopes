# 🚀 Guia Completo de Deploy no Vercel - Passo a Passo

## 📋 Pré-requisitos

Antes de começar, você precisa ter:
- Uma conta no GitHub (gratuita)
- Uma conta no Vercel (gratuita)
- Seu projeto já está pronto aqui no Replit!

---

## 🔥 PASSO 1: Criar Repositório no GitHub

### 1.1 - Criar conta no GitHub (se ainda não tiver)
1. Acesse https://github.com
2. Clique em "Sign up" (Cadastrar-se)
3. Preencha seus dados e confirme o email

### 1.2 - Criar novo repositório
1. Faça login no GitHub
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"** (Novo repositório)
4. Configure o repositório:
   - **Repository name:** `lopes-designer-portfolio` (ou o nome que preferir)
   - **Description:** "Portfolio profissional de design gráfico e desenvolvimento web"
   - **Visibility:** Public (Público) - recomendado para Vercel grátis
   - **NÃO** marque "Add a README file"
   - **NÃO** adicione .gitignore
   - **NÃO** escolha licença (já temos no projeto)
5. Clique em **"Create repository"** (Criar repositório)

### 1.3 - Copiar URL do repositório
Após criar, você verá uma página com comandos. **COPIE** a URL que aparece, algo como:
```
https://github.com/seu-usuario/lopes-designer-portfolio.git
```

---

## 💻 PASSO 2: Enviar Código para o GitHub (do Replit)

### 2.1 - Abrir o Shell do Replit
1. No Replit, procure a aba **"Shell"** (terminal)
2. Clique nela para abrir o terminal de comandos

### 2.2 - Configurar Git (primeira vez apenas)
Digite esses comandos um por vez (substitua com seus dados):

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email@exemplo.com"
```

**IMPORTANTE:** Use o mesmo email da sua conta GitHub!

### 2.3 - Inicializar e enviar para o GitHub
Cole esses comandos **um de cada vez** (substitua a URL pela sua):

```bash
# 1. Verificar status
git status

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer commit
git commit -m "Initial commit - Portfolio Lopes Designer"

# 4. Adicionar o repositório remoto (SUBSTITUA pela SUA URL!)
git remote add origin https://github.com/SEU-USUARIO/lopes-designer-portfolio.git

# 5. Verificar se foi adicionado
git remote -v

# 6. Enviar para o GitHub (pode pedir usuário e senha)
git push -u origin main
```

### 2.4 - Autenticação no GitHub
Se pedir usuário e senha:
- **Usuário:** seu username do GitHub
- **Senha:** você precisa usar um **Personal Access Token** (não é a senha da conta!)

#### Como criar Personal Access Token:
1. No GitHub, clique na sua foto (canto superior direito)
2. Vá em **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
3. Clique em **"Generate new token"** > **"Generate new token (classic)"**
4. Dê um nome: "Vercel Deploy"
5. Marque a opção **"repo"** (todas as sub-opções)
6. Clique em **"Generate token"** no final da página
7. **COPIE O TOKEN** (ele aparece só uma vez!)
8. Use esse token como senha no terminal

---

## 🌐 PASSO 3: Conectar Vercel ao GitHub

### 3.1 - Criar conta no Vercel
1. Acesse https://vercel.com
2. Clique em **"Sign Up"** (Cadastrar)
3. Escolha **"Continue with GitHub"** (Continuar com GitHub)
4. Autorize o Vercel a acessar sua conta GitHub

### 3.2 - Importar projeto
1. No painel do Vercel, clique em **"Add New..."** > **"Project"**
2. Você verá uma lista dos seus repositórios do GitHub
3. Procure por **"lopes-designer-portfolio"** (ou o nome que você deu)
4. Clique em **"Import"** ao lado do repositório

---

## ⚙️ PASSO 4: Configurar o Deploy

### 4.1 - Configurações do projeto
Na página de configuração, você verá:

**Configure Project:**
- **Project Name:** lopes-designer-portfolio (pode deixar como está)
- **Framework Preset:** Vite (o Vercel deve detectar automaticamente)
- **Root Directory:** ./ (deixe como está)

**Build and Output Settings:**
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Install Command:** `npm install`

> ✅ O Vercel deve preencher tudo automaticamente! Verifique se está correto.

### 4.2 - Variáveis de Ambiente (OPCIONAL)
Se seu projeto usar banco de dados ou APIs externas, adicione aqui.

Para este projeto básico, você pode **pular esta etapa** por enquanto.

Se precisar adicionar depois:
1. Clique em **"Environment Variables"**
2. Adicione nome e valor
3. Exemplo:
   - **Name:** `DATABASE_URL`
   - **Value:** sua URL do banco de dados

---

## 🎯 PASSO 5: Fazer o Deploy!

### 5.1 - Iniciar deploy
1. Revise todas as configurações
2. Clique no botão **"Deploy"** (grande, azul, no final da página)
3. Aguarde o processo de build (1-3 minutos)

### 5.2 - Acompanhar o build
Você verá:
- ✅ Building... (Construindo)
- ✅ Running Build Command... (Executando comando de build)
- ✅ Uploading... (Enviando)
- ✅ Deploying... (Fazendo deploy)

### 5.3 - Sucesso! 🎉
Quando terminar:
- Aparecerá uma imagem de preview do seu site
- Um botão **"Visit"** ou **"Go to Dashboard"**
- Sua URL: `https://lopes-designer-portfolio.vercel.app`

---

## 🔗 PASSO 6: Acessar seu Site

### 6.1 - Obter a URL
1. Na página de sucesso, clique em **"Visit"** ou copie a URL
2. Sua URL será algo como:
   ```
   https://lopes-designer-portfolio.vercel.app
   ```
   ou
   ```
   https://seu-projeto-random123.vercel.app
   ```

### 6.2 - Testar o site
1. Abra a URL em uma nova aba
2. Verifique se tudo está funcionando
3. Teste navegação, imagens, links

---

## 🎨 PASSO 7: Personalizar Domínio (OPCIONAL)

### 7.1 - Adicionar domínio personalizado
Se você tiver um domínio próprio (exemplo.com):

1. No dashboard do Vercel, vá no seu projeto
2. Clique em **"Settings"** > **"Domains"**
3. Clique em **"Add"**
4. Digite seu domínio
5. Siga as instruções para configurar DNS

### 7.2 - Subdomínio gratuito do Vercel
Você pode mudar o nome do subdomínio:
1. Vá em **"Settings"** > **"Domains"**
2. Adicione um nome melhor: `nome-melhor.vercel.app`

---

## 🔄 PASSO 8: Atualizações Futuras

### 8.1 - Como atualizar o site
Sempre que você fizer mudanças no código:

```bash
# No Shell do Replit:

# 1. Adicionar mudanças
git add .

# 2. Fazer commit com mensagem descritiva
git commit -m "Descrição das mudanças feitas"

# 3. Enviar para GitHub
git push
```

**O Vercel vai automaticamente:**
- Detectar a mudança
- Fazer novo build
- Atualizar o site
- Tudo em 1-2 minutos!

### 8.2 - Ver histórico de deploys
1. No dashboard do Vercel
2. Entre no seu projeto
3. Vá em **"Deployments"**
4. Veja todos os deploys anteriores

---

## 🆘 PROBLEMAS COMUNS E SOLUÇÕES

### ❌ Erro: "Build failed"
**Solução:**
1. Clique nos logs do build
2. Procure por linhas vermelhas (ERROR)
3. Geralmente são dependências faltando
4. Verifique se o `package.json` está completo

### ❌ Erro: "Command not found"
**Solução:**
1. Verifique se o Build Command está correto: `npm run build`
2. Verifique se existe o script no `package.json`

### ❌ Site em branco ou erro 404
**Solução:**
1. Verifique se Output Directory está: `dist/public`
2. Faça rebuild do projeto
3. Limpe cache: Settings > General > Clear Build Cache

### ❌ Imagens não aparecem
**Solução:**
1. Verifique se as imagens estão em `attached_assets/`
2. Verifique os caminhos nos componentes
3. As imagens devem estar commitadas no Git

### ❌ Erro de autenticação no Git
**Solução:**
1. Use Personal Access Token, não a senha da conta
2. Siga as instruções em "PASSO 2.4"

---

## ✅ CHECKLIST FINAL

Antes de considerar completo, verifique:

- [ ] Código está no GitHub
- [ ] Vercel conectado ao GitHub
- [ ] Deploy foi bem-sucedido
- [ ] Site abre na URL do Vercel
- [ ] Todas as páginas funcionam
- [ ] Imagens carregam corretamente
- [ ] Design está correto
- [ ] Links funcionam
- [ ] Responsivo (mobile/desktop)
- [ ] Console sem erros (F12 no navegador)

---

## 🎓 RESUMO RÁPIDO

1. **GitHub:** Crie repositório e envie código
2. **Vercel:** Conecte ao GitHub
3. **Configurar:** Vite + `npm run build` + `dist/public`
4. **Deploy:** Clique em Deploy
5. **Pronto:** Seu site está online!

---

## 📞 LINKS ÚTEIS

- **GitHub:** https://github.com
- **Vercel:** https://vercel.com
- **Documentação Vercel:** https://vercel.com/docs
- **Suporte Vercel:** https://vercel.com/support

---

## 💡 DICAS PROFISSIONAIS

1. **Teste localmente primeiro:** Sempre rode `npm run build` e `npm start` antes de fazer deploy
2. **Commits descritivos:** Use mensagens claras: "Adicionar seção de portfólio"
3. **Branches:** Para projetos maiores, use branches para testar antes de publicar
4. **Analytics:** Ative Vercel Analytics em Settings > Analytics
5. **Performance:** Verifique em Settings > Speed Insights

---

**Desenvolvido com 💜 para Lopes Designer**

🚀 Boa sorte com seu deploy!
