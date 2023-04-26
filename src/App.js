import './App.css';
import { routes } from './shared/appRoutes'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './container/homePage/HomePage'
import { NotFound } from './container/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage></HomePage>}></Route>
      <Route path={routes.notFound} element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
