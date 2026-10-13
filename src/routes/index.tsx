import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, SectionHeading, AltBlock } from "@/components/sections";
import { CTA } from "@/components/CTA";
import { SITE } from "@/data/site";
import { Sparkles, Shield, Sun, Droplets, Droplet, Wrench } from "lucide-react";
import heroSuv from "@/assets/hero-suv.jpg.asset.json";
import ppfProteccion from "@/assets/ppf-proteccion.jpg.asset.json";
import lexusCeramico from "@/assets/lexus-ceramico.jpg.asset.json";
import polarizadoImg from "@/assets/polarizado.jpg.asset.json";
import mantenimientoFoam from "@/assets/mantenimiento-foam.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `​ | Detallado y Polarizado de Autos en ${SITE.ciudad}` },
      { name: "description", content: `Detallado premium en ${SITE.ciudad}: corrección de pintura, recubrimiento cerámico, limpieza interior, polarizado y película protectora de pintura.` },
      { property: "og:title", content: `​ | Detallado y Polarizado de Autos en ${SITE.ciudad}` },
      { property: "og:description", content: `Detallado premium en ${SITE.ciudad}.` },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Shield, name: "Tratamientos Cerámicos", desc: "Es una capa protectora con brillo tipo espejo e hidrofobia que repele el agua, suciedad y rayos UV. Facilita el lavado y mantiene el carro limpio por mas tiempo.", to: "/recubrimiento-ceramico" },
  { icon: Sparkles, name: "PPF – Protección de Pintura", desc: "La máxima protección que existe para tu pintura o partes delicadas. Pelicula de poliuretano autoregenerativa contra rayones e impactos.", to: "/ppf" },
  { icon: Sun, name: "Polarizado", desc: "Bloquea el sol, reduce el calor y gana privacidad. Has que tu carro luzca mucho mejor. ", to: "/polarizado-de-ventanas" },
  { icon: Droplet, name: "Detallado de Mantenimiento (Lavado)", desc: "Lavado premium con productos de alta calidad para un acabado impecable.", to: "/pulido-especializado" },
  { icon: Droplets, name: "Detallado Interior", desc: "Devuélvele la vida al interior y la tapicería de tu auto.", to: "/limpieza-interior-completa" },
  { icon: Wrench, name: "Lavado de Motor", desc: "Limpieza profunda y segura del compartimiento del motor.", to: "/limpieza-de-motor" },
];

function Home() {
  return (
    <Layout>
      <Hero
        title="Expertos en Tratamientos Ceramicos y PPF en Costa Rica"
        subtitle={"\nLo cuidamos como si fuera nuestro."}
        bg={heroSuv.url}
      >
        <CTA to="/contacto" variant="red">Pedir cotización</CTA>
        <CTA to="/areas-de-servicio" variant="blue">Ver servicios</CTA>
      </Hero>

      <Section bg="lavender">
        <SectionHeading title="Nuestros Servicios Premium" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc, to }) => (
            <div key={name} className="bg-card-gray rounded-lg p-6 flex flex-col">
              <Icon className="w-10 h-10 text-brand-red mb-3" />
              <h3 className="font-display text-xl font-bold mb-2">{name}</h3>
              <p className="text-sm text-gray-700 flex-1">{desc}</p>
              <CTA to={to} variant="orange" className="mt-4 self-start">Más información</CTA>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="space-y-16 md:space-y-20">
          <AltBlock
            title="Tratamientos Cerámicos"
            text="Capa protectora con brillo tipo espejo e hidrofobia que repele agua, suciedad y rayos UV."
            image={lexusCeramico.url}
            cta={<CTA to="/recubrimiento-ceramico" variant="orange">Más información</CTA>}
          />
          <AltBlock
            reverse
            title="PPF – Protección de Pintura"
            text="La máxima protección que existe para tu pintura: uretano autorreparable contra astillas, rayones e impactos."
            image={ppfProteccion.url}
            cta={<CTA to="/ppf" variant="orange">Más información</CTA>}
          />
          <AltBlock
            title="Polarizado"
            text="Películas cerámicas premium con garantía de por vida. Bloquea rayos UV, reduce el calor y suma privacidad."
            image={polarizadoImg.url}
            cta={<CTA to="/polarizado-de-ventanas" variant="orange">Más información</CTA>}
          />
          <AltBlock
            reverse
            title="Detallado de Mantenimiento (Lavado)"
            text="Lavado premium con productos de alta calidad para un acabado impecable."
            image={mantenimientoFoam.url}
            cta={<CTA to="/pulido-especializado" variant="orange">Más información</CTA>}
          />
          <AltBlock
            title="Detallado Interior"
            text="Interiores como nuevos: extracción de manchas, vapor, remoción de pelo de mascota y acondicionamiento."
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
            cta={<CTA to="/limpieza-interior-completa" variant="orange">Más información</CTA>}
          />
        </div>
      </Section>


      <Section bg="white">
        <SectionHeading title={`${SITE.numResenas} Reseñas de 5 Estrellas`} />
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-brand-orange-accent">★★★★★</div>
              <p className="mt-3 text-sm">"​ dejó mi auto impecable. Atención al detalle excepcional y trato profesional."</p>
              <div className="mt-3 font-bold">— Cliente {i}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTA to="/resenas" variant="red">Ver todas las reseñas</CTA>
        </div>
      </Section>

      <Section bg="gray">
        <SectionHeading title="Nuestro Trabajo" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded group relative">
              <img loading="lazy" src={`https://images.unsplash.com/photo-${["1605559424843-9e4c228bf1c2", "1492144534655-ae79c964c9d7", "1552519507-da3b142c6e3d", "1583121274602-3e2820c69888", "1542362567-b07e54358753", "1503376780353-7e6692767b70", "1606577924006-27d39b132ae2", "1525498128493-380d1990a112"][i]}?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Trabajo ${i + 1}`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-700" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTA to="/resultados" variant="blue">Ver galería completa</CTA>
        </div>
      </Section>

      <section className="bg-brand-red text-white py-16">
        <div className="container-glanz text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">¿Listo para que tu auto luzca espectacular?</h2>
          <div className="mt-6">
            <CTA href="/contacto" variant="outline">Pedir cotización</CTA>
          </div>
        </div>
      </section>
    </Layout>
  );
}
