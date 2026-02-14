import React from "react";
import { AboutData } from "@/data/about";
import { MdShield } from "react-icons/md";
import { BsPersonHeart } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1.1fr,1fr] gap-12">
        <div>
          <div className="section-title mb-4">ABOUT</div>
          <h2 className="text-4xl md:text-5xl font-display text-ink">
            Building with care, precision, and momentum.
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{AboutData.about}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {AboutData.values.sections.map((value) => (
              <span key={value.title} className="chip">
                {value.title}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-border bg-sand p-6 shadow-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <MdShield className="text-accent" />
              </div>
              <div className="text-lg font-semibold text-ink">Vision</div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{AboutData.vision}</p>
          </div>
          <div className="rounded-3xl border border-border bg-sand p-6 shadow-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-accent-2/10 border border-accent-2/20 flex items-center justify-center">
                <BsPersonHeart className="text-accent-2" />
              </div>
              <div className="text-lg font-semibold text-ink">Mission</div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{AboutData.mission}</p>
          </div>
          <div className="rounded-3xl border border-border bg-sand p-6 shadow-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center">
                <FaHandHoldingHeart className="text-ink" />
              </div>
              <div className="text-lg font-semibold text-ink">Values</div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{AboutData.values.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
