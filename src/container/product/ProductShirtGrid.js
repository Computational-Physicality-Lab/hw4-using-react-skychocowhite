import './ProductShirtGrid.css';

import { routes } from '../../shared/appRoutes';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';

function ProductShirtGrid(props) {
  let shirt = props.shirt;
  let shirtColors = Object.keys(shirt.colors);
  let shirtAvailableMsg;

  if (shirtColors.length === 0) {
    shirtAvailableMsg = "Not avaliable right now";
  } else if (shirtColors.length === 1) {
    shirtAvailableMsg = "Available in 1 color";
  } else {
    shirtAvailableMsg = `Available in ${shirtColors.length} colors`;
  }

  return (
    <div className="ProductShirtGrid">
      <Link tag={RouterNavLink} to={routes.productDetail} state={{ shirt: shirt }}>
        <img src={shirt.default.front}></img>
      </Link>

      <p className="shirtName">
        {shirt.name}
      </p>

      <p className="shirtColorCounts">
        {shirtAvailableMsg}
      </p>

      <div className="shirtButtons">
        <a id="seePageButton">
          See Page
        </a>
      </div>

    </div>
  );
}

export { ProductShirtGrid };