import React from "react";
import Link from "next/link";
import { ServicesList } from "@/data/services";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-background to-white" id="services">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="section-title mb-4">SERVICES</div>
            <h2 className="text-4xl md:text-5xl font-display text-ink">
              Capabilities that scale with you.
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl">
              From strategy to execution, we bring clarity and craft across digital, retail,
              and operational experiences.
            </p>
          </div>
          <Link href="/services" className="button-ghost">
            View all services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ServicesList.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-lg font-semibold text-ink group-hover:text-accent transition">
                  {service.title}
                </div>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-text-secondary">
                  Learn more
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
