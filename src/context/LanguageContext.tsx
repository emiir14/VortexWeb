import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Brand & Nav
    'brand.name': 'Vortex Art',
    'brand.artist': 'Dra. Sylvia Pflücker',
    'nav.home': 'Inicio',
    'nav.gallery': 'Nuestra galería',
    'nav.vortex': 'Vórtices',
    'nav.geometry': 'Geometría sagrada',
    'nav.natural': 'Patrones naturales',
    'nav.angelical': 'Conexión angelical',
    'nav.special': 'Colecciones especiales',
    'nav.about': 'Dra. Sylvia Pflücker',
    'nav.sessions': 'Meditaciones',
    'nav.contact': 'Contacto',
    'nav.inquire': 'Consultar obra',

    // Hero
    'hero.badge': 'Vortex Art · Dra. Sylvia Pflücker · Colección Original',
    'hero.title': 'El arte como expresión de energía y geometría.',
    'hero.subtitle': 'Vortex Art nació de la exploración artística de formas geométricas, patrones naturales y el movimiento a través de los vórtices. Obras de arte concebidas para transformar la atmósfera de cada espacio.',
    'hero.cta.explore': 'Explorar nuestra galería',
    'hero.cta.discover': 'Conocer su filosofía',
    'hero.scroll': 'Desliza para contemplar',

    // About the Artist - Dra. Sylvia Pflücker
    'about.kicker': 'La Artista · Dra. Sylvia Pflücker',
    'about.title': 'El arte como expresión de energía y geometría',
    'about.name': 'Dra. Sylvia Pflücker',
    'about.subtitle': 'Artista contemporánea peruana radicada en Florida',
    'about.p1': 'Vortex Art nació de la exploración artística de la Dra. Sylvia Pflücker en torno a las formas geométricas, los patrones naturales y el movimiento representado a través de los vórtices.',
    'about.p2': 'Cada pintura es una búsqueda de equilibrio entre color, estructura y movimiento. A la artista la inspira la relación entre el arte, la naturaleza y los espacios que habitamos.',
    'about.p3': 'Para la Dra. Sylvia Pflücker, una obra de arte es más que un simple elemento decorativo: también puede transmitir emociones, crear atmósferas y convertirse en el punto focal de un espacio.',
    'about.philosophyTitle': 'Filosofía artística',
    'about.philosophyDesc': 'Crear obras de arte que inviten a las personas a contemplar, conectar y experimentar el arte desde una perspectiva diferente.',
    'about.artistTitle': 'Dra. Sylvia Pflücker',
    'about.artistBio': 'La Dra. Sylvia Pflücker es una artista contemporánea peruana radicada en Florida. Su práctica artística combina pintura, técnicas mixtas y elementos escultóricos, con superficies de gran textura y un recurrente interés en la naturaleza, las vibraciones, la resiliencia y el poder transformador de los espacios a través del arte.',
    'about.exhibitionTitle': 'Presentación en Galería de Arte',
    'about.exhibitionDesc': 'Obras de la colección Vortex Art en exhibición: escala arquitectónica, iluminación focal y presencia en sala contemporánea.',
    'about.timeline.title': 'Evolución Creativa & Práctica Artística',
    'about.timeline.1.year': 'Raíces',
    'about.timeline.1.text': 'Formación plástica en Perú y exploración de pigmentos, dibujo y escultura matérica.',
    'about.timeline.2.year': 'Florida',
    'about.timeline.2.text': 'Establecimiento de su estudio en Florida, profundizando en técnicas mixtas, texturas y vibración.',
    'about.timeline.3.year': 'Vortex Art',
    'about.timeline.3.text': 'Consolidación de las series de Vórtices, Geometría Sagrada y Patrones Naturales.',
    'about.timeline.4.year': 'Expansión',
    'about.timeline.4.text': 'Composiciones abstractas de conexión angelical y colecciones especiales para espacios contemporáneos.',

    // Gallery / Catalogue (Exact user text)
    'gallery.kicker': 'Catálogo de Pinturas',
    'gallery.title': 'Nuestra galería.',
    'gallery.subtitle': 'Descubrí nuestra colección de pinturas Vortex. Cada pieza presenta una combinación única de geometría, color y movimiento. Explorá las obras disponibles y encontrá aquella que mejor represente tu estilo y el ambiente que querés crear.',
    'gallery.filter.all': 'Todas',
    'gallery.filter.vortices': 'Vórtices',
    'gallery.filter.geometry': 'Geometría sagrada',
    'gallery.filter.natural': 'Patrones naturales',
    'gallery.filter.angelical': 'Conexión angelical',
    'gallery.filter.angelicalFull': 'Composiciones abstractas basadas en conexión angelical',
    'gallery.filter.special': 'Colecciones especiales',
    'gallery.status.available': 'Disponible',
    'gallery.status.reserved': 'Reservada',
    'gallery.status.sold': 'No disponible / Colección Privada',
    'gallery.action.wall': 'Ver en tu pared',
    'gallery.action.detail': 'Detalle y Zoom',
    'gallery.action.whatsapp': 'Consultar por WhatsApp',
    'gallery.placeholderBadge': 'Obra original de Sylvia Pflücker',

    // Artwork Details & Specifications
    'detail.specifications': 'Especificaciones',
    'detail.metaDimensions': 'Dimensiones',
    'detail.metaTechnique': 'Técnica',
    'detail.metaYear': 'Año',
    'detail.metaStatus': 'Disponibilidad',
    'detail.metaPrice': 'Precio',
    'detail.loupeBtn': 'Lupa de Textura (2.5×)',
    'detail.inquireWhatsapp': 'Consultar por esta obra en WhatsApp',
    'detail.backToGallery': 'Volver a nuestra galería',

    // Concepts & Perception
    'vortex.kicker': 'El lenguaje de la energía',
    'vortex.title': 'El Movimiento del Vórtice',
    'vortex.p1': 'Un vórtice es un movimiento continuo que gira alrededor de un centro. Lo encontramos en los remolinos de agua cristalina, en la formación de las galaxias espirales, en los vientos y en la arquitectura viva de la naturaleza.',
    'vortex.p2': 'En Vortex Art, el vórtice se convierte en una vía de equilibrio entre color, estructura y movimiento, convirtiendo cada lienzo en una presencia dinámica y armónica.',
    'vortex.quote': '«El vórtice no es una forma estática: es la huella visible del movimiento que ordena el espacio.»',

    // Sacred Geometry
    'geometry.kicker': 'Proporción y Armonía',
    'geometry.title': 'Geometría Sagrada',
    'geometry.p1': 'Círculos concéntricos, espirales áureas y proporciones esenciales que dialogan con el equilibrio y el orden silencioso de la naturaleza.',
    'geometry.p2': 'En cada pintura de Sylvia Pflücker, la geometría es un lenguaje visual intuitivo que invita a quien contempla a conectar con un estado de serenidad y resonancia.',

    // Natural patterns
    'natural.kicker': 'Resonancia Orgánica',
    'natural.title': 'Patrones Naturales',
    'natural.desc': 'Formas inspiradas en los ritmos del agua, los flujos del viento y las vibraciones terrestres, traduciendo la resiliencia de la naturaleza en lienzos con gran riqueza táctil.',

    // Angelical Connection
    'angels.kicker': 'Espacio de Contemplación',
    'angels.title': 'Conexión Angelical',
    'angels.subtitle': 'Composiciones abstractas basadas en conexión angelical. Una paleta serena de blancos cálidos, veladuras translúcidas y pan de oro que abren paso al silencio interior.',
    'angels.quote': '«En la quietud de la meditación, el arte se transforma en una experiencia profunda de presencia y bienestar.»',

    // Perception
    'perception.kicker': 'La Mirada Atenta',
    'perception.title': '¿Cómo nos afecta lo que miramos?',
    'perception.p1': 'Los colores, las formas circulares y los patrones rítmicos influyen directamente en la manera en que percibimos una estancia y en cómo nos sentimos al habitarla.',
    'perception.p2': 'Una pintura en una pared no es un objeto mudo: es una presencia constante, un punto focal capaz de transmitir emociones y transformar un espacio.',

    // Format section
    'format.kicker': 'Escala y Presencia',
    'format.title': 'El formato de referencia: 70 × 40 cm',
    'format.desc': 'Una proporción vertical estudiada para acompañar la escala humana. Con 40 cm de ancho y 70 cm de alto (aprox. 16 × 28 in), cada pintura encuentra su lugar natural tanto en un salón contemporáneo como en un estudio de trabajo o en un rincón íntimo de contemplación.',
    'format.spec1': 'Formato vertical 70 × 40 cm',
    'format.spec2': 'Lino belga de grano medio',
    'format.spec3': 'Bastidor de pino secado al horno',
    'format.spec4': 'Lista para colgar o enmarcar',

    // Meditations section
    'meditations.kicker': 'Encuentros y Talleres',
    'meditations.title': 'Sesiones de Meditación & Arte',
    'meditations.subtitle': 'Espacios compartidos para respirar, aquietar la mente y conectar con el silencio en torno al arte y las vibraciones.',
    'meditations.desc': 'Sesiones guiadas y encuentros grupales que unen contemplación artística, presencia y bienestar en un ambiente de calma.',
    'meditations.formTitle': 'Avísame de próximos encuentros',
    'meditations.formDesc': 'Déjame tu correo y ciudad para avisarte cuando organicemos una nueva sesión o exhibición de pinturas cerca de ti.',
    'meditations.formCity': 'Tu ciudad',
    'meditations.formEmail': 'Tu correo electrónico',
    'meditations.formBtn': 'Recibir avisos',
    'meditations.formSuccess': '¡Gracias! Te avisaremos con antelación del próximo encuentro en tu zona.',

    // Trust & Purchase
    'trust.kicker': 'Adquisición y Confianza',
    'trust.title': 'Cómo llega una obra a tu espacio',
    'trust.cert.title': 'Certificado de Autenticidad',
    'trust.cert.desc': 'Cada pintura se entrega con un certificado físico original, firmado de puño y letra por Sylvia Pflücker.',
    'trust.pack.title': 'Embalaje de Galería',
    'trust.pack.desc': 'Protección multicapa antihumedad, esquineras reforzadas y embalaje rígido de grado museístico.',
    'trust.ship.title': 'Envío Seguro Asegurado',
    'trust.ship.desc': 'Envíos en Estados Unidos e internacionales con seguro a todo riesgo y seguimiento personalizado puerta a puerta.',
    'trust.comm.title': 'Encargos y Proyectos Especiales',
    'trust.comm.desc': 'Posibilidad de comisionar una obra adaptada a la escala y paleta tonal de tu espacio.',

    // Contact
    'contact.kicker': 'Conversemos',
    'contact.title': '¿Alguna pintura conectó contigo?',
    'contact.subtitle': 'Cada pintura tiene su propia presencia, sus colores y su historia. Si alguna ha llamado tu atención o deseas consultar disponibilidad y condiciones de envío, conversemos con cercanía.',
    'contact.whatsappBtn': 'Escribir por WhatsApp ahora',
    'contact.form.name': 'Nombre y apellidos',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono o WhatsApp (opcional)',
    'contact.form.artwork': 'Obra de interés (opcional)',
    'contact.form.message': 'Tu mensaje o consulta',
    'contact.form.submit': 'Enviar consulta',
    'contact.form.success': 'Mensaje enviado. Te responderemos personalmente muy pronto.',
    'contact.newsletter': 'Boletín de obras: avísame cuando se publiquen nuevas pinturas.',

    // Wall Simulator Modal
    'wall.modalTitle': 'Simulador de Escala en Pared (70 × 40 cm)',
    'wall.selectRoom': 'Seleccionar ambiente',
    'wall.roomLiving': 'Salón Contemporáneo',
    'wall.roomMeditation': 'Espacio de Meditación',
    'wall.roomStudio': 'Estudio de Arte',
    'wall.roomOffice': 'Despacho Ejecutivo',
    'wall.selectWallColor': 'Tono de pared',
    'wall.selectFrame': 'Acabado de marco',
    'wall.frameNone': 'Bastidor sin marco (al aire)',
    'wall.frameOak': 'Madera de Roble Natural',
    'wall.frameBlack': 'Nogal Oscuro Contemporáneo',
    'wall.scaleNotice': 'Escala real calculada a proporción exacta 70 × 40 cm sobre muro de 2,60 m de altura estándar.',
    'wall.inquireThis': 'Consultar esta obra para mi espacio',

    // Footer
    'footer.disclaimer': 'Nota ética: Las pinturas, reflexiones y sesiones aquí presentadas son expresiones artísticas y experiencias contemplativas de bienestar personal.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad & Términos',
    'footer.contactArtist': 'Contacto con Sylvia Pflücker'
  },
  en: {
    // Brand & Nav
    'brand.name': 'Vortex Art',
    'brand.artist': 'Dr. Sylvia Pflücker',
    'nav.home': 'Home',
    'nav.gallery': 'Our gallery',
    'nav.vortex': 'Vortices',
    'nav.geometry': 'Sacred geometry',
    'nav.natural': 'Natural patterns',
    'nav.angelical': 'Angelical connection',
    'nav.special': 'Special collections',
    'nav.about': 'Dr. Sylvia Pflücker',
    'nav.sessions': 'Meditations',
    'nav.contact': 'Contact',
    'nav.inquire': 'Inquire artwork',

    // Hero
    'hero.badge': 'Vortex Art · Dr. Sylvia Pflücker · Original Collection',
    'hero.title': 'Art as an Expression of Energy and Geometry.',
    'hero.subtitle': 'Vortex Art was born from the artistic exploration of geometric shapes, natural patterns, and movement as represented through vortices. Paintings crafted to elevate and transform the atmosphere of every space.',
    'hero.cta.explore': 'Explore our gallery',
    'hero.cta.discover': 'Her Philosophy',
    'hero.scroll': 'Scroll to contemplate',

    // About the Artist - Dr. Sylvia Pflücker
    'about.kicker': 'The Artist · Dr. Sylvia Pflücker',
    'about.title': 'Art as an Expression of Energy and Geometry',
    'about.name': 'Dr. Sylvia Pflücker',
    'about.subtitle': 'Contemporary Peruvian artist based in Florida',
    'about.p1': 'Vortex Art was born from Dr. Sylvia Pflücker’s artistic exploration of geometric shapes, natural patterns, and movement as represented through vortices.',
    'about.p2': 'Each painting is for her a search for balance between color, structure, and movement. She is inspired by the intimate relationship between art, nature, and the spaces we inhabit.',
    'about.p3': 'For Dr. Sylvia Pflücker, an artwork is far more than just a decorative element: it can also convey feelings, create atmospheres, and become the focal point of a space.',
    'about.philosophyTitle': 'Artistic Philosophy',
    'about.philosophyDesc': 'To create artworks that invite people to contemplate, connect, and experience art from a different perspective.',
    'about.artistTitle': 'Dr. Sylvia Pflücker',
    'about.artistBio': 'Dr. Sylvia Pflücker is a contemporary Peruvian artist based in Florida. Her practice combines painting, mixed techniques, and sculptural elements, with surfaces of rich texture and a recurring interest in nature, vibrations, resilience, and the transforming power of spaces through art.',
    'about.exhibitionTitle': 'Contemporary Art Gallery Presentation',
    'about.exhibitionDesc': 'Vortex Art collection artworks on display: architectural scale, track lighting, and real-world gallery presence.',
    'about.timeline.title': 'Creative Evolution & Studio Practice',
    'about.timeline.1.year': 'Roots',
    'about.timeline.1.text': 'Fine arts training in Peru exploring pigments, classical draftsmanship, and textural surfaces.',
    'about.timeline.2.year': 'Florida',
    'about.timeline.2.text': 'Establishing her Florida studio, deepening research into sculptural elements, vibrations, and tactile resilience.',
    'about.timeline.3.year': 'Vortex Art',
    'about.timeline.3.text': 'Inception and maturation of the Vortices, Sacred Geometry, and Natural Patterns series.',
    'about.timeline.4.year': 'Expansion',
    'about.timeline.4.text': 'Abstract compositions based on angelical connection and curated special collections for contemporary interiors.',

    // Gallery / Catalogue (Exact user text)
    'gallery.kicker': 'Painting Catalogue',
    'gallery.title': 'Our Gallery.',
    'gallery.subtitle': 'Discover our collection of Vortex paintings. Each piece presents a unique combination of geometry, color, and movement. Explore the available works and find the one that best represents your style and the atmosphere you wish to create.',
    'gallery.filter.all': 'All',
    'gallery.filter.vortices': 'Vortices',
    'gallery.filter.geometry': 'Sacred geometry',
    'gallery.filter.natural': 'Natural patterns',
    'gallery.filter.angelical': 'Angelical connection',
    'gallery.filter.angelicalFull': 'Abstract compositions based on angelical connection',
    'gallery.filter.special': 'Special collections',
    'gallery.status.available': 'Available',
    'gallery.status.reserved': 'Reserved',
    'gallery.status.sold': 'Unavailable / Private Collection',
    'gallery.action.wall': 'View on your wall',
    'gallery.action.detail': 'Detail & Zoom',
    'gallery.action.whatsapp': 'Inquire via WhatsApp',
    'gallery.placeholderBadge': 'Original painting by Sylvia Pflücker',

    // Artwork Details & Specifications
    'detail.specifications': 'Specifications',
    'detail.metaDimensions': 'Dimensions',
    'detail.metaTechnique': 'Technique',
    'detail.metaYear': 'Year',
    'detail.metaStatus': 'Availability',
    'detail.metaPrice': 'Price',
    'detail.loupeBtn': 'Texture Loupe (2.5×)',
    'detail.inquireWhatsapp': 'Inquire about this piece on WhatsApp',
    'detail.backToGallery': 'Back to our gallery',

    // Concepts & Perception
    'vortex.kicker': 'The Language of Energy',
    'vortex.title': 'The Vortex Movement',
    'vortex.p1': 'A vortex is a continuous movement spinning around a center. We witness it in crystal-clear water whirlpools, in the spiral creation of galaxies, in winds, and in nature’s living patterns.',
    'vortex.p2': 'In Vortex Art, the vortex becomes a pathway to balance between color, structure, and movement, making each canvas a dynamic yet serene focal point.',
    'vortex.quote': '“The vortex is not a static form: it is the visible imprint of movement ordering space.”',

    // Sacred Geometry
    'geometry.kicker': 'Proportion & Harmony',
    'geometry.title': 'Sacred Geometry',
    'geometry.p1': 'Concentric circles, golden spirals, and essential proportions that converse with nature’s quiet harmonic balance.',
    'geometry.p2': 'In each painting by Sylvia Pflücker, geometry acts as an intuitive visual vocabulary inviting the viewer into a state of quiet serenity.',

    // Natural patterns
    'natural.kicker': 'Organic Resonance',
    'natural.title': 'Natural Patterns',
    'natural.desc': 'Forms inspired by water currents, atmospheric winds, and earth rhythms, translating nature’s resilience onto rich textural surfaces.',

    // Angelical Connection
    'angels.kicker': 'Sanctuary of Contemplation',
    'angels.title': 'Angelical Connection',
    'angels.subtitle': 'Abstract compositions based on angelical connection. A serene palette of warm whites, translucent glazes, and gold leaf giving way to inner stillness.',
    'angels.quote': '“In the stillness of contemplation, art becomes a profound experience of presence and well-being.”',

    // Perception
    'perception.kicker': 'The Attentive Gaze',
    'perception.title': 'How does what we look at affect us?',
    'perception.p1': 'Colors, circular movements, and repeating rhythmic patterns directly shape how we experience a room and how we feel while inhabiting it.',
    'perception.p2': 'A painting upon a wall is never a silent object: it is an abiding presence, a focal point that conveys emotion and transforms an entire space.',

    // Format section
    'format.kicker': 'Scale & Presence',
    'format.title': 'The reference format: 70 × 40 cm',
    'format.desc': 'A vertical proportion deliberately chosen to honor human scale. At 40 cm wide and 70 cm high (approx. 16 × 28 in), each canvas commands its natural place in contemporary living rooms, creative studios, or contemplative meditation corners.',
    'format.spec1': 'Vertical 70 × 40 cm proportion',
    'format.spec2': 'Medium-grain Belgian linen',
    'format.spec3': 'Kiln-dried pine stretcher bars',
    'format.spec4': 'Ready to hang or custom-frame',

    // Meditations section
    'meditations.kicker': 'Gatherings & Sessions',
    'meditations.title': 'Meditation & Art Sessions',
    'meditations.subtitle': 'Shared spaces to breathe, quiet the mind, and connect with stillness surrounded by art and vibration.',
    'meditations.desc': 'Guided sessions and contemplative gatherings uniting visual art, presence, and well-being in a calming atmosphere.',
    'meditations.formTitle': 'Notify me of upcoming gatherings',
    'meditations.formDesc': 'Leave your email and city to be notified when we organize a meditation session or art exhibition near you.',
    'meditations.formCity': 'Your city',
    'meditations.formEmail': 'Your email address',
    'meditations.formBtn': 'Receive notices',
    'meditations.formSuccess': 'Thank you! We will notify you well ahead of the next gathering in your area.',

    // Trust & Purchase
    'trust.kicker': 'Acquisition & Trust',
    'trust.title': 'How an artwork reaches your space',
    'trust.cert.title': 'Certificate of Authenticity',
    'trust.cert.desc': 'Every painting includes an original physical certificate personally hand-signed by Sylvia Pflücker.',
    'trust.pack.title': 'Museum-Grade Packaging',
    'trust.pack.desc': 'Multi-layer moisture barrier, reinforced corner guards, and rigid fine art protective crating.',
    'trust.ship.title': 'Fully Insured Transit',
    'trust.ship.desc': 'US and international shipping with full transit insurance and door-to-door tracking.',
    'trust.comm.title': 'Bespoke Projects & Commissions',
    'trust.comm.desc': 'Custom commissions tailored to the dimensions and palette of your interior architecture.',

    // Contact
    'contact.kicker': 'Let us speak',
    'contact.title': 'Did an artwork speak to you?',
    'contact.subtitle': 'Every painting carries its own presence, palette, and narrative. If a piece resonated with you or you wish to discuss acquisition and shipping, reach out directly.',
    'contact.whatsappBtn': 'Chat on WhatsApp now',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.phone': 'Phone / WhatsApp (optional)',
    'contact.form.artwork': 'Artwork of interest (optional)',
    'contact.form.message': 'Your message or inquiry',
    'contact.form.submit': 'Send inquiry',
    'contact.form.success': 'Message sent. We will personally respond to you shortly.',
    'contact.newsletter': 'Artwork alerts: notify me when new paintings are unveiled.',

    // Wall Simulator Modal
    'wall.modalTitle': 'Scale-on-Wall Simulator (70 × 40 cm)',
    'wall.selectRoom': 'Select environment',
    'wall.roomLiving': 'Contemporary Living Room',
    'wall.roomMeditation': 'Meditation Sanctuary',
    'wall.roomStudio': 'Art Collector Studio',
    'wall.roomOffice': 'Executive Office',
    'wall.selectWallColor': 'Wall color tone',
    'wall.selectFrame': 'Framing finish',
    'wall.frameNone': 'Frameless linen canvas (raw edge)',
    'wall.frameOak': 'Natural Oak Floating Frame',
    'wall.frameBlack': 'Dark Walnut Contemporary Frame',
    'wall.scaleNotice': 'True scale calculated at exact 70 × 40 cm proportion against a standard 2.60 m ceiling height.',
    'wall.inquireThis': 'Inquire about this artwork for my space',

    // Footer
    'footer.disclaimer': 'Ethical note: The paintings, contemplations, and meditation sessions presented here are artistic expressions and personal wellness experiences.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy & Terms',
    'footer.contactArtist': 'Contact Sylvia Pflücker'
  },
  fr: {
    'brand.name': 'Vortex Art',
    'brand.artist': 'Sylvia Pflücker',
    'nav.home': 'Accueil',
    'nav.gallery': 'Notre galerie',
    'nav.about': 'À propos',
    'nav.sessions': 'Méditations',
    'nav.contact': 'Contact',
    'nav.inquire': 'Demander une œuvre',
    'hero.badge': 'Vortex Art · Sylvia Pflücker',
    'hero.title': 'L’art comme expression d’énergie et de géométrie.',
    'hero.subtitle': 'Vortex Art est né de l’exploration des formes géométriques, des motifs naturels et du mouvement à travers les vortex.',
    'hero.cta.explore': 'Explorer notre galerie',
    'hero.cta.discover': 'Notre philosophie',
    'hero.scroll': 'Défiler pour contempler',
    'gallery.title': 'Notre galerie.',
    'gallery.subtitle': 'Découvrez notre collection de peintures Vortex.',
    'gallery.filter.all': 'Toutes',
    'gallery.filter.vortices': 'Vortex',
    'gallery.filter.geometry': 'Géométrie sacrée',
    'gallery.filter.natural': 'Motifs naturels',
    'gallery.filter.angelical': 'Connexion angélique',
    'gallery.filter.special': 'Collections spéciales',
    'footer.disclaimer': 'Les œuvres sont des propositions artistiques et spirituelles personnelles.',
    'footer.rights': 'Tous droits réservés.'
  }
};

const LanguageContext = createContext<LanguageContextProps>({
  lang: 'es',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    // Check url search parameter ?lang=en or ?lang=es
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'es' || urlLang === 'fr') {
        setLangState(urlLang as Language);
        document.documentElement.lang = urlLang;
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      document.documentElement.lang = newLang;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['es']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
