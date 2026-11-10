# Kouki Web: pacote final

Este pacote tem **todos** os arquivos de `src/` já no estado final (etapas 1 a 8 + o conteúdo aprovado).
Copie a pasta `src/` por cima da do projeto.

## 1. Apagar (não são mais usados)
```
src/i18n/i18n.ts
src/i18n/I18nProvider.tsx
src/app/[lng]/contacts/
src/app/[lng]/products/
src/app/[lng]/_components/Quote.tsx         (o depoimento saiu do site)
src/app/[lng]/_components/Products.tsx
src/app/[lng]/_components/Products_2.tsx
src/app/[lng]/_components/Speed.tsx
src/app/[lng]/_components/Template-Models.tsx
src/app/[lng]/_components/ThemeToggle.tsx
src/app/[lng]/_components/Top.tsx
src/app/[lng]/_components/UpgradeImg.tsx
src/app/[lng]/robots.ts        (agora fica em src/app/robots.ts)
src/app/[lng]/sitemap.ts       (agora fica em src/app/sitemap.ts)
```
Antes de apagar, confira os usos:
```
grep -rE "react-i18next|i18next|flowbite|ThemeToggle|Speed|UpgradeImg|Template-Models" src -l
grep -rE "font-(anton|poetsen|inclusive|inter|jetbrains|spaceGrotesk|geist)|dark:" "src/app/[lng]/template-models"
```
Depois: `npm rm i18next react-i18next` (e `flowbite`, se nada usar).

## 2. Testes
```
npm i -D vitest
npm test        # adicione "test": "vitest run" em package.json
```
Cobrem o roteamento de idioma, o link do WhatsApp e a paridade dos 4 dicionários.

## 3. É com você
- `src/site.ts`: número do WhatsApp e @ do Instagram.
- Foto do contato e imagens dos trabalhos (hoje são espaços amarelos em `ImageSlot.tsx`).
- GA4: veja se o GTM já dispara o GA4; se sim, apague os dois `Script` do gtag no `layout.tsx`.
- `overflow-x: hidden` do `body`: teste sem ele a 320px e com zoom de 400%.
- Japonês e espanhol: conferência de falante nativo antes de publicar.
- `npm run build` e, depois, `node <skill>/scripts/inspect.mjs http://localhost:3000/pt` (taste-skill).
