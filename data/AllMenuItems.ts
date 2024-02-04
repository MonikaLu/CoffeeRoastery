import { DrinkSize } from "./../enums";
import { IMenuItem } from "../interfaces/IMenuItem";
import { MenuItemCategories } from "../enums";

const AllMenuItems: IMenuItem[] = [
  {
    name: "Affogato",
    coverUrl: require("./../assets/affogato.png"),
    price: 30,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Americano",
    coverUrl: require("./../assets/americano.png"),
    price: 30,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Cappuccino",
    coverUrl: require("./../assets/cappuccino.png"),
    price: 30,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Cortado",
    coverUrl: require("./../assets/cortado.png"),
    price: 30,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Latte",
    coverUrl: require("./../assets/latte.png"),
    price: 35,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Macchiato",
    coverUrl: require("./../assets/macchiato.png"),
    price: 50,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Christmas Mocha",
    coverUrl: require("./../assets/mocha.png"),
    price: 50,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Mocha",
    coverUrl: require("./../assets/mocha2.png"),
    price: 50,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Espresso",
    coverUrl: require("./../assets/espresso.png"),
    price: 25,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Hot Chocolate",
    coverUrl: require("./../assets/hot_chocolate.png"),
    price: 25,
    type: MenuItemCategories.HOT_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Iced Cappuccino",
    coverUrl: require("./../assets/iced_cappuccino.png"),
    price: 25,
    type: MenuItemCategories.COLD_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Frappuccino",
    coverUrl: require("./../assets/caramel_frappuccino.png"),
    price: 25,
    type: MenuItemCategories.COLD_COFFEES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Strawberry Smoothie",
    coverUrl: require("./../assets/strawberrysmoothie.png"),
    price: 25,
    type: MenuItemCategories.SMOOTHIES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
  {
    name: "Tote Bag",
    coverUrl: require("./../assets/totebag.png"),
    price: 100,
    type: MenuItemCategories.MERCHANDISE,
  },
  {
    name: "Iced Latte & Sandwich",
    coverUrl: require("./../assets/deal.png"),
    price: 150,
    type: MenuItemCategories.LUNCH,
  },
  {
    name: "Peanut Milkshake",
    coverUrl: require("./../assets/peanutmilkshake.png"),
    price: 50,
    type: MenuItemCategories.MILKSHAKES,
    availableSizes: [DrinkSize.SMALL, DrinkSize.MEDIUM, DrinkSize.LARGE],
  },
];
export default AllMenuItems;
