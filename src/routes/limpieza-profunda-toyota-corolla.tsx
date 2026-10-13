import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, AltBlock } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/limpieza-profunda-toyota-corolla")({
  head: () => ({ meta: [{ title: "Caso: Limpieza Profunda Toyota Corolla | Glanz" }] }),
  component: () => (
    <Layout>
      <Hero title="Limpieza Profunda de Interior — Toyota Corolla" subtitle="Caso de estudio: cómo transformamos el interior de este Toyota Corolla." />
      <Section bg="white">
        <AltBlock
          title="Antes"
          text="Un interior con uso intenso: manchas en alfombras, pelo de mascota, plásticos con grasa acumulada y olor persistente."
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
          cta={<CTA to="/limpieza-interior-completa" variant="red">Servicio similar</CTA>}
        />
      </Section>
      <Section bg="gray">
        <AltBlock reverse title="Después" text="Aspirado profundo, extracción de alfombras, vaporeta, acondicionamiento de plásticos y eliminación del olor. El interior quedó como nuevo." image="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1200&q=80" />
      </Section>
    </Layout>
  ),
});
