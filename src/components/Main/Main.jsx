import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__title">
          Today is 75&deg; F / You may want to wear:
        </p>
        <div className="cards__gallery"></div>
      </section>
    </main>
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
