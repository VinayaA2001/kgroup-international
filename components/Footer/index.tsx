import React from "react";
import Link from "next/link";
import { MenuItems } from "@/data/header";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="rounded-3xl bg-gradient-to-r from-accent to-accent-2 p-8 md:p-12 shadow-lift">
          <div className="grid gap-6 md:grid-cols-[1.4fr,0.6fr] items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-white/80">
                Ready when you are
              </div>
              <div className="mt-3 text-3xl md:text-4xl font-display text-white">
                Let us shape the next chapter of your business.
              </div>
              <p className="mt-3 text-white/80 max-w-xl">
                Share your goals and we will map the right mix of strategy, design, and delivery.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-ink px-6 py-3 font-semibold shadow-card hover:shadow-lift transition"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                <img src="/logos/klogo.webp" className="h-8 w-8 object-contain" alt="logo" />
              </div>
              <div>
                <div className="font-semibold">The K Group</div>
                <div className="text-[11px] tracking-[0.35em] text-white/60">BUSINESS GROUP</div>
              </div>
            </div>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              A unified group delivering trusted, high-impact solutions across industries.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/thek_marketindia?igsh=Z3dsdW92bHExOThj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="border border-white/20 rounded-full p-2 text-white/80 hover:bg-white hover:text-ink transition"
              >
                <FaInstagram className="text-[16px]" />
              </a>
              <a
                href="https://wa.me/918714448040"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="border border-white/20 rounded-full p-2 text-white/80 hover:bg-white hover:text-ink transition"
              >
                <FaWhatsapp className="text-[16px]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="border border-white/20 rounded-full p-2 text-white/80 hover:bg-white hover:text-ink transition"
              >
                <FaFacebookF className="text-[16px]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="border border-white/20 rounded-full p-2 text-white/80 hover:bg-white hover:text-ink transition"
              >
                <FaLinkedinIn className="text-[16px]" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">Explore</div>
            <div className="mt-4 flex flex-col gap-3">
              {MenuItems.map((item) => (
                <Link key={item.menu} href={item.url} className="text-white/80 hover:text-white">
                  {item.menu}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">Office</div>
            <a
              href="https://maps.app.goo.gl/6Yd3N1GUatZ1A2PD8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-white/80 text-sm leading-relaxed hover:text-white"
            >
              Siraj Bypass Road, Koduvally Bus Stand Ln, near Thanal Dialysis Centre, Koduvally,
              Kerala 673585, India
            </a>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</div>
            <div className="mt-4 flex flex-col gap-3 text-white/80">
              <a href="tel:+918714448040" className="hover:text-white">
                +91 87144 48040
              </a>
              <a href="mailto:shinuirfank@gmail.com" className="hover:text-white">
                shinuirfank@gmail.com
              </a>
              <span className="text-white/60 text-sm">We are always looking for curious, driven people.</span>
              <a href="mailto:shinuirfank@gmail.com" className="hover:text-white">
                Send your resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-sm text-white/60">
          <div>Copyright (c) 2026 The K Group. All Rights Reserved.</div>
          <div>Built for long-term partnerships.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
