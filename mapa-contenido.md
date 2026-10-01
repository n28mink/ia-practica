# Mapa de contenido — Voltaje Verde (nombre propuesto)

> **Fase 0 · borrador v0.1 · 1 oct 2026** · Documento interno de planificación, no es una página del sitio.
>
> - La columna «Demanda» es una **hipótesis de trabajo, no un dato**: ningún número de este archivo viene de Keyword Planner ni de Google Trends. Se valida en la sección 7.
> - Los precios son **referencias sin verificar en tienda** (listados de tiendas y marketplaces, la mayoría de EE. UU., consultados por búsqueda web el 1 oct 2026), sin envío ni impuestos de importación.
> - Marcadores: `[VERIFICAR]` dato sin fuente primaria comprobada · `[ESPERANDO DATOS DEL USUARIO]` depende de una prueba de G-INK · `[INSERTAR]` dato personal o legal pendiente.
> - Este repo es **público**: no escribas aquí datos personales, IDs de AdSense/afiliados ni claves.

**Contenido:** 1 Ficha · 2 Decisiones abiertas · 3 Presupuesto y kit de pruebas · 4 Voltaje y enchufes · 5 El mapa (30 ideas) · 6 Tanda 1 · 7 Cómo validar keywords · 8 Canibalización · 9 Contenido ya existente en el repo · 10 Registro de verificación

---

## 1. Ficha del proyecto (respuestas de la Fase 0)

| Campo | Valor | Notas |
|---|---|---|
| Nombre del sitio | **Voltaje Verde** (propuesto por Claude, pendiente de tu OK) | «Voltaje» es neutro en todo LATAM y «verde» recoge la tecnología verde. Alternativas: Enchufe Verde, Consumo Real. Disponibilidad de dominio y marca **sin verificar** (el entorno bloquea las consultas de registro) → `[VERIFICAR]` en un registrador y en INAPI (Chile) / SAPI (Venezuela). |
| Dominio | Provisional: subdominio de GitHub · Definitivo: se compra después | Antes de solicitar AdSense conviene tener el dominio propio `[VERIFICAR política vigente sobre subdominios gratuitos]`. |
| Autor | **G-INK** (seudónimo) | Borrador de bio en 1.1. |
| Residencia del autor | Venezuela | Red de 120 V / 60 Hz, enchufes A/B (ver sección 4). |
| Público | LATAM, con foco en Chile | Chile: 220 V / 50 Hz, enchufes C/L (ver sección 4). |
| Idioma | Español neutro LATAM | Vocabulario por país: sección 7.4. Carpeta `/en/` reservada y vacía. |
| Presupuesto de pruebas | USD 200 **en total** (supuesto: no es por unidad) | Sección 3. |
| Productos e instrumentos | Propuesta de Claude, a criterio de G-INK | Sección 3. |

### 1.1 Borrador de bio de G-INK

> G-INK escribe desde Venezuela y publica pruebas y comparativas de tecnología verde y hogar inteligente para lectores de Latinoamérica, con especial atención a Chile. Prueba por su cuenta los productos que reseña, con los instrumentos descritos en «Cómo probamos», y avisa con claridad cuándo un análisis se basa en fichas técnicas y no en una prueba propia.

`[INSERTAR]` formación o experiencia relevante (solo si es real) · `[INSERTAR]` por qué empezaste a medir consumo y energía · `[INSERTAR]` foto o avatar · `[INSERTAR]` contacto público.

No se han inventado credenciales, años de experiencia ni cifras. Un seudónimo es válido, pero la confianza del sitio dependerá de la evidencia que muestres: fotos de tus pruebas con tus instrumentos, hojas de datos y fechas.

### 1.2 Reglas que aplican al mapa

1. **Una fila = una URL = una intención de búsqueda** (regla 6). No se crea ninguna página sin fila aquí; si dos filas compiten por la misma intención, se fusionan.
2. El estado solo pasa a `PROBADO POR MÍ` cuando G-INK entregue datos de su prueba (reglas 1 y 2). Hasta entonces ninguna página puede presentarse como reseña con prueba real.
3. `SOLO SPECS` = «Comparativa de especificaciones»: datos de fichas técnicas públicas, con fuente; nunca redactada como experiencia propia.
4. Los precios no viven en el mapa; en las páginas se muestran como rango aproximado con fecha (regla 3).
5. Valoración numérica y schema `Review`: solo en filas `PROBADO POR MÍ` y con valoración dada por G-INK (regla 7).
6. Todo contenido de instalación eléctrica lleva la advertencia de electricista cualificado y ninguna instrucción de conexión a la red (regla 5): se marca `R5`.
7. Enlaces de afiliado con aviso visible y `rel="sponsored nofollow noopener"` (regla 4); se implementa en las fases 1 y 2.

