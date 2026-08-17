import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

function ServiceCard({ title, description, slug }: ServiceCardProps) {
  return (
    <article className="service__item">
      <div className="service__item-content">
        <h3 className="text-center">{title}</h3>

        <p>{description}</p>

        <div className="card__button">
          <Link to={`/services/${slug}`} className="button button-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
