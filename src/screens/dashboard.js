import React from "react";
import Header from "../components/Header";
import { totalFollowers, getGlobalStats, getTodayStats } from "../services";
import CardStatsGlobal from "../components/CardStatsGlobal";
import CardStatsToday from "../components/CardStatsToday";

function Dashboard() {
  const globalStats = getGlobalStats();
  const todayStats = getTodayStats();

  return (
    <main className="container">
      <Header title="Social Media Dashboard" subtitle={`Total Followers: ${totalFollowers()}`} />

      <section>
        <div className="row">
          {globalStats.length &&
            globalStats.map((network, i) => (
              <div className="col-sm-3" key={i}>
                <CardStatsGlobal data={network} />
              </div>
            ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3">Overview - Today</h2>
        <div className="row">
          {todayStats.length &&
            todayStats.map((network, i) =>
              network.parameters.map((param) => (
                <div className="col-sm-3" key={i}>
                  <CardStatsToday data={{ ...network.socialMedia, ...param }} />
                </div>
              ))
            )}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
