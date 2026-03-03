import Navbar from "./NaVbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { useOutletContext } from "react-router-dom";
export function DisplayAlbum(){

 const {id}=useParams();
 const { bgColor } = useOutletContext();
 const albumdata=albumsData[id];

return (
<>
<div className="w-full m-2 px-6 pt-4 rounded bg-[#121212]
 text-white overflow-auto lg:w-[75%] lg:ml-0"
       style={{ background: `linear-gradient(${bgColor}, #121212)` }}
 >
<Navbar/>

<div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
<img src={albumdata.image} className="w-48 rounded"/>

<div className="flex flex-col">
<p> PlayList</p>
<h2 className="text-5xl font-bold mb-4 md:text-7xl ">{albumdata.name}</h2>
<h4>{albumdata.desc}</h4>
<p className="mt-1 ">
    <img src={assets.spotify_logo} alt=""  className="inline-block mr-2"/>
<b>Spotify </b>
&bull; 122,133 likes
&bull; <b>50 songs, </b> 
about 2 hours 12 minutes
</p>
</div>
</div>

 <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
<p><b className="mr-4 ">#</b>Title</p>
<p>Album</p>
<p className="hidden sm:block">Date Added</p>
<img src={assets.clock_icon} alt="" className="m-auto w-4"/>
 </div>
 <hr />
{
    songsData.map((song,index)=>(
<div key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
 <p className="text-white">
<b className="mr-4 text-[#a7a7a7]"> {index+1}</b>
<img src={song.image} alt="" className="inline w-10 mr-5"/>
{song.name}
 </p>
<p className="text-[15px]">{albumdata.name}</p>
<p className="text-[15px] hidden sm:block">5 days ago</p>
<p className="text-[15px] text-center">{song.duration} </p>
</div>
    ))
}

</div>
</>

)

}