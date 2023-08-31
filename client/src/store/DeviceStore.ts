import { create } from 'zustand';
import { DeviceState } from '../types/device';

const deviceStore = create<DeviceState>((set) => ({
  types: [
    {
      id: 1,
      name: 'smartphone',
    },
    {
      id: 2,
      name: 'tv',
    },
    {
      id: 3,
      name: 'gaming console',
    },
  ],
  brands: [
    {
      id: 1,
      name: 'samsung',
    },
    {
      id: 2,
      name: 'apple',
    },
    {
      id: 3,
      name: 'lenovo',
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
  selectedType: {},
  selectedBrand: {},
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
  setSelectedType: (type) => {
    set(() => ({
      selectedType: type,
    }));
  },
  setSelectedBrand: (brand) => {
    set(() => ({
      selectedBrand: brand,
    }));
  },
}));

export default deviceStore;
