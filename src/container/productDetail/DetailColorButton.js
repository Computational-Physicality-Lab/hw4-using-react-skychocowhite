import { useState } from 'react';
import './DetailColorButton.css';

function DetailColorButton(props) {
  const color = props.color;

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let buttonElement;
  if (color === 'black') {
    buttonElement = <button key="black" className='shirtColorButton' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
      color: isHover ? "#c51230" : "white",
      backgroundColor: isHover ? "white" : "black"
    }}> white </button>
  } else {
    buttonElement = <button key={color} className='shirtColorButton' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
      color: isHover ? "#c51230" : "black",
      backgroundColor: isHover ? "white" : color
    }}> {color} </button>
  }

  return (
    <>
      {buttonElement}
    </>
  );
}

export { DetailColorButton };