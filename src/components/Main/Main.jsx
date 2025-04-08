import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, onCardClick }) {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__title">
          Today is 75&deg; F / You may want to wear:
        </p>
        <ul className="cards__gallery">
          {defaultClothingItems
            // .filter((item) => {
            //   return item.weather === weatherData.type;
            // })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
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
