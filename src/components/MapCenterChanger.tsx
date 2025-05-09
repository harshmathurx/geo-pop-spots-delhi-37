
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface MapCenterChangerProps {
  center: [number, number];
  zoom: number;
}

const MapCenterChanger = ({ center, zoom }: MapCenterChangerProps) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  
  return null;
};

export default MapCenterChanger;
