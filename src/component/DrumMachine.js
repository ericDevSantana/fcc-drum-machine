import React, { useState } from "react";
import styles from "./DrumMachine.module.css";
import Display from "./Display";
import DrumBoard from "./DrumBoard";

const DrumMachine = (props) => {
  const [displayText, setDisplayText] = useState("");

  const audioDescriptionHandler = (text) => {
    setDisplayText(text);
  };

  return (
    <div id="drum-machine" className={styles["drum-machine"]}>
      <Display text={displayText} />
      <DrumBoard onTextChange={audioDescriptionHandler} />
    </div>
  );
};

export default DrumMachine;
