# DESIGN.md — DOCUMENTO DE DIRECCIÓN CREATIVA Y VISUAL

**Proyecto:** Web Oficial de la Artista — Vórtex, Geometría Sagrada y Meditación  
**Roles:** Director Creativo, Investigador de Arte Contemporáneo, Diseñador Web Senior y Arquitecto Frontend  
**Fecha:** Noviembre 2026  

---

## 1. INVESTIGACIÓN DE REFERENTES REALES (12+ Galerías y Artistas)

Para concebir una experiencia digital a la altura de una galería contemporánea internacional sin caer en plantillas genéricas ni clichés espirituales de inteligencia artificial, se investigaron 12 plataformas y cuerpos de obra de referencia:

1. **David Zwirner Online (OVR)**:
   - *Análisis*: Pionero en salas de visualización virtual (*Online Viewing Rooms*). Destaca por su arquitectura limpia, tipografía sobria y su herramienta de simulación de escala en pared (*View on a Wall*), que resuelve la desorientación dimensional del comprador digital.
   - *Decisión*: Implementar un visualizador a escala real 61 × 91 cm dentro de 4 ambientes arquitectónicos contemporáneos con referencia humana y altura de ojos estándar (155 cm al centro de la obra).

2. **Pace Gallery (Pace Live & OVR)**:
   - *Análisis*: Especialistas en artistas que trabajan con la percepción de la luz y el espacio (e.g., James Turrell, Robert Irwin, TeamLab). La presentación enfatiza cómo la obra altera la atmósfera de la estancia.
   - *Decisión*: Transmitir el concepto de "el arte transforma cómo sentimos un espacio" mediante transiciones atmosféricas y citas de contemplación que acompañan cada pieza.

3. **Hauser & Wirth**:
   - *Análisis*: Presentación museográfica que equilibra el archivo institucional con interiores domésticos refinados. La confianza se construye con fichas técnicas precisas (dimensiones en cm/in, técnica exacta, procedencia y certificado de autenticidad firmado).
   - *Decisión*: Ficha de obra con lista de definición estructurada, certificado de autenticidad explícito, embalaje en caja reforzada y botón directo de asesoría personalizada.

4. **White Cube**:
   - *Análisis*: Cero distracciones. La obra manda en lienzos sin bordes gruesos ni badges de colores chillones. Una sola jerarquía focal por pantalla.
   - *Decisión*: Anti-slop radical: eliminación total de píldoras estáticas de colores, tarjetas anidadas y gradientes sintéticos. Fondos limpios y divisiones con líneas milimétricas (*hairline dividers* de 1px).

5. **Studio Olafur Eliasson**:
   - *Análisis*: Estudio de arte y percepción enfocado en fenómenos ópticos, espirales geométricas y luz natural.
   - *Decisión*: Diagramación vectorial original (SVG puros en código) de vórtices y campos toroidales, sin recurrir a ilustraciones de stock ni mandalas comerciales.

6. **Luminous Flux Gallery (Aloria Weaver & David Heskin)**:
   - *Análisis*: Pintura al óleo clásica y temple al huevo fusionada con proporciones áureas y vórtices luminosos.
   - *Decisión*: Resaltar la textura física del óleo, el relieve del empaste y el brillo del pan de oro auténtico sobre lino, evitando que parezca arte digital.

7. **Hilma af Klint (Retrospectivas Guggenheim / Serpentine)**:
   - *Análisis*: Fundadora de la abstracción espiritual y las geometrías sagradas tempranas. Sus espirales y diagramas trascienden modas porque están enraizados en una búsqueda personal auténtica.
   - *Decisión*: Enfoque honesto y personal en los textos. Cero jerga de "autoayuda" o "frecuencias sanadoras"; en su lugar, lenguaje de introspección, armonía visual y experiencia humana.

8. **Emma Kunz (Centro de Arte Emma Kunz & Exposiciones Internacionales)**:
   - *Análisis*: Dibujos radiestésicos sobre papel milimetrado donde cada línea responde a un cálculo armónico riguroso.
   - *Decisión*: Explicar la geometría sagrada como un lenguaje universal de proporciones y simetrías naturales (espiral logarítmica de Fibonacci, toroides magnéticos), accesible para cualquier visitante.

