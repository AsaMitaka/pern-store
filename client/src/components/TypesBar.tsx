import { ListGroup } from 'react-bootstrap';
import { DeviceState } from '../types/device';
import deviceStore from '../store/DeviceStore';

const TypesBar = () => {
  const types = deviceStore((store: DeviceState) => store.types);
  const selectedType = deviceStore((store: DeviceState) => store.selectedType);
  const setSelectedType = deviceStore((store: DeviceState) => store.setSelectedType);

  return (
    <ListGroup>
      {types.map(({ id, name }) => (
        <ListGroup.Item
          key={`${id}__${name}`}
          active={id === selectedType?.id}
          onClick={() => setSelectedType({ id, name })}
          style={{ cursor: 'pointer' }}>
          {name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypesBar;
