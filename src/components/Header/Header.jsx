import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo}></img>
      <p className="header__date-location">April 01, Evansville</p>
      <button className="header__add-clothes-button">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Username</p>
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

// A logo
// The current date that can be generated using the Date() object: javascript const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
// The current location (see Section 5 for details)
// An “Add Clothes” button that opens ModalWithForm
// The user’s name and avatar (both are hardcoded at this point)