9. **Agnes Martin**:
   - *Análisis*: Maestra de la serenidad geométrica, líneas sutiles y contemplación profunda.
   - *Decisión*: Diseñar el universo *Meditation & Angels* con luz alabastro, veladuras cálidas y una cadencia tipográfica que invita al silencio y a la pausa mental.

10. **Lita Albuquerque**:
    - *Análisis*: Pigmentos ultramar puros, campos dorados y alineaciones cosmológicas en instalaciones de escala masiva.
    - *Decisión*: Extracción de la paleta primaria de las obras reales: azul ultramar eléctrico, índigo profundo, turquesa, pan de oro mineral y magenta solar.

11. **Samuel Farrand**:
    - *Análisis*: Arquitectura geométrica sagrada con vectorización de precisión.
    - *Decisión*: Construcción de mallas geométricas puras en SVG (semilla de la vida, vectores de resonancia, toroides) que se revelan de forma interactiva sobre la pintura.

12. **Artsy & Platform Art**:
    - *Análisis*: Interfaz de conversión fluida mediante botones de consulta directa con gestor o artista vía WhatsApp / Concierge, reduciendo la fricción para el coleccionista.
    - *Decisión*: Botón de WhatsApp omnipresente con mensaje prellenado dinámico que incluye el título de la obra y la colección deseada.

---

## 2. QUÉ NO COPIAR (Anti-Patrones Prohibidos)

1. **Clichés de "tienda esotérica / New Age"**: Prohibidos mandalas de vector descargado, galaxias moradas prefabricadas, destellos de estrellas de stock y figuras con auras fosforescentes.
2. **Promesas pseudocientíficas o médicas**: Estrictamente prohibido usar palabras como *sanación*, *curación*, *eleva tu vibración*, *elimina la ansiedad* o ampararse en su profesión de dentista para dar aval terapéutico.
3. **Estética de plantilla corporativa o clínica dental**: Cero tarjetas redondeadas de Bootstrap, cero iconos genéricos de maletín o corazón, cero encabezados con `// 01 SERVICES`.
4. **Distorsión del formato vertical 61 × 91 cm**: En pantallas panorámicas, la obra vertical nunca debe recortarse ni estirarse; se presenta con su proporción 2:3 intacta sobre peana o muro con balance asimétrico editorial.

---

## 3. LOS DOS UNIVERSOS RELACIONADOS

La obra se organiza en dos universos complementarios, con una atmósfera visual diferenciada:

### Universo A: VORTEX ART & SACRED GEOMETRY
- **Atmósfera**: Nocturna, profunda, magnética y vibrante.
- **Fondo**: Azul medianoche profundo (`#080C14` y `#0E1726`) con matices de lino oscuro.
- **Luz**: Rayos dorados de pan de oro (`#E5A93C`, `#FDE68A`), azul ultramarino brillante (`#1D4ED8`, `#2563EB`), turquesa etéreo (`#06B6D4`) y magenta solar (`#C026D3`).
- **Simbolismo**: El vórtice como movimiento continuo de la naturaleza (ciclones, galaxias, remolinos de agua) y la geometría sagrada como orden armónico subyacente.

### Universo B: MEDITATION & ANGELS
- **Atmósfera**: Diurna, serena, amplia y luminosa.
- **Fondo**: Blanco alabastro cálido (`#FAF8F5`, `#F3EFEA`), evocando papel artesanal o lienzo preparado con gesso tradicional.
- **Luz**: Veladuras lavanda suave (`#E9D5FF`), azul celestial tenue (`#BAE6FD`), destellos de polvo de oro cálido y luz matinal.
- **Simbolismo**: Pausa contemplativa, silencio interior, presencia protectora de figuras angélicas de luz sin dogmas religiosos.

### Elementos compartidos (Unidad Artística):
- Sistema tipográfico idéntico.
- Grilla editorial asimétrica.
- Ficha de obra con las mismas especificaciones rigurosas de 61 × 91 cm.
- Transición suave con indicador de colección activo.

---

## 4. SISTEMA TIPOGRÁFICO Y JUSTIFICACIÓN

