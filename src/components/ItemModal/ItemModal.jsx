import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import previewCloseButton from "../../assets/light-close-button.svg";

function ItemModal({ activeModal, closeModal, card }) {
  const hasCardData = card && card.link && card.name && card.weather;
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img
            className="modal__close-image"
            src={previewCloseButton}
            alt="close button"
          />
        </button>
        {hasCardData ? (
          <>
            <img className="modal__image" src={card.link} alt={card.name}></img>
            <p className="modal__item-name">{card.name}</p>
            <p className="modal__item-temp">{`Weather: ${card.weather}`}</p>
          </>
        ) : (
          <p>No item selected</p>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
// onClose (works the same way as the ModalWithForm)
// The item card data that you need to render
