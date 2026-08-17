import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section id="about-cta">
      <div className="container cta__container--about">
        <h1>Ready to Care for Your Vessel?</h1>

        <p>
          Whether you need routine maintenance, seasonal preparation, cleaning,
          or another marine service, Gulf Coast Marine Services can help
          determine what your vessel needs.
        </p>

        <div className="hero__buttons">
          <Link to="/#services" className="button button-primary">
            Explore Our Services →
          </Link>
          <Link to="/#contact" className="button button-secondary">
            Request Service →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
