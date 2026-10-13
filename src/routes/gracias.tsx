import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/gracias")({
  head: () => ({ meta: [{ title: "Gracias | ​" }] }),
  component: () => (
    <Layout>
      <Hero title="¡Gracias!" subtitle="Te contactaremos pronto.">
        <CTA to="/" variant="red">Volver al inicio</CTA>
      </Hero>
    </Layout>
  ),
});
