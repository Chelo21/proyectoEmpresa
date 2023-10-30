import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from './Header';
import "./Menu.css";


const Layout = () => {
  return (
    <div>
      <Header/>
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
