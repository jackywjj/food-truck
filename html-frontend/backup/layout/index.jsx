import Menu from './menu';
import Facility from '../pages/facility';
import Home from '../pages/home';
import { Route, Switch } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={'layout'}>
      <Menu />
      <div className={'mainContent'}>
        <div className={'page'}>
          <Switch>
            <Route path={'/'} component={Home} exact />
            <Route path={'/home'} component={Home} />
            <Route path={'/facilities'} component={Facility} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Layout;
