import './HeaderBanner.css';
import { routes } from '../../shared/appRoutes';
import LogoImage from '../../assets/images/logo.png';
import CartImage from '../../assets/images/cart.svg';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { getOrders } from '../../shared/context';

function HeaderBanner() {
  let shopList = getOrders();

  function updateShopList() {
    shopList = getOrders();
  }

  function updateCart() {
    updateShopList();
    return shopList.orders.map((order) => parseInt(order.quantity)).reduce((a, b) => a + b, 0);
  }

  return (
    <div className="HeaderBanner">
      <div id="headerLogo">
        <Link tag={RouterNavLink} to={routes.home}>
          <img src={LogoImage} alt="SSUI logo, a dog, a T-shirt, and a click" />
        </Link>
      </div>

      <div id="headerCompany">
        <div id="companyName">Scotty Shirts U Illustrate (SSUI)</div>
      </div>

      <Link className='headerCart' tag={RouterNavLink} to={routes.cart}>
        <div>
          <img src={CartImage} alt="A shopping cart" />
          <div id='cartCount'>{updateCart()}</div>
        </div>
      </Link >
    </div >
  );
}

export { HeaderBanner };