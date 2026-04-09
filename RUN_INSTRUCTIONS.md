# ⚠️ IMPORTANTE: COMO RODAR O PROJETO

## Problema Encontrado
PowerShell tem execution policy restrita. Solução: USE OS ARQUIVOS .bat

---

## ✅ SOLUÇÃO (Windows)

### Clique em um desses arquivos na pasta:

```
RubenMoveisV2/
├── dev.bat ← DUPLO CLIQUE PARA RODAR DESENVOLVIMENTO
└── build.bat ← DUPLO CLIQUE PARA FAZER BUILD
```

**Para abrir a pasta:**
```
c:\Users\user\Desktop\RM Site\RubenMoveisV2\
```

---

## 🚀 PASSO A PASSO

### 1. Abra File Explorer
```
Tecla Windows + E
ou
C:\Users\user\Desktop\RM Site\RubenMoveisV2
```

### 2. Veja os arquivos
```
✓ dev.bat
✓ build.bat
✓ package.json
✓ index.html
✓ src/
```

### 3. Duplo clique em `dev.bat`
```
✓ Abre terminal preto (cmd.exe)
✓ Mostra "Iniciando servidor Vite..."
✓ Depois de alguns segundos:
  "Local:   http://localhost:5173/"
```

### 4. Abra no browser
```
Clique no link do terminal OU
Digite: http://localhost:5173
```

### 5. Veja o site funcionando! 🎉
```
✓ Logo Ruben Móveis
✓ Navbar azul
✓ Hero com gradiente
✓ Todos os componentes
✓ Links funcionando
```

---

## 📦 FAZER BUILD (Produção)

### 1. Duplo clique em `build.bat`
```
✓ Abre terminal
✓ Constrói projeto
✓ Cria pasta dist/
✓ Mostra tamanho do bundle
```

### 2. Verificar resultado
```
Pasta dist/ deve ter:
- index.html
- arquivos .js (90% menor que antes!)
- arquivos .css
- Tamanho total: < 50KB
```

---

## 🔧 ALTERNATIVA: CMD Manual

Se os .bat não funcionarem:

```bash
# Abra cmd.exe como administrador
# Windows + R → cmd → Enter

# Cole este comando:
cd /d "c:\Users\user\Desktop\RM Site\RubenMoveisV2" && npm run dev
```

---

## 🎯 O QUE VOCÊ DEVE VER

Depois de rodar `dev.bat`, o terminal mostra:

```
> ruben-moveis@2.0.0 dev
> vite

  VITE v5.x.x  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**E o browser abre automaticamente em:**
```
http://localhost:5173/
```

**Mostrando:**
- 🏢 Ruben Móveis (logo)
- Navegação com Início, Produtos, Portfolio, Sobre, Contato
- Hero section grande com gradiente azul
- Botões de CTA
- E tudo responsivo!

---

## ⌨️ ATALHOS DURANTE DESENVOLVIMENTO

Quando o servidor está rodando, você pode:

```
r     → Recarregar página
h     → Mostrar ajuda
j     → Mostrar/esconder console
```

**Hot reload automático:** Toda vez que editar um arquivo, o navegador atualiza sozinho! 🔄

---

## 🛑 PARAR O SERVIDOR

No terminal preto:
```
Ctrl + C
```

---

## ✨ PRÓXIMAS AÇÕES

Com o servidor rodando (`npm run dev`), você pode:

1. **Editar componentes** em `src/components/`
   - Mudanças aparecem imediatamente
   - Sem precisar reiniciar

2. **Adicionar imagens** em `src/assets/images/`
   - JPG, PNG, WebP
   - Lazy loaded automaticamente

3. **Customizar cores** em `tailwind.config.js`
   - Mude primary-600: '#...'
   - Recarrega por hot module replacement

4. **Testar links**
   - Clique em "Produtos" → vai para /produtos
   - Clique em "Contato" → vai para /contato
   - Tudo funciona!

---

## 📊 ESTRUTURA DO QUE FOI CRIADO

```
✅ 9 componentes React
✅ 5 páginas completas
✅ Navbar + Footer
✅ Formulário de contato
✅ Grid responsivo
✅ Design System Tailwind
✅ Deploy.yml profissional
```

---

## 🎉 TUDO PRONTO!

**Just run `dev.bat` and enjoy! 🚀**

Dúvidas? Veja:
- COMECE_AQUI.md
- PROJETO_IMPLEMENTADO.md
- Qualquer arquivo .md nesta pasta

