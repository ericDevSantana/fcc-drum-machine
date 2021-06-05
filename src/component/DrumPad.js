import React, { useCallback } from "react";
import "./DrumPad.css";

const DrumPad = (props) => {
  //Destructuring props
  const { innerText, audioClipName, audioSrc, onPress } = props;

  const audioHandler = useCallback(() => {
    //Lifting state up to Display the audioclip name
    onPress(audioClipName);

    //getting div drumPad to apply styling after pressing a key...after 100ms return to previous color
    const btn = document.getElementById(audioClipName);
    btn.style.background = "yellow";
    setTimeout(() => {
      btn.style.background = "linear-gradient(145deg, #aaaaaa, #cacaca)";
    }, 100);

    //gettind html audio child
    const sound = document.getElementById(innerText);
    sound.currentTime = 0;
    const soundPromise = sound.play();

    //catching error if promise returned by play() is successfull
    if (soundPromise !== undefined) {
      soundPromise.then((_) => {}).catch((error) => {});
    }
  }, [innerText, audioClipName, onPress]);

  const keyDownHandler = useCallback(
    (event) => {
      if (event.key === innerText) {
        audioHandler();
      }
    },
    [audioHandler, innerText]
  );

  //addEventListener ONCE the component is rendered and then cleanup removing event listener after component is dismounted
  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [keyDownHandler]);

  return (
    <div className="drum-pad" id={audioClipName} onClick={audioHandler}>
      {innerText}
      <audio className="clip" id={innerText} src={audioSrc}></audio>
    </div>
  );
};

export default DrumPad;
