import React, { useState } from "react";
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
`

export default function Graph() {
  const [state, setState] = useState({
    series: [2900, 5500, 2500, 4300, 3200],
    options: {
        chart: {
            type: "pie",
            width: 380,
            events: {
                dataPointSelection: () => {}, // 클릭 무력화
            }
        },
        labels: ['식비', '교통비', '간식', '운동', '비상금'],
        colors: ['#4FADF7', '#70D6FF', '#FFD670', '#FF9770', '#9D79BC'],
        tooltip: {
            theme: 'light', // 밝은 테마로 변경
            fillSeriesColor: false, // 원 색상 점 제거
            style: {
                fontSize: '11px',
                fontWeight: '600'
            },
            marker: {
                show: false, // 점 없애기
            },
            y: {
                formatter: (val) => `${val}원`, // 값 표시 형식
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '11px',
                fontWeight: '300',
                colors: ['#fff'],
            },
            formatter: (val) => `${val.toFixed(1)}%`,
            dropShadow: {
                enabled: true,
            }
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                customScale: 1,
                dataLabels: {
                    offset: -10,
                }
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'lighten',
                    value: 0.25
                }
            },
            active: {
                filter: { type: 'none' },
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },
        legend: {
            show: false,
        }
    }
    
  });

  return (
    <StyleExpGraph>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={200} // 필요 시 조정
      />
    </StyleExpGraph>
  );
}