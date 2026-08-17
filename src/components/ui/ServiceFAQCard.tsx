import { useState } from "react";

interface ServiceFAQCardProps {
  question: string;
  answer: string;
}

function ServiceFAQCard({ question, answer }: ServiceFAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  return (
    <article className="faq__item">
      <button
        type="button"
        className="faq__question"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="faq__question-text">{question}</span>

        <span className="faq__indicator" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && <p className="faq__answer">{answer}</p>}
    </article>
  );
}

export default ServiceFAQCard;
