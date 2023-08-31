import { Card } from 'react-bootstrap';
import deviceStore from '../store/DeviceStore';
import { DeviceState } from '../types/device';

const BrandBar = () => {
  const brands = deviceStore((state: DeviceState) => state.brands);
  const selectedBrand = deviceStore((state: DeviceState) => state.selectedBrand);
  const setSelectedBrand = deviceStore((state: DeviceState) => state.setSelectedBrand);

  return (
    <div className="d-flex">
      {brands.map((brand) => (
        <Card
          border={brand.id === selectedBrand.id ? 'danger' : ''}
          className="p-3"
          key={brand.id}
          onClick={() => setSelectedBrand(brand)}
          style={{ cursor: 'pointer' }}>
          {brand.name}
        </Card>
      ))}
    </div>
  );
};

export default BrandBar;
