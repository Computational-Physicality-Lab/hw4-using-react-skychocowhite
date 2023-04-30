import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './ProductDetailPage.css';
import { routes } from '../../shared/appRoutes';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailColorButton } from './DetailColorButton';
import { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { TimeContext, getOrders } from '../../shared/context';
import notFound from '../../assets/shirt_images/not-found.png';

function ProductDetailPage() {
  const shirt = useLocation().state?.shirt;
  const shirtColors = (shirt.colors === undefined || Object.keys(shirt.colors).length === 0) ? undefined : Object.keys(shirt.colors);

  const [shirtSide, setShirtSide] = useState(useLocation().state?.defaultSide);
  function changeSide(event) {
    let newSide = event.target.innerHTML.toLowerCase();
    setShirtSide(newSide);
  }

  const [shirtColor, setShirtColor] = useState(useLocation().state?.defaultColor);
  function changeShirtColor(event) {
    let newColor = event.target.innerHTML;
    setShirtColor(newColor);
  }

  const [shirtImg, setShirtImg] = useState(useLocation().state?.defaultImg);

  function changeShirtImg(newColor, newSide) {
    if (newColor === undefined || newSide === undefined) {
      setShirtImg(notFound);
    } else if (newColor === 'default') {
      if (shirt.default === undefined || shirt.default[newSide] === undefined) {
        setShirtImg(notFound);
      } else {
        setShirtImg(shirt.default[newSide]);
      }
    } else {
      if (shirt.colors[newColor] === undefined || shirt.colors[newColor][newSide] === undefined) {
        setShirtImg(notFound);
      } else {
        setShirtImg(shirt.colors[newColor][newSide]);
      }
    }
  }

  useEffect(() => {
    if (shirtColor === undefined || shirtSide === undefined) {
      if (shirt.default?.front !== undefined) {
        setShirtSide('front');
        setShirtColor('default');
        setShirtImg(shirt.default.front);
      } else if (shirt.colors !== undefined && shirtColors.filter((color) => shirt.colors[color].front !== undefined).length > 0) {
        let color = shirtColors.filter((color) => shirt.colors[color].front !== undefined)[0];
        setShirtSide('front');
        setShirtColor(color);
        setShirtImg(shirt.colors[color].front);
      } else if (shirt.default?.back !== undefined) {
        setShirtSide('back');
        setShirtColor('default');
        setShirtImg(shirt.default.back);
      } else if (shirt.colors !== undefined && shirtColors.filter((color) => shirt.colors[color].back !== undefined).length > 0) {
        let color = shirtColors.filter((color) => shirt.colors[color].back !== undefined)[0];
        setShirtSide('back');
        setShirtColor(color);
        setShirtImg(shirt.colors[color].back);
      } else {
        setShirtSide('undefined');
        setShirtColor('undefined');
        setShirtImg(notFound);
      }
    } else {
      changeShirtImg(shirtColor, shirtSide);
    }
  });

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
          <img id="shirtImg" src={shirtImg} alt="A T-shirt" />
          <div id="shirtDetail">
            {shirt.price === undefined
              ? <div id="shirtPrice">The shirt is sold out :(</div>
              : <div id="shirtPrice">{shirt.price}</div>}
            {shirt.description === undefined
              ? <div></div>
              : <div id='shirtDescription'>{shirt.description}</div>}

            <div id="shirtSides">
              <span id="shirtSide"> Side: </span><br></br>
              <button key="sideFront" className="shirtSideButton" onClick={changeSide}>Front</button>
              <button key="sideBack" className="shirtSideButton" onClick={changeSide}>Back</button>
            </div>

            <div id="shirtColors">
              <span id="shirtColor"> Color: </span><br></br>
              <div id="shirtColorButtons">
                {shirtColors === undefined
                  ? <div>There is no color available now :(</div>
                  : shirtColors.map((color) => {
                    return (
                      <DetailColorButton key={color} color={color} onClick={changeShirtColor}></DetailColorButton>
                    );
                  }
                  )}
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
                pointerEvents: (buySize.startsWith("Size")
                  || shirtColors === undefined
                  || shirt.price === undefined) ? "none" : ""
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