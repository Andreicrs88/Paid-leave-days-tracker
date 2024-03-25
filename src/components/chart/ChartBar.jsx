// utils
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// styles
import styles from "./ChartBar.module.css";

function ChartBar({ value, maxDaysNumber, label }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    // when the viewport width drops below 768px, the chartbars are horizontal and the layout adapts
    function handleResize() {
      const width = window.innerWidth;
      const isMobileviewport = width < 768;
      setIsMobileWidth(isMobileviewport);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let barFill = "0%";

  if (value > 0) {
    barFill = Math.round((value / maxDaysNumber) * 100) + "%";
  }

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

///////////////////////////
// ORIGINAL
///////////////////////////
// function ChartBar(props) {
//   // when the viewport is higher than 768px, the progress bar turns vertical
//   const width = window.innerWidth;
//   const isMobileWidth = width > 768;

//   // useEffect(() => {

//   // }, [isMobileWidth]);

//   let barFill = "0%";

//   if (props.value > 0) {
//     barFill = Math.round((props.value / props.maxDaysNumber) * 100) + "%";
//   }

//   return (
//     <div className={styles["chart-bar-container"]}>
//       <div className={styles["chart-bar-top"]}>
//         <div className={styles["chart-bar-label"]}>{props.label}</div>
//         <div className={styles["chart-bar-inner"]}>
//           <div
//             className={styles["chart-bar-fill"]}
//             style={
//               isMobileWidth
//                 ? {
//                     width: "100%",
//                     height: barFill,
//                   }
//                 : { height: "100%", width: barFill }
//             }
//           ></div>
//         </div>
//       </div>
//       <div className={styles["chart-bar-result"]}>
//         <span>{props.value}</span>/{props.maxDaysNumber}
//       </div>
//     </div>
//   );
// }

export default ChartBar;
