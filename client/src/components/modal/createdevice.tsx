import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import deviceStore from '../../store/DeviceStore';
import { DeviceState } from '../../types/device';
import { useState } from 'react';
import { ShowHide } from '../../types/showHide';

type info = {
  title: string;
  description: string;
  img: string;
  number: number;
};

const CreateDevice: React.FC<ShowHide> = ({ show, onHide }) => {
  const types = deviceStore((store: DeviceState) => store.types);
  const brands = deviceStore((store: DeviceState) => store.brands);
  const selectedType = deviceStore((store: DeviceState) => store.selectedType);
  const selectedBrand = deviceStore((store: DeviceState) => store.selectedBrand);
  const setSelectedType = deviceStore((store: DeviceState) => store.setSelectedType);
  const setSelectedBrand = deviceStore((store: DeviceState) => store.setSelectedBrand);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState<info[]>([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', img: '', number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{selectedType.name || 'Select Type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((item) => (
                <Dropdown.Item key={item.id} onClick={() => setSelectedType(item)}>
                  {item.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{selectedBrand.name || 'Select Brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((item) => (
                <Dropdown.Item key={item.id} onClick={() => setSelectedBrand(item)}>
                  {item.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Write device name"
            value={name}
            onChange={() => setName(e.target.value)}
          />
          <br />
          <Form.Control
            className="mt-3"
            placeholder="Write device price"
            type="number"
            value={price}
            onChange={() => setPrice(e.target.value)}
          />
          <br />
          <Form.Control
            className="mt-3"
            placeholder="Add device img"
            type="file"
            value={file}
            onChange={selectFile}
          />
          <br />
          <Button onClick={addInfo}>Add new details</Button>
          {info.map((i) => (
            <Row className="d-flex align-items-center mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="Write title"
                  value={i.title}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Write description"
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                />
              </Col>
              <Col md={4}>
                <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-primary'} onClick={addDevice}>
          Add
        </Button>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
