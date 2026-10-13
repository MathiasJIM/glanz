import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, AltBlock } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/limpieza-profunda-honda-civic")({
  head: () => ({ meta: [{ title: "Caso: Limpieza Profunda Honda Civic | Glanz" }] }),
  component: () => (
    <Layout>
      <Hero title="Limpieza Profunda de Interior — Honda Civic" subtitle="Caso de estudio: restauración completa del interior de este Honda Civic." />
      <Section bg="white">
        <AltBlock
          title="Antes"
          text="Asientos con manchas profundas, alfombras sucias, plásticos opacos y olor a humedad."
          image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80"
          cta={<CTA to="/limpieza-interior-completa" variant="red">Servicio similar</CTA>}
        />
      </Section>
      <Section bg="gray">
        <AltBlock reverse title="Después" text="Extracción profunda, tratamiento antimanchas, acondicionamiento y eliminación de olores. El cliente no podía creer el resultado." image="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1200&q=80" />
      </Section>
    </Layout>
  ),
});
