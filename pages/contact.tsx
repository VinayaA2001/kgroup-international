import { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:shinuirfank@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10">
          <div className="rounded-3xl border border-border bg-white/80 p-8 shadow-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl" />

            <div className="relative">
              <div className="section-title">CONTACT</div>
              <h1 className="mt-3 text-4xl md:text-5xl font-display text-ink">
                Let us build what is next.
              </h1>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Share your goals and we will respond with a clear plan, timeline, and the right
                team for the work.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href="https://maps.google.com/?q=Siraj Bypass Road, Koduvally, Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white/70 p-4 shadow-card hover:shadow-soft transition"
                >
                  <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Office</div>
                    <p className="text-sm text-text-secondary">
                      Siraj Bypass Road, Koduvally Bus Stand Ln, near Thanal Dialysis Centre,
                      Kerala 673585, India
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+91871448040"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white/70 p-4 shadow-card hover:shadow-soft transition"
                >
                  <div className="h-10 w-10 rounded-full bg-accent-2/10 border border-accent-2/20 flex items-center justify-center text-accent-2">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Phone</div>
                    <p className="text-sm text-text-secondary">+91 87144 48040</p>
                  </div>
                </a>

                <a
                  href="mailto:shinuirfank@gmail.com"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white/70 p-4 shadow-card hover:shadow-soft transition"
                >
                  <div className="h-10 w-10 rounded-full bg-ink/10 border border-ink/20 flex items-center justify-center text-ink">
                    <FiMail />
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Email</div>
                    <p className="text-sm text-text-secondary">shinuirfank@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-white p-8 shadow-card"
          >
            <div className="section-title">START A PROJECT</div>
            <h2 className="mt-3 text-3xl font-display text-ink">Tell us about your goals.</h2>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-border bg-sand px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-border bg-sand px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <textarea
                name="message"
                placeholder="Project details, timeline, or goals"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-2xl border border-border bg-sand px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button type="submit" className="mt-6 w-full button-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
