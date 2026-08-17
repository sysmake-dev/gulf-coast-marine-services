interface ServiceAreaCardProps {
  area: string;
}

function ServiceAreaCard({ area }: ServiceAreaCardProps) {
  return (
    <article className="service-area__item">
      <span className="service-area__marker" aria-hidden="true">
        ●
      </span>

      <h3>{area}</h3>
    </article>
  );
}

export default ServiceAreaCard;
