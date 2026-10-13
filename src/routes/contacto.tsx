import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, SectionHeading } from "@/components/sections";
import { CTA } from "@/components/CTA";
import { SITE } from "@/data/site";
import { useState } from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [
    { title: "Contacto | ​" },
    { name: "description", content: "Contáctanos para cotizar tu servicio de detallado o polarizado en " + SITE.ciudad },
  ]}),
  component: Contacto,
});

const FILM = ["PPF", "Polarizado"];
const INT = ["Detallado Interior", "Eliminacion de Olores"];
const EXT = ["Corrección de Pintura", "Tratamientos Cerámicos", "Lavado Premium", "Limpieza de Motor", "Restauración y pulido de Focos"];

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <Hero title="Completa el formulario y te responderemos lo antes posible" subtitle="También puedes llamarnos o enviarnos un mensaje de texto." />

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Datos de contacto</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Phone className="w-4 h-4 text-brand-red" /><a href={`tel:${SITE.telefono}`}>{SITE.telefono}</a></li>
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-brand-red" />{SITE.direccion}</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-brand-red" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="flex gap-2"><Clock className="w-4 h-4 text-brand-red" />{SITE.horario}</li>
            </ul>
          </div>

          {sent ? (
            <div className="bg-bg-lavender p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold text-brand-green">¡Mensaje enviado!</h3>
              <p className="mt-2 text-gray-700">Te contactaremos lo antes posible.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="Nombre *" className="border border-gray-300 rounded px-3 py-2 text-sm" />
                <input required placeholder="Apellido *" className="border border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
              <input required type="tel" placeholder="Teléfono *" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
              <input required type="email" placeholder="Correo electrónico *" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
              <input required placeholder="¿Año, marca y modelo del vehículo? *" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />

              <CheckboxGroup title="Servicios de Película" items={FILM} />
              <CheckboxGroup title="Servicios Interiores" items={INT} />
              <CheckboxGroup title="Servicios Exteriores" items={EXT} />

              <textarea placeholder="Detalles adicionales" className="border border-gray-300 rounded px-3 py-2 text-sm w-full min-h-24" />
              <div className="text-xs text-gray-500">Protegido por CAPTCHA</div>
              <button type="submit" className="btn-glanz bg-brand-red text-white hover:bg-black w-full">Enviar</button>
            </form>
          )}
        </div>
      </Section>
    </Layout>
  );
}

function CheckboxGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-bold text-sm mt-2 mb-1">{title}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
        {items.map((i) => (
          <label key={i} className="flex items-center gap-2"><input type="checkbox" /> {i}</label>
        ))}
      </div>
    </div>
  );
}
