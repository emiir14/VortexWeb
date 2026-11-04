import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.vortex': 'Vortex Art',
    'nav.geometry': 'Sacred Geometry',
    'nav.meditation': 'Meditation & Angels',
    'nav.about': 'Sobre mí',
    'nav.sessions': 'Meditaciones',
    'nav.contact': 'Contacto',
    'nav.inquire': 'Consultar obra',

    // Hero
    'hero.badge': 'Colección Original · Pinturas 61 × 91 cm',
    'hero.title': 'Arte que transforma la forma en que sentimos un espacio.',
    'hero.subtitle': 'Explora el universo de los vórtices, la geometría sagrada y el arte creado para inspirar armonía, contemplación y conexión.',
    'hero.cta.explore': 'Explorar las obras',
    'hero.cta.discover': 'Descubrir los vórtices',
    'hero.scroll': 'Desliza para contemplar',

    // Vortex explanation
    'vortex.kicker': 'El lenguaje de la energía',
    'vortex.title': '¿Qué es un vórtice?',
    'vortex.p1': 'Un vórtice es un movimiento continuo que gira alrededor de un centro. Lo encontramos en los remolinos de agua cristalina, en la formación de las galaxias espirales, en los vientos de los huracanes y en la estructura misma de las conchas marinas.',
    'vortex.p2': 'En el arte, el vórtice se convierte en un símbolo vivo de movimiento, transformación y conexión. Representa la fuerza que reúne lo disperso y conduce la mirada hacia un punto de quietud interior en medio del dinamismo.',
    'vortex.quote': '«El vórtice no es una forma estática: es la huella visible del movimiento que ordena el espacio.»',

    // Sacred Geometry
    'geometry.kicker': 'Proporción y Armonía',
    'geometry.title': 'Geometría Sagrada',
    'geometry.p1': 'Círculos concéntricos, espirales áureas y simetrías esenciales. A lo largo de la historia, diversas culturas y creadores han relacionado estos patrones con el equilibrio, la proporción y el orden silencioso del cosmos.',
    'geometry.p2': 'En cada una de mis pinturas, la geometría no es un cálculo rígido, sino un lenguaje visual intuitivo: una trama de líneas y proporciones que invita a quien contempla a reencontrar un estado de serenidad.',

    // Perception
    'perception.kicker': 'La Mirada Atenta',
    'perception.title': '¿Cómo nos afecta lo que miramos?',
    'perception.p1': 'Los colores, las formas circulares y los patrones rítmicos influyen directamente en la manera en que percibimos una estancia y en cómo nos sentimos al habitarla.',
    'perception.p2': 'Una pintura en una pared no es un objeto mudo: es una presencia constante, un respiradero visual en medio del ajetreo cotidiano. Nos invita a detener el pensamiento durante unos instantes, a tomar aire y a recordar que la calma siempre está disponible.',

    // Gallery
    'gallery.kicker': 'Catálogo de Obras',
    'gallery.title': 'Pinturas Originales (61 × 91 cm)',
    'gallery.subtitle': 'Cada obra es una pieza única realizada en óleo, acrílico y pigmentos minerales sobre lino belga montado en bastidor.',
    'gallery.filter.all': 'Todas las obras',
    'gallery.filter.vortex': 'Vortex Art',
    'gallery.filter.geometry': 'Sacred Geometry',
    'gallery.filter.angels': 'Meditation & Angels',
    'gallery.status.available': 'Disponible',
    'gallery.status.reserved': 'Reservada',
    'gallery.status.sold': 'Colección Privada',
    'gallery.action.wall': 'Ver en tu pared',
    'gallery.action.detail': 'Detalle y Zoom',
    'gallery.action.whatsapp': 'Consultar por WhatsApp',
    'gallery.placeholderBadge': 'Obra de muestra preliminar',

    // Meditation & Angels section
    'angels.kicker': 'Universo Sereno',
    'angels.title': 'Meditation & Angels',
    'angels.subtitle': 'Un espacio claro, luminoso y etéreo. Obras abstractas nacidas de la experiencia contemplativa, donde los blancos cálidos, las veladuras lila y el oro fino susurran quietud.',
    'angels.quote': '«En la quietud de la meditación, la luz deja de ser un fenómeno exterior para convertirse en un cobijo interior.»',

    // Format section
    'format.kicker': 'Escala y Presencia',
    'format.title': 'El formato de referencia: 61 × 91 cm',
    'format.desc': 'Una proporción vertical estudiada para acompañar la escala humana. Con 61 cm de ancho y 91 cm de alto, cada pintura encuentra su lugar natural tanto en un salón contemporáneo como en un estudio de trabajo o en un rincón íntimo de meditación.',
    'format.spec1': 'Proporción 2:3 vertical',
    'format.spec2': 'Lino belga de grano medio',
    'format.spec3': 'Bastidor de pino secado al horno',
    'format.spec4': 'Lista para colgar o enmarcar',

    // About section
    'about.kicker': 'La Artista detrás de la obra',
    'about.title': 'De la precisión de la salud a la libertad del lienzo',
    'about.name': '[COMPLETAR: Nombre de la Artista]',
    'about.subtitle': 'Empresaria, odontóloga de profesión y artista plástica formada en Perú.',
    'about.p1': 'Durante años, mi día a día estuvo marcado por el rigor, la concentración milimétrica y el cuidado humano en el ámbito de la salud bucodental y la gestión de clínicas. Sin embargo, en mis manos siempre habitó una inquietud complementaria: la necesidad de explorar el color, la forma y el misterio del espacio.',
    'about.p2': 'Estudié artes plásticas en Perú [institución y años: COMPLETAR], donde descubrí la fuerza expresiva de los pigmentos y la fascinación por el dibujo clásico. Con el tiempo, mi práctica personal de meditación se entrelazó con mi vocación pictórica. En el lienzo vertical de 61 × 91 cm encontré un santuario donde la precisión quirúrgica se transformó en armonía geométrica.',
    'about.p3': 'Pintar vórtices y geometrías sagradas es para mí un acto de escucha. Cada trazo en espiral y cada lámina de pan de oro representan la búsqueda de un centro: ese lugar donde el movimiento cesa y encontramos una pausa profunda.',
    'about.timeline.title': 'Hitos y Trayectoria [Borrador a confirmar]',
    'about.timeline.1.year': '[AÑO]',
    'about.timeline.1.text': 'Formación en Artes Plásticas en Perú [COMPLETAR]',
    'about.timeline.2.year': '[AÑO]',
    'about.timeline.2.text': 'Fundación de clínicas dentales y consolidación empresarial',
    'about.timeline.3.year': '[AÑO]',
    'about.timeline.3.text': 'Inicio de las series de pintura sobre Vórtex y Geometría Sagrada',
    'about.timeline.4.year': '[AÑO RECIENTE]',
    'about.timeline.4.text': 'Más de 15 sesiones grupales de meditación guiada en Barcelona, París, Italia y Francia [confirmar ciudades]',

    // Meditations section
    'meditations.kicker': 'Encuentros Grupales',
    'meditations.title': 'Sesiones de Meditación & Presencia',
    'meditations.subtitle': 'Espacios compartidos para respirar, aquietar la mente y conectar con el silencio en torno al arte.',
    'meditations.desc': 'He tenido el honor de guiar más de 15 sesiones grupales de meditación en ciudades como Barcelona, París, y diversas localidades de Italia y Francia [confirmar ciudades y cifra exacta]. No se trata de una terapia ni de una promesa milagrosa, sino de una invitación cálida y honesta a detener la prisa cotidiana, cerrar los ojos y habitar el momento presente.',
    'meditations.formTitle': 'Avísame de próximos encuentros',
    'meditations.formDesc': 'Déjame tu correo y ciudad para avisarte cuando organice una nueva sesión de meditación o una muestra de pintura cerca de ti.',
    'meditations.formCity': 'Tu ciudad',
    'meditations.formEmail': 'Tu correo electrónico',
    'meditations.formBtn': 'Recibir avisos',
    'meditations.formSuccess': '¡Gracias! Te avisaré con antelación del próximo encuentro en tu zona.',

    // Trust & Purchase
    'trust.kicker': 'Adquisición y Confianza',
    'trust.title': 'Cómo llega una obra a tu espacio',
    'trust.cert.title': 'Certificado de Autenticidad',
    'trust.cert.desc': 'Cada pintura se entrega con un certificado físico original, numerado, firmado y sellado de puño y letra por la artista.',
    'trust.pack.title': 'Embalaje de Galería',
    'trust.pack.desc': 'Protección multicapa antihumedad, esquineras reforzadas y caja de madera o cartón rígido de grado museístico.',
    'trust.ship.title': 'Envío Seguro Asegurado',
    'trust.ship.desc': 'Envíos nacionales e internacionales con seguro a todo riesgo y seguimiento personalizado puerta a puerta.',
    'trust.comm.title': 'Encargos Personalizados',
    'trust.comm.desc': 'Posibilidad de comisionar una obra adaptada a la escala y tonalidad de tu hogar o despacho profesional.',

    // Contact
    'contact.kicker': 'Conversemos',
    'contact.title': '¿Alguna pintura conectó contigo?',
    'contact.subtitle': 'Cada pintura tiene su propia presencia, sus colores y su historia. Si alguna ha llamado tu atención o deseas consultar disponibilidad y condiciones de envío, escríbeme y conversemos con cercanía.',
    'contact.whatsappBtn': 'Escribir por WhatsApp ahora',
    'contact.form.name': 'Nombre y apellidos',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono o WhatsApp (opcional)',
    'contact.form.artwork': 'Obra de interés (opcional)',
    'contact.form.message': 'Tu mensaje o consulta',
    'contact.form.submit': 'Enviar consulta',
    'contact.form.success': 'Mensaje enviado. Te responderé personalmente muy pronto.',
    'contact.newsletter': 'Boletín de obras: avísame cuando se publiquen nuevas pinturas.',

    // Wall Simulator Modal
    'wall.modalTitle': 'Simulador de Escala en Pared (61 × 91 cm)',
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
    'wall.scaleNotice': 'Escala real calculada a proporción exacta 61 × 91 cm sobre muro de 2,60 m de altura estándar.',
    'wall.inquireThis': 'Consultar esta obra para mi espacio',

    // Artwork Detail Modal
    'detail.loupeBtn': 'Lupa de Textura (2.5×)',
    'detail.metaDimensions': 'Dimensiones',
    'detail.metaTechnique': 'Técnica',
    'detail.metaYear': 'Año',
    'detail.metaStatus': 'Disponibilidad',
    'detail.inquireWhatsapp': 'Quiero consultar por esta obra en WhatsApp',

    // Footer
    'footer.disclaimer': 'Nota honesta: Las pinturas, reflexiones y sesiones de meditación aquí presentadas son expresiones artísticas y experiencias contemplativas personales. No constituyen tratamiento médico ni psicológico, ni producto sanitario alguno.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad & Términos',
    'footer.contactArtist': 'Contacto con la Artista'
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.vortex': 'Vortex Art',
    'nav.geometry': 'Sacred Geometry',
    'nav.meditation': 'Meditation & Angels',
    'nav.about': 'About me',
    'nav.sessions': 'Meditations',
    'nav.contact': 'Contact',
    'nav.inquire': 'Inquire artwork',

    // Hero
    'hero.badge': 'Original Collection · 61 × 91 cm Paintings',
    'hero.title': 'Art that transforms the feeling of a space.',
    'hero.subtitle': 'Explore the universe of vortices, sacred geometry, and art created to inspire harmony, contemplation, and connection.',
    'hero.cta.explore': 'Explore artworks',
    'hero.cta.discover': 'Discover the vortices',
    'hero.scroll': 'Scroll to contemplate',

    // Vortex explanation
    'vortex.kicker': 'The Language of Energy',
    'vortex.title': 'What is a vortex?',
    'vortex.p1': 'A vortex is a continuous movement spinning around a center. We witness it in crystal-clear water whirlpools, in the birth of spiral galaxies, in hurricane winds, and in the spiral architecture of sea shells.',
    'vortex.p2': 'In art, the vortex becomes a living symbol of movement, transformation, and centering. It represents the quiet force that gathers scattered attention, guiding the eye toward an inner stillness amidst dynamic flow.',
    'vortex.quote': '“The vortex is not a static form: it is the visible imprint of movement ordering space.”',

    // Sacred Geometry
    'geometry.kicker': 'Proportion & Harmony',
    'geometry.title': 'Sacred Geometry',
    'geometry.p1': 'Concentric circles, golden spirals, and essential symmetries. Across history, cultures and visionaries have related these geometric patterns to visual equilibrium, proportion, and quiet cosmic balance.',
    'geometry.p2': 'In each painting, geometry is not a rigid calculation, but an intuitive visual vocabulary: a weave of golden ratios inviting whoever contemplates it to rediscover inner serenity.',

    // Perception
    'perception.kicker': 'The Attentive Gaze',
    'perception.title': 'How does what we look at affect us?',
    'perception.p1': 'Colors, circular movements, and repeating rhythmic patterns directly shape how we experience a room and how we feel while inhabiting it.',
    'perception.p2': 'A painting upon a wall is never a silent object: it is an abiding presence, a visual resting point in the midst of daily rush. It invites us to pause our racing thoughts, take a deep breath, and remember that calm is always near.',

    // Gallery
    'gallery.kicker': 'Artwork Catalogue',
    'gallery.title': 'Original Paintings (61 × 91 cm)',
    'gallery.subtitle': 'Each work is an original unique piece created in oil, acrylic, and mineral pigments on Belgian linen stretched over kiln-dried wood.',
    'gallery.filter.all': 'All Artworks',
    'gallery.filter.vortex': 'Vortex Art',
    'gallery.filter.geometry': 'Sacred Geometry',
    'gallery.filter.angels': 'Meditation & Angels',
    'gallery.status.available': 'Available',
    'gallery.status.reserved': 'Reserved',
    'gallery.status.sold': 'Private Collection',
    'gallery.action.wall': 'View on your wall',
    'gallery.action.detail': 'Detail & Zoom',
    'gallery.action.whatsapp': 'Inquire via WhatsApp',
    'gallery.placeholderBadge': 'Preliminary placeholder artwork',

    // Meditation & Angels section
    'angels.kicker': 'Serene Universe',
    'angels.title': 'Meditation & Angels',
    'angels.subtitle': 'A luminous, ethereal sanctuary. Abstract paintings born of contemplative stillness, where warm alabasters, soft lavender glazes, and gold leaf whisper peace.',
    'angels.quote': '“In the stillness of meditation, light ceases to be an external phenomenon and becomes an inner sanctuary.”',

    // Format section
    'format.kicker': 'Scale & Presence',
    'format.title': 'The reference format: 61 × 91 cm',
    'format.desc': 'A vertical proportion deliberately chosen to honor human scale. At 61 cm wide and 91 cm high (approx. 24 × 36 in), each canvas commands its natural place in contemporary living rooms, creative studios, or contemplative meditation corners.',
    'format.spec1': 'Vertical 2:3 proportion',
    'format.spec2': 'Medium-grain Belgian linen',
    'format.spec3': 'Kiln-dried pine stretcher bars',
    'format.spec4': 'Ready to hang or custom-frame',

    // About section
    'about.kicker': 'The Artist Behind the Canvas',
    'about.title': 'From medical precision to the freedom of the canvas',
    'about.name': '[TO COMPLETE: Artist Name]',
    'about.subtitle': 'Entrepreneur, dental surgeon by profession, and fine artist trained in Peru.',
    'about.p1': 'For years, my daily life was shaped by clinical rigor, millimeter concentration, and compassionate human care within dentistry and clinic management. Yet within my hands, an essential yearning always lived: the need to explore color, form, and the sacred mystery of space.',
    'about.p2': 'I studied fine arts in Peru [institution and years: TO COMPLETE], where I uncovered the expressive power of pigments and classical draftsmanship. Over time, my personal meditation practice seamlessly bonded with my painting. On the vertical 61 × 91 cm canvas, surgical precision transformed into harmonious geometry.',
    'about.p3': 'Painting vortices and sacred geometries is an act of deep listening. Each spiral stroke and delicate gold leaf flake represents a return to center: the quiet place where agitation ceases and profound peace takes hold.',
    'about.timeline.title': 'Milestones & Trajectory [Draft to confirm]',
    'about.timeline.1.year': '[YEAR]',
    'about.timeline.1.text': 'Fine Arts Studies in Peru [TO COMPLETE]',
    'about.timeline.2.year': '[YEAR]',
    'about.timeline.2.text': 'Founding dental clinics and entrepreneurial consolidation',
    'about.timeline.3.year': '[YEAR]',
    'about.timeline.3.text': 'Inception of the Vortex Art and Sacred Geometry painting series',
    'about.timeline.4.year': '[RECENT]',
    'about.timeline.4.text': 'Over 15 guided meditation group sessions across Barcelona, Paris, Italy, and France [confirm cities]',

    // Meditations section
    'meditations.kicker': 'Group Gatherings',
    'meditations.title': 'Meditation & Presence Sessions',
    'meditations.subtitle': 'Shared spaces to breathe, quiet the mind, and connect with stillness surrounded by art.',
    'meditations.desc': 'I have had the honor of guiding more than 15 group meditation sessions in cities including Barcelona, Paris, and locations across Italy and France [confirm exact numbers and cities]. This is not a medical therapy nor a miracle cure, but an authentic, warm invitation to slow down, close one’s eyes, and dwell in the present moment.',
    'meditations.formTitle': 'Notify me of upcoming gatherings',
    'meditations.formDesc': 'Leave your email and city to be notified when I host a meditation session or art exhibition near you.',
    'meditations.formCity': 'Your city',
    'meditations.formEmail': 'Your email address',
    'meditations.formBtn': 'Receive notices',
    'meditations.formSuccess': 'Thank you! I will notify you well ahead of the next gathering in your area.',

    // Trust & Purchase
    'trust.kicker': 'Acquisition & Trust',
    'trust.title': 'How an artwork reaches your space',
    'trust.cert.title': 'Certificate of Authenticity',
    'trust.cert.desc': 'Every painting includes an original physical certificate, numbered, dated, and personally hand-signed by the artist.',
    'trust.pack.title': 'Museum-Grade Packaging',
    'trust.pack.desc': 'Multi-layer moisture barrier, reinforced corner guards, and custom wooden or rigid crate tailored for fine art.',
    'trust.ship.title': 'Fully Insured Global Transit',
    'trust.ship.desc': 'National and international couriers with full transit insurance and door-to-door tracking.',
    'trust.comm.title': 'Commissioned Works',
    'trust.comm.desc': 'Bespoke commissions available in 61 × 91 cm or custom dimensions harmonized to your interior architecture.',

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
    'contact.form.success': 'Message sent. I will personally respond to you shortly.',
    'contact.newsletter': 'Artwork alerts: notify me when new paintings are unveiled.',

    // Wall Simulator Modal
    'wall.modalTitle': 'Scale-on-Wall Simulator (61 × 91 cm)',
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
    'wall.scaleNotice': 'True scale calculated at exact 61 × 91 cm proportion against a standard 2.60 m ceiling height.',
    'wall.inquireThis': 'Inquire about this artwork for my space',

    // Artwork Detail Modal
    'detail.loupeBtn': 'Texture Loupe (2.5×)',
    'detail.metaDimensions': 'Dimensions',
    'detail.metaTechnique': 'Technique',
    'detail.metaYear': 'Year',
    'detail.metaStatus': 'Availability',
    'detail.inquireWhatsapp': 'Inquire about this piece on WhatsApp',

    // Footer
    'footer.disclaimer': 'Honest disclaimer: The paintings, contemplations, and meditation sessions presented here are personal artistic and spiritual expressions. They do not constitute medical or psychological treatment, nor any healthcare product.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy & Terms',
    'footer.contactArtist': 'Contact the Artist'
  },
  fr: {
    // Nav French preview
    'nav.home': 'Accueil',
    'nav.vortex': 'Art Vortex',
    'nav.geometry': 'Géométrie Sacrée',
    'nav.meditation': 'Méditation & Anges',
    'nav.about': 'À propos',
    'nav.sessions': 'Méditations',
    'nav.contact': 'Contact',
    'nav.inquire': 'Demander une œuvre',
    'hero.badge': 'Collection Originale · Peintures 61 × 91 cm',
    'hero.title': 'Un art qui transforme la perception d’un espace.',
    'hero.subtitle': 'Explorez l’univers des vortex, de la géométrie sacrée et de l’art créé pour inspirer harmonie, contemplation et connexion.',
    'hero.cta.explore': 'Explorer les œuvres',
    'hero.cta.discover': 'Découvrir les vortex',
    'hero.scroll': 'Défiler pour contempler',
    'gallery.title': 'Peintures Originales (61 × 91 cm)',
    'gallery.filter.all': 'Toutes les œuvres',
    'gallery.filter.vortex': 'Art Vortex',
    'gallery.filter.geometry': 'Géométrie Sacrée',
    'gallery.filter.angels': 'Méditation & Anges',
    'footer.disclaimer': 'Les œuvres et séances de méditation sont des propositions artistiques et spirituelles personnelles, et non des soins médicaux.',
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
