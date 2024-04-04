import React from "react";
import EditEntity from "../components/EditEntity";

const SeasonDiscountEdit = () => {
  const properties = ["title", "description", "titleDescription", "imgPath"];
  return (
    <EditEntity entityName={"SeasonDiscount"} propertyNames={properties} />
  );
};

export default SeasonDiscountEdit;
