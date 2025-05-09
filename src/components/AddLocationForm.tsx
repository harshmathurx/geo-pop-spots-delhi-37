
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, X } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { Location } from "@/types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface AddLocationFormProps {
  onAddLocation: (location: Location) => void;
}

const AddLocationForm = ({ onAddLocation }: AddLocationFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !latitude || !longitude) return;
    
    const newLocation: Location = {
      id: uuidv4(),
      name,
      description,
      area,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      imageUrl: imageUrl || undefined
    };
    
    onAddLocation(newLocation);
    
    // Reset form fields
    setName("");
    setDescription("");
    setArea("");
    setLatitude("");
    setLongitude("");
    setImageUrl("");
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Location
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Location</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name *</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Location name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Area</label>
            <Input
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Neighborhood or area"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Latitude *</label>
              <Input
                type="number"
                step="any"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="e.g. 28.6139"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Longitude *</label>
              <Input
                type="number"
                step="any"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="e.g. 77.2090"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Share your memory about this place..."
              className="min-h-[80px]"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="flex justify-end gap-2 pt-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
              Add Location
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddLocationForm;
