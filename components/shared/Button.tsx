import React, { ReactNode } from "react";
import "./button.scss";

interface IButtonProps {
  text: string;
  isFilled: boolean;
  isMiddleLink: boolean;
  icon?: ReactNode;
}

const Button = ({ icon, text, isFilled, isMiddleLink }: IButtonProps) => {
  return (
    <>
      <button
        className={`button ${isFilled && " filled"} ${
          isMiddleLink && " middleLink"
        }`}
      >
        {icon && isMiddleLink && icon} {text}
      </button>
    </>
  );
};

export default Button;
