import React from "react";
import EditEntity from "../components/EditEntity";

const CategoryEdit = () => {
   const properties = ["name"];
   return <EditEntity entityName={"Category"} propertyNames={properties} />;
};

export default CategoryEdit;
