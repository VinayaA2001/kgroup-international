import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { ServicesList } from "../../data/services";

interface Service {
  slug: string;
  title: string;
  image: string;
  description: string;
}

interface Props {
  service: Service;
}

const ServiceDetail = ({ service }: Props) => {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/services" className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          Back to services
        </Link>
        <h1 className="mt-4 text-4xl md:text-5xl font-display text-ink">{service.title}</h1>
        <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
          {service.description}
        </p>

        <div className="mt-10 rounded-3xl overflow-hidden border border-border shadow-card bg-white">
          <img src={service.image} alt={service.title} className="w-full h-80 object-cover" />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Discovery and planning aligned to your goals.",
            "Design and delivery with clear milestones.",
            "Post-launch optimization and support.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-sand p-5 shadow-card">
              <div className="text-sm text-text-secondary">What you get</div>
              <div className="mt-2 text-ink font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ServicesList.map((service) => ({
    params: { slug: service.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = ServicesList.find((s) => s.slug === params?.slug);
  return { props: { service } };
};
