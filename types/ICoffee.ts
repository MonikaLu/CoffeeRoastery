import { Image } from "react-native";
import { CoffeeTypes } from "./coffeeTypes";

export interface ICoffee {
  price: number;
  name: string;
  type: CoffeeTypes;
  coverUrl: number;
}
