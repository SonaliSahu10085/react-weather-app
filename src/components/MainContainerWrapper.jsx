import React from "react";
import WeatherPreviewCard from "./WeatherPreviewCard";
import MapPreview from "./MapPreview";

function MainContainerWrapper({weatherInfo}) {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-4 col-12 mx-md-0 my-2">
          <WeatherPreviewCard weatherInfo={weatherInfo} />
        </div>
        <div className="col-md-8 col-12 mx-md-0 my-2">
          <MapPreview coord={weatherInfo.coord} />
        </div>
      </div>
    </div>
  );
}

export default MainContainerWrapper;
