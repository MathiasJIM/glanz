export type ServiceCategory = "exterior" | "interior" | "pelicula";

export interface ServiceData {
  slug: string;
  category: ServiceCategory;
  name: string;
  shortName?: string;
  h1: string;
  subtitle: string;
  summary: string;
  whyChoose: string;
  benefits: string[];
  process: { title: string; description: string }[];
  packages?: { name: string; price: string; features: string[]; highlight?: boolean; color?: string }[];
  faqs?: { q: string; a: string }[];
}

const ciudad = "[GLANZ_CIUDAD]";

export const SERVICES: ServiceData[] = [
  // EXTERIOR
  {
    slug: "recubrimiento-ceramico",
    category: "exterior",
    name: "Tratamientos Cerámicos",
    h1: "Tratamientos Cerámicos de alto desempeño",
    subtitle: "Proteja su carro con nuestros servicios de recubrimiento cerámico de primera calidad. Diseñados para realzar su apariencia y brindar una protección duradera, los recubrimientos cerámicos son la solución ideal para que su carro se vea siempre como nuevo.",
    summary:
      "Un recubrimiento cerámico crea una capa semipermanente sobre la pintura que repele agua, contaminantes y rayos UV durante años.",
    whyChoose:
      "Usamos cerámicos de grado profesional con certificación de la marca GTECHNIQ. Se realiza una aplicacion correcta siguiendo los pasos del fabricante.",
    benefits: [
      "Protección de 2 a 9 años según producto",
      "Hidrofobicidad extrema (el agua se desliza)",
      "Protección UV contra oxidación",
      "Brillo profundo y resistente a contaminantes",
      "Lavados más fáciles y rápidos.\n\n\n\n",
    ],
    process: [
      { title: "Lavado descontaminante", description: "Eliminamos toda la suciedad y contaminantes superficiales." },
      { title: "Corrección de pintura", description: "Pulimos para que el cerámico se adhiera a una superficie limpia y con la menor cantidad de imperfecciones. " },
      { title: "Preparación de la superficie", description: "Eliminamos residuos para máxima adherencia del tratamiento." },
      { title: "Aplicación y curado", description: "Aplicamos en paneles y dejamos curar al menos 12 horas." },
    ],
    packages: [
      { name: "CERÁMICO 2 AÑOS", price: "$270", features: ["Recubrimiento cerámico con protección de hasta 2 años, que incluye una pulida de un paso 3 en 1. Protege la pintura, intensifica el brillo y facilita el mantenimiento de lavado del carro. Ideal para dar el primer paso en protección cerámica.", "\n", "\n"], color: "purple" },
      { name: "CERÁMICO 5 AÑOS", price: "$650", features: ["Protección cerámica premium de hasta 5 años con pulida completa profesional. Acabado espejo, máxima dureza y defensa total contra el sol, las lluvias y la humedad de Costa Rica. La lluvia y la suciedad resbalan solas, tu carro brilla como nuevo y se lava más fácil. La mejor inversión para mantener tu pintura impecable por años. 🎁 Incluye GRATIS protección PPF en fondos o filos de puertas — un extra de hasta $65 sin costo, para blindar las zonas de mayor desgaste.", "CERÁMICO 5 AÑOS", "Llantas, rines y vidrios"], highlight: true, color: "red" },
      { name: "CERÁMICO 3 AÑOS", price: "$450", features: ["Protección cerámica de hasta 3 años. Incluye pulida completa para dejar la pintura impecable antes de sellarla. Brillo intenso tipo espejo, efecto repelente al agua que hace que la lluvia y la suciedad resbalen solas, y defensa duradera contra el sol y las lluvias de Costa Rica.", "\n", "\n"], color: "blue" },
    ],
  },
  {
    slug: "correccion-de-pintura",
    category: "exterior",
    name: "Corrección de Pintura",
    h1: `Especialistas en Corrección de Pintura en ${ciudad} — Elimina los Remolinos`,
    subtitle: `Recupera el brillo y la claridad de tu vehículo. Eliminamos remolinos y rayones. Servicio en toda el área de ${ciudad}.`,
    summary:
      "La corrección de pintura es un proceso multietapa que elimina remolinos, rayones ligeros y oxidación de la capa transparente, devolviendo a tu pintura su brillo original de fábrica.",
    whyChoose:
      "Nuestro equipo usa pulidoras de órbita doble, compuestos profesionales y pads específicos para cada nivel de defecto. Trabajamos por paneles bajo iluminación específica para garantizar resultados consistentes y duraderos.",
    benefits: [
      "Elimina remolinos y rayones superficiales",
      "Recupera el brillo y profundidad del color",
      "Prepara la superficie para recubrimiento cerámico o PPF",
      "Aumenta el valor de reventa del vehículo",
      "Resultados duraderos con técnicos certificados",
    ],
    process: [
      { title: "Lavado de descontaminación", description: "Lavado a fondo con técnica de dos baldes y barra de arcilla." },
      { title: "Inspección con luz", description: "Identificamos defectos bajo lámparas LED de inspección." },
      { title: "Corrección por etapas", description: "Aplicamos compuesto y pulimento según el nivel del defecto." },
      { title: "Sellado y protección", description: "Sellador o recubrimiento para mantener los resultados." },
    ],
    packages: [
      { name: "Corrección Nivel 1", price: "$270", features: ["Pulido en una etapa", "Elimina remolinos ligeros", "Sellador incluido"], color: "purple" },
      { name: "Corrección Nivel 2", price: "$650", features: ["Pulido en dos etapas", "Elimina rayones moderados", "Sellador de larga duración"], highlight: true, color: "red" },
      { name: "Corrección Nivel 3", price: "$450", features: ["Corrección completa multietapa", "Elimina defectos profundos", "Listo para cerámico"], color: "blue" },
    ],
    faqs: [
      { q: "¿Cuánto dura una corrección de pintura?", a: "Dependiendo del nivel, entre 1 y 3 días de trabajo." },
      { q: "¿Es permanente?", a: "Sí, los defectos se remueven físicamente. Para mantener el resultado recomendamos cerámico o PPF." },
    ],
  },
  {
    slug: "lavado-premium",
    category: "exterior",
    name: "Pulido de Vidrios",
    h1: `Lavado Premium en tu Ubicación — ${ciudad}`,
    subtitle: `Un lavado premium en ${ciudad}. Sin remolinos, sin manchas de agua, sin escurrimientos. Solo un vehículo limpio y brillante hecho en tu ubicación.`,
    summary: "Te visitamos en tu casa u oficina con todo el equipo profesional para realizar un lavado de calidad de detallado.",
    whyChoose: "Llevamos agua, electricidad y todos los productos. Tú solo disfrutas el resultado.",
    benefits: ["Sin remolinos", "Sin manchas de agua", "Técnicas profesionales", "Conveniencia a domicilio"],
    process: [
      { title: "Llegamos a ti", description: "En tu casa, oficina o donde estés." },
      { title: "Prelavado y lavado", description: "Espuma activa + lavado a mano con dos baldes." },
      { title: "Secado seguro", description: "Microfibra premium sin manchas de agua." },
      { title: "Detalles finales", description: "Llantas, rines y vidrios incluidos." },
    ],
    packages: [
      { name: "Express", price: "$270", features: ["Lavado exterior", "Llantas y rines", "Vidrios"], color: "purple" },
      { name: "Premium", price: "$650", features: ["Todo lo de Express", "Cera spray", "Aspirado interior"], highlight: true, color: "red" },
      { name: "Deluxe", price: "$450", features: ["Todo lo de Premium", "Cera de carnauba", "Limpieza interior básica"], color: "blue" },
    ],
  },
  {
    slug: "pulido-especializado",
    category: "exterior",
    name: "Detallado de Mantenimiento (Lavado)",
    h1: "Detallado de Mantenimiento\n",
    subtitle: "Mantener tu vehiculo impecable con nuestro lavado profesional de detallado. Limpieza profunda por dentro y por fuera, con productos premium y tecnicas que cuidan su inversion.",
    summary: "Es nuestro lavado profesional pensado para conservar su carro siempre limpio y protegido. A diferencia de un lavado común, trabajamos con espumas activas, tecnicas de dos baldes y procesos seguros para no rayar la pintura, dejando un acabado brillante y libre de toda suciedad.",
    whyChoose: "Mas que un lavado, es el cuidado constante que tu inversión se merece. Equipo capacitado y cerificado, productos de marcas profesionales y antencion al detalle en cada rincon del vehiculo.",
    benefits: ["Pulido de cromo", "Acero inoxidable", "Restauración de aluminio", "Molduras a medida", "Acentos interiores"],
    process: [
      { title: "Diagnóstico", description: "Evaluamos cada pieza." },
      { title: "Limpieza profunda", description: "Removemos óxido y contaminantes." },
      { title: "Pulido por etapas", description: "Compuestos específicos para cada metal." },
      { title: "Protección final", description: "Sellador para mantener el brillo." },
    ],
  },
  {
    slug: "limpieza-de-motor",
    category: "exterior",
    name: "Limpieza de Motor",
    h1: `Detallado de Motor Profundo en ${ciudad} — Servicio Móvil Glanz`,
    subtitle: "Limpieza y acondicionamiento del compartimento de motor, realizado en tu casa o trabajo.",
    summary: "Limpieza profunda del compartimento del motor con productos seguros para componentes eléctricos y plásticos.",
    whyChoose: "Protegemos componentes eléctricos antes de iniciar. Usamos desengrasantes seguros y acondicionadores específicos.",
    benefits: ["Motor visualmente impecable", "Detecta fugas antes ocultas", "Productos seguros", "Acondicionador final"],
    process: [
      { title: "Protección eléctrica", description: "Cubrimos componentes sensibles." },
      { title: "Desengrasado", description: "Producto seguro y biodegradable." },
      { title: "Cepillado y enjuague", description: "Limpieza detallada de cada componente." },
      { title: "Acondicionador", description: "Devolvemos color a plásticos y mangueras." },
    ],
  },

  // INTERIOR
  {
    slug: "limpieza-interior-completa",
    category: "interior",
    name: "Detallado Interior",
    h1: `Los Mejores Detalladores de Interiores en ${ciudad} — Glanz`,
    subtitle: "¿Tienes pelo de mascota, bebidas derramadas o comida seca en tu auto? ¡No te preocupes, nos encanta limpiar ese tipo de interiores!",
    summary: "Limpieza profunda de todo el interior: alfombras, asientos, techo, plásticos, vidrios y áreas de difícil acceso.",
    whyChoose: "Usamos extractoras de inyección, vaporeta y productos profesionales para devolver tu interior a estado de fábrica.",
    benefits: ["Extracción profunda de manchas", "Remoción de pelo de mascota", "Vaporeta para desinfección", "Acondicionamiento de piel y plásticos", "Interior fresco y nuevo"],
    process: [
      { title: "Aspirado completo", description: "Incluyendo bajo asientos y áreas de difícil acceso." },
      { title: "Pretratamiento de manchas", description: "Productos específicos según tipo de mancha." },
      { title: "Extracción y vapor", description: "Limpieza profunda de telas y alfombras." },
      { title: "Acondicionamiento", description: "Pieles, plásticos y vidrios terminados." },
    ],
    packages: [
      { name: "Básico", price: "$270", features: ["Aspirado", "Limpieza de superficies", "Vidrios"], color: "purple" },
      { name: "Completo", price: "$650", features: ["Todo lo básico", "Extracción de alfombras", "Acondicionador"], highlight: true, color: "red" },
      { name: "Premium", price: "$450", features: ["Todo lo completo", "Limpieza de techo", "Vaporeta"], color: "blue" },
      { name: "Deluxe", price: "$450", features: ["Todo Premium", "Tratamiento de piel", "Remoción de olores"], color: "green" },
    ],
  },
  {
    slug: "remocion-de-olores",
    category: "interior",
    name: "Eliminacion de Olores",
    h1: `Eliminacion de Olores de Autos en ${ciudad}`,
    subtitle: "Eliminamos olores a mascotas, comida, humedad y más.",
    summary: "Identificamos y eliminamos el origen del olor con limpieza profunda y tratamientos enzimáticos o de ozono.",
    whyChoose: "No solo enmascaramos: eliminamos el origen del olor para resultados duraderos.",
    benefits: ["Mascotas", "Comida", "Humedad", "Productos químicos"],
    process: [
      { title: "Inspección", description: "Localizamos focos del olor." },
      { title: "Limpieza profunda", description: "Vaporeta y extracción." },
      { title: "Tratamiento enzimático", description: "Descompone moléculas orgánicas." },
      { title: "Ozono o ionización", description: "Oxida olores remanentes." },
    ],
  },

  // PELICULA
  {
    slug: "polarizado-de-ventanas",
    category: "pelicula",
    name: "Polarizado",
    h1: `Polarizado Premium en ${ciudad}`,
    subtitle: "Bloquea el sol y mantente fresco durante el verano.",
    summary: "Películas de polarizado de la más alta calidad para reducir calor, bloquear UV y aumentar privacidad.",
    whyChoose: "Instaladores certificados con películas con garantía de por vida.",
    benefits: ["Protección UV hasta 99%", "Reducción de calor", "Mayor privacidad", "Reduce deslumbramiento", "Garantía de por vida"],
    process: [
      { title: "Limpieza profunda", description: "Cabina libre de polvo." },
      { title: "Corte preciso", description: "Patrón computarizado por modelo." },
      { title: "Instalación", description: "Sin burbujas ni distorsiones." },
      { title: "Curado", description: "Indicaciones de cuidado los primeros días." },
    ],
    packages: [
      { name: "Estándar", price: "$270", features: ["Película teñida", "Garantía 5 años"], color: "blue" },
      { name: "Carbón", price: "$650", features: ["Película de carbón", "Mejor estética", "Garantía 10 años"], color: "blue" },
      { name: "Cerámica", price: "$450", features: ["Bloqueo de calor superior", "Sin interferencia electrónica", "Garantía de por vida"], highlight: true, color: "blue" },
      { name: "Cerámica IR", price: "$450", features: ["Máximo rechazo IR", "Calidad concurso", "Garantía de por vida"], color: "blue" },
    ],
  },
  {
    slug: "ppf",
    category: "pelicula",
    name: "PPF-Proteccion de Pintura",
    h1: `Mejores Especialistas en PPF en ${ciudad}`,
    subtitle: `¿Necesitas un instalador profesional de PPF en ${ciudad}? La película protectora es la mejor opción de protección a largo plazo (autorreparable y de alto brillo).`,
    summary: "PPF de uretano autorreparable que protege la pintura de astillas, rayones y químicos por años.",
    whyChoose: "Instaladores certificados con películas de marcas líderes y garantía del fabricante.",
    benefits: ["Autorreparable con calor", "Resistente a astillas y rayones", "Brillo intenso", "Garantía 10 años", "Removible sin dañar"],
    process: [
      { title: "Lavado y descontaminación", description: "Superficie 100% limpia." },
      { title: "Corte computarizado", description: "Patrón exacto por modelo." },
      { title: "Aplicación", description: "Sin burbujas ni bordes visibles." },
      { title: "Curado", description: "Recomendaciones de cuidado." },
    ],
    packages: [
      { name: "Paquete Frontal", price: "$270", features: ["Defensa", "Cofre parcial", "Espejos"], color: "blue" },
      { name: "Frente Completo", price: "$650", features: ["Defensa", "Cofre completo", "Salpicaderas", "Espejos"], highlight: true, color: "blue" },
      { name: "Cobertura Total", price: "$450", features: ["Todo el vehículo", "Máxima protección"], color: "blue" },
    ],
  },
  {
    slug: "polarizado-rv",
    category: "pelicula",
    name: "Polarizado de RV",
    h1: `Instaladores de Polarizado para RV en ${ciudad}`,
    subtitle: `Polariza tu RV en ${ciudad} para más privacidad y mantén el interior fresco en tu próximo viaje. ¡Llama para una cotización!`,
    summary: "Polarizado para casas rodantes y motorhomes con película específica para grandes superficies.",
    whyChoose: "Experiencia en RVs y películas de alta calidad para uso recreativo.",
    benefits: ["Privacidad interior", "Reducción de calor", "Protección UV", "Mejor estética"],
    process: [
      { title: "Cotización", description: "Medimos y cotizamos." },
      { title: "Preparación", description: "Limpieza de cristales." },
      { title: "Instalación", description: "Película de gran formato." },
      { title: "Curado", description: "Indicaciones finales." },
    ],
  },

];

export const SERVICES_BY_CATEGORY = {
  exterior: SERVICES.filter((s) => s.category === "exterior"),
  interior: SERVICES.filter((s) => s.category === "interior"),
  pelicula: SERVICES.filter((s) => s.category === "pelicula"),
};

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
