import React, { useState } from "react";
import styles from "./DrumMachine.module.css";
import Display from "./Display";
import DrumBoard from "./DrumBoard";

const DrumMachine = () => {
  //state to store the audioclip name to pass to Display component and set the new state everytime a drumpad is pressed
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
