import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './ProductDetailPage.css';
import { routes } from '../../shared/appRoutes';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailColorButton } from './DetailColorButton';
import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { TimeContext, getOrders } from '../../shared/context';

function ProductDetailPage() {
  const shirt = useLocation().state?.shirt;
  const shirtColors = Object.keys(shirt.colors);

  function changeShirtImg() {
    if (shirtColor === 'default') {
      return shirt.default[shirtSide];
    } else {
      return shirt.colors[shirtColor][shirtSide];
    }
  }

  const [shirtSide, setShirtSide] = useState("front");
  function changeSide(event) {
    setShirtSide(event.target.innerHTML.toLowerCase());
  }

  const [shirtColor, setShirtColor] = useState("default");
  function changeShirtColor(event) {
    setShirtColor(event.target.innerHTML);
  }

  const quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [buyQuantity, setBuyQuantity] = useState(1);
  const [quantityDropDownOpen, setQuantityDropDownOpen] = useState(false);
  const quantityDropDownToggle = () => setQuantityDropDownOpen((prevState) => !prevState);
  function clickQuantity(event) {
    setBuyQuantity(parseInt(event.target.innerHTML));
  }

  const sizeList = [
    "Size:",
    "Women's XS",
    "Women's S",
    "Women's M",
    "Women's L",
    "Women's XL",
    "Women's 2XL",
    "Men's XS",
    "Men's S",
    "Men's M",
    "Men's L",
    "Men's XL",
    "Men's 2XL"
  ];
  const [buySize, setBuySize] = useState("Size:");
  const [sizeDropDownOpen, setSizeDropDownOpen] = useState(false);
  const sizeDropDownToggle = () => setSizeDropDownOpen((prevState) => !prevState);
  function clickSize(event) {
    setBuySize(event.target.innerHTML);
  }

  function addShopItem(event) {
    let shopList = getOrders();

    shopList.orders.push({
      id: shopList.orderId,
      shirt: shirt,
      quantity: buyQuantity,
      color: shirtColor,
      size: buySize
    });
    shopList.orderId += 1;
    sessionStorage.setItem('shopList_' + TimeContext.current, JSON.stringify(shopList));
  }

  return (
    <div className="ProductDetailPage">
      <Header></Header>
      <div className="shirtDetailSection">
        <h2> {shirt.name} </h2>
        <div id="shirtInformation">
          <img id="shirtImg" src={changeShirtImg()} alt="A T-shirt" />
          <div>
            <div id="shirtPrice">{shirt.price}</div>
            <div id="shirtDescription">{shirt.description}</div>

            <div id="shirtSides">
              <span id="shirtSide"> Side: </span><br></br>
              <button key="sideFront" className="shirtSideButton" onClick={changeSide}>Front</button>
              <button key="sideBack" className="shirtSideButton" onClick={changeSide}>Back</button>
            </div>

            <div id="shirtColors">
              <span id="shirtColor"> Color: </span><br></br>
              <div id="shirtColorButtons">
                {shirtColors.map((color) => {
                  return (
                    <DetailColorButton key={color} color={color} onClick={changeShirtColor}></DetailColorButton>
                  );
                })}
              </div>
            </div>

            <div id="shirtQuantities">
              <span id="shirtQuantity"> Quantity: </span><br></br>
              <Dropdown isOpen={quantityDropDownOpen} toggle={quantityDropDownToggle} direction="down">
                <DropdownToggle id="shirtQuantityDropdownToggle" caret>{buyQuantity}</DropdownToggle>
                <DropdownMenu>
                  {quantityList.map((quantity) => {
                    return (
                      <DropdownItem key={quantity} onClick={clickQuantity}>{quantity}</DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </div>

            <div id="shirtSizes">
              <span id="shirtSize"> Size: </span><br></br>
              <Dropdown isOpen={sizeDropDownOpen} toggle={sizeDropDownToggle} direction='down'>
                <DropdownToggle id="shirtSizeDropdownToggle" caret>{buySize}</DropdownToggle>
                <DropdownMenu>
                  {sizeList.map((size) => {
                    return (
                      <DropdownItem key={size} onClick={clickSize}>{size}</DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </div>

            <div id='shirtSubmit'>
              <Link className="submitButton" tag={RouterNavLink} to={routes.cart} onClick={addShopItem} style={{
                pointerEvents: buySize.startsWith("Size") ? "none" : ""
              }}>Add To Cart</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
}

export { ProductDetailPage }; 