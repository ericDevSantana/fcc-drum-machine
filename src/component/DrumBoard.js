import React from "react";
import styles from "./DrumBoard.module.css";
import DrumPad from "./DrumPad";

const DrumBoard = (props) => {
  const DrumPads = [
    {
      innerText: "Q",
      audioClipName: "Heater-1",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      innerText: "W",
      audioClipName: "Heater-2",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      innerText: "E",
      audioClipName: "Heater-3",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      innerText: "A",
      audioClipName: "Heater-4_1",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      innerText: "S",
      audioClipName: "Heater-6",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      innerText: "D",
      audioClipName: "Dsc_Oh",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      innerText: "Z",
      audioClipName: "Kick_n_Hat",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      innerText: "X",
      audioClipName: "RP4_KICK_1",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      innerText: "C",
      audioClipName: "Cev_H2",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles["drum-board"]}>
        <div className={styles["drum-panel"]}>
          {DrumPads.map((drumPad) => {
            return (
              <DrumPad
                key={drumPad.innerText}
                innerText={drumPad.innerText}
                audioClipName={drumPad.audioClipName}
                audioSrc={drumPad.audioSrc}
                onPress={props.onTextChange}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DrumBoard;
