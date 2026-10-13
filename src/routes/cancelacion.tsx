import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";

export const Route = createFileRoute("/cancelacion")({
  head: () => ({ meta: [{ title: "Política de Cancelación | ​" }] }),
  component: () => (
    <Layout>
      <Hero title="Política de Cancelación" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
          <p>Entendemos que los planes cambian. Esta política explica cómo manejar cancelaciones y reagendamientos en ​.</p>
          <h2 className="font-display text-xl font-bold">Cancelaciones</h2>
          <p>Solicitamos avisar al menos 24 horas antes de tu cita para no incurrir en cargos.</p>
          <h2 className="font-display text-xl font-bold">Reagendamientos</h2>
          <p>Puedes reagendar sin costo si nos avisas con anticipación. Llámanos o escríbenos para coordinar.</p>
          <h2 className="font-display text-xl font-bold">No-show</h2>
          <p>Si no llegas a tu cita sin avisar, podríamos cobrar una tarifa de penalización equivalente al 25% del servicio reservado.</p>
        </div>
      </Section>
    </Layout>
  ),
});
