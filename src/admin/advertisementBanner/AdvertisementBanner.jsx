import React from "react";
import TableEntity from "../components/TableEntity";
const AdvertisementBanner = () => {
   const properties = ["Title", "ImgPath", "Discount", "Description"];
  return <TableEntity entityName={"AdvertisementBanner"} propertyNames={properties} />;
};

export default AdvertisementBanner;
