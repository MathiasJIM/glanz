import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero, Section } from "@/components/sections";
import { useState } from "react";

export const Route = createFileRoute("/opt-in")({
  head: () => ({ meta: [{ title: "Suscríbete | Glanz" }] }),
  component: OptIn,
});

function OptIn() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <Hero title="Recibe consejos y promociones de Glanz" subtitle="Tips de cuidado de tu auto y ofertas exclusivas." />
      <Section bg="white">
        <div className="max-w-md mx-auto">
          {sent ? (
            <div className="text-center bg-bg-lavender p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold text-brand-green">¡Listo!</h3>
              <p className="mt-2">Te enviaremos novedades pronto.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3 bg-white p-6 border border-gray-200 rounded-lg">
              <input required placeholder="Nombre *" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <input required type="email" placeholder="Correo *" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <input required type="tel" placeholder="Teléfono *" className="border border-gray-300 rounded px-3 py-2 w-full text-sm" />
              <button type="submit" className="btn-glanz bg-brand-red text-white hover:bg-black w-full">Suscribirme</button>
            </form>
          )}
        </div>
      </Section>
    </Layout>
  );
}
