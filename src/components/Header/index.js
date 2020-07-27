import React from "react";
import themeHook from "../../custom-hooks/theme-hook";
import { HeaderStyled } from "./style";
import Switch from "../Switch";

function Header({ title, subtitle }) {
  const [theme, toggleTheme] = themeHook();

  return (
    <HeaderStyled className="row align-items-center">
      <div className="col-sm-10">
        <h1 className="title">{title}</h1>
        <h6 className="subtitle">{subtitle}</h6>
      </div>
      <div className="col-sm-2 d-flex justify-content-end">
        <Switch value={theme} onChange={toggleTheme} label="Dark Mode"></Switch>
      </div>
    </HeaderStyled>
  );
}

export default Header;