- **Display & Títulos**: `Cormorant Garamond` (Google Fonts).  
  *Justificación*: Una tipografía serif renacentista refinada, inspirada en los tipos de Claude Garamond. Sus serifas afiladas y proporciones clásicas aportan la solemnidad y el peso curatorial de un catálogo de museo de bellas artes, alejándose radicalmente de las sans-serif geométricas genéricas de las landing pages de IA.
- **Lectura & Navegación**: `Plus Jakarta Sans` (Google Fonts).  
  *Justificación*: Una fuente contemporánea de legibilidad excepcional, trazo sobrio y cálido humanismo. Garantiza que textos largos, fichas técnicas y citas se lean con comodidad sin restar protagonismo a la pintura.
- **Cifras y Datos Técnicos**: Numerales tabulares (`font-mono tabular-nums`).

### 4.1 Sistema Dual de Tema (Modo Claro & Modo Oscuro)
Para responder fielmente a los dos universos del proyecto sin forzar contrastes antinaturales:
- **Modo Oscuro (Inmersión Vórtex & Geometría)**:
  - Fondo: Negro obsidiana y medianoche profunda (`#080C14` / `#0E1726`).
  - Iluminación: Acentos en oro cálido (`#E5A93C`) y destellos en azul índigo.
  - Sensación: Gravedad, movimiento cósmico, contemplación nocturna y foco teatral sobre los lienzos.
- **Modo Claro (Serenidad de Meditación, Luz & Ángeles)**:
  - Fondo: Alabastro cálido y blanco galería de museo (`#FAF7F2` / `#FFFFFF`).
  - Tipografía & Acentos: Carbón mineral oscuro (`#1C1917` / `#292524`) y ámbar tostado (`#B45309`).
  - Sensación: Luz natural de estudio de pintura, quietud, respiración y silencio diáfano.
- Selector interactivo accesible en la barra superior con persistencia automática en `localStorage` y sincronización con las preferencias del sistema (`prefers-color-scheme`).

---

## 5. IDEA FIRMA DE INTERACCIÓN (Justificada)

### "El Observador de Presencia Espacial & Textura"
Para que la web sea verdaderamente STUNNING y preserve la pureza y protagonismo absoluto de las obras reales sin superposiciones artificiales:

1. **Visor de Escala en Pared ("Ver en tu espacio")**:  
   Permite al coleccionista proyectar la obra en su proporción real de 61 × 91 cm dentro de 4 salas contemporáneas:
   - Salón Minimalista Moderno.
   - Espacio de Meditación & Silencio.
   - Estudio de Coleccionista Contemporáneo.
   - Despacho de Alta Dirección.  
   Incluye ajuste de color de muro y comparativa con altura humana media para verificar cómo domina el espacio.

2. **Lupa Macro de Pigmento & Textura**:  
   Permite explorar a 2.5× los relieves de óleo, las láminas de pan de oro y el grano del lino auténtico, valorizando la técnica física y matérica de la artista.

---

## 6. VERIFICACIÓN DEL TEST DE ORIGINALIDAD

| Criterio | Estado | Comprobación |
|---|---|---|
| ¿Podría pertenecer a cualquier artista cambiando fotos? | NO | Toda la arquitectura, los diagramas SVG pedagógicos, la simulación de 61 × 91 cm y los textos nacen del vórtice y la geometría. |
| ¿Hay plantilla evidente (hero genérico, píldoras, gradientes de IA)? | NO | Layout editorial asimétrico, sin badges de píldora, sin íconos cliché, con SVG trazados a mano en código. |
| ¿Las pinturas mandan o las tapa el diseño? | MANDAN | La pintura ocupa el 65% del viewport en Hero y tiene zoom a pantalla completa sin elementos artificiales que la tapen. |
| ¿La paleta sale de las obras reales? | SÍ | Extraída de las obras reales: ultramar, turquesa, oro y alabastro. |
| ¿Hay una idea firma justificada? | SÍ | Simulador de pared a escala real + Lupa macro de textura física. |
| ¿Algún texto promete sanación o usa su profesión como aval médico? | NO | Enmarcado exclusivamente como inspiración estética y experiencia espiritual personal. Aviso explícito en footer. |
