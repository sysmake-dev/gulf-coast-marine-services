import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <article className="value__item">
      <div className="value__item-icon">
        <Icon size={35} strokeWidth={1.5} />
      </div>
      <div className="value__item-content">
        <h3 className="text-center">{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default ValueCard;
