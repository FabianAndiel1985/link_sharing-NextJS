import React from "react";
import Image from "next/image";
import Button from "../shared/Button";
import LogoImage from "./LogoImage";
import ContentButton from "./ContentButton";

const MiddleLinks = () => {
  return (
    <>
      <div className={"content__middle-links"}>
        <Button
          text="Links"
          isFilled={false}
          isMiddleLink={true}
          icon={
            <Image
              src="/icon-link.svg"
              width={20}
              height={20}
              alt="link icon"
            />
          }
        />
        <Button
          text="Profile Details"
          isFilled={false}
          isMiddleLink={true}
          icon={
            <Image
              src="/icon-profile-details-header.svg"
              width={20}
              height={20}
              alt="link icon"
            />
          }
        />
      </div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className={"content"}>
        <LogoImage />
        <MiddleLinks />
        <ContentButton />
      </div>
    </>
  );
};

export default Content;
