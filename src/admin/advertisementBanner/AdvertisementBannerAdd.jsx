import React from "react";
import AddEntity from "../components/AddEntity";

const Add = () => {
 const properties = ["Title", "ImgPath", "Discount", "Description"];
 return (
   <AddEntity
     entityName={"AdvertisementBanner"}
     propertyNames={properties}
   />
 );
};

export default Add;
