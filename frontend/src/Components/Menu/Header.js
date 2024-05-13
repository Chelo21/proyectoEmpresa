// ...
import { Link } from "react-router-dom";
import { Menu } from "./Menu.js";


const Header = () => {
  return (
    <header>
      <div className="container" id="container">
        <Link to="/" className="logo">
        <span>CheloProg</span>
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
