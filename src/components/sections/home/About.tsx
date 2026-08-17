import { Link } from "react-router-dom";

import aboutImage from "../../../assets/images/site/about-img.jpg";

function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__image">
          <img
            src={aboutImage}
            alt="Gulf Coast Marine Services vessel on the water"
          />
        </div>

        <div className="about__content">
          <h2>Local Service. Professional Care.</h2>

          <p>
            Gulf Coast Marine Services serves boat owners throughout Southwest
            Florida.
          </p>

          <p>
            Operating in a region defined by its waterways, canals, bays, and
            Gulf coastline, we understand that local boat owners have different
            needs depending on their vessel, location, and use.
          </p>

          <p>
            Our approach is straightforward: provide dependable service,
            communicate clearly, and treat every vessel with care.
          </p>
          <Link to={`/about`} className="button button-primary button-about">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
