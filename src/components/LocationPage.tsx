import { Hero, Section, SectionHeading, AltBlock } from "./sections";
import { CTA } from "./CTA";
import { Check } from "lucide-react";
import { SITE } from "@/data/site";

export function LocationPage({ ciudad, h1, subtitulo }: { ciudad: string; h1?: string; subtitulo?: string }) {
  const title = h1 || `Detallado Móvil de Autos con 5 Estrellas en ${ciudad} — ​`;
  const sub =
    subtitulo ||
    `¿Necesitas servicio de detallado móvil en ${ciudad} para limpiar y detallar tu auto en tu casa o trabajo? ​ tiene más de ${SITE.numResenas} reseñas en línea.`;

  return (
    <>
      <Hero title={title} subtitle={sub}>
        <CTA to="/contacto" variant="red">Comenzar</CTA>
      </Hero>

      <Section bg="white">
        <AltBlock
          title={`Detallado Móvil en ${ciudad}`}
          text={`Llevamos el taller a tu casa, oficina o lugar de trabajo en ${ciudad}. Te ahorramos tiempo y entregamos resultados profesionales. Contamos con agua, electricidad y todo el equipo necesario.`}
          image="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1200&q=80"
          cta={<CTA to="/contacto" variant="red">Comenzar</CTA>}
        />
      </Section>

      <Section bg="gray">
        <SectionHeading title="Antes y Después" />
        <div className="grid md:grid-cols-2 gap-6">
          <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=800&q=80" alt="Antes" className="rounded w-full h-72 object-cover" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80" alt="Después" className="rounded w-full h-72 object-cover" loading="lazy" />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading title={`Servicios Disponibles en ${ciudad}`} />
        <ul className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Detallado Interior",
            "Detallado Exterior",
            "Corrección de Pintura",
            "Tratamientos Cerámicos",
            "Polarizado de Ventanas",
            "Película Protectora (PPF)",
            
            "Lavado Premium",
          ].map((s) => (
            <li key={s} className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-red" />{s}</li>
          ))}
        </ul>
      </Section>

      <Section bg="lavender">
        <SectionHeading title="Lo Que Dicen Nuestros Clientes" />
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="text-brand-orange-accent">★★★★★</div>
              <p className="mt-3 text-sm text-gray-700">"​ vino a mi casa en {ciudad} y mi auto quedó impecable. Servicio excelente."</p>
              <div className="mt-4 font-bold">— Cliente de {ciudad}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading title="Nuestro Trabajo" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded group relative">
              <img
                src={`https://images.unsplash.com/photo-${["1605559424843-9e4c228bf1c2", "1492144534655-ae79c964c9d7", "1552519507-da3b142c6e3d", "1583121274602-3e2820c69888", "1542362567-b07e54358753", "1503376780353-7e6692767b70", "1606577924006-27d39b132ae2", "1525498128493-380d1990a112"][i - 1]}?auto=format&fit=crop&w=600&q=80`}
                alt={`Trabajo ${i}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-blue-cta text-white py-16">
        <div className="container-glanz text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Reserva tu Detallado en {ciudad}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTA to="/contacto" variant="red">Pedir cotización</CTA>
            <CTA href={`tel:${SITE.telefono}`} variant="outline">Llamar ahora</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
