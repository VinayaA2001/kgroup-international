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
    <section className="pt-28 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {service.title}
          </h1>
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-3"></span>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Description */}
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p>{service.description}</p>
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
