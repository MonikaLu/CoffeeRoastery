import { orderTypes } from "../enums";
import { IMenuItem } from "./IMenuItem";

export interface IOrder {
  orderType: orderTypes;
  price: number;
  items: IMenuItem[];
  comment: string;
}
