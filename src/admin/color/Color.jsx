import React from "react";
import TableEntity from "../components/TableEntity";

const Color = () => {
  const properties = ["Name", "ColorCode"];
  return <TableEntity entityName={"Color"} propertyNames={properties} />;
};

export default Color;
