import React from "react";
import { SwitchWrapper, SwitchStyled, SwitchLabelStyled } from "./style";

function Switch({ value, onChange, label }) {
  return (
    <SwitchWrapper>
      {label ? <SwitchLabelStyled>{label}</SwitchLabelStyled> : null}
      <SwitchStyled>
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className="slider round" />
      </SwitchStyled>
    </SwitchWrapper>
  );
}

export default Switch;
