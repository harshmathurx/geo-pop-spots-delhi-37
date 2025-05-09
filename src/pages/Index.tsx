
import { useState, useEffect } from 'react';
import LocationList from '@/components/LocationList';
import Map from '@/components/Map';
import SearchBar from '@/components/SearchBar';
import AddLocationForm from '@/components/AddLocationForm';
import { Location } from '@/types/types';
import initialLocations from '@/data/locations';
import { toast } from '@/components/ui/use-toast';
import { Heart } from 'lucide-react';

const Index = () => {
  // Delhi coordinates
  const [mapCenter, setMapCenter] = useState<[number, number]>([28.6139, 77.2090]);
  const [mapZoom, setMapZoom] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(locations);

  useEffect(() => {
    const savedLocations = localStorage.getItem('delhi-explorer-locations');
    if (savedLocations) {
      const parsedLocations = JSON.parse(savedLocations);
      setLocations(parsedLocations);
      setFilteredLocations(parsedLocations);
    }
  }, []);

  useEffect(() => {
    filterLocations(searchQuery);
  }, [locations, searchQuery]);

  const filterLocations = (query: string) => {
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(query.toLowerCase()) ||
      (location.area && location.area.toLowerCase().includes(query.toLowerCase())) ||
      location.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleAddLocation = (newLocation: Location) => {
    const updatedLocations = [...locations, newLocation];
    setLocations(updatedLocations);
    localStorage.setItem('delhi-explorer-locations', JSON.stringify(updatedLocations));
    
    // Set the map center to the new location
    setMapCenter([newLocation.latitude, newLocation.longitude]);
    setMapZoom(16);
    
    toast({
      description: `${newLocation.name} has been added to your map!`,
    });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-80 lg:w-96 flex-shrink-0 h-screen overflow-y-auto bg-white border-r shadow-sm p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-6 w-6 text-pink-500" fill="#fca5a5" />
          <h1 className="text-2xl font-bold">Delhi Explorer</h1>
        </div>
        
        <h2 className="text-lg font-semibold mb-4">Delhi Locations</h2>
        
        <div className="mb-4">
          <AddLocationForm onAddLocation={handleAddLocation} />
        </div>
        
        <div className="mb-4">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </div>
        
        <LocationList 
          locations={locations} 
          filteredLocations={filteredLocations} 
          setMapCenter={setMapCenter}
          setMapZoom={setMapZoom}
        />
      </div>
      
      {/* Map */}
      <div className="flex-grow h-screen">
        <Map center={mapCenter} zoom={mapZoom} filteredLocations={filteredLocations} />
      </div>
    </div>
  );
};

export default Index;
