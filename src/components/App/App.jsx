import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <div className="app__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} onCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        closeModal={closeModal}
      >
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
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        closeModal={closeModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
