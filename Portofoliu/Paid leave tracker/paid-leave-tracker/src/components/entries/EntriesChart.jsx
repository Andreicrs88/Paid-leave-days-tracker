// components
import Chart from "components/chart/Chart";

function EntriesChart({ entries }) {
  const chartMonthsData = [
    { label: "Jan", maxDays: 31, value: 0 }, // index 0
    { label: "Feb", maxDays: 28, value: 0 },
    { label: "Mar", maxDays: 31, value: 0 },
    { label: "Apr", maxDays: 30, value: 0 },
    { label: "May", maxDays: 31, value: 0 },
    { label: "Jun", maxDays: 30, value: 0 },
    { label: "Jul", maxDays: 31, value: 0 },
    { label: "Aug", maxDays: 31, value: 0 },
    { label: "Sep", maxDays: 30, value: 0 },
    { label: "Oct", maxDays: 31, value: 0 },
    { label: "Nov", maxDays: 30, value: 0 },
    { label: "Dec", maxDays: 31, value: 0 }, // index 11
  ];

  for (const entry of entries) {
    const locationMonth = new Date(entry.date).getMonth(); // returns a number from 0 - 11 => January = 0 / December = 11
    chartMonthsData[locationMonth].value += entry.daysSpent;
  }

  return <Chart dataPoints={chartMonthsData} />;
}

export default EntriesChart;
