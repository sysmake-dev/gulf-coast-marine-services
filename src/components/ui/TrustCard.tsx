import type { LucideIcon } from "lucide-react";

interface TrustCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function TrustCard({ icon: Icon, title, description }: TrustCardProps) {
  return (
    <article className="trust__item">
      <div className="trust__item-icon">
        <Icon size={35} strokeWidth={1.5} />
      </div>
      <div className="trust__item-content">
        <h3 className="text-center">{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default TrustCard;
