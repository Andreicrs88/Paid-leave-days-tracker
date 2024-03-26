// utils
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// styles
import styles from "./ChartBar.module.css";

function ChartBar({ value, maxDaysNumber, label }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth < 768);

  let barFill = "0%";

  if (value > 0) {
    barFill = Math.round((value / maxDaysNumber) * 100) + "%";
  }

  useEffect(() => {
    // when the viewport width drops below 768px, the chartbars are horizontal and the layout adapts
    function handleResize() {
      const width = window.innerWidth;
      const isMobileViewport = width < 768;
      setIsMobileWidth(isMobileViewport);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles["chart-bar-container"]} ${isDarkTheme ? styles.dark : ""}`}>
      <div className={styles["chart-bar-label"]}>{label}</div>
      <div className={styles["chart-bar-inner"]}>
        <div
          className={styles["chart-bar-fill"]}
          style={
            !isMobileWidth
              ? {
                  width: "100%",
                  height: barFill,
                }
              : { height: "100%", width: barFill }
          }
        ></div>
      </div>
      <div className={styles["chart-bar-result"]}>
        <span>{value}</span>/{maxDaysNumber}
      </div>
    </div>
  );
}

export default ChartBar;
