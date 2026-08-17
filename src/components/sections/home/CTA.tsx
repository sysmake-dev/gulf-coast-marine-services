import { Link } from "react-router-dom";

function CTA() {
  return (
    <section id="cta">
      <div className="container cta__container">
        <h2 className="text-header">Care for Your Vessel Starts Here</h2>

        <p>
          Whether your boat needs routine care, seasonal preparation, or a
          specific marine service, Gulf Coast Marine Services is ready to help.
        </p>

        <p>
          Explore our services or contact us to discuss what your vessel needs.
        </p>

        <div className="cta__buttons">
          <Link
            to={{ pathname: "/", hash: "#services" }}
            className="button button-primary"
          >
            Explore Our Services →
          </Link>

          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className="button button-secondary"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
