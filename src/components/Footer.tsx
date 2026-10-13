import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#252525] text-white pt-16 pb-8">
      <div className="container-glanz grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-1">
          <h3 className="font-display text-2xl font-bold text-brand-orange-accent">​</h3>
          <p className="text-sm text-gray-300 mt-3">Detailing Boutique en Costa Rica.</p>
          <div className="flex gap-3 mt-4">
            <a href={SITE.instagram} aria-label="Instagram" className="hover:text-brand-orange-accent"><Instagram className="w-5 h-5" /></a>
            <a href={SITE.facebook} aria-label="Facebook" className="hover:text-brand-orange-accent"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <FooterColumn title="Empresa" links={[
          { label: "Inicio", to: "/" },
          { label: "Nosotros", to: "/nosotros" },
          { label: "Áreas de Servicio", to: "/areas-de-servicio" },
          
          { label: "Reseñas", to: "/resenas" },
          { label: "Política de Privacidad", to: "/privacidad" },
          { label: "Política de Cancelación", to: "/cancelacion" },
        ]} />
        <FooterColumn title="Película" links={[
          { label: "Polarizado", to: "/polarizado-de-ventanas" },
          { label: "PPF", to: "/ppf" },
          { label: "Polarizado RV", to: "/polarizado-rv" },
        ]} />
        <FooterColumn title="Exterior" links={[
          { label: "Corrección de Pintura", to: "/correccion-de-pintura" },
          { label: "Tratamientos Cerámicos", to: "/recubrimiento-ceramico" },
          { label: "Limpieza de Motor", to: "/limpieza-de-motor" },
          { label: "Restauración y pulido de Focos", to: "/restauracion-de-faros" },
        ]} />
        <FooterColumn title="Interior" links={[
          { label: "Detallado Interior", to: "/limpieza-interior-completa" },
          { label: "Eliminacion de Olores", to: "/remocion-de-olores" },
        ]} />

        <div>
          <h4 className="font-display text-sm font-bold uppercase text-brand-orange-accent mb-3">Contáctanos</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href={`tel:${SITE.telefono}`}>{SITE.telefono}</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />{SITE.direccion}</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" />{SITE.horario}</li>
          </ul>
          <Link to="/contacto" className="btn-glanz bg-brand-red text-white hover:bg-black mt-4 inline-flex">Contactar</Link>
        </div>
      </div>

      <div className="container-glanz mt-12 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ​. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase text-brand-orange-accent mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {links.map((l) => (
          <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
