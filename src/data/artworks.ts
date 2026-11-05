import { Artwork } from '../types/artwork';
import vortex01OceanoOro from '../../content/obras/vortex-01-oceano-oro.json';
import vortex02ResonanciaCobre from '../../content/obras/vortex-02-resonancia-cobre.json';
import vortex03RadiacionCarmesi from '../../content/obras/vortex-03-radiacion-carmesi.json';
import vortex04PulsoUltramarino from '../../content/obras/vortex-04-pulso-ultramarino.json';
import geometria01EspiralAurea from '../../content/obras/geometria-01-espiral-aurea.json';
import geometria02GenesisCosmica from '../../content/obras/geometria-02-genesis-cosmica.json';
import patron01VorticesFluviales from '../../content/obras/patron-01-vortices-fluviales.json';
import patron02RitmoDelViento from '../../content/obras/patron-02-ritmo-del-viento.json';
import patron03ResonanciaMarina from '../../content/obras/patron-03-resonancia-marina.json';
import conexion01SerenidadCeleste from '../../content/obras/conexion-01-serenidad-celeste.json';
import conexion02VioletaContemplacion from '../../content/obras/conexion-02-violeta-contemplacion.json';
import conexion03AuroraDeLuz from '../../content/obras/conexion-03-aurora-de-luz.json';
import especial01RelieveCobreOro from '../../content/obras/especial-01-relieve-cobre-oro.json';

// Image 12 is vortex01OceanoOro - set as cover and primary artwork [0]
export const artworksData: Artwork[] = [
  vortex01OceanoOro as Artwork,
  vortex02ResonanciaCobre as Artwork,
  vortex03RadiacionCarmesi as Artwork,
  vortex04PulsoUltramarino as Artwork,
  geometria01EspiralAurea as Artwork,
  geometria02GenesisCosmica as Artwork,
  patron01VorticesFluviales as Artwork,
  patron02RitmoDelViento as Artwork,
  patron03ResonanciaMarina as Artwork,
  conexion01SerenidadCeleste as Artwork,
  conexion02VioletaContemplacion as Artwork,
  conexion03AuroraDeLuz as Artwork,
  especial01RelieveCobreOro as Artwork,
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworksData.find((art) => art.slug === slug);
};

export const getArtworksByCollection = (collection: string): Artwork[] => {
  if (collection === 'all') return artworksData;
  return artworksData.filter((art) => art.coleccion === collection);
};
