import Navbar from "./NaVbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
export default function DisplayHome(){

return(
<>
<Navbar/>
<div className="mb-4 ">
<h1 className="my-5 font-bold text-2xl "> Featured Charts</h1>
<div className="flex overflow-x-hidden ">
{albumsData.map((album,index)=>(
<AlbumItem key={index} name={album.name} desc={album.desc} image={album.image} id={album.id}/>
  
))}

</div>
</div>

<div className="mb-4 ">
<h1 className="my-5 font-bold text-2xl "> Today's Hits</h1>
<div className="flex overflow-x-hidden ">
{songsData.map((album,index)=>(
<AlbumItem key={index} name={album.name} desc={album.desc} image={album.image} id={album.id}/>
  
))}

</div>
</div>


</>
)

}