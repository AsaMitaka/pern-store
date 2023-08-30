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
  setTypes: (types: Type[]) => void;
  setBrands: (brands: Brand[]) => void;
  setDevices: (devices: Device[]) => void;
}
