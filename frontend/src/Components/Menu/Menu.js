import { useState } from "react";

import { menuItems } from "./menuItems";
import {Link  } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <>
    <nav>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
 {/* <ul className="menus"> */}
 <ul className={menuOpen ? "open" : ""}>
{/* {console.log(menuItems)} */}

{

   menuItems.map((item)=>{
// {console.log(`${item.url} key=${item.id}><span>${item.title}`)}

return(

<li className="menu-items" key={item.id} >
<Link to={item.url} className='links' >{item.iconq}   <span>{item.title}</span>  <span className="arrow" />
</Link>

</li>  


)  
    })

}
</ul>

    </nav>
    
    </>

   
  )
}
