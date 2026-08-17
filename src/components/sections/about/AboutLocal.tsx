import aboutLocalImage from "../../../assets/images/about/built-for-swfl.jpg";

function AboutLocal() {
  return (
    <section id="about-local">
      <div className="about-local__container">
        <div className="about-local__image">
          <img
            src={aboutLocalImage}
            alt="Gulf Coast Marine Services vessel on the water"
          />
        </div>

        <div className="about-local__content">
          <h2>Built for Southwest Florida</h2>

          <p>
            Southwest Florida's coastal environment can be demanding on vessels.
            Saltwater, humidity, intense sunlight, marine growth, and changing
            weather conditions can all contribute to wear and buildup.
          </p>

          <p>
            Our services are designed with these local conditions in mind,
            helping boat owners maintain their vessels in the environment where
            they are actually used and stored.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutLocal;
