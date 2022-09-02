import { EMAIL_REGEXP, messages } from './constants';

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

export const handleValidation = (fields) => {
  const errors = {};
  const { name, email, message } = fields;

  if (!name) {
    errors.name = messages.NO_EMPTY;
  }
  if (typeof name !== 'undefined') {
    if (!name.match(/^[a-zA-Z]+$/)) {
      errors.name = 'Only letters';
    }
  }
  if (!email) {
    errors.email = messages.NO_EMPTY;
  }
  if (typeof email !== 'undefined') {
    if (!email.match(EMAIL_REGEXP)) {
      errors.email = messages.NO_VALID_EMAIL;
    }
  }
  if (!message) {
    errors.message = messages.NO_EMPTY;
  }
  if (typeof email !== 'undefined') {
    if (message.length > 1000) {
      errors.message = messages.TOO_LONG_TEXT;
    }
  }
  return errors;
};
