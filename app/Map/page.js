// src/MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// تحسين مكون الخريطة
const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{
        height: "300px",
        width: "50%",
        marginTop: "10%",
      }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
    </MapContainer>
  );
};

export default MapComponent;
