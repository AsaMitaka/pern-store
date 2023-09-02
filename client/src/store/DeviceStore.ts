import { create } from 'zustand';
import { DeviceState } from '../types/device';

const deviceStore = create<DeviceState>((set) => ({
  types: [],
  brands: [],
  devices: [],
  page: 1,
  totalCount: 0,
  limit: 3,
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
  setPage: (page) => {
    set(() => ({
      page: page,
    }));
  },
  setTotalCount: (count) => {
    set(() => ({
      totalCount: count,
    }));
  },
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
