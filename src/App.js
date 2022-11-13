import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import {BakeryItem} from "./components/BakeryItem";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0)
  const [names, setNames] = useState([])

  //modifty to add parameters pass it in
  function handleClick(price, name) {
    setTotalPrice(totalPrice + price);
    setNames([...names, name])
  }

  return (
    <div className="App">
      <h1>My Cool Bakery</h1> 

      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => handleClick()}>Click me!</button>

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
         <BakeryItem key={item} item={item} handleClick={handleClick}/>  // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {names.length == 0 ? null : names.map(
          str => <p>{str}</p>
        )}
      </div>
    </div>
  );
}

export default App;
