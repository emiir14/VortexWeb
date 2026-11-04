# Web Oficial de la Artista — Vórtex, Geometría Sagrada y Meditación

Sitio web contemporáneo de alta gama para la exhibición y adquisición de pinturas originales (61 × 91 cm) inspiradas en la energía vórtex, la geometría sagrada y la meditación.

Desarrollado en **React, TypeScript y Tailwind CSS**, con arquitectura bilingüe (Español / Inglés), visualizador a escala real en pared, lupa macro de textura de pigmento, diagrama interactivo de resonancia geométrica y canal directo de asesoría vía WhatsApp y correo.

---

## 🚀 Cómo correr el proyecto localmente

1. **Clonar o abrir el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_DIRECTORIO>
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Copia `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Edita tus valores personales:
   - `VITE_WHATSAPP_NUMBER`: Tu número de teléfono con código de país (ej. `34600112233` para España, sin símbolos `+`).
   - `VITE_INSTAGRAM_URL`: Tu enlace a Instagram.
   - `CONTACT_RECEIVER_EMAIL`: Correo donde deseas recibir consultas.

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. **Compilar para producción**:
   ```bash
   npm run build
   ```

---

## 🌐 Cómo desplegar en Vercel (Paso a Paso)

1. **Subir tu código a GitHub / GitLab / Bitbucket**:
   - Crea un repositorio nuevo (público o privado).
   - Haz commit de todos los archivos y súbelos:
     ```bash
     git add .
     git commit -m "Web de la artista lista para producción"
     git branch -M main
     git push -u origin main
     ```

2. **Conectar en Vercel**:
   - Inicia sesión en [Vercel](https://vercel.com).
   - Haz clic en **"Add New Project"** y selecciona **"Import Git Repository"**.
   - Escoge el repositorio que acabas de subir.

3. **Configurar el proyecto en Vercel**:
   - **Framework Preset**: Detectará `Vite` automáticamente.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**: Agrega las variables de `.env.example`:
     - `VITE_WHATSAPP_NUMBER`
     - `VITE_INSTAGRAM_URL`
     - `CONTACT_RECEIVER_EMAIL`
     - `RESEND_API_KEY` (si utilizas la ruta de envío de Resend)
     - `APP_URL` (la URL final de tu dominio)

4. **Hacer clic en "Deploy"**:
   - En menos de 60 segundos tu web estará activa en una URL de Vercel (ej. `artista-vortex.vercel.app`).

5. **Conectar tu Dominio Personal**:
   - En el panel de Vercel, ve a **Settings** → **Domains**.
   - Escribe tu dominio (ej. `tu-nombre-artista.com` o `vortexarte.com`).
   - Vercel te dará los registros DNS (tipo `A` o `CNAME`). Entra en tu registrador de dominios (GoDaddy, Namecheap, Google Domains / Squarespace, DonDominio, etc.) y agrégalos.
   - En pocos minutos tendrás certificado SSL gratuito (HTTPS) y tu dominio conectado.

---

## 🎨 Cómo gestionar las obras de arte

Toda la galería se alimenta de archivos JSON modulares ubicados en `/content/obras/`. No necesitas base de datos ni panel de administración complejo:

### 1. Para agregar una nueva obra:
1. Crea una carpeta en `/public/obras/[nombre-de-la-obra]/`.
2. Guarda tu fotografía vertical en `/public/obras/[nombre-de-la-obra]/main.jpg` (proporción recomendada 2:3 vertical, 61 × 91 cm).
3. Crea un archivo `/content/obras/[nombre-de-la-obra].json` siguiendo esta plantilla:
   ```json
   {
     "slug": "nombre-de-la-obra",
     "titulo": {
       "es": "Título en Español",
       "en": "Title in English"
     },
     "coleccion": "vortex-art",
     "medidas": "61 × 91 cm",
     "tecnica": "Óleo y pan de oro sobre lino",
     "tecnica_en": "Oil and gold leaf on linen",
     "ano": 2026,
     "estado": "disponible",
     "precio": "Consultar / Inquire",
     "frase": {
       "es": "Frase contemplativa sobre la obra.",
       "en": "Contemplative phrase about the artwork."
     },
     "imagenPrincipal": "/obras/nombre-de-la-obra/main.jpg",
     "imagenesDetalle": ["/obras/nombre-de-la-obra/main.jpg"],
     "imagenAmbiente": "/obras/nombre-de-la-obra/main.jpg",
     "alt": {
       "es": "Descripción visual para accesibilidad en español.",
       "en": "Visual accessibility description in English."
     },
     "isPlaceholder": false
   }
   ```
4. Guarda el archivo y la web creará automáticamente la tarjeta en la galería, la ficha interactiva y la URL de WhatsApp con mensaje prellenado.

### 2. Para marcar una obra como vendida o reservada:
Abre el archivo JSON de la obra y cambia `"estado"`:
- `"disponible"`: Botón de consulta activo para compra inmediata.
- `"reservada"`: Muestra la etiqueta de reservada en sala.
- `"vendida"`: Muestra "Colección privada" / "Vendida", manteniendo la obra visible en el catálogo de trayectoria.

---

## 📋 Archivos de Trabajo Incluidos
- `DESIGN.md`: Documento de dirección de arte, investigación de 12 galerías, paleta y justificación de la idea firma.
- `PENDIENTES.md`: Lista de tareas pendientes para la artista (nombre, fotos finales, datos de contacto).
- `GUIA-SOBRE-MI.md`: 6 preguntas guiadas para redactar su historia auténtica.
- `.env.example`: Plantilla de variables de entorno.
