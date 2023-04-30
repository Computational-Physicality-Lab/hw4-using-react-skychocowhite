import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './CartItem.css';
import { useState } from 'react';

function CartItem(props) {
  const order = props.order;

  function getShirtImg() {
    if (order.color === 'default') {
      return order.shirt.default.front;
    } else {
      return order.shirt.colors[order.color].front;
    }
  }

  const quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [quantity, setQuantity] = useState(order.quantity);
  const [quantityDropDownOpen, setQuantityDropDownOpen] = useState(false);
  const quantityDropDownToggle = () => setQuantityDropDownOpen((prevState) => !prevState);

  function changeQuantity(event) {
    const newQuantity = parseInt(event.target.innerHTML);
    setQuantity(newQuantity);
    props.quantityClick(order.id, newQuantity);
  }

  function removeOrder(event) {
    props.removeClick(order.id);
  }

  return (
    <div className='CartItem'>
      <hr></hr>
      <h3>{order.shirt.name}</h3>
      <div id="itemSection">
        <div id="orderImg">
          <img src={getShirtImg()} alt={`A T-shirt with ${order.color} color`}></img>
        </div>

        <div id="orderInformation">
          <div id="quantitySection">
            <span id="quantityTitle">Quantity: </span>
            <Dropdown id="quantityDropdown" isOpen={quantityDropDownOpen} toggle={quantityDropDownToggle} direction="down">
              <DropdownToggle caret id="quantityDropdownToggle">{quantity}</DropdownToggle>
              <DropdownMenu id="quantityDropdownMenu">
                {quantityList.map((quantity) => {
                  return (
                    <DropdownItem key={quantity} onClick={changeQuantity}>{quantity}</DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </div>

          <div id="colorSection">
            <span id="colorTitle">Color: </span>
            <span id="colorValue">{order.color}</span>
          </div>

          <div id="sizeSection">
            <span id="sizeTitle">Size: </span>
            <span id="sizeValue">{order.size}</span>
          </div>

          <div id="priceSection">
            <span id="priceTitle">Price (each): </span>
            <span id="priceValue">{order.shirt.price}</span>
          </div>

          <button id="removeButton" onClick={removeOrder}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export { CartItem };