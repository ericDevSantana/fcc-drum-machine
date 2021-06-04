import React from "react";
import "./DrumPad.css";

const DrumPad = (props) => {
  return (
    <div className="drum-pad" id={props.audioClipName}>
      {props.innerText}
      <audio className="clip" id={props.innerText} src=""></audio>
    </div>
  );
};

export default DrumPad;
