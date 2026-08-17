import aboutImage from "../../../assets/images/site/about-img.jpg";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="about__container">
        <div className="about__image">
          <img
            src={aboutImage}
            alt="Gulf Coast Marine Services vessel on the water"
          />
        </div>

        <div className="about__content">
          <h2>Who We Are</h2>

          <p>
            Gulf Coast Marine Services is a locally focused marine service
            company serving boat owners throughout Southwest Florida. We provide
            routine care, maintenance, preparation, and other practical services
            designed around the needs of each vessel.
          </p>

          <p>
            Our goal is straightforward: provide dependable service, communicate
            clearly, and treat every vessel with the attention it deserves.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
