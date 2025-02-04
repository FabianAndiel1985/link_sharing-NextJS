import React, { ReactNode } from "react";
import "./button.scss";

interface IButtonProps {
  isFilled: boolean;
  isMiddleLink: boolean;
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  icon,
  text,
  isFilled,
  isMiddleLink,
  onClick,
}: IButtonProps) => {
  return (
    <>
      <button
        className={`button ${isFilled && " filled"} ${
          isMiddleLink && " middleLink"
        } ${!text && icon && " icon"} `}
        onClick={onClick}
      >
        {icon}
        {text && <span className="button__text">{text} </span>}
      </button>
    </>
  );
};

export default Button;
