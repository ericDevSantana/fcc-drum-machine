import React from "react";
import "./DrumPad.css";

const DrumPad = (props) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === props.innerText) {
      audioHandler();
    }
  });

  const audioHandler = () => {
    const sound = document.getElementById(props.innerText);
    props.onPress(props.audioClipName);
    sound.currentTime = 0;
    sound.load();
    const soundPromise = sound.play();

    if (soundPromise !== undefined) {
      soundPromise
        .then((_) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };

  
  return (
    <div className="drum-pad" id={props.audioClipName} onClick={audioHandler}>
      {props.innerText}
      <audio className="clip" id={props.innerText} src={props.audioSrc}></audio>
    </div>
  );
};

export default DrumPad;