---

## 2. Decisiones abiertas

| # | Decisión | Opciones | Recomendación | Bloquea |
|---|---|---|---|---|
| 1 | Qué hacer con el sitio «IA Práctica» que ya vive en este repo (sección 9) | **A)** sitio nuevo en un repo nuevo y IA Práctica intacto · **B)** reemplazar IA Práctica en este repo (antes te muestro la lista exacta de archivos que se borran o sobrescriben) · **C)** convivir en subcarpetas | **A** | Fase 1 |
| 2 | Nombre | Voltaje Verde · Enchufe Verde · Consumo Real · reutilizar «EcoHogar» (repo previo del mismo nicho en tu cuenta; no se ha abierto desde esta sesión) | Voltaje Verde | Fase 1 |
| 3 | Qué productos e instrumentos ya tienes y cómo compras en Venezuela (tienda local, marketplace, casillero…) | — | — | Fase 2 |
| 4 | Hosting definitivo | GitHub Pages como provisional y migrar al comprar el dominio, o ir directo a otro hosting estático | Ver riesgo de términos de GitHub Pages en la sección 10 | Fase 1 |

---

## 3. Presupuesto y kit de pruebas (propuesta, USD 200 en total)

**Supuestos:** 200 USD es el total para instrumentos y productos de la primera ronda; las pruebas se hacen a 120 V / 60 Hz; los precios de abajo son referencias de listados en tiendas y marketplaces, la mayoría de EE. UU. (1 oct 2026), **no incluyen envío ni impuestos a Venezuela** y no están verificadas en tienda `[VERIFICAR]`. Los productos con «(est.)» son estimaciones mías sin listado consultado.

### 3.1 Instrumentos (compra única)

| Instrumento | Para qué | Ref. USD |
|---|---|---|
| Medidor USB (V / A / mAh / Wh) | Capacidad real de power banks, autonomía del mini UPS, consumo de luces USB | 8–20 (los básicos vistos: 8–14) |
| Vatímetro enchufable 120 V (tipo Kill A Watt) | Consumo de enchufes, ampolletas/bombillos, refrigerador | 19–33 |
| Multímetro digital básico | Comprobar tensiones DC y continuidad | 10–15 (est.) |
| Teléfono | Cronómetro y fotos con fecha como registro | 0 |
| **Subtotal** | | **≈ 37–68** |

Notas de método: son instrumentos de consumo, **sin calibrar**. Se reportan como «lectura del instrumento X», sin afirmar exactitud, y cuando sea posible se contrastan dos instrumentos con la misma carga. Un medidor USB básico puede no leer bien con carga rápida (9/12/20 V) `[VERIFICAR modelo]`.

### 3.2 Productos de la ronda 1 (R1)

| Producto | Cant. | Ref. USD | Se usa en |
|---|---|---|---|
| Mini UPS DC 12 V para router (≈ 10 400 mAh) | 1 | 35–55 (listados de 35 a 90) | C1-D1 |
| Enchufes inteligentes con medición de energía (120 V, pack de 2) | 2 | 20–24 | C3-D1 |
| Ampolletas / bombillos WiFi | 3 | 18–30 (est.) | C3-D2 |
| Power bank (solo si no tienes 3 propios) | 1–2 | 12–25 (est.) | C1-D2 |
| Refrigerador propio | — | 0 | C5-D1 |
| **Subtotal productos** | | **≈ 85–135** | |

**Total R1 ≈ USD 122–203 antes de envío e impuestos.** Si los precios reales caen en la parte alta, el orden de recorte es: 1) tercera ampolleta, 2) segundo power bank, 3) multímetro. Reserva margen para envío e importación `[VERIFICAR según cómo compres]`.

### 3.3 Ronda 2 (solo si sobra presupuesto)

Kit solar de iluminación (25–45 est.) · regleta inteligente (15–30 est.) · 2 luces USB para bicicleta (10–20 c/u est.) · medidor DC para pruebas de inversor.

### 3.4 Lo que no cabe en USD 200

Estaciones de energía, kits solares con inversor, scooters, bicicletas eléctricas y electrodomésticos nuevos superan en general este presupuesto `[VERIFICAR precios]`. Esas piezas serán `SOLO SPECS` hasta que haya producto: propio, prestado o cedido por una marca o tienda. Si es cedido, se divulga en la página (regla 4).

### 3.5 Seguridad de medición

- El vatímetro de 120 V solo se usa con aparatos de 120 V y dentro de su corriente máxima: revisa la etiqueta del medidor y la del aparato `[VERIFICAR cada modelo]`.
- No se miden aparatos de conexión fija ni de 240 V (por ejemplo, aires acondicionados) ni se abren tableros: eso lo hace un electricista cualificado (regla 5).
- Baterías: sin cortocircuitos, sobre superficie no inflamable y sin dejar cargas o descargas largas sin supervisión.

