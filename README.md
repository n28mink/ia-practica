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
    ├── css/styles.css          # Sistema visual v3.0 "Claro y directo" (tokens en :root)
    ├── js/main.js              # ← CONFIGURAR: ADSENSE_CLIENT_ID y ANALYTICS_ID
    ├── fonts/                  # Inter (woff2, autohospedada, subset latin)
    └── img/favicon.svg
```

## Diseño (v3.0 "Claro y directo", 2026-09-30)

Rediseño inspirado en el lenguaje visual de Apple (sin copiar marca ni activos):
aplicado con las skills Apple Design, Frontend Design, UI UX Pro Max,
Emil Design Engineering y Mobile Native.

- **Paleta**: fondo `#fbfbfd`, sección `#f5f5f7`, tinta `#1d1d1f`,
  gris `#6e6e73`, línea `#d2d2d7` y un solo acento teal propio `#0d9488`.
- **Tipografía**: Inter en todo (titulares 700 con tracking apretado
  `-0.032em`, cuerpo 17px/1.6). Sin serif.
- **Hero**: centrado, titular gigante, CTAs y la demo del prompt debajo
  como "foto de producto". La demo se "escribe" sola una vez
  (respeta `prefers-reduced-motion`).
- **Navegación**: barra translúcida con blur (72% opacidad + saturación),
  60px, hamburguesa animada en móvil.
- **Botones**: píldora (radio 980px), `:active` con scale .96,
  hovers solo en puntero fino.
- **Tarjetas**: blancas, radio 18px, arte monocromo (tinta teal sobre
  fondo suave), etiquetas neutras.
- **Boletín**: sección negra sólida con formulario píldora.
- **Footer**: claro `#f5f5f7`, texto 13px gris.
- **Móvil nativo**: `viewport-fit=cover`, safe-areas, inputs a 16px
  (iOS no hace zoom), sin flash de tap, sin hovers pegados.
- **Bugs corregidos**: filtros del índice (regla `[hidden]`) y anclas de
  categorías de la portada (ahora activan el filtro real vía hash:
  `/tutoriales/#marketing`, `#atencion`, `#gestion`, `#equipo`).

Para cambiar la paleta, edita los tokens en `:root` al inicio de `styles.css`.

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

- El dominio `https://www.iapractica.com/` es provisional: actualízalo en los
  `canonical`, `sitemap.xml`, `robots.txt` y JSON-LD cuando tengas el dominio final.
- No publiques contenido nuevo a gran escala sin revisión: Google penaliza el
  contenido masivo sin valor (ver informe de investigación en
  `~/workspace/research_notes/nicho-herramientas-ia-20260930-1639/`).
