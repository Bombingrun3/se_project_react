import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        alt="Terrence Tegegne"
        src={avatar}
      ></img>
      <p>Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
