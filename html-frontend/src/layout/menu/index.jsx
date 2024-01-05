import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Menu = () => {
  const location = useLocation();

  return (
    <div className={'sideMenu'}>
      <ul className={'menu'}>
        <li className={'menu-item'}><Link to={'/home'}>Home</Link></li>
        <li className={`menu-item ${location.pathname === '/facility' ? 'menu-active' : ''}`}><Link
          to={'/facility'}>Food Truck</Link></li>
        <li className={`menu-item ${location.pathname === '/marketing' ? 'menu-active' : ''}`}><Link
          to={'/marketing'}>Marketing</Link></li>
      </ul>
    </div>
  );
};
export default Menu;
