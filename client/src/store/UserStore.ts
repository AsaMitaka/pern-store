import { create } from 'zustand';
import { StoreState } from '../types/user';

const userStore = create<StoreState>((set) => ({
  user: {},
  isAuth: false,
  setAuth: (bool) =>
    set(() => ({
      isAuth: bool,
    })),
  setUser: (user) =>
    set(() => ({
      user: user,
    })),
}));

export default userStore;
