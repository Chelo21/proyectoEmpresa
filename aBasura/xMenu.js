import { useState } from "react";

import { menuItems } from "./menuItems";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState([]);
const [esSubMenu, setEsSubMenu] = useState(false)



  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <nav className="nav container">
        {/* <ul className="menus"> */}
        <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          {/* {console.log(menuItems)} */}

          {menuItems.map((item) => {
            // {console.log(`${item.url} key=${item.id}><span>${item.title}`)}

          //  { item.subMenu ? setEsSubMenu(true): setEsSubMenu(false)}
            return (
              <li className="menu-items" key={item.id}>
                <Link to={item.url} className={`nav__link `}>
                  <span>{item.title}</span>
                  {item.subMenu ? <span className="dropdown__arrow">&rarr;</span> : ""}
                </Link>
                {esSubMenu ? <SubMenu subMenuItem={item.subMenu} /> : ""}
              </li>
            );
          })}
        </ul>

        </div>
      </nav>
  );
};

{
  /* <span className="arrow" /> */
}
