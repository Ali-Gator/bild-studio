import './popup.css';

function Popup({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup__wrapper">
        <button
          className="popup__close-button"
          type="button"
          aria-label="close-popup"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}

export default Popup;
