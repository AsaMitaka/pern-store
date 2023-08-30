import userStore from '../store/UserStore';

const NavBar = () => {
  const isAuth = userStore((store) => store.isAuth);

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list-logo">Logo</li>
        </ul>
        <ul className="header__nav--list">
          {isAuth ? (
            <>
              <li className="header__nav--list-li">Admin</li>
              <li className="header__nav--list-li">Basket</li>
              <li className="header__nav--list-li">Logout</li>
            </>
          ) : (
            <>
              <li className="header__nav--list-li">Login</li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
