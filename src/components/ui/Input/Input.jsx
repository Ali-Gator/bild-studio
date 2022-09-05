import './input.css';

function Input({ inputData, errors, onChange }) {
  const { addClassName, type, name, placeholder, isRequired } = inputData;

  return (
    <>
      {type === 'textarea' ? (
        <textarea
          className={`form__input ${addClassName}`}
          aria-label={name}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          onChange={onChange}
        />
      ) : (
        <input
          className={`form__input ${addClassName}`}
          aria-label={name}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          type={type}
          onChange={onChange}
        />
      )}
      {errors[name] && <p className="form__error">{errors[name]}</p>}
    </>
  );
}

export default Input;
