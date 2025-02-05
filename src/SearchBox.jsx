import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

export default function SearchBox({ weatherInfoHandler }) {
  let [location, setLocation] = useState("");
  let [error, setError] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const APP_ID = import.meta.env.VITE_APP_ID;

  const onChangeHandler = (evt) => {
    location = evt.target.value;
    setLocation(location);
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    const res = await fetch(
      `${BASE_URL}?q=${location.trim()}&appid=${APP_ID}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    setError(false);
    weatherInfoHandler(location);

    if (data.cod == 404) {
      setError(true);
      return;
    }
  };

  return (
    <div>
      <Paper
        className="col-md-8 offset-md-2 col-10 offset-1"
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", marginTop: "100px"}}
        onSubmit={onSubmitHandler}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Location"
          inputProps={{ "aria-label": "search location" }}
          name="location"
          value={location}
          onChange={onChangeHandler}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        
      </Paper>
      {error && <p className="text-danger text-center mt-3 fw-semibold">😢Oops! Location not found.</p>}
    </div>
  );
}
