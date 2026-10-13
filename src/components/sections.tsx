import type { ReactNode } from "react";

export function Hero({
  title,
  subtitle,
  children,
  bg = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=2000&q=80",
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bg?: string;
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.51)" }} />
      <div className="container-glanz relative z-10 py-20 text-center max-w-4xl">
        <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight text-orange-600 font-sans whitespace-pre-line">{title}</h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto whitespace-pre-line">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-col items-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  bg = "white",
  className = "",
}: {
  children: ReactNode;
  bg?: "white" | "gray" | "lavender" | "blue-soft";
  className?: string;
}) {
  const bgs = {
    white: "bg-white",
    gray: "bg-bg-gray",
    lavender: "bg-bg-lavender",
    "blue-soft": "bg-bg-blue-soft",
  };
  return (
    <section className={`${bgs[bg]} py-16 md:py-20 ${className}`}>
      <div className="container-glanz">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, subtitle, center = true }: { title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export function AltBlock({
  title,
  text,
  image,
  reverse = false,
  cta,
  imageClassName = "w-full h-80 object-cover rounded",
}: {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  cta?: ReactNode;
  imageClassName?: string;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <img src={image} alt={title} className={imageClassName} loading="lazy" />
      </div>
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main">{title}</h2>
        <p className="mt-4 text-base text-gray-700 leading-relaxed text-left whitespace-pre-wrap">{text}</p>
        {cta && <div className="mt-6">{cta}</div>}
      </div>
    </div>
  );
}
