import './Header.css';

import { HeaderBanner } from './HeaderBanner';
import { NavBar } from './NavBar';

function Header(props) {
  return (
    <div className="Header">
      <HeaderBanner value={props.value}></HeaderBanner>
      <NavBar></NavBar>
    </div>
  );
}

export { Header };