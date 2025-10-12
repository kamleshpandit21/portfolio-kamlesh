
function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <span className="gradient-text">Contact</span> Me
        </h2>

        <form className="contact-form mx-auto row g-3" data-aos="fade-up">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control neon-input"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control neon-input"
              placeholder="Your Email"
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control neon-input"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-glow">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
