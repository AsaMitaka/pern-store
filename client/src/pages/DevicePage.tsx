import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Samsung Galaxy Note 12',
    price: 1000,
    rating: 5,
    img: '',
  };
  const description = [
    {
      id: 1,
      title: 'Memory',
      description: '5gb',
    },
    {
      id: 2,
      title: 'Camera',
      description: '12mp',
    },
    {
      id: 3,
      title: 'Processor',
      description: 'snap dragon 4',
    },
  ];

  return (
    <Container className="mt-3 d-flex flex-column">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center">
              {device.rating}⭐
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '1px solid black' }}>
            <h3>Price: {device.price}</h3>
            <Button variant={'outline-dark'}>Add in cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column">
        <h1>Description: </h1>
        {description.map((item, index) => (
          <Row
            key={item.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              margin: '5px 10px',
              padding: '2px 10px',
            }}>
            {item.title}: {item.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
