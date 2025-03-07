import React, { ReactNode } from "react";
import "./button.scss";
import { IButtonProps } from "@/types/types";

const Button: React.FC<IButtonProps> = ({
  icon,
  text,
  isFilled,
  isMiddleLink,
  onClick,
  fullLength,
}: IButtonProps): ReactNode => {
  return (
    <>
      <button
        className={`button ${isFilled && " filled"} ${
          isMiddleLink && " middleLink"
        } ${!text && icon && " icon"} ${fullLength && " full-length"} `}
        onClick={onClick}
      >
        {icon}
        {text && <span className="button__text">{text} </span>}
      </button>
    </>
  );
};

export default Button;
