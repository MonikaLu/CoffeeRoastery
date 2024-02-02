import { ICoffee } from "./types/ICoffee";
import { CoffeeTypes } from "./types/coffeeTypes";

const CappuccinoImage = require("./assets/cappuccino.png");
const LatteImage = require("./assets/latte.png");
const MacchiatoImage = require("./assets/macchiato.png");
const EspressoImage = require("./assets/espresso.png");
const HotChocolateImage = require("./assets/hot_chocolate.png");
const AffogatoImage = require("./assets/affogato.png");
const AmericanoImage = require("./assets/americano.png");
const CortadoImage = require("./assets/cortado.png");
const MochaImage = require("./assets/mocha2.png");
const ChristmasMochaImage = require("./assets/mocha.png");

const coffeeItems: ICoffee[] = [
  {
    name: "Affogato",
    coverUrl: AffogatoImage,
    price: 30,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Americano",
    coverUrl: AmericanoImage,
    price: 30,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Cappuccino",
    coverUrl: CappuccinoImage,
    price: 30,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Cortado",
    coverUrl: CortadoImage,
    price: 30,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Latte",
    coverUrl: LatteImage,
    price: 35,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Macchiato",
    coverUrl: MacchiatoImage,
    price: 50,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Christmas Mocha",
    coverUrl: ChristmasMochaImage,
    price: 50,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Mocha",
    coverUrl: MochaImage,
    price: 50,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Espresso",
    coverUrl: EspressoImage,
    price: 25,
    type: CoffeeTypes.HOT_DRINKS,
  },
  {
    name: "Hot Chocolate",
    coverUrl: HotChocolateImage,
    price: 25,
    type: CoffeeTypes.HOT_DRINKS,
  },
];
export default coffeeItems;
