# Deploy no Vercel

## Configuração do Projeto

Este projeto está pronto para deploy no Vercel. Siga os passos abaixo:

## Passo 1: Preparar o Repositório

1. Faça commit de todas as alterações no Git
2. Faça push para o GitHub/GitLab

## Passo 2: Importar no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório do projeto
4. Selecione "rest-express" como nome do projeto

## Passo 3: Configurar Build

O Vercel deve detectar automaticamente as configurações, mas caso precise configurar manualmente:

**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist/public`
**Install Command:** `npm install`

## Passo 4: Variáveis de Ambiente

Se você tiver variáveis de ambiente, adicione-as na seção "Environment Variables":

- `NODE_ENV` = `production`
- Adicione outras variáveis conforme necessário

## Passo 5: Deploy

1. Clique em "Deploy"
2. Aguarde o build completar
3. Seu site estará disponível em `https://seu-projeto.vercel.app`

## Estrutura do Projeto

- **Frontend:** React + Vite (porta 5000 em dev)
- **Backend:** Express.js
- **Build:** Produção otimizada com Terser
- **Assets:** Imagens em `attached_assets/`

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção localmente
npm start

# Type checking
npm run check
```

## Observações

- O projeto está configurado para deploy autoscale (stateless)
- Cache control configurado para evitar problemas de atualização
- Todas as imagens temporárias foram removidas
- Build otimizado com code splitting e minificação

## Suporte

Para problemas com o deploy, verifique:
1. Logs de build no Vercel
2. Console do navegador
3. Variáveis de ambiente configuradas corretamente
