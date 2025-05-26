import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import previewCloseButton from "../../assets/light-close-button.svg";

function ItemModal({ activeModal, closeModal, card, handleDeleteCard }) {
  const hasCardData =
    card && <card className="imageUrl"></card> && card.name && card.weather;
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
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
            <img
              className="modal__image"
              src={card.imageUrl}
              alt={card.name}
            ></img>
            <div className="modal__footer">
              <div className="modal__item-info">
                <p className="modal__item-name">{card.name}</p>
                <p className="modal__item-temp">{`Weather: ${card.weather}`}</p>
              </div>
              <button
                className="modal__delete-button"
                type="button"
                onClick={() => handleDeleteCard(card)}
              >
                Delete item
              </button>
            </div>
          </>
        ) : (
          <p>No item selected</p>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
