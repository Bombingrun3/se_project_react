import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { addItem } from "../../utils/Api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState([]);

  const handleAddItemSubmit = (name, imageUrl, weather, temperature) => {
    const newItem = {
      _id: Date.now(),
      name: name,
      weather: weather,
      imageUrl: imageUrl,
      temperature: temperature,
    };

    setClothingItems([...clothingItems, newItem]);

    closeModal();
  };

  const handleDeleteCard = (item) => {
    console.log("Item to delete:", item);
    console.log("Current items:", clothingItems);
    setClothingItems(
      clothingItems.filter((clothingItem) => clothingItem._id !== item._id)
    );
    closeModal();
  };

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

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <BrowserRouter basename="/se_project_react/">
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
                    clothingItems={clothingItems}
                  />
                }
              />
              {""}
              <Route
                path="/profile"
                element={
                  <Profile
                    handleAddClick={handleAddClick}
                    onCardClick={handleCardClick}
                    defaultClothingItems={clothingItems}
                    handleDeleteCard={handleDeleteCard}
                  />
                }
              ></Route>
            </Routes>
            <Footer />
          </div>
          <ItemModal
            activeModal={activeModal}
            closeModal={closeModal}
            card={selectedCard}
            handleDeleteCard={handleDeleteCard}
          />
          <AddItemModal
            title="New Garment"
            buttonText="Add Garment"
            activeModal={activeModal === "add-garment"}
            closeModal={closeModal}
            onAddItem={handleAddItemSubmit}
          ></AddItemModal>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
