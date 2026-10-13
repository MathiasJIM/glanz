import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/metodos-y-proceso-de-detallado")({
  head: () => ({ meta: [{ title: "Métodos y Proceso de Detallado | Glanz" }] }),
  component: () => (
    <Layout>
      <Hero title="Métodos y Proceso de Detallado" subtitle="Cómo trabajamos en Glanz para entregar resultados premium." />
      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>El detallado profesional no es improvisación: es un proceso estructurado con métodos probados.</p>
          <h2 className="font-display text-2xl font-bold">Técnica de dos baldes</h2>
          <p>Un balde con jabón y otro con agua limpia para enjuagar el mitt. Reduce drásticamente los rayones por contaminación.</p>
          <h2 className="font-display text-2xl font-bold">Corrección por etapas</h2>
          <p>Compuesto, pulido medio y refinado según el nivel de defecto. Cada etapa usa pad y producto específicos.</p>
          <h2 className="font-display text-2xl font-bold">Limpieza por zonas</h2>
          <p>Trabajamos por paneles para mantener tiempos óptimos de acción de cada producto.</p>
          <h2 className="font-display text-2xl font-bold">Protección final</h2>
          <p>Toda corrección termina con sellador, cera o cerámico para preservar el resultado.</p>
          <div className="text-center pt-6">
            <CTA to="/contacto" variant="red">Pedir cotización</CTA>
          </div>
        </div>
      </Section>
    </Layout>
  ),
});
