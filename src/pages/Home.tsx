import Header from "../components/layout/Header";
import Hero from "../components/sections/home/Hero";
import Services from "../components/sections/home/Services";
import About from "../components/sections/home/About";
import Trust from "../components/sections/home/Trust";
import ServiceArea from "../components/sections/home/ServiceArea";
import CTA from "../components/sections/home/CTA";
import Contact from "../components/sections/home/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Trust />
      <ServiceArea />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
