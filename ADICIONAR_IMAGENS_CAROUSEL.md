# Como Adicionar as Imagens de Estantes ao Carousel

## Passo 1: Identifique os arquivos de origem

As imagens estão em: `images_OLD/Estantes de aço/`

Arquivos necessários:
```
1. P1010281.JPG
2. WhatsApp Image 2017-04-26 at 10.44.38.jpeg
3. WhatsApp Image 2017-03-14 at 08.28.51.jpeg
4. IMG-20220804-WA0061.jpg
5. IMG-20220204-WA0045.jpg
6. P1010276.JPG
```

## Passo 2: Renomeie os arquivos (recomendado)

Para facilitar o gerenciamento, renomie para:
```
estantes-01-p1010281.jpg
estantes-02-2017-04-26.jpg
estantes-03-2017-03-14.jpg
estantes-04-2022-08-04.jpg
estantes-05-2022-02-04.jpg
estantes-06-p1010276.jpg
```

## Passo 3: Copie para src/assets/images/

Copie os arquivos renomeados para: `src/assets/images/`

## Passo 4: Atualize o Products.jsx

No topo do arquivo, importe as imagens:

```javascript
import estantes01 from '../../assets/images/estantes-01-p1010281.jpg'
import estantes02 from '../../assets/images/estantes-02-2017-04-26.jpg'
import estantes03 from '../../assets/images/estantes-03-2017-03-14.jpg'
import estantes04 from '../../assets/images/estantes-04-2022-08-04.jpg'
import estantes05 from '../../assets/images/estantes-05-2022-02-04.jpg'
import estantes06 from '../../assets/images/estantes-06-p1010276.jpg'
```

## Passo 5: Atualize o GALLERIES[2]

Substitua o array GALLERIES[2] com:

```javascript
2: [ // Estantes
  {
    src: estantes01,
    title: 'Estantes de Aço - Modelo P1010281',
    description: 'Estantes robustas em aço carbono com prateleiras reforçadas.'
  },
  {
    src: estantes02,
    title: 'Estantes com Acabamento em Branco',
    description: 'Estrutura em aço com pinturaepóxi em tom branco.'
  },
  {
    src: estantes03,
    title: 'Estantes com Acabamento em Branco (Frente)',
    description: 'Visão frontal das prateleiras e estrutura principal.'
  },
  {
    src: estantes04,
    title: 'Estantes Premium - 2022',
    description: 'Modelo mais recente com acabamento epóxi de qualidade superior.'
  },
  {
    src: estantes05,
    title: 'Estantes Reforçadas',
    description: 'Estrutura com reforços laterais para maior capacidade de carga.'
  },
  {
    src: estantes06,
    title: 'Estantes - Modelo P1010276',
    description: 'Versão anterior com bom acabamento e confiabilidade comprovada.'
  }
]
```

## Pronto!

Após seguir esses passos, o carousel de Estantes exibirá todas as 6 imagens com navigação completa!

Você pode fazer o mesmo para os outros produtos adicionando imagens aos seus GALLERIES correspondentes.

---

## Dicas:

- Comprima as imagens (máx 500KB cada) para melhor performance
- Use formato JPEG para fotos
- Nomes de arquivos sem espaços ou caracteres especiais
- Mantenha proporção de aspecto similar para visual consistente
