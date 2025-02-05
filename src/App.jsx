import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import WeatherPreviewCard from "./WeatherPreviewCard";
import MapPreview from "./MapPreview";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

function App() {
  let [weatherInfo, setWeatherInfo] = useState({
    temp: "",
    weather: "",
    humidity: "",
    visibility: "",
    country_code: "",
    location: "",
    coord: { lon: "", lat: "" },
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const APP_ID = import.meta.env.VITE_APP_ID;

  const weatherInfoHandler = async (location = "Delhi") => {
    const res = await fetch(
      `${BASE_URL}?q=${location}&appid=${APP_ID}&units=metric`
    );
    const { weather, main, visibility, sys, name, coord } = await res.json();
    const data = {
      temp: main.temp,
      weather: weather[0].main,
      humidity: main.humidity,
      visibility,
      country_code: sys.country,
      location: name,
      coord: { lon: coord.lon, lat: coord.lat },
    };
    console.log(data);
    setWeatherInfo(data);
  };

  useEffect(() => {
    weatherInfoHandler();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container col-md-10 offset-md-1 col-12">
        <SearchBox weatherInfoHandler={weatherInfoHandler} />
        <div className="row my-4">
          <div className="col-md-4 col-12 mx-md-0 mx-2 my-2">
            <WeatherPreviewCard weatherInfo={weatherInfo} />
          </div>
          <div className="col-md-8 col-12 mx-md-0 mx-2 my-2">
            <MapPreview coord={weatherInfo.coord} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
