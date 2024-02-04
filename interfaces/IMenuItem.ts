import {
  DrinkSize,
  MenuItemCategories,
  MilkOptions,
  OtherOptions,
} from "./../enums";

export interface IMenuItem {
  price: number;
  name: string;
  type: MenuItemCategories;
  coverUrl: number;
  availableSizes?: DrinkSize[];
  milkOptions?: MilkOptions[];
  otherOptions?: OtherOptions[];
}
