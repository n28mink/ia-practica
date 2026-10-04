# IA Práctica — Sitio web

Sitio estático en español con tutoriales prácticos de IA para profesionales y pymes.
Diseñado para monetizar con **Google AdSense**.

## Estructura

```
ia-practica/
├── index.html                  # Portada
├── 404.html
├── robots.txt
├── sitemap.xml
├── ads.txt                     # ← COMPLETAR con tu pub-ID cuando AdSense te apruebe
├── sobre-nosotros.html
├── contacto.html
├── politica-privacidad.html
├── politica-cookies.html
├── terminos.html
├── tutoriales/
│   ├── index.html              # Índice con filtros por categoría
│   ├── chatgpt-marketing-pyme.html
│   ├── atencion-cliente-ia.html
│   ├── contenido-redes-sociales-ia.html
│   ├── chatbot-whatsapp-sin-programar.html
│   ├── analizar-ventas-ia-excel.html
│   └── capacitar-equipo-ia-30-dias.html
└── assets/
    ├── css/styles.css          # Sistema visual v5.0 "Tinta neutra" (ver DESIGN.md)
    ├── js/main.js              # ← CONFIGURAR: ADSENSE_CLIENT_ID y ANALYTICS_ID
    ├── fonts/                  # Geist (woff2 variable, autohospedada, OFL)
    └── img/favicon.svg
```

## Diseño (v5.0 "Tinta neutra")

El sistema completo está en [`DESIGN.md`](DESIGN.md). La v5 aplica la skill
**Taste** (`.claude/skills/`) sobre la v4 para quitar los rasgos típicos del
diseño hecho con IA:

- Geist en todo, en lugar de Fraunces e Inter.
- Neutros zinc con un solo acento teal; etiquetas de categoría neutras.
- Modo oscuro automático (`prefers-color-scheme`), sin secciones invertidas.
- Iconos Phosphor en lugar de iconos dibujados a mano.
- Cabeceras de sección apiladas y menos etiquetas sobre titulares.
- Preguntas frecuentes visibles en cuadrícula (sin acordeón).
- Sin rayas en el texto visible.
- Barra de lectura solo con CSS, sin listener de scroll.
- Se mantiene de la v4: el compositor de prompts del hero (referencia
  21st.dev · AI Prompt Box), el bento, el índice de lecciones y el criterio de
  movimiento de Emil Kowalski.

## Pruebas

Pruebas end-to-end con Playwright en `tests/`:

```bash
cd tests
npm install
npx playwright install   # descarga Chromium, Firefox y WebKit
npm test
```

Cubren formularios (envío vacío, email inválido, envío válido, doble envío,
texto larguísimo, solo teclado, honeypot), los chips del hero, el menú móvil,
los filtros del índice, la página 404, los enlaces internos y el desbordamiento
horizontal. `tests/`, `.claude/` y `DESIGN.md` no se publican (`.vercelignore`).

## Puesta en marcha (5 pasos)

### 1. Publicar el sitio
Sube todo el contenido de esta carpeta a tu hosting (Netlify, Vercel, GitHub Pages,
Cloudflare Pages o cualquier hosting con HTTPS). El sitio es 100% estático: no necesita
servidor ni base de datos.

### 2. Conectar Google AdSense
1. Crea tu cuenta en <https://www.google.com/adsense> y registra tu dominio.
2. Cuando Google te apruebe, copia tu **ID de editor** (`pub-XXXXXXXXXXXXXXXX`).
3. Edita `ads.txt` y reemplaza la línea de ejemplo por:
   `google.com, pub-TU_ID, DIRECT, f08c47fec0942fa0`
4. En `assets/js/main.js`, escribe tu ID en `ADSENSE_CLIENT_ID`.
5. Los espacios publicitarios aparecerán automáticamente **solo** para visitantes
   que acepten las cookies de marketing.

### 3. Analítica (opcional)
En `assets/js/main.js`, escribe tu ID de Google Analytics 4 en `ANALYTICS_ID`
(formato `G-XXXXXXXXXX`). Solo se carga con consentimiento de analítica.

### 4. Formularios (contacto + newsletter)
Están en modo demostración. Para activarlos:
- Crea un formulario gratuito en <https://formspree.io> (o similar).
- En `assets/js/main.js`, escribe la URL en `CONTACT_ENDPOINT` y `NEWSLETTER_ENDPOINT`.

### 5. Vista previa de anuncios
Añade `?demo-ads` a cualquier URL para ver dónde aparecerán los anuncios
(sin necesidad de configurar AdSense).

## Privacidad y cookies

- Banner de cookies con **consentimiento granular** (necesarias / analítica / marketing).
- AdSense y Analytics **no se cargan** hasta que el visitante da su consentimiento.
- Consentimiento guardado 12 meses en `localStorage` (`iap_consent_v1`).
- Botón "Preferencias de cookies" en el pie de cada página para cambiar la elección.

## Seguridad

- `Content-Security-Policy` en cada página (solo permite scripts propios + Google Ads/Analytics).
- `referrer-policy: strict-origin-when-cross-origin`.
- Formularios con validación, límites de longitud y campo honeypot antispam.
- Sin dependencias externas de JS/CSS: todo el código es propio.

### Cabeceras HTTP (X-Frame-Options, HSTS, Permissions-Policy…)

El CSP en metaetiqueta no puede fijar `X-Frame-Options`, `Strict-Transport-Security`
ni `frame-ancestors` (solo funcionan como cabecera HTTP real), así que el repo
incluye dos archivos listos para usar, según tu hosting:

- `_headers` — Netlify y Cloudflare Pages lo detectan automáticamente.
- `.htaccess` — Apache (también fuerza HTTPS, desactiva el listado de
  directorios y cachea los estáticos).

Si usas Vercel o un CDN distinto, replica las mismas cabeceras con las reglas
propias de esa plataforma (ambos archivos documentan los valores exactos).

## SEO

- Títulos y descripciones únicas por página, canonical, Open Graph, robots.
- Datos estructurados JSON-LD: WebSite + SearchAction, Article, BreadcrumbList, FAQPage, CollectionPage.
- `sitemap.xml` y `robots.txt` incluidos.

## Notas

- El dominio actual es `https://ia-practica-28ti.vercel.app/` (producción en
  Vercel). Si conectas un dominio propio, actualízalo en los `canonical`,
  `og:url`, `sitemap.xml`, `robots.txt` y JSON-LD.
- No publiques contenido nuevo a gran escala sin revisión: Google penaliza el
  contenido masivo sin valor (ver informe de investigación en
  `~/workspace/research_notes/nicho-herramientas-ia-20260930-1639/`).
