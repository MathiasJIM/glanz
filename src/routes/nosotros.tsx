import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section, AltBlock } from "@/components/sections";
import { CTA } from "@/components/CTA";
import certificadosImg from "@/assets/tratamientos-ceramicos-expertos.png";
import detailersProfesionalesImg from "@/assets/detalladores-profesionales-2.jpg";
import detailersDosImg from "@/assets/detailers-dos.jpg";
import aplicacionTratamientoImg from "@/assets/aplicacion-tratamiento-ceramico.jpg";
import valoresImg from "@/assets/valores-hilux.jpg";
import diferentesImg from "@/assets/diferentes-rav4.jpg";
import equipoImg from "@/assets/equipo-glanz.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({ meta: [
    { title: "Sobre Nosotros | Detallado y Polarizado" },
    { name: "description", content: "Conoce al equipo de Glanz. Detalladores apasionados por entregar resultados premium." },
  ]}),
  component: () => (
    <Layout>
      <Hero title="Sobre Nosotros" subtitle="Somos un equipo de detalladores enfocado en hacerte la vida más fácil ofreciendo servicios de detallado premium." bg={detailersProfesionalesImg} />
      <Section bg="white">
        <AltBlock
          title="Quienes somos"
          text={"En GLANZ somos un estudio de detallado automotriz premium en Costa Rica, especializado en tratamientos cerámicos, Paint Protection Film (PPF) y polarizado. Nuestro nombre significa \"brillo\" en alemán, y resume exactamente lo que hacemos: lograr que cada vehículo que entra a nuestro studio salga brillando y luciendo como su dueño nunca antes lo había visto.\n\n\n\n\nGLANZ nació de la unión de dos amigos, Juan Pablo y Fernando, con una misma pasión: los automóviles y el cuidado meticuloso de cada detalle. Uno con años de experiencia en el mundo del detailing, y el otro un apasionado creativo enamorado de la precisión y la excelencia. De esa combinación surgió una idea clara: ofrecer en Costa Rica un servicio premium de protección automotriz.\n\n\n"}
          image={detailersDosImg}
          imageClassName="w-full aspect-[4/5] object-cover object-center rounded"
        />
      </Section>
      <Section bg="gray">
        <AltBlock
          reverse
          title="Nuestra Misión"
          text="Darle tranquilidad a cada propietario. Protegemos su carro contra el desgaste de todos los dias y le ayudamos a conservar ese orgullo de ver su carro impecable cada vez que lo conduce. Para nosotros, un automóvil no es solo un medio de transporte: es una inversión y un logro que merece cuidarse."
          image={certificadosImg}
          imageClassName="w-full aspect-[3/4] object-cover rounded"
          cta={<CTA href="https://wa.me/50688981010" variant="red">Pedir cotización</CTA>}
        />
      </Section>
      <Section bg="white">
        <AltBlock
          title="Nuestra visión"
          text={"En los próximos años queremos consolidar a GLANZ como uno de los principales referentes de Costa Rica en protección automotriz, especialmente en recubrimientos cerámicos y PPF. Aspiramos a que, cuando alguien piense en proteger su vehículo con los más altos estándares de calidad, GLANZ sea una de las primeras marcas que venga a su mente.\n\nTambién buscamos expandir nuestra presencia con una segunda sucursal en una zona estratégica del país, manteniendo siempre el mismo nivel de excelencia y atención al detalle que nos caracteriza. Queremos crecer sin perder jamás la confianza de nuestros clientes ni el compromiso con un trabajo de clase mundial."}
          image={aplicacionTratamientoImg}
        />
      </Section>
      <Section bg="gray">
        <AltBlock
          reverse
          title="Nuestros valores"
          text={"Calidad. Trabajamos únicamente con productos, herramientas y técnicas de nivel profesional, buscando resultados duraderos y acabados que cumplan con los más altos estándares del detailing y la protección automotriz.\n\nHonestidad. Recomendamos lo que cada vehículo y cada cliente realmente necesita. No vendemos el servicio más caro por vender; asesoramos con transparencia para ofrecer la solución que mejor se adapte a sus necesidades y presupuesto.\n\nExcelencia. Cuidamos cada detalle del proceso, desde la preparación del vehículo hasta la entrega final. Creemos que la diferencia entre un buen trabajo y un trabajo excepcional está en la atención a los pequeños detalles."}
          image={valoresImg}
        />
      </Section>
      <Section bg="white">
        <AltBlock
          title="Lo que nos hace diferentes"
          text={"En GLANZ no vemos cada vehículo como un servicio más, sino como una inversión que merece ser protegida con los más altos estándares. Nos especializamos en protección automotriz premium mediante recubrimientos cerámicos y PPF, utilizando marcas reconocidas a nivel mundial, procesos meticulosos y una asesoría completamente personalizada.\n\nAntes de recomendar cualquier tratamiento, analizamos el estado del vehículo, el uso que le da el cliente y sus expectativas, para ofrecer la solución más adecuada, no la más costosa. Esa honestidad es, para nosotros, tan importante como el resultado final."}
          image={diferentesImg}
        />
      </Section>
      <Section bg="gray">
        <AltBlock
          reverse
          title="Nuestro equipo"
          text={"GLANZ es el resultado de la visión de dos amigos apasionados por la excelencia, la protección automotriz y el servicio al cliente. Pero lo que comenzó como un proyecto impulsado por esa pasión ha crecido gracias al compromiso de un equipo que comparte los mismos valores y estándares de calidad.\n\nCreemos que el éxito de GLANZ no depende de una sola persona. Cada miembro del equipo cumple un papel fundamental para garantizar que cada vehículo reciba el cuidado, la atención y el nivel de detalle que caracteriza a nuestra marca. Juntos trabajamos con un mismo propósito: ofrecer una experiencia y un resultado que superen las expectativas de cada cliente."}
          image={equipoImg}
        />
      </Section>
      <Section bg="white">
        <AltBlock
          title="Experiencia y respaldo"
          text={"A lo largo de nuestra trayectoria hemos protegido más de 250 vehículos, consolidándonos como un estudio especializado en protección automotriz premium. Nuestro compromiso con la excelencia nos ha llevado a capacitarnos y certificarnos con algunas de las marcas más reconocidas de la industria, como GTECHNIQ, GYEON, STEK, Koch Chemie, SONAX y KOVAX.\n\nCreemos que la confianza se gana con resultados consistentes, formación continua y el uso de productos de clase mundial. Por eso invertimos constantemente en capacitación y en mantenernos actualizados con las mejores técnicas y tecnologías del mercado."}
          image="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80"
        />
      </Section>
      <Section bg="gray">
        <AltBlock
          reverse
          title="Conversemos"
          text="¿Tienes dudas sobre cuál es el mejor tratamiento para tu vehículo? En GLANZ estamos para asesorarte. Contáctanos con toda confianza para una asesoría sin compromiso: escuchamos lo que necesitas, analizamos tu carro y te recomendamos la mejor solución para protegerlo y conservarlo como se merece."
          image="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80"
          cta={<CTA href="https://wa.me/50688981010" variant="red">Escríbenos por WhatsApp</CTA>}
        />
      </Section>
    </Layout>
  ),
});
