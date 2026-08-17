import ServiceFAQCard from "../../ui/ServiceFAQCard";

interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faq: ServiceFAQ[];
}

function ServiceFAQ({ faq }: ServiceFAQProps) {
  return (
    <section id="service__faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq__list">
          {faq.map((item) => (
            <ServiceFAQCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceFAQ;
