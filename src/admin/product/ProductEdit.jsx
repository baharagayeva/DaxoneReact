import React from "react";
import EditEntity from "../components/EditEntity";

const ProductEdit = () => {
  const properties = [
    "name",
    "categoryID",
    "isSale",
    "price",
    "salePrice",
    "imgPath",
    "model",
    "stockCount",
    "description",
  ];
  return <EditEntity entityName={"Product"} propertyNames={properties} />;
};

export default ProductEdit;