---

## 4. Voltaje y enchufes: Venezuela (120 V / 60 Hz) frente a Chile (220 V / 50 Hz)

Según guías de enchufes por país consultadas por búsqueda web (fuente secundaria, coherentes entre sí): Venezuela usa 120 V / 60 Hz con enchufes A/B; Chile usa 220 V / 50 Hz con enchufes C/L. `[VERIFICAR con la autoridad eléctrica local; Wikipedia e IEC están bloqueados desde este entorno]`.

**Por qué importa:** el autor prueba en 120 V y gran parte del público compra en 220 V. El mismo modelo suele venderse en variantes regionales distintas.

| Resultado de una prueba | ¿Se transfiere a Chile? |
|---|---|
| Capacidad de la batería (Wh), autonomía con carga DC, salida USB/DC, calidad percibida, app | Probablemente sí `[VERIFICAR por producto]` |
| Carga desde la pared, salida AC, eficiencia de inversor o adaptador, lecturas de consumo en AC, potencia máxima admitida, enchufe | No necesariamente |

**Regla editorial propuesta:** toda ficha de prueba incluye «Variante probada: 120 V / 60 Hz, enchufe A/B» y una línea «Para Chile: comprueba la versión 220–230 V / 50 Hz (enchufe C/L) y qué parte de estos resultados aplica». Esto favorece pruebas basadas en el lado DC/USB y obliga a no presentar como «probado para Chile» lo que solo se midió en 120 V.

---

## 5. El mapa: 30 ideas (10 diferenciales + 20 long tail)

**Leyenda**

- **Formato:** *Reseña con prueba real* (datos propios de G-INK) · *Comparativa con mediciones propias* (varios productos medidos por G-INK; en la página se rotula como prueba real) · *Comparativa de especificaciones* (fichas técnicas públicas, sin prueba propia).
- **Estado:** `PENDIENTE` = `[ESPERANDO DATOS DEL USUARIO]` · `SOLO SPECS` · `PROBADO POR MÍ` (ninguno todavía).
- **Compra:** `R1` ronda 1 (dentro de USD 200) · `R2` si sobra presupuesto · `COND.` condicionado a conseguir el producto (propio, prestado o cedido) · `R5` lleva advertencia de electricista cualificado.
- **Demanda (H):** Alta / Media / Baja = **mi suposición, sin medir**. Se sustituye por datos en la sección 7.

| Categoría | Diferenciales | Long tail | Total |
|---|---|---|---|
| 1 Energía portátil y respaldo | 2 | 4 | 6 |
| 2 Solar para el hogar a pequeña escala | 2 | 4 | 6 |
| 3 Hogar inteligente y ahorro | 3 | 3 | 6 |
| 4 Movilidad eléctrica ligera | 1 | 5 | 6 |
| 5 Electrodomésticos eficientes | 2 | 4 | 6 |
| **Total** | **10** | **20** | **30** |

El reparto de diferenciales sigue lo que se puede medir con USD 200: pocas pruebas reales en movilidad y solar, más en hogar inteligente.

### Categoría 1 · Energía portátil y respaldo — carpeta `/energia-portatil/`

| ID | Keyword principal | URL propuesta | Intención | Formato | Producto(s) necesarios | Estado | Demanda (H) |
|---|---|---|---|---|---|---|---|
| C1-D1 | mini ups para router | `/energia-portatil/mini-ups-router-autonomia-real/` | Comercial (reseña) | Reseña con prueba real | 1 mini UPS DC 12 V (35–55) + router y ONT propios + medidor USB | PENDIENTE · R1 | Alta |
| C1-D2 | power bank capacidad real | `/energia-portatil/power-bank-capacidad-real/` | Comercial (comparativa) | Comparativa con mediciones propias | 3 power banks de 10 000–20 000 mAh (los que tengas + 1–2 nuevos) + medidor USB | PENDIENTE · R1 | Media |
| C1-L1 | mejor estación de energía portátil para apagones | `/energia-portatil/mejor-estacion-de-energia-apagones/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno; fichas de 4–6 modelos `[VERIFICAR vigentes y disponibles en Chile]` | SOLO SPECS | Alta |
| C1-L2 | mejor estación de energía portátil para camping | `/energia-portatil/mejor-estacion-de-energia-camping/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS | Media |
| C1-L3 | ecoflow vs jackery | `/energia-portatil/ecoflow-vs-jackery/` | Comparativa (A vs B) | Comparativa de especificaciones | Ninguno; modelos de capacidad equivalente `[VERIFICAR]` | SOLO SPECS | Media |
| C1-L4 | estación de energía portátil precio chile | `/energia-portatil/estacion-de-energia-precio-chile/` | Precio y dónde comprar | Comparativa de especificaciones (guía de precios) | Ninguno; precios públicos de tiendas de Chile `[VERIFICAR]` | SOLO SPECS | Media |

