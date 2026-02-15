import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ServicesList } from "@/data/services";

const Services = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: number) => {
    const container = sliderRef.current;
    if (!container) return;
    const firstCard = container.querySelector<HTMLElement>("[data-service-card]");
    const gap = 24;
    const cardWidth = firstCard ? firstCard.offsetWidth + gap : 260;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    let isHovered = false;
    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (interval) return;
      interval = setInterval(() => {
        if (isHovered) return;
        const maxScroll = container.scrollWidth - container.clientWidth - 4;
        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          return;
        }
        scrollByCard(1);
      }, 900);
    };

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const onEnter = () => {
      isHovered = true;
    };
    const onLeave = () => {
      isHovered = false;
    };

    start();
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      stop();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

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
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="hidden lg:inline-flex items-center justify-center h-11 w-11 rounded-full border border-border bg-white text-ink hover:bg-sand transition"
              aria-label="Scroll services left"
            >
              ?
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="hidden lg:inline-flex items-center justify-center h-11 w-11 rounded-full border border-border bg-white text-ink hover:bg-sand transition"
              aria-label="Scroll services right"
            >
              ?
            </button>
            <Link href="/services" className="button-ghost">
              View all services
            </Link>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {ServicesList.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              data-service-card
              className="group relative snap-start shrink-0 min-w-[180px] sm:min-w-[210px] lg:min-w-[calc((100%-72px)/4)] xl:min-w-[calc((100%-72px)/4)] overflow-hidden rounded-2xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift service-card"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-base font-semibold text-ink group-hover:text-accent transition">
                  {service.title}
                </div>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-text-secondary">
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







