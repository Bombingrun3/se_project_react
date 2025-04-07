import "./ItemModal.css";
import previewCloseButton from "../../assets/light-close-button.svg";

function ItemModal({ activeModal, closeModal, card }) {
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
          ></img>
        </button>
        <img className="modal__image" src={card.link} alt={card.name}></img>
        <p className="modal__item-name">{card.name}</p>
        <p className="modal__item-temp">{card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
// onClose (works the same way as the ModalWithForm)
// The item card data that you need to render
