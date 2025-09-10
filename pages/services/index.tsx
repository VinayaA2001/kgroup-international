import { ServicesList } from "../../data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="pt-28 py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block">
          Our Services
          <span className="block w-16 h-1 bg-red-600 mx-auto mt-2"></span>
        </h2>
        <p className="mt-4 text-gray-600">
          Delivering impactful solutions with a focus on quality and client satisfaction.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {ServicesList.map((service) => (
          <Link
            key={service.slug} 
            href={`/services/${service.slug}`}
            className="group block rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden border"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}