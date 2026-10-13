import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FaqPage } from "@/components/FaqPage";

const FAQS = [
  { q: "¿Cuánto tarda una limpieza interior completa?", a: "Entre 3 y 6 horas según condiciones." },
  { q: "¿Eliminan pelo de mascota?", a: "Sí, usamos herramientas específicas." },
  { q: "¿Sacan manchas viejas?", a: "La mayoría sí, dependiendo del tipo y antigüedad." },
  { q: "¿Limpian el techo?", a: "Sí, con vaporeta y productos suaves." },
  { q: "¿Acondicionan la piel?", a: "Sí, aplicamos limpiador y acondicionador específico." },
  { q: "¿Cuándo puedo usar el auto?", a: "Inmediatamente, aunque las telas pueden tardar 2-4 horas en secarse." },
];

export const Route = createFileRoute("/faq-limpieza-interior")({
  head: () => ({ meta: [{ title: "FAQ Limpieza Interior | Glanz" }] }),
  component: () => (
    <Layout>
      <FaqPage title="FAQ — Limpieza Interior" subtitle="Preguntas frecuentes sobre nuestro servicio de limpieza interior." faqs={FAQS} />
    </Layout>
  ),
});
