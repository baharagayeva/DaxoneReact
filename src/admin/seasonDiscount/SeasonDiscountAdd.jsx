import React from "react";
import AddEntity from "../components/AddEntity";

const SeasonDiscountAdd = () => {
  const properties = ["Title", "Description", "TitleDescription", "ImgPath"];
  return <AddEntity entityName={"SeasonDiscount"} propertyNames={properties} />;
};

export default SeasonDiscountAdd;
