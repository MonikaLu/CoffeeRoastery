import { MenuItemCategories } from "./MenuItemCategories";

export interface IMenuItem {
  price: number;
  name: string;
  type: MenuItemCategories;
  coverUrl: number;
}
