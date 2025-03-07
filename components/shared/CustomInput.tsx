import { CustomInputProps } from "@/types/types";
import "./customInput.scss";
import React, { ReactNode } from "react";

const CustomInput = ({ children, clickHandler }: CustomInputProps) => {
  return (
    <div onClick={clickHandler} className="custom-input">
      {children}
    </div>
  );
};

export default CustomInput;
