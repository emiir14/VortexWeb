import { Artwork } from '../types/artwork';
import vortexPrimordial from '../../content/obras/vortex-primordial.json';
import geometriaSolCentral from '../../content/obras/geometria-sol-central.json';
import campoToroidal from '../../content/obras/campo-toroidal-resonancia.json';
import alasDeLuz from '../../content/obras/alas-de-luz.json';
import espiralAurora from '../../content/obras/espiral-aurora.json';
import serenidadCeleste from '../../content/obras/serenidad-celeste.json';

export const artworksData: Artwork[] = [
  vortexPrimordial as Artwork,
  geometriaSolCentral as Artwork,
  campoToroidal as Artwork,
  alasDeLuz as Artwork,
  espiralAurora as Artwork,
  serenidadCeleste as Artwork,
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworksData.find((art) => art.slug === slug);
};

export const getArtworksByCollection = (collection: string): Artwork[] => {
  if (collection === 'all') return artworksData;
  return artworksData.filter((art) => art.coleccion === collection);
};
