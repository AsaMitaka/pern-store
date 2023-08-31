import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { DEVICE_ROUTE } from '../utils/consts';
import Image from 'react-bootstrap/Image';

const DeviceItem = ({ device }) => {
  console.log(device);

  return (
    <Col md={3} className="mt-3">
      <Link to={DEVICE_ROUTE + `/${device.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: 150, cursor: 'pointer' }}>
          <Image width={150} height={150} src={device.image} />
          <div className="d-flex juctify-content-between pt-1 pb-2">
            <div>
              {device.name} {device.price}
            </div>
            <div>
              <span style={{ marginRight: '5px' }}>{device.rating}</span>⭐
            </div>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default DeviceItem;
