import Link from "next/link";
import React from "react";
import { MenuItems } from "@/data/header";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-sand/80 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-4 gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-card border border-border flex items-center justify-center overflow-hidden">
                <img
                  src="/logos/klogo-trans.webp"
                  className="h-8 w-8 object-contain"
                  alt="The K Group logo"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-text-primary font-semibold leading-none">The K Group</div>
                <div className="text-[11px] text-text-secondary tracking-[0.4em]">
                  BUSINESS GROUP
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-[0.28em] text-text-secondary">
              {MenuItems.map((item) => (
                <Link
                  key={item.menu}
                  href={item.url}
                  className="hover:text-text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:origin-left hover:after:scale-x-100"
                >
                  {item.menu}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center justify-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-sand transition"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-ink/90 transition"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div className="lg:hidden pb-4">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {MenuItems.map((item) => (
                <Link
                  key={item.menu}
                  href={item.url}
                  className="shrink-0 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary"
                >
                  {item.menu}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
