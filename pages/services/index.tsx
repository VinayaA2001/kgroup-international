import Link from "next/link";
import { ServicesList } from "../../data/services";

export default function ServicesPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-end">
          <div>
            <div className="section-title mb-4">SERVICES</div>
            <h1 className="text-4xl md:text-5xl font-display text-ink">Design, build, deliver.</h1>
            <p className="mt-4 text-text-secondary max-w-xl">
              We offer a full suite of services to take ideas from concept to market. Each
              engagement is tailored to your goals and capacity.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
            <div className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Delivery promise
            </div>
            <div className="mt-3 text-lg font-semibold text-ink">
              Clear scope, fast feedback loops, and measurable outcomes.
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ServicesList.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-3xl border border-border bg-white shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-lift transition"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink group-hover:text-accent transition">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-text-secondary">
                  View details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
