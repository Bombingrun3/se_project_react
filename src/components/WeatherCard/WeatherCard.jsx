import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const filteredWeatherOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filteredWeatherOptions[0];

  const weatherOptionUrl = filteredWeatherOptions[0]?.url;
  const weatherOptionCondition = filteredWeatherOptions[0]?.condition;

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weathercard">
      <p className="weathercard__temp">
        {`${weatherData.temp[currentTemperatureUnit]}°${currentTemperatureUnit}`}
      </p>{" "}
      <img
        className="weathercard__image"
        alt={weatherOption?.condition}
        src={weatherOption?.url}
      />
    </section>
  );
}

export default WeatherCard;
