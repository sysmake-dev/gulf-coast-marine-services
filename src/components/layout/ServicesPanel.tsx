import { useState } from "react";
import { ChevronDown } from "lucide-react";
import services from "../../data/services";

function ServicesPanel({ onCloseMenu }: { onCloseMenu: () => void }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function togglePanel(): void {
    setIsOpen((open) => !open);
  }

  function closePanel(): void {
    setIsOpen(false);
  }

  function handleServiceClick(): void {
    closePanel();
    onCloseMenu();
  }

  return (
    <div className="nav__services">
      <button
        className="nav__services-toggle"
        aria-expanded={isOpen}
        onClick={togglePanel}
      >
        <span>Services</span>

        <ChevronDown
          className={
            isOpen ? "nav__services-arrow active" : "nav__services-arrow"
          }
          aria-hidden="true"
        />
      </button>

      <div className={isOpen ? "services__panel active" : "services__panel"}>
        <ul>
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`/gulf-coast-marine-services/#/services/${service.slug}`}
                onClick={handleServiceClick}
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesPanel;
