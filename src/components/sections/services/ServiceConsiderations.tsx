import ServiceConsiderationCard from "../../ui/ServiceConsiderationCard";

interface ServiceConsiderationsProps {
  considerations: string[];
}

function ServiceConsiderations({ considerations }: ServiceConsiderationsProps) {
  return (
    <section id="service__consider">
      <div className="container">
        <h2>Considerations</h2>

        <div className="service-consider__list">
          {considerations.map((item) => (
            <ServiceConsiderationCard key={item} consideration={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceConsiderations;
