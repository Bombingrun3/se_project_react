import "./WeatherCard.css";
import sunnyDay from "../../assets/sunny-day.svg";

function WeatherCard() {
  return (
    <section className="weathercard">
      <p className="weathercard__temp">75&deg; F</p>
      <img className="weathercard__image" alt="Sunny Day" src={sunnyDay} />
    </section>
  );
}

export default WeatherCard;

// The WeatherCard receives data from its parent
// (props chain example: App → Main → WeatherCard).
// The weather data itself can be a big object, but we only need
// the temperature to render in the card. The measurement units
// aren’t important at this stage. We’ll only use Fahrenheit for now.
