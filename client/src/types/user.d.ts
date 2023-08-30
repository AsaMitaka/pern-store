export interface StoreState {
  user: object;
  isAuth: boolean;
  setAuth: (bool: boolean) => void;
  setUser: (user: object) => void;
}
