import './ProductShirtGrid.css';

import { routes } from '../../shared/appRoutes';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import notFound from '../../assets/shirt_images/not-found.png'

function ProductShirtGrid(props) {
  let shirt = props.shirt;
  let shirtColors = (shirt.colors === undefined || Object.keys(shirt.colors).length === 0) ? undefined : Object.keys(shirt.colors);

  let shirtSide, shirtColor, shirtImg;
  if (shirt.default?.front !== undefined) {
    shirtSide = 'front';
    shirtColor = 'default';
    shirtImg = shirt.default.front;
  } else if (shirt.colors !== undefined && shirtColors.filter((color) => shirt.colors[color].front !== undefined).length > 0) {
    shirtSide = 'front';
    shirtColor = shirtColors.filter((color) => shirt.colors[color].front !== undefined)[0];
    shirtImg = shirt.colors[shirtColor].front;
  } else if (shirt.default?.back !== undefined) {
    shirtSide = 'back';
    shirtColor = 'default';
    shirtImg = shirt.default.back;
  } else if (shirt.colors !== undefined && shirtColors.filter((color) => shirt.colors[color].back !== undefined).length > 0) {
    shirtSide = 'back';
    shirtColor = shirtColors.filter((color) => shirt.colors[color].back !== undefined)[0];
    shirtImg = shirt.colors[shirtColor].back;
  } else {
    shirtSide = 'undefined';
    shirtColor = 'undefined';
    shirtImg = notFound;
  }

  let shirtAvailableMsg;
  if (shirtColors === undefined) {
    shirtAvailableMsg = "Not avaliable right now";
  } else if (shirtColors.length === 1) {
    shirtAvailableMsg = "Available in 1 color";
  } else {
    shirtAvailableMsg = `Available in ${shirtColors.length} colors`;
  }

  return (
    <div className="ProductShirtGrid">
      <Link tag={RouterNavLink} to={routes.productDetail} state={{ shirt: shirt, defaultSide: shirtSide, defaultColor: shirtColor, defaultImg: shirtImg }}>
        <img src={shirtImg} alt="A shirt with specific color and side"></img>
      </Link>

      <p className="shirtName">
        {shirt.name}
      </p>

      <p className="shirtColorCounts">
        {shirtAvailableMsg}
      </p>

      <div className="shirtButtons">
        <Link className='seePageButton' tag={RouterNavLink} to={routes.productDetail} state={{ shirt: shirt, defaultSide: shirtSide, defaultColor: shirtColor, defaultImg: shirtImg }}>
          See Page
        </Link>
      </div>

    </div>
  );
}

export { ProductShirtGrid };