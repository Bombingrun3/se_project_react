import "./Header.css";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <header className="header">
      <Link path="/">
        <img className="header__logo" alt="logo" src={logo}></img>
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        className="header__add-clothes-button"
        type="button"
        onClick={handleAddClick}
      >
        + Add Clothes
      </button>
      <Link path="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img
            className="header__avatar"
            alt="Terrence Tegegne"
            src={avatar}
          ></img>
        </div>
      </Link>
    </header>
  );
}

export default Header;
