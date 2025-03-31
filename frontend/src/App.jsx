import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RatingForm from "./components/RatingForm";
import "./App.css";
import Ratings from "./components/Ratings";
import MainContainerWrapper from "./components/MainContainerWrapper";

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
      <SearchBox weatherInfoHandler={weatherInfoHandler} />
      <MainContainerWrapper weatherInfo={weatherInfo} />
      <RatingForm />
      <Ratings />
      <Footer />
    </>
  );
}

export default App;
