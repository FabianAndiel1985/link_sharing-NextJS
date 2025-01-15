import React from "react";
import HeaderBar from "./HeaderBar";
import PreviewContent from "./PreviewContent";
import Content from "./Content";
import "./header.scss";

const Header = () => {
  const isPreview: boolean = false;

  return (
    <>
      <header>
        <HeaderBar>{isPreview ? <PreviewContent /> : <Content />} </HeaderBar>
      </header>
    </>
  );
};

export default Header;
