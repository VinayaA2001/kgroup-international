import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { CompaniesList } from "@/data/companies";

interface CompanyService {
  title: string;
  detail: string;
}

interface Company {
  slug: string;
  name: string;
  logo: string;
  description: string;
  overview?: string;
  services?: CompanyService[];
}

interface Props {
  company: Company;
}

const CompanyDetail = ({ company }: Props) => {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/" className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          Back to home
        </Link>
        <div className="mt-6 flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center overflow-hidden">
            <img src={company.logo} alt={company.name} className="h-12 w-12 object-cover" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-display text-ink">{company.name}</h1>
            <div className="text-sm text-text-secondary">Company profile</div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-card text-text-secondary">
          <p>{company.overview ?? company.description}</p>
        </div>

        {company.services?.length ? (
          <div className="mt-10">
            <div className="text-lg font-semibold text-ink mb-4">Services</div>
            <div className="grid gap-6 md:grid-cols-2">
              {company.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-border bg-sand p-5 shadow-card"
                >
                  <div className="text-base font-semibold text-ink">{service.title}</div>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {service.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CompanyDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CompaniesList.map((company) => ({
    params: { slug: company.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const company = CompaniesList.find((c) => c.slug === params?.slug);
  return { props: { company } };
};
