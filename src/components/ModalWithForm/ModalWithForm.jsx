import "./ModalWithForm.css";
import closeButton from "../../assets/close-button.svg";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button
          className="modal__close"
          type="button"
          src={closeButton}
          alt="close button"
        ></button>
        <form className="modal__form">
          <div className="modal__input_type_text">
            <label htmlFor="name" className="modal__label">
              Name{" "}
              <input
                className="modal__input"
                type="text"
                id="name"
                placeholder="Name"
              ></input>
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image{" "}
              <input
                className="modal__input"
                type="url"
                id="imageUrl"
                placeholder="Image URL"
              ></input>
            </label>
          </div>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label_type_radio">
              <input className="modal__radio-button" type="radio" id="hot" />
              Hot
            </label>
            <label htmlFor="warm" className="modal__label_type_radio">
              <input className="modal__radio-button" type="radio" id="warm" />
              Warm
            </label>
            <label htmlFor="cold" className="modal__label_type_radio">
              <input className="modal__radio-button" type="radio" id="cold" />
              Cold
            </label>
          </fieldset>
          <button className="modal__submit-button" type="button">
            Add garment
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
