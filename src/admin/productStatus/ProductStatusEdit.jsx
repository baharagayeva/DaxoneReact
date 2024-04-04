import React from "react";
import EditEntity from "../components/EditEntity";

const ProductStatusEdit = () => {
  const properties = ["new", "inStock", "stockOut"];
  return <EditEntity entityName={"ProductStatus"} propertyNames={properties} />;
};

export default ProductStatusEdit;
