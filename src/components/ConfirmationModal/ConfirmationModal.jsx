import "./ConfirmationModal.css";
import "../ModalWithForm/ModalWithForm.css";
import closeButton from "../../assets/close-button.svg";

function ConfirmationModal({ activeModal, closeModal, onConfirm, itemName }) {
  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirmation">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img
            className="modal__close-image"
            src={closeButton}
            alt="close button"
          />
        </button>
        <p className="modal__confirmation-message">
          Are you sure you want to delete "{itemName}"?
          <br></br>This action is irreversible.
        </p>
        <div className="modal__confirmation-buttons">
          <button
            className="modal__button modal__button_type_delete"
            type="button"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            className="modal__button modal__button_type_cancel"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
