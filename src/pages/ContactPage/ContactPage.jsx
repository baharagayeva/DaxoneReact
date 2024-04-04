import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageTitle={"Contact"} />

      <section className="contact-info-section">
        <div className="custom-container">
          <div className="contact-info-wrap">
            <h3>Contact Info</h3>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single-contact-info">
                  <i className="fa-solid fa-location-dot"></i>
                  <h4>Our Address</h4>
                  <p>77 seventh Street, USA.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-contact-info">
                  <ul>
                    <li>
                      <i className="fa-solid fa-mobile"></i>
                      <span className="ps-1">716-298-1822</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope"></i>
                      <a className="ps-1" href="#">
                        {" "}
                        info@example.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-contact-info">
                  <i className="fa-regular fa-clock"></i>
                  <h4>Openning Hour</h4>
                  <p>Monday - Friday. 9:00am - 5:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-wrap">
            <h3>Get In Touch</h3>
            <div className="contact-from">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-lg-6">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="col-lg-12">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="col-lg-12">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className="google-map-wrap">
            <iframe
              className="frame w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.054259310053!2d49.85893657588601!3d40.40764875619221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dd63c802d9f%3A0xd7df29d9b942d8a6!2zQ29kZWxhbmRpYSBQcm9xcmFtbGHFn2TEsXJtYSBNyZlya8mZemk!5e0!3m2!1saz!2saz!4v1691157988826!5m2!1saz!2saz"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
