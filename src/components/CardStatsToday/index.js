import React from "react";
import { CardStyled, CardHeaderStyled, CardBodyStyled } from "./style";
import IconUp from "../../assets/images/icon-up.svg";
import IconDown from "../../assets/images/icon-down.svg";

/**
  {
    socialMedia: {
      icon: string,
    },
    totalStats: {
      number: number, // ? backend send string (formatted number) or number
      caption: string,
    },
    growthStats: {
      caption: string,
      growth: boolean,
    },
  },
*/

function CardStatsGlobal(props) {
  const { icon, caption, totalStats, growthStats } = props.data;
  return (
    <CardStyled onClick={props.handleClick}>
      <CardHeaderStyled>
        <span className="caption">{caption}</span>
        <img
          src={require(`../../assets/images/icon-${icon}.svg`)}
          width="20"
          height="20"
          alt={icon}
        />
      </CardHeaderStyled>
      <CardBodyStyled className={growthStats.growth ? "increase" : "decrease"}>
        <strong className="stat-number">{totalStats}</strong>
        <div>
          <img
            className="growth-indicator"
            src={growthStats.growth ? IconUp : IconDown}
            alt={growthStats.growth ? "Arrow up" : "Arrow down"}
          />
          <small className="growth-caption">{growthStats.percent}</small>
        </div>
      </CardBodyStyled>
    </CardStyled>
  );
}

export default CardStatsGlobal;
