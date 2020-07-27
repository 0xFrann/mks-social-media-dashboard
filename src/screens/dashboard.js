import React, { useState } from "react";
import Header from "../components/Header";
import { totalFollowers, getGlobalStats, getTodayStats } from "../services";
import CardStatsGlobal from "../components/CardStatsGlobal";
import CardStatsToday from "../components/CardStatsToday";
import ModalChart from "../components/ModalChart";

function Dashboard() {
  const globalStats = getGlobalStats();
  const todayStats = getTodayStats();
  const [modalData, setModalData] = useState("");
  const [modalChartOpened, setModalChartState] = useState(false);

  const openModal = (data) => {
    setModalChartState(!modalChartOpened);
    setModalData(data);
  };

  return (
    <main className="container">
      <Header title="Social Media Dashboard" subtitle={`Total Followers: ${totalFollowers()}`} />

      <section>
        <div className="row">
          {globalStats.length &&
            globalStats.map((network, i) => (
              <div className="col-sm-3" key={i + "gs"}>
                <CardStatsGlobal
                  data={network}
                  handleClick={() => openModal(network.socialMedia)}
                />
              </div>
            ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3">Overview - Today</h2>
        <div className="row">
          {todayStats.length &&
            todayStats.map((network, i) =>
              network.parameters.map((param, x) => (
                <div className="col-sm-3" key={i + x + "ts"}>
                  <CardStatsToday
                    data={{ ...network.socialMedia, ...param }}
                    // handleClick={() => openModal(network.socialMedia)}
                  />
                </div>
              ))
            )}
        </div>
      </section>

      <ModalChart
        socialMedia={modalData}
        open={modalChartOpened}
        handleClose={() => setModalChartState(!modalChartOpened)}
      />
    </main>
  );
}

export default Dashboard;
