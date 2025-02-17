import React from "react";
import Image from "next/image";
import "./startImage.scss";

const StartImage: React.FC = () => {
  return (
    <div className="no-links-container">
      <Image
        src={"illustration-empty.svg"}
        alt={"no links illustration"}
        width={249.53}
        height={160}
      />
      <h1>Let`s get you started</h1>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default StartImage;
