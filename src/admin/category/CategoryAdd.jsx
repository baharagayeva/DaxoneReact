import React from "react";
import AddEntity from "../components/AddEntity";

const CategoryAdd = () => {
  const properties = ["Name"];
  return <AddEntity entityName={"Category"} propertyNames={properties} />;
};

export default CategoryAdd;
