import React from "react";
import EditEntity from "../components/EditEntity";

const ColorEdit = () => {
  const properties = ["name", "colorCode"];
  return <EditEntity entityName={"Color"} propertyNames={properties} />;
};

export default ColorEdit;
