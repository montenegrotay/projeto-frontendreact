import React from "react";
import { GlobalStyled } from "./GlobalStyled.js";


import Filters  from "./Components/Filters/Filters.js";
import Home  from "./Components/ProductList/Home/Home.js";
import Cart from "./Components/ShoppingCart/Cart/Cart.js";


function App() {
  return (
    <div className="App">
      <h1> Space Clothes </h1>
      <GlobalStyled />
      <Filters />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