**Notas:** C1-D1 y C1-D2 son pruebas del lado DC/USB, las más transferibles a Chile. Las piezas `L` no pueden usar lenguaje de «lo probé».

### Categoría 2 · Solar para el hogar a pequeña escala — carpeta `/solar-hogar/`

| ID | Keyword principal | URL propuesta | Intención | Formato | Producto(s) necesarios | Estado | Demanda (H) |
|---|---|---|---|---|---|---|---|
| C2-D1 | kit solar con luces para apagones | `/solar-hogar/kit-solar-luces-apagones-prueba/` | Comercial (reseña) | Reseña con prueba real | 1 kit de iluminación solar (panel + batería + 3–4 focos; 25–45 est.) + medidor USB y multímetro | PENDIENTE · R2 | Media |
| C2-D2 | inversor de corriente 12v 300w | `/solar-hogar/inversor-12v-300w-eficiencia-real/` | Comercial (reseña) | Reseña con prueba real | 1 inversor pequeño + batería 12 V + medidor DC + vatímetro (60–90 est.) | PENDIENTE · COND. · R5 | Media |
| C2-L1 | mejor kit solar para casa pequeña | `/solar-hogar/mejor-kit-solar-casa-pequena/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS · R5 | Alta |
| C2-L2 | mejor regulador de carga solar 12v | `/solar-hogar/mejor-regulador-carga-solar/` | Comercial («mejor X para Y») | Comparativa de especificaciones (PWM y MPPT dentro) | Ninguno | SOLO SPECS · R5 | Media |
| C2-L3 | inversor onda pura vs onda modificada | `/solar-hogar/inversor-onda-pura-vs-modificada/` | Comparativa (A vs B) | Comparativa de especificaciones | Ninguno | SOLO SPECS · R5 | Baja |
| C2-L4 | panel solar 100w precio chile | `/solar-hogar/panel-solar-100w-precio-chile/` | Precio y dónde comprar | Comparativa de especificaciones (guía de precios) | Ninguno; precios públicos de tiendas de Chile `[VERIFICAR]` | SOLO SPECS | Baja |

**Notas:** toda la categoría lleva la advertencia de que la instalación debe hacerla un electricista cualificado según la normativa local (SEC en Chile `[VERIFICAR]`) y **ninguna instrucción de conexión a la red**. C2-D2 solo se hace a baja potencia, con fusible y si G-INK se siente cómodo con baterías; su variante 120 V no se extrapola a 220 V.

### Categoría 3 · Hogar inteligente y ahorro — carpeta `/hogar-inteligente/`

| ID | Keyword principal | URL propuesta | Intención | Formato | Producto(s) necesarios | Estado | Demanda (H) |
|---|---|---|---|---|---|---|---|
| C3-D1 | enchufe inteligente con medidor de consumo | `/hogar-inteligente/enchufe-inteligente-medidor-consumo/` | Comercial (comparativa) | Comparativa con mediciones propias | 2 enchufes con medición (pack 20–24) + vatímetro de referencia | PENDIENTE · R1 | Media |
| C3-D2 | ampolleta inteligente consumo | `/hogar-inteligente/ampolleta-inteligente-consumo-real/` | Mixta (info + compra) | Comparativa con mediciones propias | 3 ampolletas WiFi (18–30 est.) + vatímetro | PENDIENTE · R1 | Media |
| C3-D3 | regleta inteligente apagado standby | `/hogar-inteligente/regleta-inteligente-standby/` | Comercial (reseña) | Reseña con prueba real | 1 regleta inteligente (15–30 est.) + TV, decodificador o consola propios + vatímetro | PENDIENTE · R2 | Baja |
| C3-L1 | control remoto inteligente para aire acondicionado | `/hogar-inteligente/control-inteligente-aire-acondicionado/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS | Alta |
| C3-L2 | philips hue vs wiz | `/hogar-inteligente/philips-hue-vs-wiz/` | Comparativa (A vs B) | Comparativa de especificaciones | Ninguno | SOLO SPECS | Media |
| C3-L3 | monitor de consumo eléctrico para toda la casa | `/hogar-inteligente/monitor-consumo-electrico-casa/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS · R5 | Baja |

**Notas:** los enchufes y ampolletas probados serían la variante 120 V / enchufe A/B; en Chile existen otras versiones `[VERIFICAR]`. C3-L3 se instala en el tablero: solo se describe qué es y qué ofrece, nunca cómo instalarlo. En C3-D3, si la regleta no tiene función de apagado de standby, se reporta tal cual.

### Categoría 4 · Movilidad eléctrica ligera — carpeta `/movilidad-electrica/`

| ID | Keyword principal | URL propuesta | Intención | Formato | Producto(s) necesarios | Estado | Demanda (H) |
|---|---|---|---|---|---|---|---|
| C4-D1 | luz para bicicleta recargable usb | `/movilidad-electrica/luz-bicicleta-recargable-autonomia/` | Comercial (comparativa) | Comparativa con mediciones propias | 2 luces USB recargables (10–20 c/u est.) + medidor USB | PENDIENTE · R2 | Baja |
| C4-L1 | mejor scooter eléctrico para ciudad | `/movilidad-electrica/mejor-scooter-electrico-ciudad/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS | Alta |
| C4-L2 | mejor bicicleta eléctrica calidad precio | `/movilidad-electrica/mejor-bicicleta-electrica-calidad-precio/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS | Alta |
| C4-L3 | xiaomi vs ninebot scooter eléctrico | `/movilidad-electrica/xiaomi-vs-ninebot-scooter/` | Comparativa (A vs B) | Comparativa de especificaciones | Ninguno; modelos equivalentes `[VERIFICAR]` | SOLO SPECS | Media |
| C4-L4 | scooter eléctrico precio chile | `/movilidad-electrica/scooter-electrico-precio-chile/` | Precio y dónde comprar | Comparativa de especificaciones (guía de precios) | Ninguno; precios públicos de tiendas de Chile `[VERIFICAR]` | SOLO SPECS | Media |
| C4-L5 | mejor candado para bicicleta eléctrica | `/movilidad-electrica/mejor-candado-bicicleta-electrica/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS | Baja |

