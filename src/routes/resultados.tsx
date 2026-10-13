import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { GalleryPage } from "@/components/GalleryPage";

export const Route = createFileRoute("/resultados")({
  head: () => ({ meta: [
    { title: "Resultados — Galería | ​" },
    { name: "description", content: "Galería de resultados antes y después de Glanz." },
  ]}),
  component: () => (
    <Layout>
      <GalleryPage title="Resultados de Detallado Antes y Después — Galería" subtitle="Mira nuestro trabajo en cada categoría." />
    </Layout>
  ),
});
