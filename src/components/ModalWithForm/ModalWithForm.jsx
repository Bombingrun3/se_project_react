import "./ModalWithForm.css";
import closeButton from "../../assets/close-button.svg";

function ModalWithForm({ children, title, buttonText }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          src={closeButton}
          alt="close button"
        ></button>
        <form className="modal__form">
          {children}
          <button className="modal__submit-button" type="button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
//
// The form’s title.
// The button that closes the modal.
// The <form> tag itself.
// The button that submits the modal.
