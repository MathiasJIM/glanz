import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FaqPage } from "@/components/FaqPage";

const FAQS = [
  { q: "¿Es seguro lavar el motor con agua?", a: "Sí, cuando se hace con técnica y protección de componentes eléctricos." },
  { q: "¿Cuánto tarda?", a: "Entre 1 y 2 horas." },
  { q: "¿Qué incluye?", a: "Desengrasado, cepillado, enjuague y acondicionador de plásticos y mangueras." },
  { q: "¿Puede dañar mi auto?", a: "No, usamos productos seguros y protegemos componentes sensibles." },
  { q: "¿Cada cuánto se recomienda?", a: "Una vez al año o cuando se vea sucio." },
  { q: "¿Cuánto cuesta?", a: "Depende del estado y tipo de motor. Solicita cotización." },
];

export const Route = createFileRoute("/faq-limpieza-motor")({
  head: () => ({ meta: [{ title: "FAQ Limpieza de Motor | Glanz" }] }),
  component: () => (
    <Layout>
      <FaqPage title="FAQ — Limpieza de Motor" subtitle="Preguntas frecuentes sobre la limpieza del compartimento del motor." faqs={FAQS} />
    </Layout>
  ),
});
