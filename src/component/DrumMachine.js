import React from "react";
import styles from "./DrumMachine.module.css";
import Display from "./Display";
import DrumBoard from "./DrumBoard";

const DrumMachine = (props) => {
  return (
    <div id="drum-machine" className={styles["drum-machine"]}>
      <Display description="Lifted State" />
      <DrumBoard />
    </div>
  );
};

export default DrumMachine;