**Notas:** sin un scooter o bicicleta eléctrica no hay prueba real posible; si G-INK consigue uno (propio, prestado o cedido), se añade una fila de autonomía real en Wh/km. Las luces de C4-D1 se miden por autonomía y tiempo de carga; **no se miden lúmenes** (no hay instrumento). La normativa de micromovilidad (casco, edad, velocidad) varía por país: si se menciona, `[VERIFICAR]` en fuente oficial de cada país.

### Categoría 5 · Electrodomésticos eficientes — carpeta `/electrodomesticos-eficientes/`

| ID | Keyword principal | URL propuesta | Intención | Formato | Producto(s) necesarios | Estado | Demanda (H) |
|---|---|---|---|---|---|---|---|
| C5-D1 | consumo real refrigerador kwh | `/electrodomesticos-eficientes/refrigerador-consumo-real-medido/` | Mixta (info + compra) | Reseña con prueba real (el modelo de G-INK) | Refrigerador propio + vatímetro, 24–48 h | PENDIENTE · R1 | Media |
| C5-D2 | freidora de aire consumo | `/electrodomesticos-eficientes/freidora-de-aire-consumo-real/` | Mixta (info + compra) | Reseña con prueba real | 1 freidora de aire (propia, o 35–60 est.) + vatímetro apto para su corriente | PENDIENTE · COND. | Alta |
| C5-L1 | mejor refrigerador eficiente para ahorrar luz | `/electrodomesticos-eficientes/mejor-refrigerador-eficiente/` | Comercial («mejor X para Y») | Comparativa de especificaciones | Ninguno | SOLO SPECS | Media |
| C5-L2 | aire acondicionado inverter vs convencional | `/electrodomesticos-eficientes/aire-acondicionado-inverter-vs-convencional/` | Comparativa (A vs B) | Comparativa de especificaciones | Ninguno | SOLO SPECS | Alta |
| C5-L3 | aire acondicionado inverter precio chile | `/electrodomesticos-eficientes/aire-acondicionado-inverter-precio-chile/` | Precio y dónde comprar | Comparativa de especificaciones (guía de precios) | Ninguno; precios públicos de tiendas de Chile `[VERIFICAR]` | SOLO SPECS | Media |
| C5-L4 | ventilador dc vs ac consumo | `/electrodomesticos-eficientes/ventilador-dc-vs-ac/` | Comparativa (A vs B) | Comparativa de especificaciones | Ninguno | SOLO SPECS | Media |

**Notas:** las filas «Mixta» solo se publican como reseña o medición de un modelo concreto, nunca como artículo explicativo suelto. Miden únicamente el aparato de G-INK, así que su transferibilidad a otros modelos y a Chile es limitada. No se miden aires acondicionados ni otros aparatos de 240 V o conexión fija con vatímetro enchufable. Las etiquetas de eficiencia energética difieren por país `[VERIFICAR]`. Estacionalidad esperada: verano austral (dic–feb) para aire acondicionado, ventilador y camping `[VERIFICAR con Trends]`.

---

