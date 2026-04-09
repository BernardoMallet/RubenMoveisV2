# 📦 Arquivos Antigos do Site (Backup)

Este diretório contém arquivos **deprecated** da versão anterior do site (HTML puro + Bootstrap).

## 📄 Arquivos de Backup

```
index.OLD.html     ← HTML antigo (não remova, é backup)
main.OLD.css       ← CSS antigo (não remova, é backup)
images_OLD/        ← Imagens antigas dos produtos
```

## ⚠️ NÃO USE ESSES ARQUIVOS

Eles foram renomeados para:
- Evitar conflitos com Vite
- Não interferirem no build
- Deixar claro que são obsoletos

## ✅ Use Estes Em Vez Disso

| Antigo | Novo |
|--------|------|
| `index.OLD.html` | `/index.html` (Vite React) |
| `main.OLD.css` | `/src/styles/globals.css` (Tailwind) |
| `images_OLD/` | `/src/assets/images/` (React) |

## 🗑️ Quando Deletar?

Você pode **deletar** esses arquivos antigos quando:
1. ✅ Deploy em produção está funcionando
2. ✅ Todas as imagens foram migradas para `/src/assets/images/`
3. ✅ Você tem backup em outro lugar (git history preserva)

```bash
# Para ver git history (imagens antigas estão lá)
git log --oneline
```

## 📸 Migrar Imagens Antigas

Se precisar das imagens dos produtos, **copie** a partir de `images_OLD/` para:
```
src/assets/images/
```

Depois importe nos componentes:
```jsx
import produtoImg from '../assets/images/seu-arquivo.jpg'

export default function Produtos() {
  return <img src={produtoImg} alt="descrição" />
}
```

---

**Resumo:** Esses arquivos não afetam o novo projeto. Pode deixar aqui como backup ou deletar após migrar as imagens. ✅
