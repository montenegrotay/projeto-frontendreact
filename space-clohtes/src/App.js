import React from "react";
import { GlobalStyled } from "./GlobalStyled.js";
import Filters  from "./Components/Filters/Filters.js";
import Home  from "./Components/ProductList/Home/Home.js";
import Cart from "./Components/ShoppingCart/Cart/Cart.js";
import "./assets/productList.js";


function App() {

  return (
    <div className="App">
      <GlobalStyled />
      <Filters />
      <Home />
      <Cart />
    </div> 

  );
};
export default App;


