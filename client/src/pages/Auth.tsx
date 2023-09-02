import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../services/userAPI';
import userStore from '../store/UserStore';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuth = userStore((state) => state.setAuth);
  const setUser = userStore((state) => state.setUser);

  const onHandleAction = async () => {
    try {
      let user;
      if (isLogin) {
        if (!(email || password)) {
          return;
        }

        user = await login(email, password);
      } else {
        if (!(email || password)) {
          return;
        }

        user = await registration(email, password);
      }

      setUser(user);
      setAuth(true);
      navigate('/');
    } catch (e) {
      console.warn(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="ml-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder={isLogin ? 'Email' : 'Write email...'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder={isLogin ? 'Password' : 'Write password...'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="d-flex justify-content-between mt-3 pl-2 pr-2">
            {isLogin ? (
              <div>
                Dont have account? <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
              </div>
            ) : (
              <div>
                Do you have account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}
            <Button variant="outline-success" onClick={onHandleAction}>
              {isLogin ? 'Enter' : 'Sign Up'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
