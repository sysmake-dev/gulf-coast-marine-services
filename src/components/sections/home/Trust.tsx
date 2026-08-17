import TrustCard from "../../ui/TrustCard";
import trustData from "../../../data/trust";

function Trust() {
  return (
    <section id="why-us">
      <div className="container">
        <h2 className="text-center">Why Gulf Coast Marine Services?</h2>

        <div className="grid__trust">
          {trustData.map((trust) => (
            <TrustCard
              key={trust.id}
              icon={trust.icon}
              title={trust.title}
              description={trust.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
