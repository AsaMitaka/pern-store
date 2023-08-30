import { create } from 'zustand';
import { DeviceState } from '../types/device';

const deviceStore = create<DeviceState>((set) => ({
  types: [
    {
      id: 1,
      name: 'smartphone',
    },
  ],
  brands: [
    {
      id: 1,
      name: 'samsung',
    },
  ],
  devices: [
    {
      id: 1,
      name: 'Samsung Galaxy Note 12',
      price: 1000,
      rating: 5,
      img: '',
    },
  ],
  setTypes: (types) =>
    set(() => ({
      types: types,
    })),
  setBrands: (brands) =>
    set(() => ({
      brands: brands,
    })),
  setDevices: (devices) =>
    set(() => ({
      devices: devices,
    })),
}));

export default deviceStore;
