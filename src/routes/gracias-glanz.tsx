import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/gracias-glanz")({
  head: () => ({ meta: [{ title: "Gracias | ​" }] }),
  component: () => (
    <Layout>
      <Hero title="¡Gracias por contactar a ​!" subtitle="Nos pondremos en contacto contigo lo antes posible.">
        <CTA to="/" variant="red">Volver al inicio</CTA>
      </Hero>
    </Layout>
  ),
});
