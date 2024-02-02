import { CoffeTypes } from "./coffeeTypes";

export interface ICoffe {
  price: number;
  name: string;
  type: CoffeTypes;
  coverUrl: string;
}
