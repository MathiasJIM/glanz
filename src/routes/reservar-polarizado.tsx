import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { BookingPage } from "@/components/BookingPage";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/reservar-polarizado")({
  head: () => ({ meta: [
    { title: `Reservar Polarizado en ${SITE.ciudad} | Glanz` },
    { name: "description", content: `Reserva tu polarizado premium en ${SITE.ciudad}.` },
  ]}),
  component: () => (
    <Layout>
      <BookingPage
        title={`Los Expertos en Polarizado Mejor Calificados de ${SITE.ciudad}`}
        service="Polarizado"
        whatIs="El polarizado reduce el calor, bloquea hasta el 99% de los rayos UV, mejora la privacidad y reduce el deslumbramiento al manejar."
        benefits={["Bloqueo UV 99%", "Reducción de calor", "Privacidad", "Menos deslumbramiento", "Garantía de por vida"]}
        myths={[
          { mito: "Todo el polarizado es igual.", realidad: "Las películas cerámicas son muy superiores a las teñidas." },
          { mito: "El polarizado se despega rápido.", realidad: "Las películas profesionales duran décadas." },
          { mito: "Interfiere con señales electrónicas.", realidad: "Las cerámicas no interfieren con GPS, radio ni Bluetooth." },
        ]}
        faqs={[
          { q: "¿Cuánto dura la instalación?", a: "Entre 2 y 4 horas según el vehículo." },
          { q: "¿Cuándo puedo bajar las ventanas?", a: "Recomendamos esperar 3-5 días para el curado." },
          { q: "¿Qué garantía tienen?", a: "Garantía de por vida en películas cerámicas premium." },
          { q: "¿Es legal?", a: "Sí, ofrecemos tonos dentro del rango legal local." },
          { q: "¿Bloquea el calor de verdad?", a: "Las películas cerámicas IR rechazan hasta 80% del calor infrarrojo." },
          { q: "¿Se puede remover?", a: "Sí, por un profesional sin dañar los cristales." },
        ]}
      />
    </Layout>
  ),
});
