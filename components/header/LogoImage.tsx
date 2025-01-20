"use client";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

const LogoImage = () => {
  const { width } = useWindowSize();
  return (
    <>
      <Image
        src={
          width !== null && width >= 768
            ? "logo-devlinks-large.svg"
            : "logo-devlinks-small.svg"
        }
        alt={"devlinks logo"}
        width={width !== null && width >= 768 ? 146 : 32}
        height={32}
      />
    </>
  );
};

export default LogoImage;
