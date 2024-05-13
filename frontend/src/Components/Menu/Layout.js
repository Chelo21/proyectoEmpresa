import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "./Header";
import "../../layout/menu_cinco.css";


const Layout = () => {
  return (
    <div className="contenido-total">
      <Header />
      <div className="section">
             <div className="overlay"></div>
      <div className="todo">
              <Outlet />
        </div>
      
      <Footer />
      </div>
    </div>
  );
};

export default Layout;
