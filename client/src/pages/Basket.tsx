import { useState } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

const Basket = () => {
  const [count, setCount] = useState(1);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Row>
            <h2>Device</h2>
            <Image width={300} height={300} src="" />
          </Row>
        </Col>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <Button variant={'primary'} className="m-3" onClick={() => setCount((prev) => prev - 1)}>
            -
          </Button>
          <div>Count: {count}</div>
          <Button variant={'primary'} className="m-3" onClick={() => setCount((prev) => prev + 1)}>
            +
          </Button>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <Button>x</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Total: 300$</h3>
      </Row>
    </Container>
  );
};

export default Basket;
