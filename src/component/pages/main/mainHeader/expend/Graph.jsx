import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const StyleExpGraph = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 160px;
  max-width: 240px;
  width: 100%;
`;

export default function Graph() {
  const [state, setState] = useState({
    series: [2900, 5500, 2500, 4300, 3200],
    options: {
      chart: {
        type: "pie",
        width: 380,
        events: {
          dataPointSelection: () => {}, // 클릭 무력화
        },
      },
      labels: ["식비", "교통비", "간식", "운동", "비상금"],
      colors: ["#4FADF7", "#70D6FF", "#FFD670", "#FF9770", "#9D79BC"],
      tooltip: {
        theme: "light",
        fillSeriesColor: false,
        style: {
          fontSize: "11px",
          fontWeight: "600",
        },
        marker: {
          show: false,
        },
        y: {
          formatter: (val, options) => {
            const label = options?.w?.config?.labels?.[options.seriesIndex] ?? '';
            return `${label}: ${val.toLocaleString()}원`;
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "11px",
          fontWeight: "300",
          colors: ["#fff"],
        },
        formatter: (val) => `${val.toFixed(1)}%`,
        dropShadow: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          customScale: 1,
          dataLabels: {
            offset: -10,
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: "lighten",
            value: 0.25,
          },
        },
        active: {
          filter: { type: "none" },
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      legend: {
        show: false,
      },
    },
  });

  useEffect(() => {
    axios
      .post(
        "/api/chart",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        setState((prev) => ({
          ...prev,
          series: res.data.series,
          options: {
            ...prev.options,
            labels: res.data.labels,
          },
        }));
      })
      .catch((err) => {
        console.log("실패:", err);
      });
  }, []);

  return (
    <StyleExpGraph>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={200}
      />
    </StyleExpGraph>
  );
}
