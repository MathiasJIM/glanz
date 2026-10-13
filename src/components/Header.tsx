import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/data/site";
import { SERVICES_BY_CATEGORY } from "@/data/services";
import { CTA } from "./CTA";
import glanzLogo from "@/assets/glanz-logo.png";

const navLink =
  "block px-3 py-2 text-sm font-semibold uppercase tracking-wide text-text-main hover:text-brand-red transition-colors";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galeriaOpen, setGaleriaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-glanz flex items-center justify-between h-28">
        <Link to="/" aria-label="Inicio" className="flex items-center -ml-4">
          <img src={glanzLogo} alt="Glanz Detailing Studio" className="h-24 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={navLink}>Inicio</Link>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`${navLink} flex items-center gap-1`}>Servicios <ChevronDown className="w-3 h-3" /></button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-lg p-6 w-[720px] grid grid-cols-3 gap-6 -translate-x-1/3">
                <ServicesGroup title="Película" items={SERVICES_BY_CATEGORY.pelicula} />
                <ServicesGroup title="Exterior" items={SERVICES_BY_CATEGORY.exterior} />
                <ServicesGroup title="Interior" items={SERVICES_BY_CATEGORY.interior} />
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setGaleriaOpen(true)} onMouseLeave={() => setGaleriaOpen(false)}>
            <button className={`${navLink} flex items-center gap-1`}>Galería <ChevronDown className="w-3 h-3" /></button>
            {galeriaOpen && (
              <div className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-lg p-4 w-64">
                <Link to="/resultados" className="block py-2 text-sm hover:text-brand-red">Todos los resultados</Link>
                <Link to="/galeria-correccion-de-pintura" className="block py-2 text-sm hover:text-brand-red">Corrección de Pintura</Link>
                
                <Link to="/galeria-limpieza-interior" className="block py-2 text-sm hover:text-brand-red">Limpieza Interior</Link>
                <Link to="/galeria-limpieza-motor" className="block py-2 text-sm hover:text-brand-red">Motor</Link>
                <Link to="/galeria-lavado-y-cera" className="block py-2 text-sm hover:text-brand-red">Lavado y Cera</Link>
              </div>
            )}
          </div>

          <Link to="/areas-de-servicio" className={navLink}>Áreas</Link>
          
          <Link to="/nosotros" className={navLink}>Nosotros</Link>
          <Link to="/contacto" className={navLink}>Contacto</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SITE.telefono}`} className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-brand-red">
            <Phone className="w-4 h-4" /> {SITE.telefono}
          </a>
          <CTA to="/contacto" variant="red">Pedir cotización</CTA>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-5 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <Link to="/" className={navLink} onClick={() => setOpen(false)}>Inicio</Link>
          <details>
            <summary className={`${navLink} cursor-pointer list-none flex items-center gap-1`}>Servicios <ChevronDown className="w-3 h-3" /></summary>
            <div className="pl-4 space-y-1">
              {[...SERVICES_BY_CATEGORY.pelicula, ...SERVICES_BY_CATEGORY.exterior, ...SERVICES_BY_CATEGORY.interior].map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className="block py-1 text-sm" onClick={() => setOpen(false)}>{s.name}</Link>
              ))}
            </div>
          </details>
          <Link to="/areas-de-servicio" className={navLink} onClick={() => setOpen(false)}>Áreas de Servicio</Link>
          <Link to="/resultados" className={navLink} onClick={() => setOpen(false)}>Galería</Link>
          
          <Link to="/nosotros" className={navLink} onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/contacto" className={navLink} onClick={() => setOpen(false)}>Contacto</Link>
          <div className="pt-3">
            <CTA to="/contacto" variant="red" className="w-full">Pedir cotización</CTA>
          </div>
        </div>
      )}
    </header>
  );
}

function ServicesGroup({ title, items }: { title: string; items: { slug: string; name: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-sm uppercase text-brand-blue-cta mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((s) => (
          <li key={s.slug}>
            <Link to={`/${s.slug}`} className={`block py-1 text-sm text-text-main hover:text-brand-red ${s.name === "Tratamientos Cerámicos" ? "font-bold" : ""} whitespace-pre-line`}>{s.name === "Detallado de Mantenimiento (Lavado)" ? "Detallado de Mantenimiento (Lavado)\n" : s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
