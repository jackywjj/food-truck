import Menu from './menu';
import { Route, Switch } from 'react-router-dom';
import Facilities from '../pages/facility';
import Home from '../pages/home';
import Marketing from '../pages/marketing';

const Layout = () => {

  return (
    <div className={'layout'}>
      <Menu />
      <div className={'mainContent'}>
        <div className={'page'}>
          <Switch>
            <Route path={'/home'} component={Home} />
            <Route path={'/facility'} component={Facilities} />
            <Route path={'/marketing'} component={Marketing} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Layout;
