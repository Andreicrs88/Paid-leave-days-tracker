// utils
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "store/theme";

// components
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";

// styles
import styles from "./ThemeButton.module.css";

function ThemeButton() {
  const dispatchFn = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  function handleChangeTheme(event) {
    if (event.target.checked) {
      dispatchFn(themeActions.applyDarkTheme());
    } else {
      dispatchFn(themeActions.removeDarkTheme());
    }
  }

  return (
    <div className={`${styles["theme-container"]} ${isDarkTheme ? "dark" : ""}`}>
      <div className={styles["toggle-theme-btn"]}>
        <input
          type="checkbox"
          id="dark-mode"
          name="dark-mode"
          onChange={handleChangeTheme}
          value={isDarkTheme}
        />
        <label htmlFor="dark-mode"></label>
        <span className={styles["theme-icon"]}>{isDarkTheme ? <MdNightlight /> : <MdOutlineLightMode />}</span>
      </div>
      <p style={{ color: isDarkTheme ? "#fff" : "#13171a" }}>{isDarkTheme ? "Dark Mode" : "Light mode"}</p>
    </div>
  );
}

export default ThemeButton;
