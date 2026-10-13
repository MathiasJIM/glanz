import { Hero, Section, SectionHeading } from "./sections";
import { CTA } from "./CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqPage({ title, subtitle, faqs }: { title: string; subtitle?: string; faqs: { q: string; a: string }[] }) {
  return (
    <>
      <Hero title={title} subtitle={subtitle} />
      <Section bg="white">
        <SectionHeading title="Preguntas Frecuentes" />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12">
          <CTA to="/contacto" variant="red">¿Más preguntas? Contáctanos</CTA>
        </div>
      </Section>
    </>
  );
}
