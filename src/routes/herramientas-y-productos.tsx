import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/herramientas-y-productos")({
  head: () => ({ meta: [{ title: "Herramientas y Productos de Detallado | Glanz" }] }),
  component: () => (
    <Layout>
      <Hero title="Herramientas y Productos de Detallado" subtitle="Lo que usa un detallador profesional para entregar resultados premium." />
      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>Las herramientas y los productos correctos son la diferencia entre un acabado profesional y uno mediocre. Te contamos qué usamos en Glanz y por qué.</p>
          <h2 className="font-display text-2xl font-bold">Pulidoras de órbita doble</h2>
          <p>Permiten corrección segura sin riesgo de quemar la pintura. Son la herramienta base para corrección.</p>
          <h2 className="font-display text-2xl font-bold">Extractoras profesionales</h2>
          <p>Inyectan agua a presión y aspiran inmediatamente, extrayendo manchas profundas de telas.</p>
          <h2 className="font-display text-2xl font-bold">Vaporeta</h2>
          <p>Vapor a alta temperatura para descontaminar y limpiar áreas delicadas.</p>
          <h2 className="font-display text-2xl font-bold">Productos premium</h2>
          <p>Trabajamos con marcas líderes a nivel mundial en jabones, compuestos, pads, ceras y recubrimientos.</p>
          <div className="text-center pt-6">
            <CTA to="/contacto" variant="red">Pedir cotización</CTA>
          </div>
        </div>
      </Section>
    </Layout>
  ),
});
