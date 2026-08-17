interface ServiceProvideCardProps {
  offer: string;
}

function ServiceProvideCard({ offer }: ServiceProvideCardProps) {
  return (
    <article className="service-offer__item">
      <span className="service-offer__marker" aria-hidden="true">
        ●
      </span>

      <p>{offer}</p>
    </article>
  );
}

export default ServiceProvideCard;
