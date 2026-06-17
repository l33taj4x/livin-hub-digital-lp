# Fontes licenciadas (self-host)

A tipografia oficial do brandbook usa fontes comerciais que **não** estão no Google Fonts.
Para ativá-las no site, siga 2 passos.

## 1. Coloque os arquivos nesta pasta

Nomes esperados (de preferência `.woff2` para web — converta os `.otf`/`.ttf` se necessário):

| Papel no brandbook                  | Família CSS                          | Arquivo esperado                       |
| ----------------------------------- | ------------------------------------ | -------------------------------------- |
| Principal / títulos (display)       | `Franklin Gothic Extra Condensed`    | `FranklinGothic-ExtraCondensed.woff2`  |
| Detalhe manuscrito (script)         | `Hello Montana`                       | `HelloMontana.woff2`                   |

> Besley (serifada de apoio) já está ativa via Google Fonts — não precisa de arquivo.

## 2. Descomente os `@font-face`

Em `app/globals.css`, descomente o bloco **"FONTES LICENCIADAS (self-host)"**.
Pronto: as stacks `--font-display` e `--font-script` já apontam para essas famílias,
então os títulos passam a usar Franklin Gothic e os acentos `.playfair` usam Hello Montana
automaticamente.

### Dica: converter OTF/TTF → WOFF2

```bash
# com fonttools instalado (pip install fonttools brotli)
fonttools ttLib.woff2 compress -o FranklinGothic-ExtraCondensed.woff2 SuaFonte.otf
```

Se preferir `next/font/local` em vez de `@font-face`, me avise que eu refatoro.
