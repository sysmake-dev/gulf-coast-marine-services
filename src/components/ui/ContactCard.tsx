import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  type: string;
  content: string;
}

function ContactCard({ icon: Icon, type, content }: ContactCardProps) {
  return (
    <div className="contact__info-card">
      <div className="contact__info-icon">
        <Icon size={35} strokeWidth={1.5} />
      </div>
      <div className="contact__info-type">
        <p className="bold">{type}</p>
      </div>
      <div className="contact__info-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ContactCard;
