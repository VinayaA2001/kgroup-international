import React from "react";
import Link from "next/link";
import { CompaniesList } from "@/data/companies";

const layoutMap = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

const Companies = () => {
  return (
    <section className="bg-sand" id="companies">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.05fr,1.4fr] gap-10 items-end">
          <div>
            <div className="section-title mb-4">OUR COMPANIES</div>
            <h2 className="text-4xl md:text-5xl font-display text-ink">
              A portfolio built for real-world impact.
            </h2>
            <p className="mt-4 text-text-secondary">
              We grow brands across sectors with a shared commitment to quality, innovation,
              and customer trust.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
            <div className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Portfolio focus
            </div>
            <div className="mt-3 text-lg font-semibold text-ink">
              Commerce, healthcare, technology, and lifestyle ventures with durable value.
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {CompaniesList.map((company, index) => {
            const className = layoutMap[index] ?? "lg:col-span-4";
            const content = (
              <>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white border border-border shadow-card flex items-center justify-center overflow-hidden">
                    <img src={company.logo} alt={company.name} className="h-10 w-10 rounded-full rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-ink group-hover:text-accent transition">
                      {company.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.25em] text-text-secondary">
                      {company.slug.replace(/-/g, " ")}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                  {company.description}
                </p>
              </>
            );

            if (company.href) {
              return (
                <a
                  key={company.slug}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group rounded-3xl border border-border bg-white p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition ${className}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={company.slug}
                href={`/companies/${company.slug}`}
                className={`group rounded-3xl border border-border bg-white p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition ${className}`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;



