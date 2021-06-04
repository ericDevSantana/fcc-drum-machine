import React from "react";
import "./DrumPad.css";

const DrumPad = (props) => {
  const audio = new Audio(props.audioSrc);

  const audioHandler = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="drum-pad" id={props.audioClipName} onClick={audioHandler}>
      {props.innerText}
      <audio className="clip" id={props.innerText} src={props.audioSrc}></audio>
    </div>
  );
};

export default DrumPad;
