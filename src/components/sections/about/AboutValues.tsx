import ValueCard from "../../ui/ValueCard";
import valueData from "../../../data/values";

function AboutValues() {
  return (
    <section id="our-values">
      <div className="container">
        <h2 className="text-center">What We Value</h2>

        <div className="grid__values">
          {valueData.map((value) => (
            <ValueCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
