
import { Location } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

const locations: Location[] = [
  {
    id: uuidv4(),
    name: "Institute of Home Economics",
    latitude: 28.5459,
    longitude: 77.2007,
    description: "Institute of Home Economics located in Hauz Khas area.",
    area: "Hauz Khas",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: uuidv4(),
    name: "Bookshop",
    latitude: 28.5859,
    longitude: 77.2130,
    description: "A cozy bookshop in Jor Bagh area.",
    area: "Jor Bagh",
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
  },
  {
    id: uuidv4(),
    name: "Hauz Khas Metro Station",
    latitude: 28.5436,
    longitude: 77.2050,
    description: "Dohful Hauz Khas Metro Station - A major transportation hub.",
    area: "Hauz Khas",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: uuidv4(),
    name: "Vishal Mall",
    latitude: 28.6431,
    longitude: 77.1203,
    description: "Vishal Mall - Popular shopping destination in Rajouri.",
    area: "Rajouri",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: uuidv4(),
    name: "IHC",
    latitude: 28.5923,
    longitude: 77.2248,
    description: "India Habitat Centre - A cultural and social hub.",
    area: "Lodhi Road",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: uuidv4(),
    name: "Malviya Nagar Market",
    latitude: 28.5400,
    longitude: 77.2099,
    description: "Bustling market area in Malviya Nagar.",
    area: "Malviya Nagar",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: uuidv4(),
    name: "South Ex Market",
    latitude: 28.5730,
    longitude: 77.2234,
    description: "Popular shopping destination in South Extension.",
    area: "South Extension",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: uuidv4(),
    name: "East Patel Nagar Market",
    latitude: 28.6430,
    longitude: 77.1730,
    description: "Local market in East Patel Nagar area.",
    area: "Patel Nagar",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: uuidv4(),
    name: "Cafe Doma",
    latitude: 28.5583,
    longitude: 77.2052,
    description: "Cozy cafe in Green Park with great ambiance.",
    area: "Green Park",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: uuidv4(),
    name: "Depual's",
    latitude: 28.6304,
    longitude: 77.2177,
    description: "A popular establishment in Janpath with unique offerings.",
    area: "Janpath",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: uuidv4(),
    name: "GK 2 Market",
    latitude: 28.5380,
    longitude: 77.2470,
    description: "Greater Kailash 2 Market - Shopping and dining destination.",
    area: "Greater Kailash",
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
  },
  {
    id: uuidv4(),
    name: "Chandni Chowk Market",
    latitude: 28.6506,
    longitude: 77.2295,
    description: "Historic market area in Old Delhi.",
    area: "Old Delhi",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
];

export default locations;
