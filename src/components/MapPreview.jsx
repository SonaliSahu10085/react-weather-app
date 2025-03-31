import { useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";

export default function MapPreview({ coord }) {
  
  useEffect(() => {
    (async () => {
      maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

      const map = new maptilersdk.Map({
        container: "map",
        style: maptilersdk.MapStyle.STREETS,
        center: [coord.lon, coord.lat], // Use dynamic location
        zoom: 5,
      });

      new maptilersdk.Marker({ color: "red" })
        .setLngLat([coord.lon, coord.lat + 0.5])
        .addTo(map);
      return () => map.remove();
    })();
  }, [coord]); // 🔄 Re-run when location changes

  return (
    <div
      id="map"
       className="border border-light rounded-1 shadow-sm bg-body-tertiary"
      style={{height: "400px"}}
    />
  );
}
