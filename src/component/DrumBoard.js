import React from "react";
import styles from "./DrumBoard.module.css";
import DrumPad from "./DrumPad";

const DrumBoard = (props) => {
  const DrumPads = [
    {
      innerText: "Q",
      audioClipName: "sound1",
      audioSrc: "urlSource",
    },
    {
      innerText: "W",
      audioClipName: "sound2",
      audioSrc: "urlSource",
    },
    {
      innerText: "E",
      audioClipName: "sound3",
      audioSrc: "urlSource",
    },
    {
      innerText: "A",
      audioClipName: "sound4",
      audioSrc: "urlSource",
    },
    {
      innerText: "S",
      audioClipName: "sound5",
      audioSrc: "urlSource",
    },
    {
      innerText: "D",
      audioClipName: "sound6",
      audioSrc: "urlSource",
    },
    {
      innerText: "Z",
      audioClipName: "sound7",
      audioSrc: "urlSource",
    },
    {
      innerText: "X",
      audioClipName: "sound8",
      audioSrc: "urlSource",
    },
    {
      innerText: "C",
      audioClipName: "sound9",
      audioSrc: "urlSource",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles["drum-board"]}>
        <div className={styles["drum-panel"]}>
          {DrumPads.map((drumPad) => {
            return (
              <DrumPad
                innerText={drumPad.innerText}
                audioClipName={drumPad.audioClipName}
                audioSrc={drumPad.audioSrc}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DrumBoard;
