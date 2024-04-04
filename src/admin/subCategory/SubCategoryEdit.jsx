import React from "react";
import EditEntity from "../components/EditEntity";

const SubCategoryEdit = () => {
  const properties = ["name", "categoryID"];
  return <EditEntity entityName={"SubCategory"} propertyNames={properties} />;
};

export default SubCategoryEdit;
