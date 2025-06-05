import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MyLeafletMap() {
  return (
    <div>
      <MapContainer
        center={[5.1216, 7.3656]}
        zoom={13}
        className="z-0 h-[400px] w-[100%]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[5.1216, 7.3656]}>
          <Popup>25 Eifans Road, Off 188 Faulks Road, Aba,</Popup>
        </Marker>
      </MapContainer>
      <p>
        OFFICE ADDRESS: <b>25 Eifans Road, Off 188 Faulks Road, Aba,</b>
      </p>
    </div>
  );
}
