import { useContext, useEffect, useState } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './CartPage.css';
import { CartItem } from './CartItem';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { routes } from '../../shared/appRoutes';
import { TimeContext, getOrders } from '../../shared/context';

function CartPage() {
  const time = useContext(TimeContext);
  console.log("Time: " + time);
  const [shopList, setShopList] = useState(getOrders());
  const [shirtCounts, setShirtCounts] = useState(
    shopList.orders.map((order) => parseInt(order.quantity)).reduce((a, b) => a + b, 0)
  );
  const [subtotal, setSubtotal] = useState(
    shopList.orders.map((order) => parseFloat(order.quantity) * parseFloat(order.shirt.price.substring(1)))
      .reduce((a, b) => a + b, 0.0)
  );
  const [shippingValue, setShippingValue] = useState(
    shopList.orders.length == 0 ? 0.0 : 6.95
  );

  function updateState() {
    let newList = getOrders();
    setShopList(newList);
    setShirtCounts(newList.orders.map((order) => parseInt(order.quantity)).reduce((a, b) => a + b, 0.0));
    setSubtotal(newList.orders.map((order) => parseFloat(order.quantity) * parseFloat(order.shirt.price.substring(1))).reduce((a, b) => a + b, 0.0));
    setShippingValue(newList.orders.length == 0 ? 0.0 : 6.95);
  }

  function changeOrderQuantity(orderId, newQuantity) {
    let item = JSON.parse(JSON.stringify(shopList.orders.filter((order) => order.id === orderId)[0]));
    let newSubtotal = subtotal + (newQuantity - item.quantity) * parseFloat(item.shirt.price.substring(1));
    setShirtCounts(shirtCounts - item.quantity + newQuantity);
    setSubtotal(newSubtotal);
    item.quantity = newQuantity;

    let newList = JSON.parse(JSON.stringify(shopList));
    newList.orders = newList.orders.map((order) => {
      if (order.id === orderId) {
        return item;
      }
      return order;
    })
    setShopList(newList);
    sessionStorage.setItem('shopList_' + TimeContext.current, JSON.stringify(newList));
    updateState();
  }

  function removeOrder(orderId) {
    let newList = JSON.parse(JSON.stringify(shopList));

    let index = newList.orders.map((order, index) => {
      if (order.id === orderId) {
        return index;
      }
      return -1;
    }).filter((index) => index >= 0)[0];

    newList.orders.splice(index, 1);
    if (newList.orders.length === 0) {
      newList.orderId = 0;
    }
    sessionStorage.setItem('shopList_' + TimeContext.current, JSON.stringify(newList));
    updateState();
  }

  return (
    <div className='CartPage'>
      <Header value={shirtCounts}></Header>

      <div id="cartSection">
        <div id="cartProductsBar">
          <h2>My Cart ({shirtCounts})</h2>
          {shirtCounts !== 0
            ? shopList.orders.slice().reverse().map((order) => {
              return (
                <CartItem key={order.id} order={order} quantityClick={changeOrderQuantity} removeClick={removeOrder}></CartItem>
              );
            })
            : <h3>Your Cart is Empty</h3>}
        </div>

        <div id="cartSummaryBar">
          <div id="cartSummaryBlock">
            <h3>Order Summary</h3>

            <div id="subtotalSection">
              <div id="subtotalTitle">Subtotal:</div>
              <div id="subtotalValue">${subtotal.toFixed(2)}</div>
            </div>

            <div id="shippingSection">
              <div id="shippingTitle">Est. Shipping:</div>
              <div id="shippingValue">${shippingValue.toFixed(2)}</div>
            </div>

            <hr></hr>

            <div id="totalSection">
              <div id="totalTitle">Total:</div>
              <div id="totalValue">${(subtotal + shippingValue).toFixed(2)}</div>
            </div>

            <div id="checkoutSection">
              <Link id="checkoutButton" tag={RouterNavLink} to={routes.notFound}>Sign in and Checkout</Link>
            </div>
          </div>

          <div id="keepShoppingSection">
            <Link id="keepShoppingButton" tag={RouterNavLink} to={routes.product}>Continue Shopping</Link>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div >
  );
}

export { CartPage };