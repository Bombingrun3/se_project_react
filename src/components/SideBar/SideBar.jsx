import "./SideBar.css";

function SideBar({ currentUser, firstLetter, handleLogout }) {
  return (
    <section className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          alt={currentUser?.name || "User"}
          src={currentUser?.avatar || firstLetter}
        ></img>
        <p className="sidebar__name">{currentUser?.name || "User"}</p>
      </div>
      <div className="sidebar__button-container">
        <button className="sidebar__button" type="button">
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
