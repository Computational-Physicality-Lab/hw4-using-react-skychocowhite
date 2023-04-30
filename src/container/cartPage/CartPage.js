import { useEffect, useState } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './CartPage.css';
import { CartItem } from './CartItem';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { routes } from '../../shared/appRoutes';

function CartPage() {
  let shopList = JSON.parse(localStorage.getItem('shopList'));
  console.log(shopList);

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

  return (
    <div className='CartPage'>
      <Header></Header>

      <div id="cartSection">
        <div id="cartProductsBar">
          <h2>My Cart ({shirtCounts})</h2>
          {shopList.orders.map((order, index) => {
            return (
              <CartItem key={order.id} order={order}></CartItem>
            );
          })}
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
              <div id="shippingValue">${shippingValue}</div>
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