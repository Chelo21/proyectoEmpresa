
// ...
import { Link } from 'react-router-dom';
import { Menu } from './Menu.js';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
