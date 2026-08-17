interface ServiceAudienceProps {
  audience: string;
}

function ServiceAudience({ audience }: ServiceAudienceProps) {
  return (
    <section id="service__audience">
      <div className="container">
        <h2>Who It's For</h2>

        <p>{audience}</p>
      </div>
    </section>
  );
}

export default ServiceAudience;
