import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './ProductDetailPage.css';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailColorButton } from './DetailColorButton';

function ProductDetailPage() {
  const location = useLocation();
  const shirt = location.state?.shirt;
  const shirtColors = Object.keys(shirt.colors);
  console.log(shirt);

  return (
    <div className="ProductDetailPage">
      <Header></Header>
      <div className="shirtDetailSection">
        <h2> {shirt.name} </h2>
        <div id="shirtInformation">
          <img id="shirtImg" src={shirt.default.front} alt="A T-shirt" />
          <div>
            <div id="shirtPrice">{shirt.price}</div>
            <div id="shirtDescription">{shirt.description}</div>
            <div id="shirtSides">
              <span id="shirtSide"> Side: </span><br></br>
              <button key="sideFront" className="shirtSideButton"> Front </button>
              <button key="sideBack" className="shirtSideButton"> Back </button>
            </div>
            <div id="shirtColors">
              <span id="shirtColor"> Color: </span><br></br>
              <div id="shirtColorButtons">
                {shirtColors.map((color) => {
                  return (
                    <DetailColorButton key={color} color={color}></DetailColorButton>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
}

export { ProductDetailPage };