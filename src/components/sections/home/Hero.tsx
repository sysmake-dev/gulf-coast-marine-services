import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div className="container hero__container">
        <h2 className="text-header">
          Marine Services Built for Southwest Florida
        </h2>
        <p>
          Professional marine services for boat owners throughout Southwest
          Florida.
        </p>
        <p>
          Gulf Coast Marine Services provides reliable, detail-oriented marine
          care designed to help keep your vessel clean, maintained, and ready
          for the water.
        </p>

        <div className="hero__buttons">
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
            Request Service →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
