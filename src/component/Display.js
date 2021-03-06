import React from "react";
import styles from "./Display.module.css";

const Display = (props) => {
  return (
    <React.Fragment>
      <div id="display" className={styles["display"]}>
        {props.text}
      </div>
    </React.Fragment>
  );
};

export default Display;
