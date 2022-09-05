import './contact.css';
import { Helmet } from 'react-helmet-async';
import Form from '../../ui/Form/Form';
import Title from '../../ui/Title/Title';

function Contact() {
  return (
    <section className="contact">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Our contacts" />
      </Helmet>
      <Title>Got a Question or Inquiry?</Title>
      <iframe
        className="contact__map"
        title="Google map"
        src="https://www.google.com/maps/d/embed?mid=1qZyr-BwfF8pnoKUjw5673octVCkmJ-o&ehbc=2E312F"
      />
      <div className="contact__content-wrapper">
        <Form />
        <div className="contact__contacts-wrapper">
          <div className="contact__info">
            <h2 className="contact__info-title subtitle">Contact Info</h2>
            <p className="contact__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit velit
              justo.
            </p>
            <div className="contact__info-contacts-wrapper">
              <p className="contact__info-text contact__info-text_type_accent">
                email:&nbsp;
                <a
                  className="contact__info-link contact__info-link_type_accent link"
                  href="mailto:info@display.com"
                >
                  info@display.com
                </a>
              </p>
              <p className="contact__info-text contact__info-text_type_accent">
                phone:&nbsp;
                <a className="contact__info-link link" href="tel:+13062224545">
                  1.306.222.4545
                </a>
              </p>
            </div>
            <p className="contact__info-text">
              222 2nd Ave South
              <br />
              Saskabush, SK S7M 1T6
            </p>
          </div>
          <div className="contact__hours">
            <h2 className="contact__hours-title subtitle">Store Hours</h2>
            <dl className="contact__hours-list list">
              <dt className="contact__hours-weekdays">Monday - Thursday</dt>
              <dd className="contact__hours-time">8 am - 5 pm</dd>
              <dt className="contact__hours-weekdays">Friday</dt>
              <dd className="contact__hours-time">8 am - 6 pm</dd>
              <dt className="contact__hours-weekdays">Saturday</dt>
              <dd className="contact__hours-time">9 am - 5 pm</dd>
              <dt className="contact__hours-weekdays">Sunday & Holidays</dt>
              <dd className="contact__hours-time">Closed</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
