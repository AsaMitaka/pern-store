import { Brand, Device, Type } from '../types/device';
import { $host, $authHost } from './axios';

export const createType = async (type: Type) => {
  const { data } = await $authHost.post('api/type', type);

  return data;
};

export const fetchType = async (): Promise<Type[]> => {
  const { data } = await $host.get('api/type');

  return data;
};

export const createBrand = async (brand: Brand) => {
  const { data } = await $authHost.post('api/brand', brand);

  return data;
};

export const fetchBrand = async (): Promise<Brand[]> => {
  const { data } = await $host.get('api/brand');

  return data;
};

export const createDevice = async (device: Device) => {
  const { data } = await $authHost.post('api/device', device);

  return data;
};

export const fetchDevice = async (typeId, brandId, page, limit = 5): Promise<Device[]> => {
  const { data } = await $host.get('api/device', { params: { typeId, brandId, page, limit } });

  return data;
};

export const fetchOneDevice = async (id: string): Promise<Device> => {
  const { data } = await $authHost.get(`api/device/${id}`);

  return data;
};
