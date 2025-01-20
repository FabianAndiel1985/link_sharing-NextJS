import React from "react";
import Button from "../shared/Button";
import "./linkCustomization.scss";

const LinkCustomization = () => {
  return (
    <>
      <div className={"customization-box"}>
        <p>Customize your links</p>

        <small>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </small>
        <br />
        <br />
        <Button isFilled={false} isMiddleLink={false} text={"+ Add new link"} />
      </div>
      <div className={"saving-box"}>
        <Button isFilled={true} isMiddleLink={false} text={"Save"} />
      </div>
    </>
  );
};

export default LinkCustomization;
