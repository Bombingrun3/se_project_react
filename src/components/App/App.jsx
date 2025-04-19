import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

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

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="app__content">
            <Header handleAddClick={handleAddClick} weatherData={weatherData} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                  />
                }
              />{" "}
            </Routes>
            <Footer />
          </div>
          <ModalWithForm
            title="New Garment"
            buttonText="Add Garment"
            activeModal={activeModal === "add-garment"}
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
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label htmlFor="hot" className="modal__label_type_radio">
                <input
                  className="modal__radio-button"
                  type="radio"
                  id="hot"
                  name="temp"
                />
                Hot
              </label>
              <label htmlFor="warm" className="modal__label_type_radio">
                <input
                  className="modal__radio-button"
                  type="radio"
                  id="warm"
                  name="temp"
                />
                Warm
              </label>
              <label htmlFor="cold" className="modal__label_type_radio">
                <input
                  className="modal__radio-button"
                  type="radio"
                  id="cold"
                  name="temp"
                />
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            activeModal={activeModal}
            closeModal={closeModal}
            card={selectedCard}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
