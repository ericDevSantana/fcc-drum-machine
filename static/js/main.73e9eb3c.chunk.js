(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,function(e,a,n){e.exports={"drum-board":"DrumBoard_drum-board__e0oKu","drum-panel":"DrumBoard_drum-panel__1r6TA"}},,function(e,a,n){e.exports={"drum-machine":"DrumMachine_drum-machine__1lyxt"}},function(e,a,n){e.exports={display:"Display_display__1E_5r"}},,,,,,function(e,a,n){},function(e,a,n){},,function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),c=n(4),i=n.n(c),o=(n(12),n(13),n(7)),d=n(5),m=n.n(d),s=n(6),u=n.n(s),p=n(0),l=function(e){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("div",{id:"display",className:u.a.display,children:e.text})})},x=n(3),h=n.n(x),j=(n(15),function(e){var a=e.innerText,n=e.audioClipName,c=e.audioSrc,i=e.onPress,o=Object(t.useCallback)((function(){i(n);var e=document.getElementById(n);e.style.background="yellow",setTimeout((function(){e.style.background="linear-gradient(145deg, #aaaaaa, #cacaca)"}),100);var t=document.getElementById(a);t.currentTime=0;var r=t.play();void 0!==r&&r.then((function(e){})).catch((function(e){}))}),[a,n,i]),d=Object(t.useCallback)((function(e){e.key===a&&o()}),[o,a]);return r.a.useEffect((function(){return document.addEventListener("keydown",d),function(){return document.removeEventListener("keydown",d)}}),[d]),Object(p.jsxs)("div",{className:"drum-pad",id:n,onClick:o,children:[a,Object(p.jsx)("audio",{className:"clip",id:a,src:c})]})}),f=function(e){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("div",{className:h.a["drum-board"],children:Object(p.jsx)("div",{className:h.a["drum-panel"],children:[{innerText:"Q",audioClipName:"Heater-1",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{innerText:"W",audioClipName:"Heater-2",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{innerText:"E",audioClipName:"Heater-3",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{innerText:"A",audioClipName:"Heater-4_1",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{innerText:"S",audioClipName:"Heater-6",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{innerText:"D",audioClipName:"Dsc_Oh",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{innerText:"Z",audioClipName:"Kick_n_Hat",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{innerText:"X",audioClipName:"RP4_KICK_1",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{innerText:"C",audioClipName:"Cev_H2",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}].map((function(a){return Object(p.jsx)(j,{innerText:a.innerText,audioClipName:a.audioClipName,audioSrc:a.audioSrc,onPress:e.onTextChange},a.innerText)}))})})})},b=function(){var e=Object(t.useState)(""),a=Object(o.a)(e,2),n=a[0],r=a[1];return Object(p.jsxs)("div",{id:"drum-machine",className:m.a["drum-machine"],children:[Object(p.jsx)(l,{text:n}),Object(p.jsx)(f,{onTextChange:function(e){r(e)}})]})};var _=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b,{})})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.73e9eb3c.chunk.js.map