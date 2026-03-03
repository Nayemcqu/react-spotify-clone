import Player  from "./Player"
import Sidebar from "./sidebar"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { albumsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";
export default  function Layout(){
const {audioRef,track}=useContext(PlayerContext);


const location=useLocation();
const isAlbum=location.pathname.includes("album");
console.log(isAlbum);
const albumId=isAlbum 
  ? location.pathname.split("/").pop()
  : "";

const bgColor=albumsData[Number(albumId)].bgColor;
console.log(bgColor)

return(

 <div  className="h-screen bg-black ">

  <div  className="h-[90%] flex">
  <Sidebar/>
  <Outlet context={{bgColor}}/>
</div>
<Player/>
<audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>


)


} 