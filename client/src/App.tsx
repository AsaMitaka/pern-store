import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import userStore from './store/UserStore';
import { useEffect, useState } from 'react';
import { check } from './services/userAPI';

type UserData = {
  email: string;
  exp: number;
  iat: number;
  id: number;
  role: string;
};

const App: React.FC = () => {
  const setUser = userStore((store) => store.setUser);
  const setAuth = userStore((store) => store.setAuth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        try {
          const userData = data as UserData;
          setAuth(true);
          setUser(userData);
        } catch (error) {
          console.error(error);
          setAuth(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setAuth(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
