import { routes } from '../../shared/appRoutes';
import './Footer.css';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="footer" className="Footer">
      <Link tag={RouterNavLink} to={routes.notFound}>Contact Us</Link>
      <Link tag={RouterNavLink} to={routes.notFound}>Site Map</Link>
      <Link tag={RouterNavLink} to={routes.notFound}>Privacy Policy</Link>
      <Link tag={RouterNavLink} to={routes.notFound}>Careers</Link>
      <Link tag={RouterNavLink} to={routes.notFound}>Reviews</Link>
      <div>Designed by 王堃宇</div>
    </div>
  );
}

export { Footer };