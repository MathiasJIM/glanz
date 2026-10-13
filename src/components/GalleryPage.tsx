import { Hero, Section, SectionHeading } from "./sections";
import { CTA } from "./CTA";

export function GalleryPage({ title, subtitle }: { title: string; subtitle?: string }) {
  const images = Array.from({ length: 12 }).map((_, i) => {
    const ids = [
      "1605559424843-9e4c228bf1c2",
      "1492144534655-ae79c964c9d7",
      "1552519507-da3b142c6e3d",
      "1583121274602-3e2820c69888",
      "1542362567-b07e54358753",
      "1503376780353-7e6692767b70",
      "1606577924006-27d39b132ae2",
      "1525498128493-380d1990a112",
      "1607860108855-64acf2078ed9",
      "1542228262-3d663b306a53",
      "1494976388531-d1058494cdd8",
      "1503376780353-7e6692767b70",
    ];
    return `https://images.unsplash.com/photo-${ids[i % ids.length]}?auto=format&fit=crop&w=800&q=80`;
  });

  return (
    <>
      <Hero title={title} subtitle={subtitle} />
      <Section bg="white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded group relative">
              <img src={src} alt={`${title} ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-700" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTA to="/contacto" variant="red">Pedir cotización</CTA>
        </div>
      </Section>
    </>
  );
}
