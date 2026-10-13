import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ServicePage } from "@/components/ServicePage";
import { LocationPage } from "@/components/LocationPage";
import { GalleryPage } from "@/components/GalleryPage";
import { getService } from "@/data/services";
import { getLocation } from "@/data/locations";
import { SITE } from "@/data/site";

const GALLERIES: Record<string, { title: string; subtitle: string }> = {
  "galeria-correccion-de-pintura": { title: "Galería de Corrección de Pintura", subtitle: "Mira nuestros resultados antes y después." },
  
  "galeria-limpieza-interior": { title: "Galería de Limpieza Interior", subtitle: "Interiores impecables, antes y después." },
  "galeria-limpieza-motor": { title: "Galería de Limpieza de Motor", subtitle: "Motores que lucen como nuevos." },
  "galeria-lavado-y-cera": { title: "Galería de Lavado y Cera", subtitle: "Brillo y protección de carrocería." },
};

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (service) return { kind: "service" as const, service };
    const location = getLocation(params.slug);
    if (location) return { kind: "location" as const, location };
    const gallery = GALLERIES[params.slug];
    if (gallery) return { kind: "gallery" as const, gallery };
    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    if (loaderData.kind === "service") {
      const s = loaderData.service;
      return { meta: [
        { title: `${s.name} en ${SITE.ciudad} | ​` },
        { name: "description", content: s.subtitle },
        { property: "og:title", content: s.h1 },
        { property: "og:description", content: s.subtitle },
      ] };
    }
    if (loaderData.kind === "location") {
      const l = loaderData.location;
      return { meta: [
        { title: `Detallado en ${l.ciudad} | ​` },
        { name: "description", content: `Detallado móvil y de taller en ${l.ciudad}.` },
      ] };
    }
    return { meta: [
      { title: `${loaderData.gallery.title} | ​` },
      { name: "description", content: loaderData.gallery.subtitle },
    ] };
  },
  component: Page,
  notFoundComponent: () => (
    <Layout>
      <div className="container-glanz py-32 text-center">
        <h1 className="font-display text-5xl font-bold">404</h1>
        <p className="mt-3 text-gray-600">Página no encontrada</p>
      </div>
    </Layout>
  ),
});

function Page() {
  const data = Route.useLoaderData();
  return (
    <Layout>
      {data.kind === "service" && <ServicePage service={data.service} />}
      {data.kind === "location" && <LocationPage ciudad={data.location.ciudad} h1={data.location.h1} subtitulo={data.location.subtitulo} />}
      {data.kind === "gallery" && <GalleryPage title={data.gallery.title} subtitle={data.gallery.subtitle} />}
    </Layout>
  );
}
