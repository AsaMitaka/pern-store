import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import userStore from '../store/UserStore';

const AppRouter: React.FC = () => {
  const isAuth = userStore((state) => state.isAuth);

  return (
    <Routes>
      {isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
