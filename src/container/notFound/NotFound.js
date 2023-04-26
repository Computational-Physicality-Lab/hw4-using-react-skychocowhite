import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './NotFound.css';
import ScottyImage from '../../assets/images/scotty.png';

function NotFound() {
  return (
    <div className="NotFound">
      <Header></Header>
      <img id="notImplementedImg" src={ScottyImage} alt="A scotty" />
      <p id="notImplementedMsg">Oops, this page doesn't exist yet... how about a shirt from the last page?</p>
      <Footer></Footer>
    </div>
  );
}

export { NotFound };