## 6. Orden propuesto: tanda 1 (máximo 5 páginas)

| Orden | ID | Pieza | Por qué primero | Compra (ref. USD) |
|---|---|---|---|---|
| 1 | C1-D1 | Mini UPS para router: autonomía real | Prueba barata, 100 % DC (transferible a Chile); sirve para el hueco de «respaldo» | 35–55 |
| 2 | C3-D1 | Enchufes inteligentes con medidor | Reutiliza el vatímetro; compara contra una referencia | 20–24 |
| 3 | C1-D2 | Power banks: capacidad real | Solo medidor USB; fácil de replicar y de explicar | 12–25 |
| 4 | C5-D1 | Refrigerador: consumo real | Sin coste extra; transferibilidad limitada | 0 |
| 5 | C3-D2 | Ampolletas WiFi: consumo y standby | Barata; reutiliza el vatímetro | 18–30 |

Los instrumentos (37–68) se compran antes de todo. **Tanda 2 propuesta, según presupuesto restante:** C2-D1, C3-D3, C4-D1, C5-L2 (estacional) y C1-L1. Las piezas `SOLO SPECS` se programan después de las primeras pruebas propias para que el sitio no arranque solo con contenido sin evidencia propia (riesgo de contenido poco diferenciado para AdSense, ver sección 10).

---

## 7. Cómo validar las keywords tú mismo

**Principio:** hasta que completes esta sección, todo lo de la columna «Demanda» es una suposición mía. Ni Trends ni Keyword Planner miden el tráfico que recibirás, solo señales de interés (regla 9).

### 7.1 Qué mide cada herramienta

- **Google Trends** (sin cuenta): interés **relativo** (escala 0–100) por país y periodo. Sirve para comparar variantes de vocabulario, ver estacionalidad y encontrar consultas relacionadas. No da volúmenes absolutos.
- **Keyword Planner** (requiere cuenta de Google Ads): estimaciones de búsquedas mensuales por ubicación e idioma. Sin gasto activo en la cuenta, los volúmenes suelen aparecer como rangos amplios. La columna «Competencia» mide competencia entre anunciantes, no dificultad SEO.

`[VERIFICAR]` estas descripciones se basan en mi conocimiento previo y en resúmenes de búsqueda; la ayuda oficial de Google está bloqueada desde este entorno.

### 7.2 Google Trends, paso a paso

1. Abre `trends.google.com` y entra en «Explorar».
2. Escribe un término, elige **país** (Chile primero; luego Venezuela, México, Colombia, Argentina y Perú) y **periodo** (12 meses; después 5 años para ver estacionalidad).
3. Pulsa «Comparar» y añade variantes de vocabulario (máximo 5 términos). Ejemplo: `ampolleta inteligente`, `bombillo inteligente`, `foco inteligente`, `bombilla inteligente`.
4. Mira «Consultas relacionadas» (Populares y En aumento): salen modificadores como «precio», «opiniones» o «vs» y nuevas ideas de long tail.
5. Usa siempre un **término ancla** (por ejemplo `estación de energía portátil`) en cada comparación para poder comparar entre gráficos distintos, porque cada gráfico se normaliza por separado.
6. Anota país, variante ganadora, mes pico y consultas relacionadas en la tabla 7.5.

Limitación: los términos con poco interés devuelven «no hay suficientes datos».

### 7.3 Keyword Planner, paso a paso

1. Hace falta una cuenta de Google Ads. Si te obliga a crear una campaña, busca «Crear una cuenta sin una campaña» o «Cambiar al modo experto» `[VERIFICAR: la interfaz cambia]`.
   **Aviso:** no he podido comprobar si desde Venezuela se puede abrir una cuenta de Google Ads ni qué exigirá en facturación; la búsqueda no fue concluyente `[VERIFICAR]`. Si no puedes, usa 7.7.
2. Entra en Herramientas y configuración → Planificación → Planificador de palabras clave.
3. **«Descubre nuevas palabras clave»**: pega 5–10 semillas (por ejemplo `mini ups para router`, `power bank capacidad real`). Configura **ubicación** (Chile; repite para otros países) e **idioma** (español).
4. **«Obtén el volumen de búsqueda y las previsiones»**: pega la lista de keywords de este mapa y mira «Promedio de búsquedas mensuales».
5. Si ves rangos amplios, úsalos para ordenar por magnitud, no para cifras exactas.
6. Descarga el CSV y copia los datos a la tabla 7.5.
7. «Puja alta / baja» es un CPC de referencia: orienta sobre valor comercial, no sobre ingresos de AdSense.

### 7.4 Vocabulario por país (hipótesis mía, sin verificar: decide Trends)

