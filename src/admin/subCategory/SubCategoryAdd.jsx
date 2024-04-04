import React from "react";
import AddEntity from "../components/AddEntity";

const SubCategoryAdd = () => {
  const properties = ["Name", "CategoryID"];
  return <AddEntity entityName={"SubCategory"} propertyNames={properties} />;
};

export default SubCategoryAdd;
