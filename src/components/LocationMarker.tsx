
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Location } from '../types/types';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface LocationMarkerProps {
  location: Location;
  onUpdateDescription: (id: string, description: string) => void;
  onUpdateImage: (id: string, imageUrl: string) => void;
}

const LocationMarker = ({ 
  location,
  onUpdateDescription,
  onUpdateImage 
}: LocationMarkerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(location.description);
  const [imageUrl, setImageUrl] = useState(location.imageUrl || '');
  
  // Create a custom icon with a heart SVG
  const heartIcon = new Icon({
    iconUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFDEE2" stroke="#ff6b94" stroke-width="1">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'heart-marker'
  });

  const handleSave = () => {
    onUpdateDescription(location.id, description);
    onUpdateImage(location.id, imageUrl);
    setIsEditing(false);
  };

  return (
    <Marker 
      position={[location.latitude, location.longitude]} 
      icon={heartIcon}
    >
      <Popup className="custom-popup">
        <Card className="border-0 shadow-none">
          {location.imageUrl && (
            <div className="relative w-full h-40">
              <img 
                src={location.imageUrl} 
                alt={location.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <CardHeader className="pt-4 pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">{location.name}</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsEditing(!isEditing)}
                className="h-8 px-2"
              >
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>
            {location.area && (
              <div className="text-sm text-muted-foreground">{location.area}</div>
            )}
          </CardHeader>
          
          <CardContent className="pb-4">
            {isEditing ? (
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Image URL</label>
                  <Textarea 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter image URL..."
                    className="min-h-[40px]"
                  />
                </div>
                
                <Button 
                  onClick={handleSave}
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white"
                >
                  Save
                </Button>
              </div>
            ) : (
              <p className="text-sm leading-relaxed">{description}</p>
            )}
          </CardContent>
        </Card>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
