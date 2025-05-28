import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ handleEditProfileClick }) {
  const { currentUser, handleLogout, firstLetter } =
    useContext(CurrentUserContext);
  return (
    <section className="sidebar">
      <div className="sidebar__user">
        {currentUser?.avatar ? (
          <img
            className="sidebar__avatar"
            alt={currentUser?.name}
            src={currentUser?.avatar}
          ></img>
        ) : (
          <p className="sidebar__avatar-letter">{firstLetter}</p>
        )}
        <p className="sidebar__name">{currentUser?.name || "User"}</p>
      </div>
      <div className="sidebar__button-container">
        <button
          className="sidebar__button"
          type="button"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>
        <button
          className="sidebar__button"
          type="button"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </section>
  );
}

export default SideBar;
