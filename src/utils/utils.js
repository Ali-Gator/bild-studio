import { useCallback, useState } from 'react';
import { messages } from './constants';

export const loadScriptByURL = (id, url, callback) => {
  const isScriptExist = document.getElementById(id);

  if (!isScriptExist) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    script.onload = () => {
      if (callback) callback();
    };
    document.body.appendChild(script);
  }

  if (isScriptExist && callback) callback();
};

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const emailRegExp =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (event) => {
    const { target } = event;
    const { name, value, validationMessage } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest('form').checkValidity());
    if (name === 'email' && !emailRegExp.test(value) && !validationMessage) {
      setErrors({
        ...errors,
        [name]: messages.NO_VALID_EMAIL,
      });
      setIsValid(false);
    }
    if (name === 'message' && value.length > 1000 && !validationMessage) {
      setErrors({
        ...errors,
        [name]: messages.TOO_LONG_TEXT,
      });
      setIsValid(false);
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
