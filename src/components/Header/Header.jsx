import { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header({
  handleAddClick,
  weatherData,
  handleRegisterClick,
  handleLoginClick,
}) {
  const { currentUser, firstLetter } = useContext(CurrentUserContext);

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
        {currentUser ? (
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
                {currentUser?.avatar ? (
                  <img
                    className="header__avatar"
                    alt={currentUser?.name}
                    src={currentUser?.avatar}
                  ></img>
                ) : (
                  <p className="header__avatar-letter">{firstLetter}</p>
                )}
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
