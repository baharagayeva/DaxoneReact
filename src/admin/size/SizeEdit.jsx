import React from "react";
import EditEntity from "../components/EditEntity";

const SizeEdit = () => {
  const properties = ["name"];
  return <EditEntity entityName={"Size"} propertyNames={properties} />;
};

export default SizeEdit;
