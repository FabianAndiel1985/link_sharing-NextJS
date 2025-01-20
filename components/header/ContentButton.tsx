"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Button from "../shared/Button";
import Image from "next/image";
import { ReactNode } from "react";

const ContentButton = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width !== null && width >= 768 ? (
        <Button text={"Preview"} isFilled={false} isMiddleLink={false} />
      ) : (
        <Button
          isFilled={false}
          isMiddleLink={false}
          icon={
            <Image
              src="/icon-preview-header.svg"
              alt={"preview-header"}
              width={20}
              height={20}
            />
          }
        />
      )}
    </>
  );
};

export default ContentButton;
