import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { register, login, checkToken } from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { getItems, addItem, deleteItem } from "../../utils/Api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleAddItemSubmit = (name, imageUrl, weather) => {
    const newItem = {
      name,
      weather,
      imageUrl,
    };
    return addItem(newItem)
      .then((addedItem) => {
        setClothingItems([addedItem, ...clothingItems]);
        closeModal();
        return addedItem;
      })
      .catch((error) => {
        console.error("Error adding items:", error);
        throw error;
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
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          setIsLoggedIn(true);
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
        });
    }
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

  const firstLetter = currentUser?.name
    ? currentUser.name[0].toUpperCase()
    : "U";

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    register({ email, password, name, avatar })
      .then((data) => {
        return login({ email, password });
      })
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          return checkToken();
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeModal();
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleLogin = ({ email, password }) => {
    return login({ email, password })
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          return checkToken();
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeModal();
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleEditProfile = () => {};

  return (
    <HashRouter>
      <CurrentUserContext.Provider
        value={{ currentUser, handleLogin, handleLogout, firstLetter }}
      >
        <div className="app">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <div className="app__content">
              <Header
                handleAddClick={handleAddClick}
                handleRegisterClick={handleRegisterClick}
                handleLoginClick={handleLoginClick}
                weatherData={weatherData}
                isLoggedIn={isLoggedIn}
              />
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
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      element={Profile}
                      isLoggedIn={isLoggedIn}
                      handleAddClick={handleAddClick}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleDeleteCard={handleDeleteCard}
                      handleLogout={handleLogout}
                      firstLetter={firstLetter}
                    />
                  }
                />
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
            <RegisterModal
              activeModal={activeModal}
              closeModal={closeModal}
              buttonText="Sign Up"
              onRegister={handleRegister}
            ></RegisterModal>
            <LoginModal
              activeModal={activeModal}
              closeModal={closeModal}
              buttonText="Log in"
            />
            <EditProfileModal
              activeModal={activeModal}
              closeModal={closeModal}
              buttonText="Log in"
              handleEditProfile={handleEditProfile}
            />
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </CurrentUserContext.Provider>
    </HashRouter>
  );
}

export default App;
