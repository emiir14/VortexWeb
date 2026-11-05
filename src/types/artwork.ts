export type CollectionType =
  | 'vortices'
  | 'geometria-sagrada'
  | 'patrones-naturales'
  | 'conexion-angelical'
  | 'colecciones-especiales';

export type ArtworkStatus = 'disponible' | 'reservada' | 'vendida';

export interface Artwork {
  slug: string;
  titulo: {
    es: string;
    en: string;
    [key: string]: string;
  };
  coleccion: CollectionType;
  medidas: string;
  tecnica: string;
  tecnica_en: string;
  ano: number;
  estado: ArtworkStatus;
  precio?: string;
  descripcion?: {
    es: string;
    en: string;
    [key: string]: string;
  };
  frase?: {
    es: string;
    en: string;
    [key: string]: string;
  };
  imagenPrincipal: string;
  imagenesDetalle: string[];
  imagenAmbiente?: string;
  alt: {
    es: string;
    en: string;
    [key: string]: string;
  };
  isPlaceholder: boolean;
  placeholderNote?: string;
}
