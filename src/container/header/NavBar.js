import './NavBar.css';

import { routes } from '../../shared/appRoutes';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="menu" aria-label="Header menu links">
      <Link tag={RouterNavLink} to={routes.product}> T-SHIRTS </Link>
      <Link tag={RouterNavLink} to={routes.notFound}> CREATE FROM PICTURE </Link>
      <Link tag={RouterNavLink} to={routes.notFound}> CREATE YOUR OWN </Link>
      <Link tag={RouterNavLink} to={routes.notFound}> ABOUT US </Link>
      <Link tag={RouterNavLink} to={routes.notFound}> LOG IN </Link>
    </div >
  );
}

export { NavBar };