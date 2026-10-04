# DESIGN.md · IA Práctica

Sistema de diseño del sitio. Cualquier agente (Claude, Grok, Cursor) que toque la interfaz debe seguirlo al pie de la letra. Los tokens viven en `assets/css/styles.css` (`:root`).

## Lectura del encargo
Sitio editorial de tutoriales para dueños de pequeños negocios hispanohablantes. Registro: claro, de confianza, sin tecnicismos. Diales (skill Taste): variación 6, movimiento 4, densidad 3.

## Color
Un solo acento en toda la página. Neutros de una sola familia (zinc).

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--bg` | `#fafafa` | `#0f0f11` | Fondo de página |
| `--bg-soft` | `#f4f4f5` | `#16161a` | Secciones alternas, pie |
| `--card` | `#fefefe` | `#1b1b1f` | Tarjetas, campos |
| `--ink` | `#18181b` | `#f4f4f5` | Texto principal, botón primario |
| `--gray` | `#5c5c66` | `#a1a1aa` | Texto secundario (AA en ambos modos) |
| `--line` / `--line-strong` | `#e4e4e7` / `#d4d4d8` | `#27272c` / `#3a3a41` | Bordes |
| `--accent` | `#0f766e` | `#2dd4bf` | El único acento (teal) |
| `--accent-tint` | `#e6f3f1` | `#10302c` | Fondos con acento |

- Las etiquetas de categoría son neutras. El color no distingue categorías.
- El ámbar solo aparece en avisos de advertencia (`.callout--warn`), por semántica.
- El modo claro y el oscuro siguen `prefers-color-scheme`. Ninguna sección invierte el tema.
- El compositor de prompts y los bloques `.prompt` son siempre oscuros. Son objetos, no secciones.

## Tipografía
- Geist (variable, autohospedada, OFL) para todo. Sin serif.
- Titulares de peso 600 con tracking negativo. H1: `clamp(2.4rem, 5vw, 3.75rem)`, máximo 2 líneas en escritorio.
- Cuerpo de 17px con interlineado 1.6. En artículos, la prosa se limita a 68 caracteres de ancho.
- El énfasis dentro de un titular usa la misma familia con el color del acento (`.hl`).
- Las cifras usan `tabular-nums`.

## Forma
- Interactivos (botones, chips, etiquetas): píldora.
- Tarjetas: 20px. Contenedores grandes (bento, compositor, boletín, formularios): 28px. Campos: 14px.

## Composición
- Cabeceras de sección apiladas: titular y, debajo, un texto de 25 palabras como máximo.
- Etiquetas sobre titulares (`.kicker`): una cada 3 secciones como máximo.
- Ninguna familia de layout se repite en la portada: hero centrado con compositor, cifras, bento, índice de lecciones, titular fijo con pasos, cuadrícula de preguntas y panel de boletín.
- Iconos: solo Phosphor (regular, `fill: currentColor`). Ningún icono dibujado a mano. El logotipo no se toca.
- Cero rayas (— o –) en el texto visible. Se usan coma, dos puntos o paréntesis.

## Movimiento
- Curvas: `--ease-out` cubic-bezier(.23,1,.32,1), `--ease-in-out` cubic-bezier(.77,0,.175,1).
- La interfaz anima en menos de 300 ms. `:active` usa `scale(.97)`.
- Hover solo con `(hover: hover) and (pointer: fine)`.
- Solo se animan `transform` y `opacity`. Nada de `transition: all`. Ningún listener de scroll (la barra de lectura usa `animation-timeline: scroll()`).
- `prefers-reduced-motion`: se quita el movimiento y se conservan los fundidos.

## Formularios
- Etiqueta visible encima del campo, nunca solo placeholder.
- Error en línea debajo, enlazado con `aria-describedby`.
- Los cambios se verifican con `tests/` (Playwright).

## Pendiente
- Fotografía real en el hero y en las tarjetas de tutorial (Taste exige imágenes reales; el sitio no tiene ninguna todavía).
