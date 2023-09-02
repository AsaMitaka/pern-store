export interface Type {
  id: number;
  name: string;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Device {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface DeviceState {
  types: Type[];
  brands: Brand[];
  devices: Device[];
  page: number;
  totalCount: number;
  limit: number;
  selectedType: object | Type;
  selectedBrand: object | Brand;
  setTypes: (types: Type[]) => void;
  setBrands: (brands: Brand[]) => void;
  setDevices: (devices: Device[]) => void;
  setSelectedType: (type: Type) => void;
  setSelectedBrand: (brand: Brand) => void;
  setPage: (page: number) => void;
  setTotalCount: (totalCount: number) => void;
}
