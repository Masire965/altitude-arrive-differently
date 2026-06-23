import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[color:var(--navy)]">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy)]/80 via-[color:var(--navy)]/70 to-[color:var(--navy)]" />
        </>
      )}
      <div className="container-luxe relative z-10 max-w-4xl">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <p className="eyebrow !text-white/70">{eyebrow}</p>
          </div>
        )}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
