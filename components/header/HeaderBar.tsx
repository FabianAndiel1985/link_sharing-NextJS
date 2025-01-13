import { ReactNode } from "react";
import "./headerbar.scss";

interface HeaderBarProps {
  children: ReactNode;
}

const HeaderBar = ({ children }: HeaderBarProps) => {
  return (
    <>
      <div className="headerbar">{children}</div>
    </>
  );
};

export default HeaderBar;
