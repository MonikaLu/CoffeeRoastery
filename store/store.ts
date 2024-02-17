import { orderTypes } from "../enums";
import { IOrder } from "../interfaces/IOrder";
import { IMenuItem } from "./../interfaces/IMenuItem";
import { create } from "zustand";

interface CartState {
  cartItemsAmount: number;
  cartItems: IMenuItem[];
  addToCart: (item: IMenuItem) => void;
  removeFromCart: (item: IMenuItem) => void;
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  order: IOrder;
  setOrder: (order: IOrder) => void;
}

export const useStore = create<CartState>((set) => ({
  cartItemsAmount: 0,
  cartItems: [],
  addToCart: (item: IMenuItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
      cartItemsAmount: state.cartItemsAmount + 1,
    })),
  removeFromCart: (item: IMenuItem) =>
    set((state) => ({
      cartItems: [
        ...state.cartItems.filter((i) => {
          return i !== item;
        }),
      ],
      cartItemsAmount: state.cartItemsAmount - 1,
    })),
  totalPrice: 0,
  setTotalPrice: (price: number) =>
    set(() => ({
      totalPrice: price,
    })),
  order: {
    orderType: orderTypes.TAKE_AWAY,
    price: 0,
    items: [],
    comment: "",
  },
  setOrder: (order: IOrder) =>
    set(() => ({
      order: order,
    })),
}));
