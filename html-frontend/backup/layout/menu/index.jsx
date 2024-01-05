import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Menu = () => {
  const location = useLocation();

  return (
    <div className={'sideMenu'}>
      <ul className={'menu'}>
        <li className={`menu-item ${location.pathname === '/facilities' ? 'menu-active' : ''}`}><Link
          to={'/home'}>Truck List</Link></li>
        <li className={`menu-item ${location.pathname === '/facilities' ? 'menu-active' : ''}`}><Link
          to={'/facilities'}>Find truck</Link></li>
      </ul>
    </div>
  );
};
export default Menu;
