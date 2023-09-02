import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ShowHide } from '../../types/showHide';
import { createBrand } from '../../services/deviceAPI';

const CreateBrand: React.FC<ShowHide> = ({ show, onHide }) => {
  const [brand, setBrand] = useState('');
  const onHandleBrand = () => {
    if (!brand) {
      return;
    }

    createBrand({ name: brand }).then(() => setBrand(''));
    onHide();
  };

  return (
    <Modal size="lg" onHide={onHide} centered show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'enter type brand'}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-primary'} onClick={onHandleBrand}>
          Add
        </Button>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
