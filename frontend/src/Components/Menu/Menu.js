import { useState } from "react";

import { menuItems } from "./menuItems";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

export const Menu = () => {
  const depthLevel = 0;
  const [esSubMenu, setEsSubMenu] = useState(false);

  return (
    <nav className="desktop-nav">
      {/* <ul className="menus"> */}
      <div className="navbar">
      <ul className="nav-links">
          

            {menuItems.map((item) => {

              
              return (
                <li className="" key={item.id}>
                  <Link to={item.url} className={`nav__link `}>
                    <span>{item.title}</span>
                    {item.subMenu ? <span className="arrow">&rarr;</span> : ""}
                  </Link>
                  {item.subMenu ? <SubMenu subMenuItem={item.subMenu} depthLevel={depthLevel} /> : ""}
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

// const [menuOpen, setMenuOpen] = useState(false);
// const [showSubMenu, setShowSubMenu] = useState([]);
// const [esSubMenu, setEsSubMenu] = useState(false)

// const subMenuOnMouseEnterHandler = (subMenuId) => {
//   setShowSubMenu((prev) => {
//     console.log("running");
//     let arr = [...prev];
//     arr[subMenuId] = true;
//     return arr;
//   });
// };
// const subMenuOnMouseLeaveHandler = (subMenuId) => {
//   setShowSubMenu((prev) => {
//     console.log("running");
//     let arr = [...prev];
//     arr[subMenuId] = false;
//     return arr;
//   });
// };
