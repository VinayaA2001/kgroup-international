import React from "react";
import Link from "next/link";
import { CompaniesList } from "@/data/companies";

const Hero = () => {
  const highlightServices = [
    "TV Manufacturing",
    "Fashion Boutique",
    "Spice Products",
    "E-Commerce Platform",
    "IT & Software Solutions",
  ];

  const heroCards = [
    { key: "software", title: "Software Development", image: "/images/software.webp" },
    { key: "fashion", title: "Fashion", image: "/images/business.webp" },
    { key: "digital", title: "Digital Marketing", image: "/images/app.webp" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sand via-white to-mint/40" />
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-title mb-4">THE K GROUP</p>
            <h1 className="text-5xl md:text-6xl font-display text-ink leading-tight">
              Building companies that feel inevitable.
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              We are a business group crafting products, platforms, and services that help
              ambitious brands grow with clarity, speed, and care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary">
                Start a project
              </Link>
              <Link href="/services" className="button-ghost">
                Explore services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {highlightServices.map((service) => (
                <span key={service} className="chip">
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-text-secondary">
              <div>
                <div className="text-2xl font-semibold text-ink">7+</div>
                <div>Industries served</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-semibold text-ink">20+</div>
                <div>Projects delivered</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white/90 p-4 shadow-card">
              <div className="text-xs uppercase tracking-[0.3em] text-text-secondary">Our Companies</div>
              <div className="mt-3 overflow-hidden">
                <div className="company-marquee">
                  {CompaniesList.concat(CompaniesList).map((company, index) => (
                    <div key={`${company.slug}-${index}`} className="company-chip">
                      <img src={company.logo} alt={company.name} className="h-7 w-7 rounded-full object-cover" />
                      <span className="text-xs text-ink font-semibold">{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
              {heroCards.map((card, index) => {
                const isTall = index === 0;
                return (
                  <div
                    key={card.key}
                    className={`group relative overflow-hidden rounded-3xl border border-border bg-white shadow-card ${
                      isTall ? "sm:row-span-2 min-h-[280px]" : "min-h-[160px]"
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white text-xs uppercase tracking-[0.2em]">Service</div>
                      <div className="text-white text-lg font-semibold">{card.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
