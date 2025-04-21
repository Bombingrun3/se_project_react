import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          alt="Terrence Tegegne"
          src={avatar}
        ></img>
        <p className="sidebar__name">Terrence Tegegne</p>
      </div>
    </section>
  );
}

export default SideBar;
