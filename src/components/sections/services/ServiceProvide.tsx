import ServiceProvideCard from "../../ui/ServiceProvideCard";

interface ServiceProvideProps {
  offer: string[];
}

function ServiceProvide({ offer }: ServiceProvideProps) {
  return (
    <section id="service__provide">
      <div className="container">
        <h2>What's Included</h2>

        <div className="service-offer__list">
          {offer.map((item) => (
            <ServiceProvideCard key={item} offer={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceProvide;
