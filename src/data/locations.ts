export interface LocationData {
  slug: string;
  ciudad: string;
  h1?: string;
  subtitulo?: string;
}

export const LOCATIONS: LocationData[] = [
  { slug: "detallado-movil-glanz", ciudad: "[GLANZ_CIUDAD]" },
  { slug: "detallado-movil-cypress", ciudad: "[CIUDAD 2]" },
  { slug: "detallado-movil-conroe", ciudad: "[CIUDAD 3]" },
  { slug: "detallado-movil-katy", ciudad: "[CIUDAD 4]", subtitulo: "Contrata a un detallador móvil de confianza y experimentado en [CIUDAD 4] para tu RV, auto, camioneta o bote. Glanz tiene más de 100 reseñas en línea." },
  { slug: "detallado-movil-clear-lake", ciudad: "[CIUDAD 5]" },
  { slug: "detallado-movil-league-city", ciudad: "[CIUDAD 6]" },
  { slug: "detallado-movil-west-university", ciudad: "[CIUDAD 7]" },
  { slug: "detallado-movil-magnolia", ciudad: "[CIUDAD 8]" },
  { slug: "detallado-movil-tomball", ciudad: "[CIUDAD 9]" },
  { slug: "detallado-sugar-land", ciudad: "[CIUDAD 10]" },
  { slug: "detallado-movil-the-heights", ciudad: "[CIUDAD 11]" },
  { slug: "detallado-movil-the-woodlands", ciudad: "[CIUDAD 12]" },
  { slug: "detallado-spring", ciudad: "[CIUDAD 13]" },
  { slug: "detallado-auto-glanz", ciudad: "[GLANZ_CIUDAD]" },
  { slug: "detallado-cerca-de-mi", ciudad: "[GLANZ_CIUDAD]", h1: "Detallado de Autos Cerca de Mí" },
  { slug: "taller-de-detallado-glanz", ciudad: "[GLANZ_CIUDAD]", h1: "Taller de Detallado de Autos en [GLANZ_CIUDAD]" },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
