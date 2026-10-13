import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, SectionHeading } from "@/components/sections";
import { CTA } from "@/components/CTA";
import { SITE } from "@/data/site";

const AREAS = ["Belen", "Heredia", "Alajuela", "San Jose", "Escazu", "Santa Ana"];

export const Route = createFileRoute("/areas-de-servicio")({
  head: () => ({ meta: [
    { title: `Áreas de Servicio | ​ ${SITE.ciudad}` },
    { name: "description", content: `Áreas atendidas por ​ en ${SITE.ciudad} y zonas circundantes.` },
  ]}),
  component: () => (
    <Layout>
      <Hero title="Áreas de Servicio Móvil" subtitle="Áreas de Servicio de Detallado Móvil" />
      <Section bg="white">
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          ​ atiende {SITE.ciudad} y las áreas circundantes. La disponibilidad móvil es limitada; trabajamos principalmente en nuestro taller.
        </p>
      </Section>
      <Section bg="gray">
        <SectionHeading title={`Zonas que atendemos`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {AREAS.map((a) => (
            <div key={a} className="bg-white p-3 rounded text-center text-sm font-semibold">{a}</div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTA to="/contacto" variant="red">Iniciar mi cotización</CTA>
        </div>
      </Section>
    </Layout>
  ),
});
