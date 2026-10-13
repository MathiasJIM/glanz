import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/proceso-limpieza-interior")({
  head: () => ({ meta: [{ title: "El Proceso de Limpieza Interior de Autos | Glanz" }] }),
  component: () => (
    <Layout>
      <Hero title="El Proceso de Limpieza Interior de Autos" subtitle="Paso a paso de cómo Glanz transforma el interior de tu vehículo." />
      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>La limpieza interior profesional es un proceso multietapa que va mucho más allá de pasar una aspiradora. En Glanz seguimos un protocolo estructurado que garantiza resultados consistentes.</p>
          <h2 className="font-display text-2xl font-bold">1. Inspección y diagnóstico</h2>
          <p>Identificamos manchas, olores y áreas de atención especial. Esto define los productos y técnicas a usar.</p>
          <h2 className="font-display text-2xl font-bold">2. Aspirado completo</h2>
          <p>Aspiramos cada rincón, incluyendo bajo asientos, costuras y áreas de difícil acceso.</p>
          <h2 className="font-display text-2xl font-bold">3. Pretratamiento de manchas</h2>
          <p>Aplicamos productos específicos según el tipo de mancha y el material afectado.</p>
          <h2 className="font-display text-2xl font-bold">4. Extracción y vaporeta</h2>
          <p>Limpieza profunda de telas, alfombras, tapicerías y áreas duras con vapor.</p>
          <h2 className="font-display text-2xl font-bold">5. Acondicionamiento final</h2>
          <p>Acondicionador para piel, protector para plásticos, limpieza de vidrios.</p>
          <div className="text-center pt-6">
            <CTA to="/limpieza-interior-completa" variant="red">Pedir cotización</CTA>
          </div>
        </div>
      </Section>
    </Layout>
  ),
});
