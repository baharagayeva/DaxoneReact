import React from "react";
import AddEntity from "../components/AddEntity";

const SizeAdd = () => {
  const properties = ["Name"];
  return <AddEntity entityName={"Size"} propertyNames={properties} />;
};

export default SizeAdd;
