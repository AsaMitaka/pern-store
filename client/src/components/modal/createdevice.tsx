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
  const [info, setInfo] = useState<info[]>([]);
  const addInfo = () => {
    setInfo([...info, { title: '', description: '', img: '', number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Select Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((item) => (
                <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((item) => (
                <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-3" placeholder="Write device name" />
          <br />
          <Form.Control className="mt-3" placeholder="Write device price" type="number" />
          <br />
          <Form.Control className="mt-3" placeholder="Add device img" type="file" />
          <br />
          <Button onClick={addInfo}>Add new details</Button>
          {info.map((i) => (
            <Row className="d-flex align-items-center mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder="Write title" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Write description" />
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
        <Button variant={'outline-primary'} onClick={onHide}>
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
