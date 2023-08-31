import { NavLink } from 'react-router-dom';
import userStore from '../store/UserStore';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const isAuth = userStore((store) => store.isAuth);
  const setAuth = userStore((store) => store.setAuth);
  const handleAuth = () => {
    setAuth(!isAuth);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none', color: 'white' }}>
          Shop
        </NavLink>
        {isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'}>Admin</Button>
            <Button variant={'outline-light'} onClick={handleAuth} style={{ marginLeft: '1em' }}>
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={handleAuth}>
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
