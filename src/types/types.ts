
export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  imageUrl?: string;
  area?: string;
}

export interface CustomLocationData {
  description: string;
  imageUrl?: string;
}
