import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

function AddItemModal({ activeModal, closeModal, buttonText, onAddItem }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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

    if (!imageUrl.trim()) {
      alert("Please enter an image URL");
      return;
    }

    onAddItem(name, imageUrl, weather)
      .then(() => {
        setName("");
        setImageUrl("");
        setWeather("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (activeModal === "add-garment") {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [activeModal]);

  return (
    <div className="add-item-modal">
      <ModalWithForm
        title="New Garment"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="add-garment"
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <div className="modal__input_type_text">
          <label className="modal__label">
            Name{" "}
            <input
              className="modal__input"
              type="text"
              id="add-name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label className="modal__label">
            Image{" "}
            <input
              className="modal__input"
              type="url"
              id="add-imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </label>
        </div>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend" required>
            Select the weather type:
          </legend>
          <label className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="add-hot"
              name="temp"
              value="hot"
              checked={weather === "hot"}
              onChange={(e) => setWeather(e.target.value)}
            />
            Hot
          </label>
          <label className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="add-warm"
              name="temp"
              value="warm"
              checked={weather === "warm"}
              onChange={(e) => setWeather(e.target.value)}
            />
            Warm
          </label>
          <label className="modal__label_type_radio">
            <input
              className="modal__radio-button"
              type="radio"
              id="add-cold"
              name="temp"
              value="cold"
              checked={weather === "cold"}
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
