"use client";
import { RecordData } from '../../types/recordTypes';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./chart.module.css";
import {} from "./chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type RecordBarChartProps = {
  records: RecordData[] | [],
};

// 実績を表示するグラフ
export function RecordBarChart({ records } : RecordBarChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '実績グラフ',
      },
    },
  }

  // ラベル
  const labels_jp = ['2/1','2/2', '2/3', '2/4'];

  const data = {
    labels: labels_jp,
    datasets: [
      {
        label: '実績',
        data: [3,0,3,4],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <div className={styles.piechart}>
        <Bar
          data={data}
          options={options}
        />
      </div>
    </>
  );
}