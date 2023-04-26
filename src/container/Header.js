import './Header.css';

import { HeaderBanner } from './HeaderBanner';
import { NavBar } from './NavBar';

function Header() {
  return (
    <div className="Header">
      <HeaderBanner></HeaderBanner>
      <NavBar></NavBar>
    </div>
  );
}

export { Header };