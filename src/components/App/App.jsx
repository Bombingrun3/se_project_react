import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <div className="app">
      <div className="app__content"></div>
      <Header />
      <Main weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
