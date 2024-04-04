import React from "react";
import EditEntity from "../components/EditEntity";

const AdvertisementBannerEdit = () => {
  const properties = ["title", "imgPath", "discount", "description"];
  return (
    <EditEntity entityName={"AdvertisementBanner"} propertyNames={properties} />
  );
};

export default AdvertisementBannerEdit;
