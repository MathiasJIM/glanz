import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";

export const Route = createFileRoute("/privacidad")({
  head: () => ({ meta: [{ title: "Política de Privacidad | ​" }] }),
  component: () => (
    <Layout>
      <Hero title="Política de Privacidad" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
          <p>En ​ respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tus datos personales.</p>
          <h2 className="font-display text-xl font-bold">Información que recopilamos</h2>
          <p>Recopilamos información que tú nos proporcionas al solicitar una cotización o agendar un servicio: nombre, teléfono, correo, datos del vehículo.</p>
          <h2 className="font-display text-xl font-bold">Uso de la información</h2>
          <p>Usamos tu información para responderte, brindar el servicio solicitado y enviarte comunicaciones relacionadas con ​.</p>
          <h2 className="font-display text-xl font-bold">Protección</h2>
          <p>Implementamos medidas razonables para proteger tu información. No vendemos ni compartimos tus datos con terceros sin tu consentimiento.</p>
          <h2 className="font-display text-xl font-bold">Contacto</h2>
          <p>Para consultas sobre privacidad, escríbenos a [GLANZ_EMAIL].</p>
        </div>
      </Section>
    </Layout>
  ),
});
