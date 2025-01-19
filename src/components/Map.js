import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 13);
    }
  }, [center, map]);
  return null;
}

function Map({ selectedProfile }) {
  const mapRef = useRef(null);

  const position = selectedProfile
    ? [
        parseFloat(selectedProfile.address.lat),
        parseFloat(selectedProfile.address.lng),
      ]
    : [0, 0];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      ref={mapRef}
    >
      <ChangeView center={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedProfile && (
        <Marker position={position}>
          <Popup>
            <div>
              <h3 className="font-semibold">{selectedProfile.name}</h3>
              <p>{selectedProfile.description}</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
