import './App.css';
import { routes } from './shared/appRoutes'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './container/homePage/HomePage'
import { NotFound } from './container/notFound/NotFound';
import { ProductPage } from './container/product/ProductPage';
import { ProductDetailPage } from './container/productDetail/ProductDetailPage';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage></HomePage>}></Route>
      <Route path={routes.product} element={<ProductPage></ProductPage>}></Route>
      <Route path={routes.notFound} element={<NotFound></NotFound>}></Route>
      <Route path={routes.productDetail} element={<ProductDetailPage></ProductDetailPage>}></Route>
    </Routes>
  );
}

export default App;
