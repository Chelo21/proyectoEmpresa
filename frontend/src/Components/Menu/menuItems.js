// import { RxSketchLogo } from "react-icons/rx";
// import { BiHomeAlt2 } from "react-icons/bi";
import * as BiIcons from "react-icons/bi";
import * as RxIcons from "react-icons/rx";

// import { BiUser } from 'react-icons/bi';
// import { GrDropbox } from 'react-icons/gr';
import * as GrIcons from "react-icons/gr";

// import { TbBoxPadding } from 'react-icons/tb';
import * as TbIcons from "react-icons/tb";
//
export const menuItems = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
    icon: <BiIcons.BiHomeAlt2 />,
  },
  {
    id: 2,
    title: "Productos",
    url: "!#",
    icon: <RxIcons.RxSketchLogo />,
    subMenu: [
      {
        id: 201,
        name: "lista Productos",
        url: "productos",
      },
      {
        id: 202,
        name: "options",
        subMenu: [
          {
            id: 20201,
            name: "3 grand child 1",
          },
          {
            id: 20202,
            name: "3 grand child 2",
            subMenu: [
              {
                id: 2020201,
                name: "sub menu 3",
              },
              {
                id: 2020202,
                name: "sub menu 3",
              },
              {
                id: 2020203,
                name: "sub menu 3",
              }
            ]
          },
        ],
      },
      {
        id: 203,
        name: "sub menu 4",
      },
    ],
  },
  {
    id: 3,
    title: "Empleados",
    url: "empleados",
    icon: <BiIcons.BiUser />,
    subMenu: [
      {
        id: 301,
        name: "sub menu 3",
      },
      {
        id: 302,
        name: "sub menu 3",
      },
      {
        id: 303,
        name: "sub menu 3",
      },
      {
        id: 304,
        name: "sub menu 3",
      },
      {
        id: 305,
        name: "sub menu 3",
      },
    ],
  },
  {
    id: 4,
    title: "Ventas",
    url: "ventas",
    icon: <GrIcons.GrDropbox />,
  },
  {
    id: 5,
    title: "Dashborad",
    url: "dashboard",
    icon: <TbIcons.TbBoxPadding />,
  },
];
