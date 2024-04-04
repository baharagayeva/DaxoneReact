import React from "react";
import TableEntity from "../components/TableEntity";

const ProductStatus = () => {
  const properties = ["New", "InStock", "StockOut"];
  return (
    <TableEntity entityName={"ProductStatus"} propertyNames={properties} />
  );
};

export default ProductStatus;
