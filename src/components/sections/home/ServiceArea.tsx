import ServiceAreaCard from "../../ui/ServiceAreaCard";
import serviceArea from "../../../data/serviceArea";

function ServiceArea() {
  return (
    <section id="service-area">
      <div className="container">
        <h2 className="text-center">Serving Southwest Florida</h2>

        <p>
          Gulf Coast Marine Services provides marine services to boat owners
          throughout Southwest Florida. Our service area covers communities
          across the region, making dependable local service accessible to boat
          owners in the areas we serve.
        </p>

        <div className="service-area__list">
          {serviceArea.map((area) => (
            <ServiceAreaCard key={area.id} area={area.area} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
