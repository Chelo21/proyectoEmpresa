/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ subMenuItem, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  
  return (
    <ul className={`dropdown ${dropdownClass}`}>
      {subMenuItem.map((item) => {
      // console.log(item);
        return (
          <li key={item.id} className="menu-items">
             <Link to={item.url} className={`nav__link `}>
             <span>{item.name}</span>
                    {item.subMenu ? <span className="arrow">&rarr;</span> : ""}
                  </Link>
                  {item.subMenu ? <SubMenu subMenuItem={item.subMenu} depthLevel={depthLevel}/> : ""}
            
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
