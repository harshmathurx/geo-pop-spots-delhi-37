
import { Button } from "@/components/ui/button";
import { Location } from "@/types/types";
import { MapPin } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface LocationListProps {
  locations: Location[];
  filteredLocations: Location[];
  setMapCenter: Dispatch<SetStateAction<[number, number]>>;
  setMapZoom: Dispatch<SetStateAction<number>>;
}

const LocationList = ({ locations, filteredLocations, setMapCenter, setMapZoom }: LocationListProps) => {
  const handleLocationClick = (lat: number, lng: number) => {
    setMapCenter([lat, lng]);
    setMapZoom(16);
  };

  return (
    <div className="h-[calc(100vh-240px)] overflow-y-auto pr-2">
      {filteredLocations.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No locations match your search
        </div>
      ) : (
        <ul className="space-y-1">
          {filteredLocations.map((location) => (
            <li key={location.id}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto py-2 px-3 hover:bg-pink-50"
                onClick={() => handleLocationClick(location.latitude, location.longitude)}
              >
                <MapPin className="mr-2 h-4 w-4 text-pink-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">{location.name}</div>
                  {location.area && (
                    <div className="text-xs text-muted-foreground">{location.area}</div>
                  )}
                </div>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationList;
