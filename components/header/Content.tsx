import React from "react";
import Image from "next/image";
import Button from "../shared/Button";

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
        <Image
          src={"logo-devlinks-large.svg"}
          alt={"devlinks logo"}
          width={146}
          height={32}
        />

        <MiddleLinks />

        <Button text={"Preview"} isFilled={false} isMiddleLink={false} />
      </div>
    </>
  );
};

export default Content;
