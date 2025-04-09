import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

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

  return (
    <section className="weathercard">
      <p className="weathercard__temp">{`${weatherData.temp.F} F`}</p>
      <img
        className="weathercard__image"
        alt={weatherOption?.condition}
        src={weatherOption?.url}
      />
    </section>
  );
}

export default WeatherCard;
