import Header from "../components/layout/Header";
import AboutHero from "../components/sections/about/AboutHero";
import AboutUs from "../components/sections/about/AboutUs";
import AboutApproach from "../components/sections/about/AboutApproach";
import AboutLocal from "../components/sections/about/AboutLocal";
import AboutValues from "../components/sections/about/AboutValues";
import AboutCTA from "../components/sections/about/AboutCTA";
import Footer from "../components/layout/Footer";

import aboutData from "../data/about";

function About() {
  const about = aboutData[0];

  return (
    <>
      <Header />
      <AboutHero />
      <AboutUs />
      <AboutApproach approach={about.approach} />
      <AboutLocal />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </>
  );
}

export default About;
