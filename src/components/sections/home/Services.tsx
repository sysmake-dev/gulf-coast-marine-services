import ServiceCard from "../../ui/ServiceCard";
import serviceData from "../../../data/services";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="text-center">Marine Services for Your Vessel</h2>

        <p>
          Maintaining a boat requires consistent care. Gulf Coast Marine
          Services provides a range of marine services designed around the
          practical needs of boat owners.
        </p>

        <p>
          From routine cleaning and detailing to maintenance and preparation,
          each service is performed with attention to the condition of your
          vessel and the requirements of the job.
        </p>

        <div className="grid__services">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
