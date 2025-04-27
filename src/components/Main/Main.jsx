import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, onCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__title">
          {`Today is ${weatherData.temp[currentTemperatureUnit]}° ${currentTemperatureUnit} / You may want to wear`}
          :
        </p>
        <ul className="cards__gallery">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard key={item.id} item={item} onCardClick={onCardClick} />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
