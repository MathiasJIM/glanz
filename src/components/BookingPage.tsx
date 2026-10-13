import { useState } from "react";
import { Hero, Section, SectionHeading } from "./sections";
import { CTA } from "./CTA";
import { SITE } from "@/data/site";
import { Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function BookingPage({
  title,
  service,
  whatIs,
  benefits,
  myths,
  faqs,
}: {
  title: string;
  service: string;
  whatIs: string;
  benefits: string[];
  myths: { mito: string; realidad: string }[];
  faqs: { q: string; a: string }[];
}) {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div className="container-glanz relative z-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span>🛡️ Protección</span><span>✨ Brillo</span><span>⭐ 5 Estrellas</span><span>💧 Hidrofóbico</span><span>⏱️ Profesional</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href={`tel:${SITE.telefono}`} variant="red"><Phone className="w-4 h-4 mr-2" /> LLAMA PARA SERVICIO MÁS RÁPIDO</CTA>
              <CTA to="/contacto" variant="blue">PEDIR COTIZACIÓN</CTA>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <Section bg="white">
        <SectionHeading title={`¿Qué es ${service}?`} />
        <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">{whatIs}</p>
      </Section>

      <Section bg="lavender">
        <SectionHeading title={`Los Beneficios de ${service}`} />
        <ul className="max-w-2xl mx-auto space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2"><span className="text-brand-red">✓</span><span>{b}</span></li>
          ))}
        </ul>
      </Section>

      <Section bg="white">
        <SectionHeading title={`Visita Nuestro Taller en ${SITE.ciudad}`} />
        <p className="text-center text-gray-700">{SITE.direccion} · {SITE.horario}</p>
      </Section>

      <Section bg="gray">
        <SectionHeading title={`Mitos Comunes sobre ${service}`} />
        <div className="grid md:grid-cols-3 gap-6">
          {myths.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="font-bold text-brand-red">Mito:</div>
              <p className="text-sm mb-3">{m.mito}</p>
              <div className="font-bold text-brand-green">Realidad:</div>
              <p className="text-sm">{m.realidad}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading title="Mira Nuestro Trabajo" />
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <img key={i} loading="lazy" src={`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80&sig=${i}`} alt="" className="aspect-square object-cover rounded" />
          ))}
        </div>
      </Section>

      <Section bg="lavender">
        <SectionHeading title={`Tus Expertos en ${service} en ${SITE.ciudad}`} />
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          En Glanz somos especialistas certificados con cientos de clientes satisfechos. Combinamos productos premium con técnicas profesionales para entregar resultados que duran.
        </p>
      </Section>

      <Section bg="white">
        <SectionHeading title={`Preguntas Frecuentes sobre ${service}`} />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted)
    return (
      <div className="bg-white text-text-main p-8 rounded-lg">
        <h3 className="font-display text-xl font-bold text-brand-green">¡Gracias!</h3>
        <p className="mt-2">Te contactaremos lo antes posible.</p>
      </div>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="bg-white text-text-main p-6 rounded-lg shadow-2xl space-y-3"
    >
      <h3 className="font-display text-xl font-bold">Pide tu cotización</h3>
      <div className="grid grid-cols-2 gap-3">
        <input required placeholder="Nombre *" className="border border-gray-300 rounded px-3 py-2 text-sm" />
        <input required placeholder="Apellido *" className="border border-gray-300 rounded px-3 py-2 text-sm" />
      </div>
      <input required type="tel" placeholder="Teléfono *" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
      <input required type="email" placeholder="Correo *" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
      <input required placeholder="Año, marca y modelo del vehículo *" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
      <button type="submit" className="btn-glanz bg-brand-red text-white hover:bg-black w-full">Enviar</button>
    </form>
  );
}
