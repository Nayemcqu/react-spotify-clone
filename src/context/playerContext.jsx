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

async function playWithId(id){

await setTrack(songsData[id]);
await audioRef.current.play();
setPlayerStatus(true);
}

async function Previous(){
if(track.id>0){
    await setTrack(songsData[track.id-1]);
    await audioRef.current.play();
    setPlayerStatus(true);
}


}

async function Next(){
if(track.id<songsData.length-1){
    await setTrack(songsData[track.id+1]);
    await audioRef.current.play();
    setPlayerStatus(true);
}


}

async function SeekSong(e){
audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)

}




useEffect((()=>{

setTimeout(()=>{
audioRef.current.ontimeupdate=()=>{
seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";    
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
Pause,
playWithId,
Previous,
Next,
SeekSong
}

return( 
<PlayerContext.Provider value={contextvalue}>
    {props.children}
</PlayerContext.Provider>
)
}