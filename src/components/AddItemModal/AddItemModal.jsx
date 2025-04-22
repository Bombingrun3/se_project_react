import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

function AddItemModal({ activeModal, closeModal, buttonText, onAddItem }) {
  const [nameInput, setNameInput] = useState("");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [weatherTypeInput, setWeatherTypeInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: nameInput,
      imageUrl: imageUrlInput,
      weather: weatherTypeInput,
    };
    onAddItem(newItem)
      .then(() => {
        setNameInput("");
        setImageUrlInput("");
        setWeatherTypeInput("");
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
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
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            ></input>
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              className="modal__input"
              type="url"
              id="imageUrl"
              placeholder="Image URL"
              value={imageUrlInput}
              onChange={(e) => setImageUrlInput(e.target.value)}
            ></input>
          </label>
        </div>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="hot"
              name="temp"
              value="hot"
              onChange={(e) => setWeatherTypeInput(e.target.value)}
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
              onChange={(e) => setWeatherTypeInput(e.target.value)}
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
              onChange={(e) => setWeatherTypeInput(e.target.value)}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default AddItemModal;
