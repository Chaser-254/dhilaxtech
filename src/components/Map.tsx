import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const Map: React.FC = () => {
  // Coordinates for Mombasa city center
  const position: [number, number] = [-4.0435, 39.6682];
  return <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-96 w-full rounded-lg shadow-lg">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <h3 className="font-semibold">Dhilax Tech</h3>
            <p className="text-sm text-gray-600">Mombasa, Kenya</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>;
};
export default Map;