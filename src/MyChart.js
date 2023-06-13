import React from "react";
import "./MyChart.css";
import { useGlobalContext } from "./context";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
} from "chart.js";
import Loading from "./components/Loading";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const MyChart = () => {
  const {
    stockData,
    totalCurrentAssets,
    longTermInvestments,
    longTermDebt,
    totalCurrentLiabilities,
    netReceivables,
    retainedEarnings,
    isLoading,
  } = useGlobalContext();

  if (stockData.length === 0) {
    return <Loading/>;
  }

  const data = totalCurrentAssets
    ? {
        labels: stockData
          .slice(0)
          .reverse()
          .map((item) => item.endDate.fmt),
        datasets: [
          {
            label: "Total Current Assets",
            data: stockData
              .slice(0)
              .reverse()
              .map((item) => item.totalCurrentAssets?.raw || null),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "aqua",
            borderWidth: 1,
            fill: true,
            tension: 0.4,
          },
        ],
      }
    : "Not present";

  const data2 = longTermInvestments
    ? {
        labels: stockData
          .slice(0)
          .reverse()
          .map((item) => item.endDate.fmt),
        datasets: [
          {
            label: "Longterm Investments",
            data: stockData
              .slice(0)
              .reverse()
              .map((item) => item.longTermInvestments?.raw || null),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "aqua",
            borderWidth: 1,
            fill: true,
            tension: 0.4,
          },
        ],
      }
    : "Not present";

  const data3 = {
    labels: stockData
      .slice(0)
      .reverse()
      .map((item) => item.endDate.fmt),
    datasets: [
      {
        label: "Longterm Debt",
        data: stockData
          .slice(0)
          .reverse()
          .map((item) => item.longTermDebt?.raw || null),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "aqua",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const data4 = {
    labels: stockData
      .slice(0)
      .reverse()
      .map((item) => item.endDate.fmt),
    datasets: [
      {
        label: "Total Current Liabilities",
        data: stockData
          .slice(0)
          .reverse()
          .map((item) => item.totalCurrentLiabilities?.raw || null),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "aqua",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const data5 = {
    labels: stockData
      .slice(0)
      .reverse()
      .map((item) => item.endDate.fmt),
    datasets: [
      {
        label: "NetReceivables",
        data: stockData
          .slice(0)
          .reverse()
          .map((item) => item.netReceivables?.raw || null),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "aqua",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const data6 = {
    labels: stockData
      .slice(0)
      .reverse()
      .map((item) => item.endDate.fmt),
    datasets: [
      {
        label: "Retained Earnings",
        data: stockData
          .slice(0)
          .reverse()
          .map((item) => item.retainedEarnings?.raw || null),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "aqua",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            return "$" + value / 1000000000 + "B";
          },
        },
      },
    },
  };

  return (
    <>
      <div className="enclosingDiv">
        {isLoading ? (
          <Loading/>
        ) : (
          <div className="Graph">
            {totalCurrentAssets ? (
              <div className="Graphchild">
                <Line data={data} options={options}></Line>
              </div>
            ) : (
              <div className="GraphChild">
                <h3>TotalCurrentAssets data not found</h3>
              </div>
            )}

            {longTermInvestments ? (
              <div className="Graphchild">
                <Line data={data2} options={options}></Line>
              </div>
            ) : (
              <div className="GraphChild">
                <h3>Long term investments data not found</h3>
              </div>
            )}

            {longTermDebt ? (
              <div className="Graphchild">
                <Line data={data3} options={options}></Line>
              </div>
            ) : (
              <div className="GraphChild">
                <h3>LongTermDebt data not found</h3>
              </div>
            )}

            {totalCurrentLiabilities ? (
              <div className="Graphchild">
                <Line data={data4} options={options}></Line>
              </div>
            ) : (
              <div className="Graphchild">
                <h3>TotalCurrentLiabilities data not found</h3>
              </div>
            )}

            {netReceivables ? (
              <div className="Graphchild">
                <Line data={data5} options={options}></Line>
              </div>
            ) : (
              <div className="Graphchild">
                <h3>Net receivables data not found</h3>
              </div>
            )}

            {retainedEarnings ? (
              <div className="Graphchild">
                <Line data={data6} options={options}></Line>
              </div>
            ) : (
              <div className="Graphchild">
                <h3>Retained earnings data not found</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MyChart;
