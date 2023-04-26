import './HomePage.css';
import BannerImage from '../../assets/images/banner.png'

import { Header } from '../header/Header';
import { HomePageIntroductionGrid } from './HomePageIntroductionGrid';
import { Footer } from '../footer/Footer';

function HomePage() {
  return (
    <div className="HomePage">
      <Header></Header>
      <div>
        <img id="homepageLogo" src={BannerImage} alt="Home page logo" />
      </div>
      <div className="homepageIntroduction">
        <HomePageIntroductionGrid title="We don't ship. We're not real.">
          We sell shirts. We are passionate about selling shirts.
          But keep in mind we have no infrastructure, supply
          chain,or mechanism to actually produce these shirts or
          fulfill the orders. But the shirts will always be real
          in your imagination.
        </HomePageIntroductionGrid>

        <HomePageIntroductionGrid title="Design your own shirt! But help us do that...">
          Not only do we not shell shirts, but we let you design
          your own! Eventually. We actually kinda need your help
          implementing that. If you could build an actual paint-
          style interface that you can make designs in that would
          be great :)
        </HomePageIntroductionGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export { HomePage };