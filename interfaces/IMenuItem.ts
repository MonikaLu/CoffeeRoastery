import { MenuItemCategories } from "./../enums/MenuItemCategories";

export interface IMenuItem {
  price: number;
  name: string;
  type: MenuItemCategories;
  coverUrl: number;
}
