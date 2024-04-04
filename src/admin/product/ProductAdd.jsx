import React from "react";
import AddEntity from "../components/AddEntity";

const ProductAdd = () => {
  const properties = [
    "Name",
    "CategoryID",
    "IsSale",
    "Price",
    "SalePrice",
    "ImgPath",
    "Model",
    "StockCount",
    "Description",
  ];
  return <AddEntity entityName={"Product"} propertyNames={properties} />;
};

export default ProductAdd;
