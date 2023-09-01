import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ShowHide } from '../../types/showHide';

const CreateType: React.FC<ShowHide> = ({ show, onHide }) => {
  const [type, setType] = useState('');
  const onHandleType = () => {
    if (!type) {
      return;
    }

    onHide();
  };

  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'enter type name'}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-primary'} onClick={onHandleType}>
          Add
        </Button>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
