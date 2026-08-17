interface ServiceOverviewProps {
  overview: string;
}

function ServiceOverview({ overview }: ServiceOverviewProps) {
  return (
    <section id="service__overview">
      <div className="container">
        <h2>Service Overview</h2>

        <p>{overview}</p>
      </div>
    </section>
  );
}

export default ServiceOverview;
