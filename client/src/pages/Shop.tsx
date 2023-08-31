import { Col, Container, Row } from 'react-bootstrap';
import TypesBar from '../components/TypesBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypesBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
