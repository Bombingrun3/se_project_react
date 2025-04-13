import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo}></img>
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
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__avatar"
          alt="Terrence Tegegne"
          src={avatar}
        ></img>
      </div>
    </header>
  );
}

export default Header;
