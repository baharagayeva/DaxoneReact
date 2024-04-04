import React from "react";
import AddEntity from "../components/AddEntity";

const ProductStatusAdd = () => {
  const properties = ["New", "InStock", "StockOut"];
  return <AddEntity entityName={"ProductStatus"} propertyNames={properties} />;
};

export default ProductStatusAdd;
