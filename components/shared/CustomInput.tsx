import "./customInput.scss";
import React, { ReactNode } from "react";

interface CustomInputProps {
  children?: ReactNode;
  clickHandler?: () => void;
}

const CustomInput = ({ children, clickHandler }: CustomInputProps) => {
  return (
    <div onClick={clickHandler} className="custom-input">
      {children}
    </div>
  );
};

export default CustomInput;
