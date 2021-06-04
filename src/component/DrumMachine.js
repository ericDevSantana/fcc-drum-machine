import React from "react";
import styles from "./DrumMachine.module.css";
import Display from "./Display";

const DrumMachine = (props) => {
  return (
    <React.Fragment>
      <div id="drum_machine">
        <Display />
      </div>
    </React.Fragment>
  );
};

export default DrumMachine;