| Concepto | Variantes a comparar |
|---|---|
| Bombilla | ampolleta (Chile) · bombillo (Venezuela, Colombia) · foco (México, Perú) · bombilla (España) |
| Refrigerador | refrigerador (Chile, México) · nevera (Venezuela, Colombia) · frigorífico (España) |
| Scooter eléctrico | scooter eléctrico, monopatín eléctrico (Chile, Argentina) · patineta eléctrica (Venezuela, México) · patinete eléctrico (España) |
| Regleta | regleta · alargador · zapatilla · multicontacto (varía por país; comprobar en Trends) |

**Regla:** una URL por intención. La variante ganadora en Chile es la keyword principal y las demás van como secundarias dentro de la misma página; no se crea una URL por cada palabra.

### 7.5 Plantilla de validación (rellenar)

| ID | Keyword (variante) | País | Trends (0–100, 12 m) | Mes pico | Keyword Planner (búsq./mes) | Puja ref. | Decisión | Fecha |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |

### 7.6 Criterios de decisión sugeridos (ajusta a tu criterio)

- Si una variante gana claramente en Trends en Chile, esa es la keyword principal de la URL.
- Si el Planner muestra volúmenes mínimos en todos los países objetivo, la idea pasa a ser **sección dentro de otra página**, no URL propia.
- Si dos keywords tienen resultados casi idénticos en Google (compruébalo en ventana de incógnito), se fusionan (regla 6).
- Mira qué muestra Google: si salen reseñas y comparativas, encaja con este sitio; si solo salen definiciones o foros, no.
- Prioriza por estacionalidad: verano austral (dic–feb) para aire acondicionado, ventilador y camping.

### 7.7 Si no puedes usar Keyword Planner

- Google Trends (no requiere cuenta) + autocompletado de Google + «Otras preguntas de los usuarios» + «Búsquedas relacionadas».
- Tras publicar: **Search Console** es la fuente real (impresiones, clics, CTR y posición) y muestra qué consultas ya traen impresiones.
- Herramientas de terceros con plan gratuito limitado `[VERIFICAR disponibilidad y límites]`.

---

## 8. Control de canibalización (regla 6)

| Par o grupo | Riesgo | Cómo se separan |
|---|---|---|
| C1-L1 · C1-L2 · C1-L3 · C1-L4 | Medio | L1 elige modelo por uso doméstico (apagones); L2 por portabilidad y camping; L3 compara dos marcas; L4 solo da rangos de precio y dónde comprar y enlaza a L1 sin repetir tablas. |
| C1-D1 · C1-L1 | Bajo | D1 es un UPS DC para router; L1 son estaciones con salida AC. Se enlazan como alternativas. |
| C2-D1 · C2-L1 | Medio | D1 es un kit mínimo de iluminación; L1 trata kits aislados para una casa pequeña con inversor. |
| C2-D2 · C2-L3 | Medio | D2 prueba un inversor concreto; L3 explica la diferencia de onda con recomendaciones, sin repetir la teoría. |
| C3-D1 · C3-L3 | Bajo | D1 mide enchufes por aparato; L3 trata monitores de tablero (instalación por electricista). |
| C3-D2 · C3-L2 | Medio | D2 mide bombillos económicos; L2 compara ecosistemas premium. |
| C5-D1 · C5-L1 | Medio | D1 es una medición real de un modelo; L1 ayuda a elegir por ficha y etiqueta. |
| C5-L2 · C5-L3 | Medio | L2 compara tecnologías; L3 da rangos de precio por capacidad y tiendas en Chile. |
| C4-L1 · C4-L3 · C4-L4 | Medio | L1 por uso; L3 por marcas; L4 por precio. |
| Todas las `-precio-chile` | Medio | Una por categoría; no se crean `-precio-mexico`, etc., hasta validar demanda por país. |

---

## 9. Contenido ya existente en el repo (fuera del nuevo nicho)

Al iniciar la Fase 0, el repo `n28mink/ia-practica` **no estaba vacío**: contiene el sitio estático «IA Práctica» (tutoriales de IA para pymes, v3.0, creado el 30 sep 2026). **No se ha modificado ni borrado nada.**

