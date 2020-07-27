import React from "react";
import { CardStyled, CardHeaderStyled, CardBodyStyled, CardFooterStyled } from "./style";
import IconUp from "../../assets/images/icon-up.svg";
import IconDown from "../../assets/images/icon-down.svg";

/**
  socialMedia: {
    colors: [ colors ],
    icon: string,
    link: { text: string, url: string },
  }
  totalStats: {
    number: number, // ? backend send string (formatted number) or number
    caption: string,
  }
  growthStats: {
    caption: string,
    growth: boolean,
  }
*/

function CardStatsGlobal(props) {
  const { socialMedia, totalStats, growthStats } = props.data;
  return (
    <CardStyled onClick={props.handleClick}>
      <CardHeaderStyled topLine={socialMedia.icon}>
        <img
          className="social-icon"
          src={require(`../../assets/images/icon-${socialMedia.icon}.svg`)}
          width="20"
          height="20"
          alt={socialMedia.link.text}
        />
        <a
          className="social-link"
          href={socialMedia.link.url}
          target="_blank"
          rel="noopener noreferrer">
          {socialMedia.link.text}
        </a>
      </CardHeaderStyled>
      <CardBodyStyled>
        <strong className="stat-number">{totalStats.number}</strong>
        <small className="stat-caption">{totalStats.caption}</small>
      </CardBodyStyled>
      <CardFooterStyled className={growthStats.growth ? "increase" : "decrease"}>
        <img
          className="growth-indicator"
          src={growthStats.growth ? IconUp : IconDown}
          alt={growthStats.growth ? "Arrow up" : "Arrow down"}
        />
        <span className="growth-caption">{growthStats.caption}</span>
      </CardFooterStyled>
    </CardStyled>
  );
}

export default CardStatsGlobal;
