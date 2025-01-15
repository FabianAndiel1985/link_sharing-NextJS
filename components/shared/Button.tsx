import React, { ReactNode } from "react";
import "./button.scss";

interface IButtonProps {
  isFilled: boolean;
  isMiddleLink: boolean;
  text?: string;
  icon?: ReactNode;
}

const Button = ({ icon, text, isFilled, isMiddleLink }: IButtonProps) => {
  return (
    <>
      <button
        className={`button ${isFilled && " filled"} ${
          isMiddleLink && " middleLink"
        } ${!text && icon && " icon"} `}
      >
        {icon}
        {text && <span className="button__text">{text} </span>}
      </button>
    </>
  );
};

export default Button;
