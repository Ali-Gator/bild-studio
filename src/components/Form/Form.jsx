import './form.css';
import { useEffect, useState } from 'react';
import { handleValidation, loadScriptByURL } from '../../utils/utils';
import { RECAPTCHA_SITE_KEY } from '../../utils/constants';

function Form() {
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);
  useEffect(() => {
    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const errorObj = handleValidation(formData);
    setErrors(errorObj);

    if (Object.keys(errorObj).length !== 0) {
      return;
    }

    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'submit',
      });
      const bodyToSend = { ...formData, captchaToken: token };
      // eslint-disable-next-line no-console
      console.log(bodyToSend);
      setIsFormSent(true);
    });
  };

  return isFormSent ? (
    <p className="form__success-text">
      Your inquiry was successfully sent to console.log
    </p>
  ) : (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title subtitle">Contact Form</h2>
      <p className="form__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.
      </p>
      <div className="form__input-wrapper">
        <input
          className="form__input form__input_type_small"
          aria-label="name"
          name="name"
          placeholder="Name"
          required
          type="text"
        />
        {errors.name && <p className="form__error">{errors.name}</p>}
        <input
          className="form__input form__input_type_small"
          aria-label="email"
          name="email"
          placeholder="Email Address"
          required
          type="email"
        />
        {errors.email && <p className="form__error">{errors.email}</p>}
        <input
          className="form__input form__input_type_small"
          aria-label="subject"
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <textarea
          className="form__input form__input_type_big"
          aria-label="message"
          name="message"
          required
        />
        {errors.message && <p className="form__error">{errors.message}</p>}
        <button className="form__button button" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default Form;
