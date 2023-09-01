import { create } from 'zustand';

const CartStore = create((set) => ({
  cart: [],
  setCart: () => {},
}));

export default CartStore;
