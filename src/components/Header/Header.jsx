import "./Header.css";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  currentUser,
  handleRegisterClick,
  handleLoginClick,
  handleLogout,
  firstLetter,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo}></img>
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__profile-container">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              className="header__add-clothes-button"
              type="button"
              onClick={handleAddClick}
            >
              + Add Clothes
            </button>
            <Link to="/profile">
              <div className="header__user-container">
                <p className="header__username">
                  {currentUser?.name || "User"}
                </p>
                <img
                  className="header__avatar"
                  alt="avatar"
                  src={currentUser?.avatar || firstLetter}
                ></img>
              </div>
            </Link>
          </>
        ) : (
          <div className="header__auth-buttons">
            <button
              className="header__button"
              type="button"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
            <button
              className="header__button"
              type="button"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
