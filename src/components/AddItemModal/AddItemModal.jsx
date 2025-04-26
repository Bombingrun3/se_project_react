import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

function AddItemModal({ activeModal, closeModal, buttonText, onAddItem }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weather, setWeather] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!weather) {
      alert("Please select a weather type");
      return;
    }

    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    if (!link.trim()) {
      alert("Please enter an image URL");
      return;
    }

    onAddItem(name, link, weather);

    setName("");
    setLink("");
    setWeather("");
    closeModal();
  };

  return (
    <div className="add-item-modal">
      <ModalWithForm
        title="New Garment"
        closeModal={closeModal}
        activeModal={activeModal}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <div className="modal__input_type_text">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              className="modal__input"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              className="modal__input"
              type="url"
              id="imageUrl"
              placeholder="Image URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            ></input>
          </label>
        </div>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend" required>
            Select the weather type:
          </legend>
          <label htmlFor="hot" className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="hot"
              name="temp"
              value="hot"
              onChange={(e) => setWeather(e.target.value)}
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="warm"
              name="temp"
              value="warm"
              onChange={(e) => setWeather(e.target.value)}
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="cold"
              name="temp"
              value="cold"
              onChange={(e) => setWeather(e.target.value)}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default AddItemModal;
