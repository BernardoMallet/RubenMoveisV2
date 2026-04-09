# GitHub Actions - Configuração de Secrets

## O que são Secrets?

Secrets são variáveis confidenciais (senhas, tokens, chaves) armazenadas de forma segura no GitHub. Elas não aparecem nos logs e são mantidas criptografadas.

## Secrets Necessários para Deploy

O workflow de deploy requer 3 secrets FTP:

1. **FTP_HOST** - Endereço IP ou hostname do servidor FTP
   - Exemplo: `ftp.locaweb.com.br` ou `123.45.67.89`

2. **FTP_USER** - Usuário/login FTP
   - Exemplo: `usuario@rubenmoveis.com.br`

3. **FTP_PASSWORD** - Senha FTP
   - A senha é armazenada de forma criptografada

## Como Configurar

### Via GitHub Web (Recomendado)

1. Acesse o repositório: https://github.com/BernardoMallet/RubenMoveisV2
2. Clique em **Settings** (Configurações)
3. No menu esquerdo, vá para **Secrets and variables** > **Actions**
4. Clique em **New repository secret** para cada secret:

**Exemplo:**
- Name: `FTP_HOST`
- Secret: `ftp.locaweb.com.br` (ou seu servidor)

5. Repita para `FTP_USER` e `FTP_PASSWORD`

### Via GitHub CLI

```bash
gh secret set FTP_HOST --body "ftp.locaweb.com.br"
gh secret set FTP_USER --body "seu_usuario@dominio"
gh secret set FTP_PASSWORD --body "sua_senha"
```

## Verificação

Após configurar os secrets:

1. Faça um commit vazio para disparar o workflow:
   ```bash
   git commit --allow-empty -m "test: trigger deploy workflow"
   git push
   ```

2. Ou vá para **Actions** e clique em **Run workflow**

3. O build fazendo com sucesso? ✓
4. Deploy iniciou? ✓

## Segurança

✅ **Seguro:**
- Secrets não aparecem nos logs
- Apenas visíveis para você (admin do repo)
- Criptografados no servidor do GitHub
- Não podem ser exportados

❌ **Nunca:**
- Colocar secrets no código/commits
- Logar no console/print
- Compartilhar senhas em conversa aberta

## Troubleshooting

Se o workflow ainda falhar com "Input required: server":

1. Verifique se todos os 3 secrets foram criados
2. Confirme que os valores estão corretos
3. Verifique se o FTP está ativo e acessível
4. Consulte os logs do GitHub Actions para detalhes

## Referências

- [GitHub Documentation - Encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [FTP Deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action)
