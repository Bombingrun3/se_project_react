import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { getItems, addItem, deleteItem } from "../../utils/Api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [itemToDelete, setItemToDelete] = useState(null);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState([]);

  const handleAddItemSubmit = (name, link, weather) => {
    const newItem = {
      name,
      weather,
      link,
    };
    return addItem(newItem)
      .then((addedItem) => {
        setClothingItems([addedItem, ...clothingItems]);
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding items:", error);
      });
  };

  const handleDeleteCard = (item) => {
    setItemToDelete(item);
    setActiveModal("confirmation");
  };

  const handleConfirmDelete = () => {
    if (!itemToDelete) return;

    deleteItem(itemToDelete._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter(
            (clothingItem) => clothingItem._id !== itemToDelete._id
          )
        );
        setItemToDelete(null);
        closeModal();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
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
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  return (
    <HashRouter>
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
            activeModal={activeModal}
            closeModal={closeModal}
            onAddItem={handleAddItemSubmit}
          ></AddItemModal>
          <ConfirmationModal
            activeModal={activeModal === "confirmation"}
            closeModal={closeModal}
            onConfirm={handleConfirmDelete}
            itemName={itemToDelete?.name || ""}
          ></ConfirmationModal>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
