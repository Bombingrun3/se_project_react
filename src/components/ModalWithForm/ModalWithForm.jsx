import "./ModalWithForm.css";
import closeButton from "../../assets/close-button.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  closeModal,
  handleSubmit,
}) {
  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img
            className="modal__close-image"
            src={closeButton}
            alt="close button"
          ></img>
        </button>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
