import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";
import { CTA } from "@/components/CTA";
import { SITE } from "@/data/site";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/reservar-con-angel")({
  head: () => ({ meta: [
    { title: "Reservar con un Asesor | Glanz" },
    { name: "description", content: "Agenda directamente con uno de nuestros asesores Glanz." },
  ]}),
  component: BookWithAdvisor,
});

function BookWithAdvisor() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <Hero title="Agenda directamente con un asesor Glanz" subtitle="Te llamamos en menos de 24 horas para coordinar tu servicio." />
      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold">Datos de contacto directo</h2>
            <a href={`tel:${SITE.telefono}`} className="flex items-center gap-2 text-brand-red font-bold"><Phone className="w-5 h-5" /> {SITE.telefono}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-brand-red font-bold"><Mail className="w-5 h-5" /> {SITE.email}</a>
            <p className="text-sm text-gray-700">Horario: {SITE.horario}</p>
          </div>

          {sent ? (
            <div className="bg-bg-lavender p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold text-brand-green">¡Recibido!</h3>
              <p className="mt-2">Tu asesor Glanz te contactará pronto.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm space-y-3">
              <input required placeholder="Nombre completo *" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <input required type="tel" placeholder="Teléfono *" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <input required type="email" placeholder="Correo *" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <input placeholder="Vehículo (año, marca, modelo)" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <textarea placeholder="Servicio de interés" className="border border-gray-300 rounded px-3 py-2 w-full text-sm min-h-24" />
              <button type="submit" className="btn-glanz bg-brand-red text-white hover:bg-black w-full">Enviar</button>
            </form>
          )}
        </div>
      </Section>
    </Layout>
  );
}
