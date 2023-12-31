import { Link, NavLink } from 'react-router-dom';
import userStore from '../store/UserStore';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const isAuth = userStore((store) => store.isAuth);
  const setAuth = userStore((store) => store.setAuth);
  const setUser = userStore((store) => store.setUser);
  const user = userStore((store) => store.user);
  const isAdmin = user.role === 'ADMIN';

  const handleAuth = () => {
    setAuth(false);
    setUser({});
    localStorage.removeItem('token');
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none', color: 'white' }}>
          Shop
        </NavLink>
        {isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            {isAdmin && (
              <Button variant={'outline-light'}>
                <Link to={ADMIN_ROUTE} style={{ textDecoration: 'none' }}>
                  Admin
                </Link>
              </Button>
            )}
            <Button variant={'outline-light'} style={{ marginLeft: '1em' }}>
              <Link to={BASKET_ROUTE} style={{ textDecoration: 'none' }}>
                Basket
              </Link>
            </Button>
            <Button variant={'outline-light'} onClick={handleAuth} style={{ marginLeft: '1em' }}>
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'}>
              <Link to={LOGIN_ROUTE}>Login</Link>
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
