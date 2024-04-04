import React, { useState } from "react";
import TableEntity from "../components/TableEntity";

const SubCategory = () => {
  const properties = ["Name", "CategoryID"];

  return <TableEntity entityName={"SubCategory"} propertyNames={properties} />;
};

export default SubCategory;
