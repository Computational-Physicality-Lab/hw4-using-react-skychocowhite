import './ProductShirtGrid.css';

function ProductShirtGrid(props) {
  let shirt = props.shirt;
  let shirtColors = Object.keys(shirt.colors);
  let shirtAvailableMsg;

  if (shirtColors.length == 0) {
    shirtAvailableMsg = "Not avaliable right now";
  } else if (shirtColors.length == 1) {
    shirtAvailableMsg = "Available in 1 color";
  } else {
    shirtAvailableMsg = `Available in ${shirtColors.length} colors`;
  }

  return (
    <div className="ProductShirtGrid">
      <a>
        <img src={shirt.colors[shirtColors[0]].front}></img>
      </a>

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