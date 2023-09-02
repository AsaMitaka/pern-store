import { Pagination } from 'react-bootstrap';
import deviceStore from '../store/DeviceStore';

const Pages = () => {
  const setPage = deviceStore((store) => store.setPage);
  const page = deviceStore((store) => store.page);
  const totalCount = deviceStore((store) => store.totalCount);
  const limit = deviceStore((store) => store.limit);
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination className="mt-5">
      {pages.map((item) => (
        <Pagination.Item active={page === item} onClick={() => setPage(page)}>
          {item}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
