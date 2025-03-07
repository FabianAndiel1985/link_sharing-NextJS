import "./headerbar.scss";
import { HeaderBarProps } from "@/types/types";

const HeaderBar = ({ children }: HeaderBarProps) => {
  return (
    <>
      <div className="headerbar">{children}</div>
    </>
  );
};

export default HeaderBar;
