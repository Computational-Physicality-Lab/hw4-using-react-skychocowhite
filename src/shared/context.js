import { createContext } from "react";

let TimeContext = createContext();

function initContext() {
  TimeContext.current = sessionStorage.getItem('timestamp') || Date.now();
  if (sessionStorage.getItem('timestamp') === null) {
    sessionStorage.setItem('timestamp', TimeContext.current);
    sessionStorage.setItem('shopList_' + TimeContext.current, JSON.stringify({
      orderId: 0,
      orders: []
    }));
  }
}

function getOrders() {
  return JSON.parse(sessionStorage.getItem('shopList_' + TimeContext.current));
}

export { TimeContext, initContext, getOrders };