| Elemento | Qué es | Estado |
|---|---|---|
| `index.html`, `tutoriales/index.html` y 6 tutoriales (`chatgpt-marketing-pyme`, `atencion-cliente-ia`, `contenido-redes-sociales-ia`, `chatbot-whatsapp-sin-programar`, `analizar-ventas-ia-excel`, `capacitar-equipo-ia-30-dias`) | Contenido del nicho «IA para negocios» | Fuera de nicho · decisión pendiente (sección 2, #1) |
| `sobre-nosotros.html`, `contacto.html`, `politica-privacidad.html`, `politica-cookies.html`, `terminos.html`, `404.html` | Plantillas con marca «IA Práctica» | Reutilizables solo tras reescribirse · decisión pendiente |
| `assets/css/styles.css` (25 KB), `assets/js/main.js` (17 KB: banner de cookies con consentimiento, carga condicionada de AdSense y Analytics, formularios en modo demo), fuentes y favicon | Base técnica | Posible reutilización · decisión pendiente |
| `robots.txt`, `sitemap.xml`, `ads.txt`, `_headers`, `.htaccess`, `README.md` | Configuración con dominio provisional `iapractica.com` | `ads.txt` solo tiene un ejemplo comentado; **no hay IDs de AdSense ni de Analytics** en el código |

**Hechos comprobados:** el repo es **público**; el campo «homepage» del repo apunta a `ia-practica-28ti.vercel.app` (sitio publicado en Vercel según ese campo `[VERIFICAR]`); GitHub Pages no está activado (`has_pages: false`); son 25 archivos y ~405 KB. Mientras el sitio se sirva desde la raíz, cualquier archivo que llegue a `main`, incluido este mapa, puede quedar accesible al público.

**Con subdominio de GitHub (project site) el sitio cuelga de `/nombre-del-repo/`:** eso rompe rutas absolutas como `/assets/...` y deja sin efecto `robots.txt` y `ads.txt` (solo valen en la raíz del dominio). Se resolverá en la Fase 1 con rutas relativas o con `BASE_URL` configurable, y desaparece al conectar el dominio propio.

**Antecedente detectado:** una búsqueda web muestra un repo público de tu cuenta, `n28mink/ecohogar-reviews`, descrito como sitio de reseñas de tecnología verde y hogar inteligente (WordPress, 7 artículos iniciales). No se ha abierto desde esta sesión. Si es un intento previo de este proyecto, hay que cruzar sus 7 artículos con este mapa antes de crear páginas (regla 6).

---

## 10. Registro de verificación de datos externos

La documentación oficial (Google Ads/AdSense/Trends, GitHub Docs, Wikipedia) y las consultas de registro de dominios están **bloqueadas por el proxy del entorno**. Lo siguiente sale de búsquedas web (resúmenes y páginas de terceros), no de fuentes primarias.

| Dato | Fuente consultada | Estado |
|---|---|---|
| Voltaje, frecuencia y enchufes de Venezuela y Chile | Varias guías de enchufes por país | Coherentes entre sí; `[VERIFICAR]` con la autoridad local |
| AdSense paga en Venezuela por transferencia (Banco Mercantil) o cheque | Blogs de terceros (por ejemplo, magnuve.com, ene 2025) | **No verificado** en la ayuda oficial de AdSense `[VERIFICAR]` |
| AdSense con subdominios `*.github.io` | Resúmenes de blogs y Quora | **No verificado**; práctica recomendada: dominio propio antes de solicitar `[VERIFICAR]` |
| Términos de GitHub Pages: «not intended for or allowed to be used as a free web hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions…» | Cita de la documentación de GitHub vista en resultados de búsqueda | **Riesgo:** un sitio de reseñas con afiliados y AdSense es zona gris `[VERIFICAR en docs.github.com]`. Propuesta: Pages como provisional y migrar a otro hosting estático al comprar el dominio |
| GitHub Pages en plan gratuito solo desde repos públicos | Resúmenes de búsqueda y discusiones de GitHub | `[VERIFICAR vigencia]` |
| Mercado Libre Chile tiene programa de afiliados (desde 2025) | Resultados de búsqueda (página oficial y prensa) | Si un residente en Venezuela puede unirse y cobrar: **sin confirmar** `[VERIFICAR]` |
| Amazon Associates sin programa propio para Venezuela ni Chile | Blogs de terceros | **No verificado**; revisar contrato del programa y vías de pago desde Venezuela `[VERIFICAR]` |
| Keyword Planner: cuenta sin campaña y rangos sin gasto activo | Resúmenes de blogs | `[VERIFICAR]` interfaz y acceso desde Venezuela |
| Precios de referencia del kit | Listados de eBay, Amazon, tiendas de fabricante y algún clasificado regional vía búsqueda (1 oct 2026) | Sin verificar en tienda; sin envío ni impuestos |
| Disponibilidad del dominio y marca «Voltaje Verde» | Búsqueda web (sin coincidencia exacta; no concluyente) | `[VERIFICAR]` en registrador e INAPI / SAPI |
| Riesgo AdSense por contenido poco diferenciado (muchas piezas solo con fichas técnicas públicas) | Mi criterio; la política vigente no se pudo leer | `[VERIFICAR]` en la Fase 4 contra la documentación oficial |

---

*Registro de cambios: v0.1 (1 oct 2026) — primer borrador de la Fase 0. Pendiente de tu OK y de las decisiones de la sección 2.*
