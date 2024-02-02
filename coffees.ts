import { IMenuItem } from "./types/IMenuItem";
import { MenuItemCategories } from "./types/MenuItemCategories";

const MenuItemItems: IMenuItem[] = [
  {
    name: "Affogato",
    coverUrl: require("./assets/affogato.png"),
    price: 30,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Americano",
    coverUrl: require("./assets/americano.png"),
    price: 30,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Cappuccino",
    coverUrl: require("./assets/cappuccino.png"),
    price: 30,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Cortado",
    coverUrl: require("./assets/cortado.png"),
    price: 30,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Latte",
    coverUrl: require("./assets/latte.png"),
    price: 35,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Macchiato",
    coverUrl: require("./assets/macchiato.png"),
    price: 50,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Christmas Mocha",
    coverUrl: require("./assets/mocha.png"),
    price: 50,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Mocha",
    coverUrl: require("./assets/mocha2.png"),
    price: 50,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Espresso",
    coverUrl: require("./assets/espresso.png"),
    price: 25,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Hot Chocolate",
    coverUrl: require("./assets/hot_chocolate.png"),
    price: 25,
    type: MenuItemCategories.HOT_DRINKS,
  },
  {
    name: "Iced Cappuccino",
    coverUrl: require("./assets/iced_cappuccino.png"),
    price: 25,
    type: MenuItemCategories.COLD_DRINKS,
  },
  {
    name: "Frappuccino",
    coverUrl: require("./assets/caramel_frappuccino.png"),
    price: 25,
    type: MenuItemCategories.COLD_DRINKS,
  },
];
export default MenuItemItems;
