import { Link } from 'react-router-dom';
import userStore from '../store/UserStore';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
  const isAuth = userStore((store) => store.isAuth);

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list-li">
            <Link to={SHOP_ROUTE} className="header__nav--list-li--logo">
              Logo
            </Link>
          </li>
        </ul>
        <ul className="header__nav--list">
          {isAuth ? (
            <>
              <li className="header__nav--list-li">
                <Link to={ADMIN_ROUTE} className="header__nav--list-li--a">
                  Admin
                </Link>
              </li>
              <li className="header__nav--list-li">
                <Link to={BASKET_ROUTE} className="header__nav--list-li--a">
                  Basket
                </Link>
              </li>
              <li className="header__nav--list-li">
                <Link to={LOGIN_ROUTE} className="header__nav--list-li--btn">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="header__nav--list-li">
                <Link to={LOGIN_ROUTE} className="header__nav--list-li--btn">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
