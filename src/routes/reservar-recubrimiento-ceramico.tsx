import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { BookingPage } from "@/components/BookingPage";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/reservar-recubrimiento-ceramico")({
  head: () => ({ meta: [
    { title: `Reservar Tratamientos Cerámicos en ${SITE.ciudad} | Glanz` },
    { name: "description", content: `Reserva tu tratamiento cerámico premium en ${SITE.ciudad}.` },
  ]}),
  component: () => (
    <Layout>
      <BookingPage
        title="Tratamientos Cerámicos de alto desempeño"
        service="Tratamientos Cerámicos"
        whatIs="Proteja su carro con nuestros servicios de recubrimiento cerámico de primera calidad. Diseñados para realzar su apariencia y brindar una protección duradera, los recubrimientos cerámicos son la solución ideal para que su carro se vea siempre como nuevo."
        benefits={["Durabilidad de 2 a 7 años", "Hidrofobicidad", "Protección UV", "Brillo profundo", "Lavados más fáciles"]}
        myths={[
          { mito: "El cerámico es a prueba de rayones.", realidad: "Reduce el riesgo, pero no es indestructible." },
          { mito: "No requiere mantenimiento.", realidad: "Lavados regulares mantienen el efecto hidrofóbico." },
          { mito: "Cualquiera puede aplicarlo.", realidad: "Requiere preparación profesional para resultados duraderos." },
        ]}
        faqs={[
          { q: "¿Cuánto dura?", a: "Entre 2 y 7 años según el producto y mantenimiento." },
          { q: "¿Cuánto tiempo toma?", a: "De 2 a 5 días para completar." },
          { q: "¿Necesita corrección antes?", a: "Sí, recomendamos corrección para máximos resultados." },
          { q: "¿Es removible?", a: "Solo con pulido profesional." },
          { q: "¿Cuesta más que cera?", a: "Sí, pero la protección es mucho mayor." },
          { q: "¿Funciona en autos nuevos?", a: "Sí, es el momento ideal para aplicarlo." },
        ]}
      />
    </Layout>
  ),
});
