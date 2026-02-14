import React from "react";
import Link from "next/link";
import { WorkProcessList } from "@/data/workprocess";

const HowWeWork = () => {
  return (
    <section className="bg-white" id="how-we-work">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1.05fr,1.3fr] gap-12">
        <div>
          <div className="section-title mb-4">WORK PROCESS</div>
          <h2 className="text-4xl md:text-5xl font-display text-ink">
            A calm, precise process for bold outcomes.
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            We balance strategy, design, and delivery so every engagement feels focused and
            measurable. Clear milestones keep teams aligned and momentum steady.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">
              Talk to us
            </Link>
            <Link href="/services" className="button-ghost">
              See capabilities
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-sand p-4">
              <div className="text-sm text-text-secondary">Avg delivery</div>
              <div className="text-2xl font-semibold text-ink">4-8 weeks</div>
            </div>
            <div className="rounded-2xl border border-border bg-sand p-4">
              <div className="text-sm text-text-secondary">Collab touchpoints</div>
              <div className="text-2xl font-semibold text-ink">Weekly</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {WorkProcessList.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-ink text-white flex items-center justify-center text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {index < WorkProcessList.length - 1 ? (
                  <div className="w-px flex-1 bg-border mt-2" />
                ) : null}
              </div>
              <div className="flex-1 rounded-2xl border border-border bg-sand/70 p-5 shadow-card">
                <div className="text-lg font-semibold text-ink">{step.title}</div>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
