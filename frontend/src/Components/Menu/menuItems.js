
// import { RxSketchLogo } from "react-icons/rx";
// import { BiHomeAlt2 } from "react-icons/bi";
import * as BiIcons from 'react-icons/bi';
import * as RxIcons from 'react-icons/rx';

// import { BiUser } from 'react-icons/bi';
// import { GrDropbox } from 'react-icons/gr';
import * as GrIcons from 'react-icons/gr';

// import { TbBoxPadding } from 'react-icons/tb';
import * as TbIcons from 'react-icons/tb';
// 
export const menuItems = [
  {
    id:1,
    title: 'Inicio',
    url: '/',
    icon:<BiIcons.BiHomeAlt2 />
  },
  {
    id:2,
    title: 'Productos',
    url: 'productos',
    icon:<RxIcons.RxSketchLogo />
  },
  {
    id:3,
    title: 'Empleados',
    url: 'empleados',
    icon:<BiIcons.BiUser />
     },
  {
    id:4,
    title: 'Ventas',
    url: 'ventas',
    icon:<GrIcons.GrDropbox />
  },
  {
    id:5,
    title: 'Dashborad',
    url: 'dashboard',
    icon:<TbIcons.TbBoxPadding />
  },
    
]
