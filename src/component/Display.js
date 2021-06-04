import React from "react";
import styles from "./Display.module.css";

const Display = (props) => {
  return (
    <React.Fragment>
      <div id="display" className={styles["display"]}>
        This is the display!
      </div>
    </React.Fragment>
  );
};

export default Display;
