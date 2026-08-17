import { useParams } from "react-router-dom";

import Header from "../components/layout/Header";
import ServiceHero from "../components/sections/services/ServiceHero";
import ServiceOverview from "../components/sections/services/ServiceOverview";
import ServiceProvide from "../components/sections/services/ServiceProvide";
import ServiceAudience from "../components/sections/services/ServiceAudience";
import ServiceApproach from "../components/sections/services/ServiceApproach";
import ServiceConsiderations from "../components/sections/services/ServiceConsiderations";
import ServiceFAQ from "../components/sections/services/ServiceFAQ";
import Footer from "../components/layout/Footer";

import serviceData from "../data/services";

function Service() {
  const { slug } = useParams();

  const service = serviceData.find((service) => service.slug === slug);

  if (!service) {
    return (
      <main>
        <section>
          <div className="container">
            <h1>Service Not Found</h1>

            <p>The requested service could not be found.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <Header />
      <ServiceHero
        title={service.title}
        description={service.description}
        heroImage={service.heroImage}
      />
      <ServiceOverview overview={service.overview} />
      <ServiceProvide offer={service.offer} />
      <ServiceAudience audience={service.audience} />
      <ServiceApproach approach={service.approach} />
      <ServiceConsiderations considerations={service.considerations} />
      <ServiceFAQ faq={service.faq} />
      <Footer />
    </>
  );
}

export default Service;
