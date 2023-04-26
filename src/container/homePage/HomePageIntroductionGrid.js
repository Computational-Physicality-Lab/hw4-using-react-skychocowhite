import './HomePageIntroductionGrid.css';

function HomePageIntroductionGrid(props) {
  return (
    <div className="HomePageIntroductionGrid">
      <p className="homepageIntroductionTitle">
        {props.title}
      </p>
      <p className="homepageIntroductionDescription">
        {props.children}
      </p>
    </div>
  );
}

export { HomePageIntroductionGrid };