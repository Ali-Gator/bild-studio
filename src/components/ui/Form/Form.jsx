import './form.css';
import { useEffect, useState } from 'react';
import { loadScriptByURL, useFormWithValidation } from '../../../utils/utils';
import { inputsData, RECAPTCHA_SITE_KEY } from '../../../utils/constants';
import Input from '../Input/Input';

function Form() {
  const [isFormSent, setIsFormSent] = useState(false);
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const renderInputs = (inputs) =>
    inputs.map((input) => (
      <Input
        key={input.name}
        inputData={input}
        errors={errors}
        onChange={handleChange}
      />
    ));

  const handleSubmit = (e) => {
    e.preventDefault();

    window.grecaptcha.ready(async () => {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'submit',
      });
      const bodyToSend = { ...values, captchaToken: token };
      // eslint-disable-next-line no-console
      console.log(bodyToSend);
      setIsFormSent(true);
    });
  };

  useEffect(() => {
    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    );
  }, []);

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
        {renderInputs(inputsData)}
        <button
          className="form__button button"
          type="submit"
          disabled={!isValid}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default Form;
