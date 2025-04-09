import "./WeatherCard.css";
import sunnyDay from "../../assets/sunny-day.svg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weathercard">
      <p className="weathercard__temp">{`${weatherData.temp.F} F`}</p>
      <img className="weathercard__image" alt="Sunny Day" src={sunnyDay} />
    </section>
  );
}

export default WeatherCard;
