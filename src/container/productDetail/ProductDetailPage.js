import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './ProductDetailPage.css';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailColorButton } from './DetailColorButton';
import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function ProductDetailPage() {
  const location = useLocation();
  const shirt = location.state?.shirt;
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
  const [buySize, setBuySize] = useState("Men's M");
  const [sizeDropDownOpen, setSizeDropDownOpen] = useState(false);
  const sizeDropDownToggle = () => setSizeDropDownOpen((prevState) => !prevState);
  function clickSize(event) {
    setBuySize(event.target.innerHTML);
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
              <Dropdown isOpen={quantityDropDownOpen} toggle={quantityDropDownToggle} direction="up">
                <DropdownToggle caret>{buyQuantity}</DropdownToggle>
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
              <Dropdown isOpen={sizeDropDownOpen} toggle={sizeDropDownToggle} direction='up'>
                <DropdownToggle caret>{buySize}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Women</DropdownItem>
                  {sizeList.filter((size) => size.startsWith("Women")).map((size) => {
                    return (
                      <DropdownItem key={size} onClick={clickSize}>{size}</DropdownItem>
                    );
                  })}
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem header>Men</DropdownItem>
                  {sizeList.filter((size) => size.startsWith("Men")).map((size) => {
                    return (
                      <DropdownItem key={size} onClick={clickSize}>{size}</DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* <Link></Link> */}
            <div id="shirtSubmit">
              <button id="submitButton">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
}

export { ProductDetailPage }; 