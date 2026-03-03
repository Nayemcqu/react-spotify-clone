import { createContext, useEffect, useRef, useState } from "react"
import { songsData } from "../assets/assets";
export const PlayerContext=createContext();

export default function PlayercontextProvider(props){

const audioRef=useRef();
const seekBg=useRef();
const seekBar=useRef();

const [track,setTrack]=useState(songsData[1]);
const [playerStatus,setPlayerStatus]=useState(false);
const [time,setTime]=useState({
    currentTime:{
        second:0,
        minutes:0
    },
totalTime:{
    second:0,
    minutes:0
}

});

function Play(){
audioRef.current.play();
setPlayerStatus(true);

}

function Pause(){
audioRef.current.pause();
setPlayerStatus(false);

}

useEffect((()=>{

setTimeout(()=>{
audioRef.current.ontimeupdate=()=>{
setTime({
    currentTime:{
        second:Math.floor(audioRef.current.currentTime%60),
        minutes:Math.floor(audioRef.current.currentTime/60)
    },
totalTime:{
        second:Math.floor(audioRef.current.duration%60),
        minutes:Math.floor(audioRef.current.duration/60)
}})

}
},1000)


}),[audioRef])




const contextvalue={
audioRef,
seekBar,
seekBg,
track,setTrack,
playerStatus,setPlayerStatus,
time,setTime,
Play,
Pause

}

return( 
<PlayerContext.Provider value={contextvalue}>
    {props.children}
</PlayerContext.Provider>
)
}