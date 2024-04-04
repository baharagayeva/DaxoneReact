import React from "react";
import AddEntity from "../components/AddEntity";

const ColorAdd = () => {
  const properties = ["Name", "ColorCode"];
  return <AddEntity entityName={"Color"} propertyNames={properties} />;
};

export default ColorAdd;
