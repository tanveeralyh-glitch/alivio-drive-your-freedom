import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  pricePerDay: number;
  rating: number;
  reviews: number;
  type: "Sedan" | "SUV" | "Sports" | "Convertible" | "Supercar";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  seats: number;
  horsepower: number;
  acceleration: string;
  topSpeed: string;
  featured: boolean;
}

export const cars: Car[] = [
  {
    id: "mercedes-s-class",
    name: "S-Class AMG",
    brand: "Mercedes-Benz",
    image: car1,
    pricePerDay: 450,
    rating: 4.9,
    reviews: 128,
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 603,
    acceleration: "3.4s",
    topSpeed: "186 mph",
    featured: true,
  },
  {
    id: "bmw-7-series",
    name: "7 Series",
    brand: "BMW",
    image: car2,
    pricePerDay: 380,
    rating: 4.8,
    reviews: 96,
    type: "Sedan",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    horsepower: 523,
    acceleration: "3.7s",
    topSpeed: "155 mph",
    featured: true,
  },
  {
    id: "porsche-911",
    name: "911 Carrera",
    brand: "Porsche",
    image: car3,
    pricePerDay: 550,
    rating: 4.9,
    reviews: 210,
    type: "Convertible",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 2,
    horsepower: 443,
    acceleration: "3.0s",
    topSpeed: "191 mph",
    featured: true,
  },
  {
    id: "range-rover",
    name: "Range Rover Vogue",
    brand: "Land Rover",
    image: car4,
    pricePerDay: 420,
    rating: 4.7,
    reviews: 85,
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    horsepower: 395,
    acceleration: "5.4s",
    topSpeed: "155 mph",
    featured: true,
  },
  {
    id: "audi-a8",
    name: "A8 L",
    brand: "Audi",
    image: car5,
    pricePerDay: 360,
    rating: 4.8,
    reviews: 72,
    type: "Sedan",
    fuel: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    horsepower: 453,
    acceleration: "4.4s",
    topSpeed: "155 mph",
    featured: false,
  },
  {
    id: "lamborghini-huracan",
    name: "Huracán EVO",
    brand: "Lamborghini",
    image: car6,
    pricePerDay: 950,
    rating: 5.0,
    reviews: 64,
    type: "Supercar",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 2,
    horsepower: 640,
    acceleration: "2.9s",
    topSpeed: "202 mph",
    featured: true,
  },
];
