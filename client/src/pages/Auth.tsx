import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <Button variant="outline-success">{isLogin ? 'Enter' : 'Sign Up'}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
