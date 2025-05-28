import { useContext } from "react";
import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import previewCloseButton from "../../assets/light-close-button.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, closeModal, card, handleDeleteCard }) {
  const { currentUser } = useContext(CurrentUserContext);

  const hasCardData = card && card.imageUrl && card.name && card.weather;

  const isOwn = card.owner === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;

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
                className={itemDeleteButtonClassName}
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
