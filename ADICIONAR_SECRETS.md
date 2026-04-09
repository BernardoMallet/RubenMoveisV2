# ⚡ Configurar Secrets do FTP - Instruções Rápidas

## Passo 1: Abra a página de Secrets
A página já deve estar aberta: 
`https://github.com/BernardoMallet/RubenMoveisV2/settings/secrets/actions`

## Passo 2: Adicione o primeiro secret (FTP_HOST)

1. Clique em **"New repository secret"** (botão verde)
2. Em **Name**, digite: `FTP_HOST`
3. Em **Secret**, copie e cole:
   ```
   rubenmoveis.com.br
   ```
4. Clique em **"Add secret"**

## Passo 3: Adicione o segundo secret (FTP_USER)

1. Clique em **"New repository secret"** novamente
2. Em **Name**, digite: `FTP_USER`
3. Em **Secret**, copie e cole:
   ```
   rubenmoveis1
   ```
4. Clique em **"Add secret"**

## Passo 4: Adicione o terceiro secret (FTP_PASSWORD)

1. Clique em **"New repository secret"** novamente
2. Em **Name**, digite: `FTP_PASSWORD`
3. Em **Secret**, copie e cole:
   ```
   Caer5016@
   ```
4. Clique em **"Add secret"**

## ✅ Pronto!

Após adicionar os 3 secrets, você deverá ver uma lista assim:

```
✓ FTP_HOST
✓ FTP_USER
✓ FTP_PASSWORD
```

Todos em **"Repository secrets"**

## 🚀 Próximo Passo

Depois que adicionar os secrets:

1. Vá para **Actions** no repositório
2. Clique em **Deploy Ruben Móveis - Vite + React**
3. Clique em **"Run workflow"** (botão verde)
4. Selecione a branch **main**
5. Clique em **"Run workflow"**

A pipeline vai rodar e desta vez fará o deploy para seu servidor FTP! 🎉

---

## ℹ️ Informações de Segurança

✅ **Seus secrets estão seguros:**
- Não aparecem nos logs
- Não podem ser exportados
- GitHub os criptografa no servidor
- Apenas você (admin) consegue editar/deletar

❌ **Nunca:**
- Compartilhe seu FTP_PASSWORD
- Coloque secrets no código
- Printem senha no console

