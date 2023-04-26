import './HeaderBanner.css';
import LogoImage from '../../assets/images/logo.png';
import CartImage from '../../assets/images/cart.png';

function HeaderBanner() {
  return (
    <div className="HeaderBanner">
      <div id="headerLogo">
        <a href="./">
          <img src={LogoImage} alt="SSUI logo, a dog, a T-shirt, and a click" />
        </a>
      </div>

      <div id="headerCompany">
        <p id="companyName">Scotty Shirts U Illustrate (SSUI)</p>
      </div>

      <a className="headerCart" href="not_implemented.html" target="_self">
        <div>
          <img src={CartImage} alt="A shopping cart" />
          <p>0</p>
        </div>
      </a>
    </div>
  );
}

export { HeaderBanner };