interface ServiceHeroProps {
  title: string;
  description: string;
  heroImage: string;
}

function ServiceHero({ title, description, heroImage }: ServiceHeroProps) {
  return (
    <section
      id="service-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${heroImage})`,
      }}
    >
      <div className="container">
        <h1 className="text-header">{title}</h1>

        <p>{description}</p>
      </div>
    </section>
  );
}

export default ServiceHero;
