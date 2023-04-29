import { useState } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './CartPage.css';

function CartPage() {
  const [productCount, setProductCount] = useState(0);

  return (
    <div className='CartPage'>
      <Header></Header>

      <div id="cartProductsBar">
        <h2> My Cart (0)</h2>
      </div>

      <Footer></Footer>
    </div>

    //     <div className="ProductDetailPage">
    //   <Header></Header>
    //   <div className="shirtDetailSection">
    //     <h2> {shirt.name} </h2>
    //     <div id="shirtInformation">
    //       <img id="shirtImg" src={shirt.default.front} alt="A T-shirt" />
    //       <div>
    //         <div id="shirtPrice">{shirt.price}</div>
    //         <div id="shirtDescription">{shirt.description}</div>

    //         <div id="shirtSides">
    //           <span id="shirtSide"> Side: </span><br></br>
    //           <button key="sideFront" className="shirtSideButton"> Front </button>
    //           <button key="sideBack" className="shirtSideButton"> Back </button>
    //         </div>

    //         <div id="shirtColors">
    //           <span id="shirtColor"> Color: </span><br></br>
    //           <div id="shirtColorButtons">
    //             {shirtColors.map((color) => {
    //               return (
    //                 <DetailColorButton key={color} color={color}></DetailColorButton>
    //               );
    //             })}
    //           </div>
    //         </div>

    //         <div id="shirtQuantities">
    //           <span id="shirtQuantity"> Quantity: </span><br></br>
    //           <Dropdown isOpen={quantityDropDownOpen} toggle={quantityDropDownToggle} direction="up">
    //             <DropdownToggle caret>{buyQuantity}</DropdownToggle>
    //             <DropdownMenu>
    //               {quantityList.map((quantity) => {
    //                 return (
    //                   <DropdownItem key={quantity} onClick={clickQuantity}>{quantity}</DropdownItem>
    //                 );
    //               })}
    //             </DropdownMenu>
    //           </Dropdown>
    //         </div>

    //         <div id="shirtSizes">
    //           <span id="shirtSize"> Size: </span><br></br>
    //           <Dropdown isOpen={sizeDropDownOpen} toggle={sizeDropDownToggle} direction='up'>
    //             <DropdownToggle caret>{buySize}</DropdownToggle>
    //             <DropdownMenu>
    //               <DropdownItem header>Women</DropdownItem>
    //               {sizeList.filter((size) => size.startsWith("Women")).map((size) => {
    //                 return (
    //                   <DropdownItem key={size} onClick={clickSize}>{size}</DropdownItem>
    //                 );
    //               })}
    //               <DropdownItem divider></DropdownItem>
    //               <DropdownItem header>Men</DropdownItem>
    //               {sizeList.filter((size) => size.startsWith("Men")).map((size) => {
    //                 return (
    //                   <DropdownItem key={size} onClick={clickSize}>{size}</DropdownItem>
    //                 );
    //               })}
    //             </DropdownMenu>
    //           </Dropdown>
    //         </div>

    //         {/* <Link></Link> */}
    //         <div id="shirtSubmit">
    //           <button id="submitButton">Add To Cart</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer></Footer>
    // </div >
  );
}

export { CartPage };