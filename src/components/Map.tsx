
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './LocationMarker';
import initialLocations from '../data/locations';
import { Location } from '../types/types';
import { toast } from '@/components/ui/use-toast';
import MapCenterChanger from './MapCenterChanger';

interface MapProps {
  center: [number, number];
  zoom: number;
  filteredLocations: Location[];
}

const Map = ({ center, zoom, filteredLocations }: MapProps) => {
  const [locations, setLocations] = useState<Location[]>(initialLocations);

  useEffect(() => {
    const savedLocations = localStorage.getItem('delhi-explorer-locations');
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('delhi-explorer-locations', JSON.stringify(locations));
  }, [locations]);

  const handleUpdateDescription = (id: string, description: string) => {
    const updatedLocations = locations.map(loc => 
      loc.id === id ? { ...loc, description } : loc
    );
    setLocations(updatedLocations);
    toast({
      description: "Location description updated successfully",
    });
  };

  const handleUpdateImage = (id: string, imageUrl: string) => {
    const updatedLocations = locations.map(loc => 
      loc.id === id ? { ...loc, imageUrl } : loc
    );
    setLocations(updatedLocations);
  };

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      <MapCenterChanger center={center} zoom={zoom} />

      {filteredLocations.map((location) => (
        <LocationMarker
          key={location.id}
          location={location}
          onUpdateDescription={handleUpdateDescription}
          onUpdateImage={handleUpdateImage}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
