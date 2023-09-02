import { create } from 'zustand';
import { DeviceState } from '../types/device';

const deviceStore = create<DeviceState>((set) => ({
  types: [],
  brands: [],
  devices: [],
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
