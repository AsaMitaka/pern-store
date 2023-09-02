import { Col, Container, Row } from 'react-bootstrap';
import TypesBar from '../components/TypesBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import deviceStore from '../store/DeviceStore';
import { useEffect } from 'react';
import { fetchBrand, fetchDevice, fetchType } from '../services/deviceAPI';

const Shop = () => {
  const setTotalCount = deviceStore((store) => store.setTotalCount);
  const setDevices = deviceStore((store) => store.setDevices);
  const selectedType = deviceStore((store) => store.selectedType);
  const selectedBrand = deviceStore((store) => store.selectedBrand);
  const page = deviceStore((store) => store.page);
  const setTypes = deviceStore((store) => store.setTypes);
  const setBrands = deviceStore((store) => store.setBrands);
  useEffect(() => {
    const getData = async () => {
      try {
        await fetchBrand().then((data) => setBrands(data));
        await fetchType().then((data) => setTypes(data));
        await fetchDevice(null, null, 1, 3).then((data) => {
          setDevices(data.rows);
          setTotalCount(data.count);
        });
      } catch (error) {
        console.warn(error.message);
      }
    };

    getData();
  });

  useEffect(() => {
    const getData = async () => {
      try {
        await fetchDevice(selectedType.id, selectedBrand.id, page, 3).then((data) => {
          setDevices(data.rows);
          setTotalCount(data.count);
        });
      } catch (error) {
        console.warn(error.message);
      }
    };

    getData();
  }, []);

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
