import React from "react";
import styles from "./DrumBoard.module.css";
import DrumPad from "./DrumPad";

const DrumBoard = (props) => {
  return (
    <React.Fragment>
      <div className={styles["drum-board"]}>
        <div className={styles["drum-panel"]}>
          <DrumPad innerText="Q" audioClipName="sound1" />
          <DrumPad innerText="W" audioClipName="sound2" />
          <DrumPad innerText="E" audioClipName="sound3" />
          <DrumPad innerText="A" audioClipName="sound4" />
          <DrumPad innerText="S" audioClipName="sound5" />
          <DrumPad innerText="D" audioClipName="sound6" />
          <DrumPad innerText="Z" audioClipName="sound7" />
          <DrumPad innerText="X" audioClipName="sound8" />
          <DrumPad innerText="C" audioClipName="sound9" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DrumBoard;
