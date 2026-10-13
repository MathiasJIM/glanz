import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, SectionHeading } from "@/components/sections";
import { CTA } from "@/components/CTA";
import { SITE } from "@/data/site";

const REVIEWS = Array.from({ length: 12 }).map((_, i) => ({
  name: `Cliente ${i + 1}`,
  text: [
    "Excelente atención y resultados increíbles. Mi auto quedó como nuevo.",
    "El equipo de Glanz es muy profesional. Recomiendo el recubrimiento cerámico.",
    "Vinieron a mi casa y dejaron mi auto impecable. Súper conveniente.",
    "El polarizado quedó perfecto, sin burbujas. Excelente trabajo.",
    "La limpieza interior superó mis expectativas. Olía a auto nuevo.",
    "Hicieron PPF en mi Tesla y se ve increíble.",
  ][i % 6],
}));

export const Route = createFileRoute("/resenas")({
  head: () => ({ meta: [
    { title: `Reseñas de Glanz en ${SITE.ciudad}` },
    { name: "description", content: `${SITE.numResenas} reseñas de 5 estrellas de clientes de Glanz.` },
  ]}),
  component: () => (
    <Layout>
      <Hero title={`Reseñas de Clientes de Glanz en ${SITE.ciudad} — Detallado de Autos`} subtitle={`${SITE.numResenas} reseñas de 5 estrellas`} />
      <Section bg="white">
        <SectionHeading title="Lo que dicen nuestros clientes" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-brand-orange-accent">★★★★★</div>
              <p className="mt-3 text-sm text-gray-700">"{r.text}"</p>
              <div className="mt-4 font-bold">— {r.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 flex flex-wrap justify-center gap-3">
          <CTA href={SITE.googleReviews} variant="red">Déjanos tu reseña</CTA>
          <CTA to="/contacto" variant="blue">Más información</CTA>
        </div>
      </Section>
    </Layout>
  ),
});
