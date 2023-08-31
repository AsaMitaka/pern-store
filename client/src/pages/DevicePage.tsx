import { Col, Container } from 'react-bootstrap';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Samsung Galaxy Note 12',
    price: 1000,
    rating: 5,
    img: '',
  };

  return (
    <Container>
      <Col md={4}></Col>
      <Col md={4}></Col>
      <Col md={4}></Col>
    </Container>
  );
};

export default DevicePage;
