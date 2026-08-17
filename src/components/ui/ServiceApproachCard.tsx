interface ServiceApproachCardProps {
  title: string;
  content: string;
}

function ServiceApproachCard({ title, content }: ServiceApproachCardProps) {
  return (
    <article className="approach__card">
      <h3 className="text-center">{title}</h3>

      <p>{content}</p>
    </article>
  );
}

export default ServiceApproachCard;
