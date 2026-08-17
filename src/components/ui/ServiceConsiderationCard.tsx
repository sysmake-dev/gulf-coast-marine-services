interface ServiceConsiderationCardProps {
  consideration: string;
}

function ServiceConsiderationCard({
  consideration,
}: ServiceConsiderationCardProps) {
  return (
    <article className="service-consider__item">
      <span className="service-consider__marker" aria-hidden="true">
        ●
      </span>

      <p>{consideration}</p>
    </article>
  );
}

export default ServiceConsiderationCard;
