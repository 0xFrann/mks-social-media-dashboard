import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { getStatHistory } from "../../services";
import {
  ModalChartStyled,
  ModalChartWrapperStyled,
  ModalChartHeaderStyled,
  ModalChartBodyStyled,
} from "./style";
import IconUp from "../../assets/images/icon-up.svg";
import IconDown from "../../assets/images/icon-down.svg";
import color from "../../assets/sass/config/_colors.scss";

function ModalChart({ open, socialMedia, handleClose }) {
  const strokeColor = () => color.desaturatedPurple;
  const [statHistory, setStatHistory] = useState([]);

  useEffect(() => {
    setStatHistory(getStatHistory());
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const closeModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <ModalChartWrapperStyled opened={open} onClick={closeModal}>
      <ModalChartStyled>
        {open ? (
          <>
            <ModalChartHeaderStyled>
              <h2 className="modal-title">{socialMedia.title}</h2>
              <span className="modal-close" onClick={closeModal}>
                ✖
              </span>
              <div className="d-flex align-items-center mb-4">
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
              </div>
              <div className="row">
                <div className="col-sm-3 d-flex align-items-center">
                  <span className="stat-number">{statHistory.parameters.totalFollowers}</span>
                  <span className="stat-caption">Total followers</span>
                </div>
                <div className="col-sm-3 d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className="stat-indicator"
                      src={statHistory.parameters.followersPast10Days.growth ? IconUp : IconDown}
                      alt={
                        statHistory.parameters.followersPast10Days.growth
                          ? "Arrow up"
                          : "Arrow down"
                      }
                    />
                    <span
                      className={`stat-number ${
                        statHistory.parameters.followersPast10Days.growth ? "increase" : "decrease"
                      }`}>
                      {statHistory.parameters.followersPast10Days.number}
                    </span>
                  </div>
                  <span className="stat-caption">New followers in the past 10 days</span>
                </div>
                <div className="col-sm-3 d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      className="stat-indicator"
                      src={statHistory.parameters.followersToday.growth ? IconUp : IconDown}
                      alt={statHistory.parameters.followersToday.growth ? "Arrow up" : "Arrow down"}
                    />
                    <span
                      className={`stat-number ${
                        statHistory.parameters.followersToday.growth ? "increase" : "decrease"
                      }`}>
                      {statHistory.parameters.followersToday.number}
                    </span>
                  </div>
                  <span className="stat-caption">New followers TODAY</span>
                </div>
              </div>
            </ModalChartHeaderStyled>
            <ModalChartBodyStyled>
              <span className="date-range-title">{statHistory.dataDate}</span>
              <LineChart
                width={880}
                height={320}
                data={statHistory.data}
                margin={{ top: 48, right: 24, left: 16, bottom: 16 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="d" tickLine={false} />
                <YAxis tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="followers" stroke={strokeColor()} />
              </LineChart>
            </ModalChartBodyStyled>
          </>
        ) : (
          <h3>Error here</h3>
        )}
      </ModalChartStyled>
    </ModalChartWrapperStyled>
  );
}

export default ModalChart;
