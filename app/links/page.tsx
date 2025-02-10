import HandyImage from "@/components/links/HandyImage";
import LinkCustomization from "@/components/links/LinkCustomization";
import React from "react";
import "@/styles/pages/links.scss";

const page = () => {
  return (
    <div className="link-container">
      <HandyImage />
      <LinkCustomization />
    </div>
  );
};

export default page;
