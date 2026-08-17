import React from "react";
import ServiceApproachCard from "../../ui/ServiceApproachCard";

interface ServiceApproach {
  id: string;
  title: string;
  content: string;
}

interface ServiceApproachProps {
  approach: ServiceApproach[];
}

function ServiceApproach({ approach }: ServiceApproachProps) {
  return (
    <section id="service__approach">
      <div className="container">
        <h2 className="text-center">Our Approach</h2>

        <div className="list__approach">
          <div className="approach__step">
            {approach.map((step) => (
              <React.Fragment key={step.id}>
                <ServiceApproachCard
                  title={step.title}
                  content={step.content}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceApproach;
