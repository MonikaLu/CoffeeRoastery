import { create } from "zustand";

interface CartState {
  cartItemsAmount: number;
  increase: (by: number) => void;
  remove: (by: number) => void;
}

export const useStore = create<CartState>((set) => ({
  cartItemsAmount: 0,
  increase: (by: number) =>
    set((state) => ({ cartItemsAmount: state.cartItemsAmount + 1 })),
  remove: (by: number) =>
    set((state) => ({ cartItemsAmount: state.cartItemsAmount - 1 })),
}));
