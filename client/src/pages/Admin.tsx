import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modal/createbrand';
import CreateType from '../components/modal/createtype';
import CreateDevice from '../components/modal/createdevice';
import { useState } from 'react';

const Admin: React.FC = () => {
  const [typeVisible, setTypeVisible] = useState<boolean>(false);
  const [brandVisible, setBrandVisible] = useState<boolean>(false);
  const [deviceVisible, setDeviceVisible] = useState<boolean>(false);

  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-4" onClick={() => setBrandVisible(true)}>
        Add Brand
      </Button>
      <Button variant={'outline-dark'} className="mt-4" onClick={() => setDeviceVisible(true)}>
        Add Device
      </Button>
      <Button variant={'outline-dark'} className="mt-4" onClick={() => setTypeVisible(true)}>
        Add Type
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
