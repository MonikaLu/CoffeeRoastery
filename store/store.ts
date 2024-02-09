import { IMenuItem } from "./../interfaces/IMenuItem";
import { create } from "zustand";

interface CartState {
  cartItemsAmount: number;
  cartItems: IMenuItem[];
  //   increase: (by: number) => void;
  //   remove: (by: number) => void;
  addToCart: (item: IMenuItem) => void;
  removeFromCart: (item: IMenuItem) => void;
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
}));
