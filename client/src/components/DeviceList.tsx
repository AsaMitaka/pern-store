import Row from 'react-bootstrap/esm/Row';
import deviceStore from '../store/DeviceStore';
import { DeviceState } from '../types/device';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
  const devices = deviceStore((store: DeviceState) => store.devices);
  console.log(devices);

  return (
    <Row className="d-flex mt-3">
      {devices.map((item) => (
        <DeviceItem key={item.id} device={item} />
      ))}
    </Row>
  );
};

export default DeviceList;
