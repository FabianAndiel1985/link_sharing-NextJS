import HandyImage from "@/components/links/HandyImage";
import LinkCustomization from "@/components/links/LinkCustomization";
import React from "react";
import "@/styles/pages/links.scss";
import { SocialMediaProvider } from "@/context/SocialMediaContext";

const page = () => {
  return (
    <div className="link-container">
      <SocialMediaProvider>
        <HandyImage />
        <LinkCustomization />
      </SocialMediaProvider>
    </div>
  );
};

export default page;
