// components
import ChartBar from "./ChartBar";

// styles
import styles from "./Chart.module.css";

function Chart({ dataPoints }) {
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxDaysNumber={dataPoint.maxDays}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
