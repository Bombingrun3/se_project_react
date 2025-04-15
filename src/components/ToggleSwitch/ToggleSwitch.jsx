import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        checked={currentTemperatureUnit === "F"}
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__slider" />
      <p className="toggle-switch__temp toggle-switch__temp-F">F</p>
      <p className="toggle-switch__temp toggle-switch__temp-C">C</p>
    </label>
  );
}

export default ToggleSwitch;
