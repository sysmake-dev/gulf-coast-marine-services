import ContactCard from "../../ui/ContactCard";
import contactInfo from "../../../data/contact";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact__header">
          <h2>Contact Gulf Coast Marine Services</h2>

          <p>
            Have a question about a service or need to discuss what your vessel
            requires? Get in touch with Gulf Coast Marine Services.
          </p>

          <p>
            You can contact us directly or submit the form below and we will
            review your inquiry.
          </p>
        </div>

        <form className="contact__form">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>

          <div className="contact__field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" name="phone" />
          </div>

          <div className="contact__field">
            <label htmlFor="service">Service</label>

            <select id="service" name="service" required>
              <option value="">Select a Service</option>
              <option value="boat-detailing">Boat Detailing</option>
              <option value="bottom-cleaning">Bottom Cleaning</option>
              <option value="dockside-service">Dockside Service</option>
              <option value="marine-maintenance">Marine Maintenance</option>
              <option value="boat-preparation">Boat Preparation</option>
              <option value="seasonal-service">Seasonal Service</option>
              <option value="general-inquiry">General Inquiry</option>
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your vessel and what you need."
              required
            />
          </div>

          <button type="submit">Send Inquiry</button>
        </form>

        <div className="contact__info">
          {contactInfo.map((info) => (
            <ContactCard
              key={info.id}
              icon={info.icon}
              type={info.type}
              content={info.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
