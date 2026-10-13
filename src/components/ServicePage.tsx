import { CTA } from "./CTA";
import { Hero, Section, SectionHeading, AltBlock } from "./sections";
import { Check, X, Sparkles } from "lucide-react";
import type { ServiceData } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ceramicoHero from "@/assets/ceramico-hero.jpg";
import serviceAlt from "@/assets/service-alt-2.jpg";
import miataPpfHero from "@/assets/miata-ppf-hero.jpg";
import ppfResumen from "@/assets/ppf-resumen.jpg";
import mantenimientoCeramico from "@/assets/mantenimiento-ceramico.png";
import brilloLavadoMantenimiento from "@/assets/brillo-lavado-mantenimiento.jpg";
import interiorIcon from "@/assets/interior-icon.png";
import exteriorIcon from "@/assets/car-icon.png";

const DEFAULT_HERO_IMG = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=80";
const ALT_IMG = serviceAlt;

const HERO_OVERRIDES: Record<string, string> = {
  "recubrimiento-ceramico": ceramicoHero,
  "ppf": miataPpfHero,
  "pulido-especializado": mantenimientoCeramico,
};

const ALT_OVERRIDES: Record<string, string> = {
  "ppf": ppfResumen,
  "pulido-especializado": brilloLavadoMantenimiento,
};

const pkgBorder: Record<string, string> = {
  purple: "border-purple-500",
  red: "border-brand-red",
  blue: "border-brand-red",
  green: "border-brand-green",
  orange: "border-brand-orange",
  pink: "border-pink-500",
};

export function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      <Hero title={service.h1} subtitle={service.subtitle} bg={HERO_OVERRIDES[service.slug] ?? DEFAULT_HERO_IMG}>
        <CTA to="/contacto" variant="red">{service.slug === "pulido-especializado" ? "Agendar mi lavado" : "Comenzar"}</CTA>
        <CTA href={service.slug === "pulido-especializado" ? "#que-incluye" : "/contacto"} variant="blue">{service.slug === "pulido-especializado" ? "Que incluye?" : "Más información"}</CTA>
      </Hero>

      <Section bg="white">
        <AltBlock
          title={service.slug === "pulido-especializado" ? "Que es el Detallado de Mantenimiento?" : `${service.name}: Resumen del Servicio`}
          text={service.summary}
          image={ALT_OVERRIDES[service.slug] ?? ALT_IMG}
          cta={<CTA to="/contacto" variant="red">Más información</CTA>}
        />
      </Section>

      {service.slug === "pulido-especializado" && (
        <div id="que-incluye">
          <Section bg="lavender">
            <SectionHeading title="¿Qué incluye?" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-6 shrink-0"
                    style={{
                      backgroundColor: "#F76603",
                      maskImage: `url(${exteriorIcon})`,
                      WebkitMaskImage: `url(${exteriorIcon})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                  <h3 className="font-display text-xl font-bold text-text-main">Exterior</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Prelavado con espuma</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Lavado con espuma a dos baldes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Limpieza de aros y llantas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Secado con microfibra premium y aire para evitar rayones</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Aplicación de sellador de hasta 22 días de duración</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-6 shrink-0"
                    style={{
                      backgroundColor: "#F76603",
                      maskImage: `url(${interiorIcon})`,
                      WebkitMaskImage: `url(${interiorIcon})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                  <h3 className="font-display text-xl font-bold text-text-main">Interior</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Aspirado completo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Limpieza de tablero, plásticos y vidrios</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Eliminación de polvo y residuos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-brand-red" />
                  <h3 className="font-display text-xl font-bold text-text-main">Acabado</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Brillo en superficies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Llantas renovadas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                    <span>Aroma fresco al finalizar</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      )}

      <Section bg="gray">
        <AltBlock
          title={service.slug === "pulido-especializado" ? "¿Por qué elegir nuestro Detallado de Mantenimiento?" : `¿Por qué elegir un Tratamientos Cerámico?`}
          text={service.whyChoose}
          image={ALT_IMG}
          reverse
          cta={<CTA to="/contacto" variant="red">Agendar servicio</CTA>}
        />
      </Section>

      {service.slug !== "pulido-especializado" && (
        <Section bg="lavender">
          <SectionHeading title="Beneficios" />
          <ul className="max-w-2xl mx-auto space-y-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base">
                <Check className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {service.packages && (
        <Section bg="white">
          <SectionHeading title="Paquetes y Precios" subtitle="Elige el nivel de servicio que mejor se adapte a tu vehículo." />
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {service.packages.map((p) => (
              <div
                key={p.name}
                className={`rounded-lg overflow-hidden shadow-lg border-t-4 ${pkgBorder[p.color || "blue"]} bg-white flex flex-col ${p.highlight ? "ring-2 ring-brand-red scale-[1.02]" : ""}`}
              >
                <div className="bg-white text-brand-red py-4 text-center font-display font-bold uppercase border-b border-gray-200">
                  {p.name}
                </div>
                <div className="p-6 text-center bg-white">
                  <div className="font-display text-3xl font-bold text-text-main">{p.price}</div>
                </div>
                <ul className="px-6 pb-6 space-y-2 text-center text-sm text-gray-700 flex-1">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <CTA to="/contacto" variant="green" className="w-full">Reservar ahora</CTA>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {service.slug !== "pulido-especializado" && (
        <Section bg="gray">
          <SectionHeading title="Nuestro Proceso" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section bg="white">
        <SectionHeading title="Resultados" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded group relative">
              <img
                src={`https://images.unsplash.com/photo-${["1605559424843-9e4c228bf1c2", "1492144534655-ae79c964c9d7", "1552519507-da3b142c6e3d", "1583121274602-3e2820c69888", "1542362567-b07e54358753", "1503376780353-7e6692767b70"][i - 1]}?auto=format&fit=crop&w=600&q=80`}
                alt={`Resultado ${i}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {service.faqs && service.faqs.length > 0 && (
        <Section bg="lavender">
          <SectionHeading title="Preguntas Frecuentes" />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      )}

      <Section bg="white">
        <SectionHeading title="Lo Que Dicen Nuestros Clientes" />
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="text-brand-orange-accent">★★★★★</div>
              <p className="mt-3 text-sm text-gray-700">"Excelente servicio, mi auto quedó como nuevo. Recomiendo ​ al 100%."</p>
              <div className="mt-4 font-bold">— Cliente Satisfecho</div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-red text-white py-16">
        <div className="container-glanz text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">¿Listo para tu {service.name}?</h2>
          <p className="mt-3 text-lg">Solicita tu cotización hoy mismo.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTA href="/contacto" variant="outline">Pedir cotización</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
