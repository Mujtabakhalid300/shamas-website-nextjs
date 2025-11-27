// PropertyMap.jsx (or integrated directly into PortfolioPage if you prefer)

import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

// Fix for default Leaflet icon issue with bundlers like Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Create a custom icon using lucide-react MapPin (optional but nice)
const createMapPinIcon = (color = "#1a2533") => {
  return new L.DivIcon({
    className: "custom-map-pin",
    html: `<div style="color: ${color};"><svg stroke="currentColor" fill="${color}" stroke-width="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -20],
  });
};

const defaultIcon = createMapPinIcon();

// Central New York coordinates for initial view
const NYC_CENTER = [40.73061, -73.935242];

export default function PropertyMap({ properties }) {
  // Calculate the bounds to fit all markers if properties exist
  const bounds = useMemo(() => {
    if (properties.length === 0) return [NYC_CENTER, NYC_CENTER];

    const coordinates = properties.map((p) => [p.location.lat, p.location.lng]);
    return L.latLngBounds(coordinates);
  }, [properties]);

  // Determine the map center and zoom level (if only one property or none)
  const mapProps = useMemo(() => {
    if (properties.length === 0) {
      return { center: NYC_CENTER, zoom: 11 };
    } else if (properties.length === 1) {
      const { lat, lng } = properties[0].location;
      return { center: [lat, lng], zoom: 15 };
    }
    // If more than one property, MapContainer will use the 'bounds' prop
    return { bounds: bounds, padding: [50, 50] };
  }, [properties, bounds]);

  return (
    <MapContainer
      // Apply map properties dynamically
      {...mapProps}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      key={properties.length} // Force map refresh when filter changes drastically
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {properties.map((prop) => (
        <Marker
          key={prop.id}
          position={[prop.location.lat, prop.location.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <div className="font-gothic text-sm">
              <h4 className="font-bold">{prop.title}</h4>
              <p>
                {prop.borough} - {prop.status}
              </p>
              <a
                href={prop.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View Image
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
