import React from "react";
import FilterProductTable from "./FilterProductTable";
import { PRODUCTS } from "./Products";

function App() {
  return (
    <div>
      <FilterProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
