import React, { useEffect, useState } from "react";
import TableEntity from "../components/TableEntity";

const Category = () => {
  const properties = ["Name"];
  return <TableEntity entityName={"Category"} propertyNames={properties} />;
};

export default Category;
