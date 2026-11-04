# PENDIENTES.md — LISTA DE VERIFICACIÓN PARA LA ARTISTA

Este archivo contiene todos los elementos marcados con `[COMPLETAR]` en el código y en la web. Cuando tengas estos datos, solo tienes que sustituirlos en los archivos correspondientes o compartirlos para actualizar la web en minutos.

---

## 1. IDENTIDAD Y MARCA
- [ ] **Nombre de la Artista**: Indicar nombre completo o nombre artístico definitivo (actualmente figura como `[COMPLETAR: Nombre de la Artista]`).
- [ ] **Nombre del Proyecto / Marca**: Si usas un nombre de estudio o galería personal (ej. *Vortex Studio*, *Luz & Geometría*, etc.) o tu propio nombre como firma.
- [ ] **Logotipo / Firma**: Si tienes tu firma escaneada o vectorizada para incluirla en la cabecera y en los certificados de autenticidad.

---

## 2. CANALES DE CONTACTO Y VENTA
- [ ] **Número de WhatsApp**: Sustituir el número temporal en `.env.example` (`VITE_WHATSAPP_NUMBER="34600000000"`). Debe incluir código de país sin el símbolo `+` (ejemplo para España: `34612345678`).
- [ ] **Usuario de Instagram**: Actualizar el enlace en `.env.example` y en el pie de página (`https://instagram.com/[COMPLETAR_USUARIO]`).
- [ ] **Correo Electrónico para Consultas**: Dirección de correo donde recibirás los mensajes del formulario web (`contacto@tu-dominio.com`).

---

## 3. FOTOGRAFÍAS REALES DE LAS PINTURAS
- [ ] **Fotos en Alta Resolución de las Obras**:
  - Formato vertical de 61 × 91 cm.
  - Foto frontal con luz natural neutra o iluminación de estudio sin reflejos.
  - Fotos de detalle de textura (pan de oro, relieve de óleo, empaste).
  - Fotos de la obra colgada en una pared real (salón, estudio, pared de meditación) si dispones de ellas.
- [ ] **Sustitución de los Placeholders**:
  - Actualmente hay 6 obras con imágenes de muestra claramente etiquetadas como `[OBRA DE MUESTRA PRELIMINAR]`.
  - Para cambiar una obra por la tuya, solo debes reemplazar el archivo `main.jpg` dentro de `/public/obras/[slug]/main.jpg` y editar el archivo `/content/obras/[slug].json`.

---

## 4. TEXTOS Y BIOGRAFÍA ("SOBRE MÍ")
Revisa las 6 preguntas de `GUIA-SOBRE-MI.md` para redactar tus respuestas reales:
- [ ] **Nombre de la institución o escuela de artes plásticas en Perú** donde estudiaste y años aproximados.
- [ ] **Historia de transición**: Cómo tu experiencia como dentista y empresaria de clínicas dentales te condujo a la pintura y al silencio de la meditación.
- [ ] **Qué significa para ti la energía vórtice y la geometría sagrada** al pintar frente al lienzo.
- [ ] **Línea del tiempo**: Años e hitos que quieras confirmar (primer cuadro, primera sesión de meditación, exposiciones previas si las hubo).

---

## 5. ENCUENTROS Y MEDITACIONES
- [ ] **Ciudades confirmadas**: Se menciona *"más de 15 sesiones grupales en Barcelona, París, Italia y Francia"*. Confirmar las ciudades exactas y el número total o aproximado.
- [ ] **Fotografías de las sesiones**: 2 o 3 fotos reales de los encuentros (espacio, participantes meditando, obras en la sala) para sustituir en la sección de Meditaciones.
- [ ] **Testimonios de asistentes**: 2 o 3 citas reales breves de participantes que hayan dado su autorización expresa.

---

## 6. CONDICIONES DE COMPRA Y ENVÍO
- [ ] **Precios de las obras**: Decidir si las obras muestran precio orientativo (ej. `1.800 €` / `$2,000 USD`) o si se mantiene como *"Consultar / Inquire"* para trato personalizado.
- [ ] **Países a los que envías**: España, Unión Europea, Estados Unidos, Latinoamérica.
- [ ] **Plazos de entrega habituales**: (ej. 3 a 7 días hábiles con número de seguimiento).
- [ ] **Certificado de autenticidad**: Confirmar si cada obra se entrega firmada y sellada con certificado físico en papel de algodón.
