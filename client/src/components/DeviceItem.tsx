import { Link } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = () => {
  return (
    <div className="deviceitem">
      <Link to={DEVICE_ROUTE + '/id'} className="link">
        <img src="" alt="" className="deviceitem__img" />
        <div className="deviceitem__block">
          <div className="deviceitem__block--title">Samsung</div>
          <div className="deviceitem__block--rating">
            <span className="deviceitem__block--rating-text">5.0</span>⭐
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DeviceItem;
