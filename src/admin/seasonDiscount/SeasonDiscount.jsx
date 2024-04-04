import React from "react";
import TableEntity from "../components/TableEntity";

const SeasonDiscount = () => {
   const properties = ["Title", "Description", "TitleDescription", "ImgPath"];

   return (
     <TableEntity entityName={"SeasonDiscount"} propertyNames={properties} />
   );
};

export default SeasonDiscount;
