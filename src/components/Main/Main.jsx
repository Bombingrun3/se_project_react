import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <section className="main">
      <WeatherCard />
    </section>
  );
}

export default Main;

// The WeatherCard component shows the current temperature.
// Weather data is sent here, in addition to the Header, as props.
// Note that the weather data is not stored in Main, so you need to pass
// it down from the App component.
//
// Clothing item cards, which are filtered based on the current weather.
// Wrap the ItemCard component into the unordered list and
// use the filter() and map() methods.
